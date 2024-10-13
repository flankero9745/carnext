import "./style.css";
import { useState, useRef } from "react";

// Компонент для меню выбора языка
function LanguageMenu({ currentLanguage, setLanguage }) {
  const languages = ["РУССКИЙ", "ENGLISH", "УКРАЇНСЬКА"];

  return (
    <div className="language-menu">
      {languages
        .filter((lang) => lang !== currentLanguage)
        .map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className="menu-button"
          >
            {lang}
          </button>
        ))}
    </div>
  );
}

// Компонент для контактного меню
function ContactMenu() {
  return (
    <div className="contact-menu">
      <button
        onClick={() => window.open("https://t.me/your_telegram", "_blank")}
        className="menu-button-contact"
      >
        TELEGRAM
      </button>
      <button
        onClick={() => window.open("https://wa.me/your_whatsapp", "_blank")}
        className="menu-button-contact"
      >
        WHATSAPP
      </button>
    </div>
  );
}

// Основной компонент для управления отображением
function EnglishContactSection() {
  const [language, setLanguage] = useState("РУССКИЙ");
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [showContactMenu, setShowContactMenu] = useState(false);
  const languageButtonRef = useRef(null);
  const contactButtonRef = useRef(null);

  // Тексты для каждого языка
  const texts = {
    РУССКИЙ: {
      contactUs: "СВЯЗЬ С НАМИ",
      languageMenuLabel: "Выберите язык",
    },
    ENGLISH: {
      contactUs: "CONTACT US",
      languageMenuLabel: "Select Language",
    },
    УКРАЇНСЬКА: {
      contactUs: "ЗВ'ЯЗОК З НАМИ",
      languageMenuLabel: "Оберіть мову",
    },
  };

  // Функции для управления состояниями
  const toggleLanguageMenu = () => setShowLanguageMenu(!showLanguageMenu);
  const toggleContactMenu = () => setShowContactMenu(!showContactMenu);

  const changeLanguage = (lang) => {
    setLanguage(lang); // Меняем язык
    setShowLanguageMenu(false);
    console.log(`Язык изменён на: ${lang}`); // Для проверки в консоли
  };

  // Получаем тексты для выбранного языка
  const currentText = texts[language];

  return (
    <div className="content-wrapper">
      <button
        onClick={toggleLanguageMenu}
        className="language-button"
        ref={languageButtonRef}
      >
        {language}
      </button>

      {showLanguageMenu && (
        <div
          className="dropdown-menu language-dropdown"
          style={{
            width: `${
              languageButtonRef.current?.getBoundingClientRect().width
            }px`,
          }}
        >
          <LanguageMenu
            currentLanguage={language}
            setLanguage={changeLanguage}
          />
        </div>
      )}

      <img
        src="/assets/image_3c9f41bb.png"
        className="image-with-text-overlay"
        alt="Image with overlay"
      />

      <button
        onClick={toggleContactMenu}
        className="contact-button"
        ref={contactButtonRef}
      >
        {currentText.contactUs} {/* Текст меняется в зависимости от языка */}
      </button>

      {showContactMenu && (
        <div
          className="dropdown-menu contact-dropdown"
          style={{
            width: `${
              contactButtonRef.current?.getBoundingClientRect().width
            }px`,
          }}
        >
          <ContactMenu />
        </div>
      )}
    </div>
  );
}

export default EnglishContactSection;
