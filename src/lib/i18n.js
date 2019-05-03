import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {reaction} from "mobx";

export const reactToLangChange = localeStore => {
  reaction(
    () => localeStore.lang,
    lang => {
      console.log("change language");
      i18n.changeLanguage(lang);
    }
  );
};

export default () => {
  i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });

  return i18n;
};
