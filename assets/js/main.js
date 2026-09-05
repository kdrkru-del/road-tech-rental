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
      target_email: "roman.k@mail.ru",
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

  setupPhoneLinks();
  setupMessengerLinks();
  setupMetrika();
  setupForms();
  setupNavigation();
  setupGoals();
  setupYear();
  setupCatalogFilters();
  setupEquipmentModal();
})();
