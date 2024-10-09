import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ruTranslations from './locales/ru/translation.json'; // Импортируйте файл
import enTranslations from './locales/en/translation.json'; // Импортируйте файл

i18n
  .use(initReactI18next) // передаём i18next в react-i18next
  .init({
    resources: {
      ru: {
        translation: ruTranslations, // Используйте импортированные переводы
      },
      en: {
        translation: enTranslations, // Используйте импортированные переводы
      },
    },
    lng: 'ru',
    fallbackLng: 'ru', // язык по умолчанию, если перевод не найден
    interpolation: {
      escapeValue: false, // React уже экранирует значения
    },
  });

export default i18n;
