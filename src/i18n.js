import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';
import getCookie from './utils/getcookie'

import enSource from './locales/en.json'
import ruSource from './locales/ru.json'

const lang = getCookie('lang') || 'ru'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns: ['common', 'moduleA'],
    defaultNS: 'moduleA',
    resources: {
      en: {
        moduleA: {
          ...enSource
        }
      },
      ru: {
        moduleA: {
          ...ruSource
        }
      }
    },
    fallbackLng: 'en',
    debug: true,
    lng: lang,
    react: {
      // useSuspense: false
    },
  })


export default i18n;
