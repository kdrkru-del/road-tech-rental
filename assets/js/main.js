(() => {
  "use strict";

  const config = typeof SITE_CONFIG !== "undefined" ? SITE_CONFIG : {};
  const attributionKeys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "yclid"
  ];
  const firstAttributionStorageKey = "roadTechFirstAttributionV2";
  const lastAttributionStorageKey = "roadTechLastAttributionV2";
  const formStartTracked = new WeakSet();

  const safeStorage = {
    get(key) {
      try {
        return window.localStorage.getItem(key);
      } catch (_) {
        return null;
      }
    },
    set(key, value) {
      try {
        window.localStorage.setItem(key, value);
      } catch (_) {
        // The site remains usable when storage is unavailable.
      }
    }
  };

  function readAttribution() {
    const params = new URLSearchParams(window.location.search);
    let first = {};
    let last = {};

    try {
      first = JSON.parse(safeStorage.get(firstAttributionStorageKey) || "{}") || {};
      last = JSON.parse(safeStorage.get(lastAttributionStorageKey) || "{}") || {};
    } catch (_) {
      first = {};
      last = {};
    }

    const current = attributionKeys.reduce((result, key) => {
      const value = params.get(key);
      if (value) result[key] = value;
      return result;
    }, {});

    if (Object.keys(current).length) {
      const captured = { ...current, captured_at: new Date().toISOString() };
      if (!Object.keys(first).length) {
        first = captured;
        safeStorage.set(firstAttributionStorageKey, JSON.stringify(first));
      }
      last = captured;
      safeStorage.set(lastAttributionStorageKey, JSON.stringify(last));
    }

    const result = {};
    attributionKeys.forEach((key) => {
      result[key] = current[key] || last[key] || first[key] || "";
      result[`first_${key}`] = first[key] || "";
      result[`last_${key}`] = current[key] || last[key] || "";
    });
    return result;
  }

  const attribution = readAttribution();

  function normalizedPhone(value) {
    return String(value || "").replace(/[^\d+]/g, "");
  }

  function phoneIsValid(value) {
    const digits = String(value || "").replace(/\D/g, "");
    return digits.length >= 10 && digits.length <= 15;
  }

  function setStatus(form, message, type) {
    const status = form.querySelector("[data-form-status]");
    if (!status) return;
    status.textContent = message;
    status.classList.remove("is-error", "is-success");
    if (type) status.classList.add(`is-${type}`);
  }

  function setPhoneError(form, message) {
    const input = form.elements.phone;
    const error = form.querySelector("[data-field-error]");
    input.setAttribute("aria-invalid", message ? "true" : "false");
    if (error) error.textContent = message;
  }

  function setupPhoneLinks() {
    const phone = String(config.phone || "").trim();
    const phoneLinks = document.querySelectorAll("[data-phone-link]");
    const phoneDisplays = document.querySelectorAll("[data-phone-display]");

    if (!phone) {
      phoneLinks.forEach((link) => {
        link.classList.add("is-unconfigured");
        link.setAttribute("aria-disabled", "true");
        link.setAttribute("title", "Телефон будет добавлен перед публикацией");
        link.addEventListener("click", (event) => event.preventDefault());
      });
      return;
    }

    phoneDisplays.forEach((node) => {
      node.textContent = phone;
    });
    phoneLinks.forEach((link) => {
      link.href = `tel:${normalizedPhone(phone)}`;
      link.removeAttribute("aria-disabled");
    });
  }

  function setupMessengerLinks() {
    const telegram = String(config.telegram || "").trim();
    const whatsapp = String(config.whatsapp || "").trim();

    document.querySelectorAll("[data-telegram-link]").forEach((link) => {
      if (telegram) link.href = telegram;
      else link.hidden = true;
    });

    document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
      if (whatsapp) link.href = whatsapp;
      else link.hidden = true;
    });
  }

  function setupMetrika() {
    const id = String(config.metrikaId || "").trim();
    if (!id || document.querySelector("script[data-metrika]") || typeof window.ym === "function") return;

    window.ym = window.ym || function () {
      (window.ym.a = window.ym.a || []).push(arguments);
    };
    window.ym.l = Date.now();

    const script = document.createElement("script");
    script.async = true;
    script.dataset.metrika = "true";
    script.src = "https://mc.yandex.ru/metrika/tag.js";
    document.head.appendChild(script);

    window.ym(Number(id) || id, "init", {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true
    });
  }

  function reachGoal(goal, params = {}) {
    const id = String(config.metrikaId || "").trim();
    if (!id || typeof window.ym !== "function") return;
    window.ym(Number(id) || id, "reachGoal", goal, params);
  }

  function goalForService(service) {
    const value = String(service || "").toLowerCase();
    if (value.includes("фрезерован")) return "frezerovanie_lead";
    if (value.includes("фрез")) return "freza_lead";
    if (value.includes("кохер")) return "koher_lead";
    if (value.includes("литой")) return "litoi_asfalt_lead";
    if (value.includes("восстановлен")) return "restoration_lead";
    return "";
  }

  function buildPayload(form) {
    const selectedMachine = form.elements.selected_machine ? form.elements.selected_machine.value : "";
    const service = selectedMachine || form.dataset.service || document.body.dataset.service || "Аренда спецтехники";
    const name = String(form.elements.name ? form.elements.name.value : "").trim();
    const phone = String(form.elements.phone ? form.elements.phone.value : "").trim();
    const location = String(form.elements.location ? form.elements.location.value : "").trim();
    const message = String(form.elements.message ? form.elements.message.value : "").trim();

    return {
      name: name || "Не указано",
      phone: phone,
      service: service,
      location: location || "Не указан",
      message: message || "Запрос расчета стоимости аренды техники",
      _subject: `Заявка с сайта ЗемТрак (zemtrak.ru): ${service} — ${phone}`,
      _template: "table",
      _captcha: "false",
      target_email: "rent@zemtrak.ru",
      page_url: window.location.href,
      page_title: document.title,
      ...attribution,
      timestamp: new Date().toLocaleString("ru-RU")
    };
  }

  async function submitLead(form) {
    const submit = form.querySelector("[data-submit]");
    const endpoint = String(config.leadEndpoint || "").trim();

    if (form.elements.company && form.elements.company.value) return;

    setStatus(form, "", "");
    setPhoneError(form, "");

    if (!phoneIsValid(form.elements.phone.value)) {
      setPhoneError(form, "Введите номер телефона — не менее 10 цифр.");
      form.elements.phone.focus();
      return;
    }

    if (!endpoint) {
      setStatus(
        form,
        "Форма пока не подключена к приёму заявок. Добавьте leadEndpoint в assets/js/config.js — введённые данные останутся в форме.",
        "error"
      );
      return;
    }

    const payload = buildPayload(form);
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 10000);
    const originalLabel = submit.textContent;

    submit.disabled = true;
    submit.textContent = "Отправляем…";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      form.reset();
      setPhoneError(form, "");
      setStatus(form, "Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в течение 10 минут.", "success");
      reachGoal("form_submit", { service: payload.service });

      const serviceGoal = goalForService(payload.service);
      if (serviceGoal) reachGoal(serviceGoal, { service: payload.service });
    } catch (error) {
      const message = error && error.name === "AbortError"
        ? "Сервер не ответил вовремя. Проверьте соединение и попробуйте ещё раз."
        : "Не удалось отправить заявку. Данные сохранены в форме — попробуйте ещё раз или позвоните нам.";
      setStatus(form, message, "error");
    } finally {
      window.clearTimeout(timeout);
      submit.disabled = false;
      submit.textContent = originalLabel;
    }
  }

  function setupForms() {
    document.querySelectorAll("[data-lead-form]").forEach((form) => {
      form.addEventListener("focusin", () => {
        if (formStartTracked.has(form)) return;
        formStartTracked.add(form);
        reachGoal("form_start", { service: form.dataset.service || document.body.dataset.service || "" });
      });

      form.elements.phone.addEventListener("input", () => {
        if (form.elements.phone.getAttribute("aria-invalid") === "true") {
          setPhoneError(form, "");
        }
      });

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        submitLead(form);
      });
    });
  }

  function setupNavigation() {
    const header = document.querySelector("[data-header]");
    const nav = document.querySelector("[data-nav]");
    const toggle = document.querySelector("[data-nav-toggle]");

    const syncHeader = () => {
      if (header) header.classList.toggle("is-scrolled", window.scrollY > 18);
    };

    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });

    if (!header || !nav || !toggle) return;

    const closeMenu = () => {
      nav.classList.remove("is-open");
      header.classList.remove("is-menu-open");
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Открыть меню");
    };

    toggle.addEventListener("click", () => {
      const isOpen = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", isOpen);
      header.classList.toggle("is-menu-open", isOpen);
      document.body.classList.toggle("nav-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Закрыть меню" : "Открыть меню");
    });

    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  }

  function setupGoals() {
    document.querySelectorAll("[data-goal]").forEach((element) => {
      element.addEventListener("click", () => {
        if (element.dataset.goal === "phone_click" && element.classList.contains("is-unconfigured")) return;
        reachGoal(element.dataset.goal, {
          service: document.body.dataset.service || "",
          location: element.closest("section")?.id || "header"
        });
      });
    });
  }

  function setupYear() {
    document.querySelectorAll("[data-current-year]").forEach((node) => {
      node.textContent = String(new Date().getFullYear());
    });
  }

  function setupCatalogFilters() {
    const tabs = document.querySelectorAll(".catalog-tab-btn");
    const cards = document.querySelectorAll(".machine-card");
    if (!tabs.length || !cards.length) return;

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const filter = tab.dataset.filter || "all";
        tabs.forEach((t) => t.classList.remove("is-active"));
        tab.classList.add("is-active");

        cards.forEach((card) => {
          const category = card.dataset.category || "";
          if (filter === "all" || category === filter) {
            card.classList.remove("is-hidden");
          } else {
            card.classList.add("is-hidden");
          }
        });
      });
    });
  }

  function setupEquipmentModal() {
    const overlay = document.querySelector(".equipment-modal-overlay");
    if (!overlay) return;
    const modalSubtitle = overlay.querySelector("[data-modal-subtitle]");
    const machineInput = overlay.querySelector("[data-modal-machine-input]");
    const closeBtns = overlay.querySelectorAll("[data-modal-close]");

    function openModal(machineTitle) {
      if (modalSubtitle) modalSubtitle.textContent = machineTitle ? `Выбрано: ${machineTitle}` : "Подбор и расчет стоимости аренды";
      if (machineInput) machineInput.value = machineTitle || "Аренда спецтехники";
      overlay.classList.add("is-active");
      document.body.classList.add("nav-open");
    }

    function closeModal() {
      overlay.classList.remove("is-active");
      document.body.classList.remove("nav-open");
    }

    document.querySelectorAll("[data-open-modal]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const machine = btn.dataset.machineTitle || btn.dataset.service || "";
        openModal(machine);
      });
    });

    closeBtns.forEach((btn) => btn.addEventListener("click", closeModal));
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay.classList.contains("is-active")) {
        closeModal();
      }
    });
  }


  function setupQuickContactWidget() {
    if (document.getElementById("quickContactWidget")) return;

    const tg = config.telegram || "https://t.me/romanspes";
    const wa = config.whatsapp || "https://wa.me/79257577888";
    const max = config.max || "https://max.ru/";
    const phone = config.phone || "+7 (925) 757-78-88";
    const telHref = "tel:" + normalizedPhone(phone);

    const widget = document.createElement("div");
    widget.id = "quickContactWidget";
    widget.className = "quick-contact-fab";
    widget.setAttribute("role", "region");
    widget.setAttribute("aria-label", "Быстрая связь");

    widget.innerHTML = `
      <button type="button" class="fab-toggle-btn" id="fabToggleBtn" aria-label="Открыть контакты" aria-expanded="false">
        <span class="fab-pulse"></span>
        <span class="fab-toggle-icon">💬</span>
      </button>
      <div class="fab-menu" id="fabMenu" aria-hidden="true">
        <a href="${wa}" target="_blank" rel="noopener" class="fab-item fab-item--wa" data-messenger="whatsapp" aria-label="Написать в WhatsApp">
          <span class="fab-item__icon">
            <svg viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.79 14.07c-.24.67-1.4 1.24-1.92 1.29-.51.05-1.18.08-3.41-.85-2.85-1.18-4.68-4.08-4.82-4.27-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07.99-2.35.26-.28.57-.35.77-.35.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.82 2 .89 2.15.07.15.12.33.02.53-.1.19-.15.31-.3.49-.15.17-.31.39-.45.52-.15.15-.3.31-.13.61.17.3 1.15 1.89 2.47 3.07 1.32 1.18 2.43 1.55 2.73 1.72.3.17.48.15.66-.06.18-.21.78-.91.99-1.22.21-.31.42-.26.71-.15.29.11 1.83.86 2.14 1.02.31.15.52.23.59.36.08.13.08.76-.16 1.43z"/></svg>
          </span>
          <span>WhatsApp</span>
        </a>
        <a href="${tg}" target="_blank" rel="noopener" class="fab-item fab-item--tg" data-messenger="telegram" aria-label="Написать в Telegram">
          <span class="fab-item__icon">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
          </span>
          <span>Telegram</span>
        </a>
        <a href="${max}" target="_blank" rel="noopener" class="fab-item fab-item--max" data-messenger="max" aria-label="Связаться через MAX">
          <span class="fab-item__icon">
            <svg viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 1.93.548 3.73 1.496 5.257l-1.012 3.78 3.86-1.012A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm-3.5 6.5h2l2 4 2-4h2v7h-1.8v-4.3l-1.6 3.3h-1.2l-1.6-3.3V15.5H8.5v-7z"/></svg>
          </span>
          <span>MAX</span>
        </a>
        <a href="${telHref}" class="fab-item fab-item--phone" data-phone-link aria-label="Позвонить">
          <span class="fab-item__icon">
            <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          </span>
          <span>${phone}</span>
        </a>
      </div>
    `;

    document.body.appendChild(widget);

    const toggleBtn = widget.querySelector("#fabToggleBtn");
    const menu = widget.querySelector("#fabMenu");

    function toggleFab(open) {
      const shouldOpen = typeof open === "boolean" ? open : !widget.classList.contains("is-open");
      widget.classList.toggle("is-open", shouldOpen);
      toggleBtn.classList.toggle("is-active", shouldOpen);
      toggleBtn.setAttribute("aria-expanded", String(shouldOpen));
      menu.setAttribute("aria-hidden", String(!shouldOpen));
    }

    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFab();
    });

    document.addEventListener("click", (e) => {
      if (!widget.contains(e.target) && widget.classList.contains("is-open")) {
        toggleFab(false);
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && widget.classList.contains("is-open")) {
        toggleFab(false);
      }
    });
  }

  function setupCatalogLiveSearch() {
    const searchInput = document.getElementById("catalogSearchInput");
    if (!searchInput) return;

    const clearBtn = document.getElementById("catalogSearchClear");
    const filterBtns = document.querySelectorAll(".cat-filter-btn");
    const countBadge = document.getElementById("catalogResultCount");
    const emptyState = document.getElementById("catalogNoResults");
    const resetBtn = document.getElementById("catalogResetBtn");
    const groupSections = document.querySelectorAll(".eq-group-section");
    const allCards = document.querySelectorAll(".cat-full-card");

    if (!allCards.length) return;

    let currentGroup = "all";

    const SYNONYMS = {
      "бобкэт": ["мини-погрузчик", "минипогрузчик", "bobcat", "мини-погрузчики"],
      "бобкат": ["мини-погрузчик", "минипогрузчик", "bobcat"],
      "bobcat": ["мини-погрузчик", "минипогрузчик"],
      "воровайка": ["кран-манипулятор", "манипулятор", "кму", "бортовой"],
      "кму": ["кран-манипулятор", "манипулятор", "кму", "бортовой"],
      "манипулятор": ["кран-манипулятор", "кму", "бортовой"],
      "ямобур": ["буровая", "буроям", "бурение", "буровые"],
      "буроям": ["буровая", "ямобур", "бурение", "буровые"],
      "бурилка": ["буровая", "ямобур", "бурение"],
      "длинномер": ["шаланда", "бортовой", "полуприцеп", "длинномер"],
      "шаланда": ["длинномер", "бортовой", "шаланды"],
      "фура": ["бортовой", "шаланда", "полуприцеп"],
      "миксер": ["автобетоносмеситель", "бетоносмеситель", "бетон"],
      "вертушка": ["автобетоносмеситель", "бетоносмеситель"],
      "груша": ["автобетоносмеситель", "бетоносмеситель"],
      "пушка": ["генератор", "компрессор"],
      "теплопушка": ["генератор", "компрессор"],
      "шпунт": ["вибропогружатель", "шпунт", "ларсен", "шпунта"],
      "шпунтоукладчик": ["вибропогружатель", "шпунт"],
      "трал": ["трал", "тяжеловоз", "низкорамный", "перевозка"],
      "корыто": ["трал", "низкорамный"],
      "петушок": ["экскаватор-погрузчик", "погрузчик"],
      "кдм": ["комбинированная дорожная машина", "кдм"],
      "пылесос": ["коммунальная", "вакуумная", "подметально-уборочная"],
      "подметалка": ["коммунальная", "вакуумная", "кдм"],
      "поливалка": ["коммунальная", "кдм", "автогудронатор"],
      "бочка": ["автогудронатор", "илосос", "каналопромывочная"],
      "гудронатор": ["автогудронатор", "битум"],
      "илосос": ["илосос", "ассенизатор", "каналопромывочная"],
      "каналопромывка": ["каналопромывочные", "илососные"],
      "ассенизатор": ["илосос", "вакуумная"],
      "баба": ["сваебойная", "копер"],
      "сваебой": ["сваебойные", "сваи"],
      "копер": ["сваебойные"],
      "крот": ["гнб", "бестраншейная"],
      "прокол": ["гнб", "бестраншейная"],
      "дробилка": ["дробильные", "грохот"],
      "грохот": ["мобильные грохоты", "сортировка"],
      "ножницы": ["гидроножницы", "демонтаж"],
      "крашер": ["гидроножницы", "демонтаж"],
      "молот": ["гидромолот"],
      "отбойник": ["гидромолот"],
      "фреза": ["дорожно-строительная", "фрезерование"],
      "каток": ["дорожные катки", "грунтовые катки", "каток"],
      "вышка": ["автовышка", "подъемник", "агп"],
      "люлька": ["автовышка", "кму"],
      "агп": ["автовышка", "вышка"],
      "кран": ["кран", "автокран", "манипулятор"],
      "сороконожка": ["тонар", "самосвал"],
      "тонар": ["тонары", "самосвалы"],
      "бара": ["траншеекопатели", "грунторезы"],
      // Модели и бренды подтвержденного парка Гостехнадзор
      "tzco": ["гусеничные экскаваторы", "экскаватор", "tz260"],
      "tz260": ["гусеничные экскаваторы", "экскаватор"],
      "tz260c3": ["гусеничные экскаваторы", "экскаватор"],
      "sany": ["гусеничные экскаваторы", "экскаватор", "sy215"],
      "sy215": ["гусеничные экскаваторы", "экскаватор"],
      "sy215c": ["гусеничные экскаваторы", "экскаватор"],
      "hitachi": ["гусеничные экскаваторы", "экскаватор", "zx200", "zx240"],
      "zx200": ["гусеничные экскаваторы", "экскаватор"],
      "zx240": ["гусеничные экскаваторы", "экскаватор"],
      "caterpillar": ["гусеничные экскаваторы", "экскаватор", "cat"],
      "cat": ["гусеничные экскаваторы", "экскаватор", "320d"],
      "320d": ["гусеничные экскаваторы", "экскаватор"],
      "hyundai": ["гусеничные экскаваторы", "экскаватор", "robex", "r210"],
      "robex": ["гусеничные экскаваторы", "экскаватор"],
      "r210": ["гусеничные экскаваторы", "экскаватор"],
      "r220": ["гусеничные экскаваторы", "экскаватор"],
      "jcb": ["экскаваторы-погрузчики", "3cx", "4cx", "телескопические"],
      "3cx": ["экскаваторы-погрузчики", "погрузчик"],
      "4cx": ["экскаваторы-погрузчики", "погрузчик"],
      "loadall": ["телескопические погрузчики"],
      "case": ["экскаваторы-погрузчики", "580t", "770ex"],
      "580t": ["экскаваторы-погрузчики"],
      "770ex": ["экскаваторы-погрузчики"],
      "komatsu": ["экскаваторы-погрузчики", "wb97s"],
      "wb97s": ["экскаваторы-погрузчики"],
      "zoomlion": ["автокраны", "кран", "ztc250v", "zat"],
      "ztc250v": ["автокраны", "кран"],
      "ztc": ["автокраны", "кран"],
      "xcmg": ["фронтальные погрузчики", "lw550ru"],
      "lw550ru": ["фронтальные погрузчики"],
      "lw550": ["фронтальные погрузчики"],
      "dieci": ["телескопические погрузчики", "apollo"],
      "apollo": ["телескопические погрузчики"],
      "мтз": ["планировочная", "трактор", "беларус", "коммунальная"],
      "беларус": ["планировочная", "трактор", "мтз", "коммунальная"],
      "псм": ["подтвержденный парк", "в наличии", "гостехнадзор"],
      "гостехнадзор": ["подтвержденный парк", "в наличии"],
      "стс": ["подтвержденный парк", "в наличии"]
    };

    const cardData = [];
    allCards.forEach((card) => {
      const parentSection = card.closest(".eq-group-section");
      const groupId = parentSection ? parentSection.id : "";
      const titleEl = card.querySelector(".cat-full-card__title");
      const descEl = card.querySelector(".cat-full-card__desc");
      const specsEl = card.querySelector(".cat-full-card__specs");
      const badgeEl = card.querySelector(".grp-badge");
      const hasVerified = card.querySelector(".verified-tag") !== null;

      const title = titleEl ? titleEl.textContent.toLowerCase() : "";
      const desc = descEl ? descEl.textContent.toLowerCase() : "";
      const specs = specsEl ? specsEl.textContent.toLowerCase() : "";
      const badge = badgeEl ? badgeEl.textContent.toLowerCase() : "";

      const raw = `${title} ${desc} ${specs} ${badge}`.toLowerCase();
      cardData.push({ card, groupId, raw, hasVerified });
    });

    function filterCards() {
      const query = searchInput.value.trim().toLowerCase();
      if (clearBtn) {
        clearBtn.style.display = query.length > 0 ? "flex" : "none";
      }

      const tokens = query ? query.split(/\s+/).filter(Boolean) : [];
      let visibleCount = 0;
      const groupVisibleMap = {};

      groupSections.forEach((sec) => {
        groupVisibleMap[sec.id] = 0;
      });

      cardData.forEach((item) => {
        let matchesGroup = (currentGroup === "all" || item.groupId === currentGroup);
        if (currentGroup === "verified-fleet") {
          matchesGroup = item.hasVerified;
        }
        let matchesSearch = true;

        if (tokens.length > 0) {
          matchesSearch = tokens.every((token) => {
            if (item.raw.includes(token)) return true;
            const syns = SYNONYMS[token] || [];
            return syns.some((syn) => item.raw.includes(syn));
          });
        }

        const isVisible = matchesGroup && matchesSearch;
        if (isVisible) {
          item.card.style.display = "";
          visibleCount++;
          if (item.groupId) {
            groupVisibleMap[item.groupId] = (groupVisibleMap[item.groupId] || 0) + 1;
          }
        } else {
          item.card.style.display = "none";
        }
      });

      groupSections.forEach((sec) => {
        const hasVisible = (groupVisibleMap[sec.id] || 0) > 0;
        sec.style.display = hasVisible ? "" : "none";
      });

      if (countBadge) {
        countBadge.textContent = String(visibleCount);
      }

      if (emptyState) {
        emptyState.style.display = visibleCount === 0 ? "block" : "none";
      }
    }

    searchInput.addEventListener("input", filterCards);

    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        searchInput.value = "";
        searchInput.focus();
        filterCards();
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        searchInput.value = "";
        currentGroup = "all";
        filterBtns.forEach((btn) => {
          btn.classList.toggle("is-active", btn.dataset.group === "all");
        });
        filterCards();
      });
    }

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        currentGroup = btn.dataset.group || "all";
        filterBtns.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        filterCards();
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && document.activeElement === searchInput) {
        searchInput.value = "";
        filterCards();
      }
    });

    const urlParams = new URLSearchParams(window.location.search);
    const initialQuery = urlParams.get("q");
    const initialGroup = urlParams.get("group");

    if (initialQuery) {
      searchInput.value = initialQuery;
    }
    if (initialGroup) {
      const matchBtn = Array.from(filterBtns).find((b) => b.dataset.group === initialGroup);
      if (matchBtn) {
        currentGroup = initialGroup;
        filterBtns.forEach((b) => b.classList.remove("is-active"));
        matchBtn.classList.add("is-active");
      }
    }

    if (initialQuery || initialGroup) {
      filterCards();
    }
  }

  setupPhoneLinks();
  setupMessengerLinks();
  setupMetrika();
  setupForms();
  setupNavigation();
  setupGoals();
  setupYear();
  setupCatalogFilters();
  setupCatalogLiveSearch();
  setupEquipmentModal();
  setupCraneCalculator();
  setupQuickContactWidget();
})();
