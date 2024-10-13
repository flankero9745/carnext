// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Переводы для каждого языка
const resources = {
  ENGLISH: {
    translation: {
      contactUs: "Contact Us",
      telegram: "Telegram",
      whatsapp: "WhatsApp",
      searchPlaceholder: "Search...",
      tableTitle: "Users Table",
      // Добавьте все остальные переводы здесь
    },
  },
  РУССКИЙ: {
    translation: {
      contactUs: "Связь с нами",
      telegram: "Телеграм",
      whatsapp: "Ватсап",
      searchPlaceholder: "Поиск...",
      tableTitle: "Таблица пользователей",
      // Добавьте все остальные переводы здесь
    },
  },
  УКРАЇНСЬКА: {
    translation: {
      contactUs: "Зв'язатися з нами",
      telegram: "Телеграм",
      whatsapp: "Ватсап",
      searchPlaceholder: "Пошук...",
      tableTitle: "Таблиця користувачів",
      // Добавьте все остальные переводы здесь
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "РУССКИЙ", // Язык по умолчанию
  fallbackLng: "РУССКИЙ", // Язык для подстановки при отсутствии перевода
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
