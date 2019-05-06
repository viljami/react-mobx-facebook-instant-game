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

const {pathname} = window.location;
let path = pathname.replace('query', '').replace('result', '').replace('index.html', '');
if (path.length === 1 && path === '/') {
  path = '';
} else if (path.length > 1 && path[path.length - 1] !== '/') {
  path += '/';
}

export default () => {
  i18n
  .use(new XHR(undefined, {loadPath: `${path}locales/{{lng}}/{{ns}}.json`}))
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });

  return i18n;
};
