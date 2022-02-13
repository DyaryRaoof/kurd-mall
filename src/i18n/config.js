import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translations.json';
import ku from './locales/ku/translations.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: localStorage.language || 'en',
  resources: {
    en: {
      translations: en,
    },
    ku: {
      translations: ku,
    },
  },
  ns: ['translations'],
  defaultNS: 'translations',
});

i18n.languages = ['en', 'ku'];

export default i18n;
