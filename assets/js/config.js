const SITE_CONFIG = {
  leadEndpoint: "https://formsubmit.co/ajax/roman.k@mail.ru",
  email: "roman.k@mail.ru",
  phone: "+7 (925) 757-78-88",
  telegram: "https://t.me/romanspes",
  whatsapp: "https://wa.me/79257577888",
  metrikaId: ""
};

(() => {
  "use strict";

  const path = window.location.pathname.replace(/\/index\.html$/, "/");

  function setMetaDescription(value) {
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", value);
  }

  function setText(selector, value, root = document) {
    const node = root.querySelector(selector);
    if (node) node.textContent = value;
    return node;
  }

  function replaceExactText(selector, from, to, root = document) {
    root.querySelectorAll(selector).forEach((node) => {
      if (node.textContent.trim() === from) node.textContent = to;
    });
  }

  function applySimpleHeader() {
    const brandSubtitle = document.querySelector(".brand__text small");
    if (brandSubtitle) brandSubtitle.textContent = "Аренда спецтехники";

    const nav = document.querySelector("[data-nav]");
    if (!nav) return;

    const catalogActive = path.startsWith("/catalog/") ? " is-active" : "";
    const worksActive = path.startsWith("/services/") ? " is-active" : "";
    const contactsActive = path.startsWith("/contacts/") ? " is-active" : "";

    nav.innerHTML = `
      <a href="/catalog/" class="nav-link${catalogActive}">Каталог техники</a>
      <a href="/services/" class="nav-link${worksActive}">Для каких работ</a>
      <a href="/contacts/" class="nav-link${contactsActive}">Контакты</a>
    `;
  }

  function applyHomePositioning() {
    if (path !== "/") return;

    document.title = "Аренда спецтехники в Москве и МО — ZEMTRAK";
    setMetaDescription(
      "Аренда строительной, дорожной, землеройной и другой спецтехники в Москве и Московской области. Подберём технику под задачу и организуем подачу на объект."
    );

    const hero = document.querySelector(".hero");
    if (!hero) return;

    const eyebrow = hero.querySelector(".eyebrow");
    if (eyebrow) eyebrow.innerHTML = "<span></span> ZEMTRAK &bull; Аренда спецтехники";

    setText("h1", "Аренда спецтехники", hero);
    setText(
      ".hero__lead",
      "Подберём технику под вашу задачу. Экскаваторы, погрузчики, самосвалы, краны, дорожная и другая спецтехника в аренду.",
      hero
    );

    const heroLinks = hero.querySelectorAll(".hero__actions a");
    if (heroLinks[0]) {
      heroLinks[0].href = "/catalog/";
      heroLinks[0].textContent = "Каталог техники";
    }
    if (heroLinks[1]) {
      heroLinks[1].href = "/services/";
      heroLinks[1].textContent = "Для каких работ";
    }

    setText(
      ".hero__substrip",
      "Земляные работы • Дорожные работы • Карьерные работы • Демонтаж • Погрузка и вывоз",
      hero
    );

    const modalSubtitle = document.querySelector("[data-modal-subtitle]");
    if (modalSubtitle) {
      modalSubtitle.textContent = "Подберём технику под задачу и организуем подачу на объект.";
    }

    replaceExactText("a, button", "Все услуги", "Для каких работ", hero);
  }

  function reframeWorksCatalog() {
    if (!path.startsWith("/services/")) return;

    replaceExactText(".breadcrumbs a, .breadcrumbs span", "Каталог услуг", "Для каких работ");

    const intro = document.querySelector(".page-intro");
    if (intro) {
      const eyebrow = intro.querySelector(".eyebrow");
      if (eyebrow) eyebrow.innerHTML = "<span></span> Техника под задачу";
    }

    const isWorksIndex = path === "/services/";

    if (isWorksIndex) {
      document.title = "Для каких работ подходит спецтехника — ZEMTRAK";
      setMetaDescription(
        "Подберите спецтехнику в аренду под задачу: земляные, дорожные, карьерные, демонтажные, погрузочные и другие работы. ZEMTRAK поможет выбрать подходящую машину."
      );
      setText(".page-intro h1", "Для каких работ нужна техника");
      setText(
        ".page-intro__lead",
        "Выберите тип задачи — подберём подходящую спецтехнику в аренду и организуем её подачу на объект."
      );

      document.querySelectorAll(".group-section-header p").forEach((node) => {
        if (!node.dataset.rentalReframed) {
          node.textContent = `Техника в аренду для этого направления: ${node.textContent.trim()}`;
          node.dataset.rentalReframed = "true";
        }
      });
    } else {
      const h1 = document.querySelector(".page-intro h1");
      if (h1 && !h1.textContent.startsWith("Техника в аренду")) {
        h1.textContent = `Техника в аренду — ${h1.textContent.trim()}`;
      }

      const lead = document.querySelector(".page-intro__lead");
      if (lead && !lead.dataset.rentalReframed) {
        lead.textContent = `Подберём спецтехнику под эту задачу. ${lead.textContent.trim()}`;
        lead.dataset.rentalReframed = "true";
      }

      const priceTag = document.querySelector(".page-intro__price-tag");
      if (priceTag) priceTag.textContent = "Подбор техники и расчёт аренды — по задаче и объёму.";

      document.querySelectorAll(".sdl-block").forEach((block) => {
        const blockEyebrow = block.querySelector(".eyebrow--dark");
        const heading = block.querySelector("h2");
        if (!blockEyebrow || !heading) return;

        const label = blockEyebrow.textContent.trim();
        if (label === "Состав работ") {
          blockEyebrow.innerHTML = "<span></span> Применение техники";
          heading.textContent = "Для каких задач подходит техника";
        } else if (label === "Порядок выполнения") {
          blockEyebrow.innerHTML = "<span></span> Организация аренды";
          heading.textContent = "Как подбираем и подаём технику";
        }
      });

      const crosslinkHeading = document.querySelector(".section--crosslinks .section-heading h2");
      if (crosslinkHeading) crosslinkHeading.textContent = "Какая техника подходит для этой задачи";

      const crosslinkLead = document.querySelector(".section--crosslinks .section-heading p");
      if (crosslinkLead) {
        crosslinkLead.textContent = "Для этой задачи можно арендовать подходящую технику из каталога ZEMTRAK — подберём машину по объёму и условиям объекта.";
      }
    }

    document.querySelectorAll(".srv-price").forEach((node) => {
      node.textContent = "Подбор техники";
    });

    document.querySelectorAll(".srv-full-card [data-open-modal]").forEach((button) => {
      button.textContent = "Подобрать технику";
    });

    replaceExactText("a, button", "Все услуги", "Для каких работ");
  }

  applySimpleHeader();
  applyHomePositioning();
  reframeWorksCatalog();
})();
