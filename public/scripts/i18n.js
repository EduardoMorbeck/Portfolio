class I18n {
  constructor(defaultLang = "pt") {
    this.lang = defaultLang;
    this.translations = {};
  }

  async load(lang) {
    try {
      const response = await fetch(`./locales/${lang}.json`);
      this.translations = await response.json();
      this.lang = lang;
      this.updateDOM();
    } catch (error) {
      console.error("Erro ao carregar idioma:", error);
    }
  }

  translate(key, params = {}) {
    let text = this.translations[key] || key;
    Object.keys(params).forEach((param) => {
      text = text.replace(`{${param}}`, params[param]);
    });
    return text;
  }

  updateDOM() {
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      element.innerHTML = this.translate(key);
    });
  }
}

const i18n = new I18n();
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "pt";
  i18n.load(savedLang);

  document.getElementById("languageSelect").value = savedLang;

  document
    .getElementById("languageSelect")
    .addEventListener("change", (event) => {
      const newLang = event.target.value;
      localStorage.setItem("lang", newLang);
      i18n.load(newLang);
    });
});
