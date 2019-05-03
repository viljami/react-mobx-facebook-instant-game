import React, {Suspense}  from 'react';
import {Provider} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import {Container, Section} from 'react-bulma-components';
import {I18nextProvider, useTranslation} from 'react-i18next';
import Answer from '../store/Answer';
import Locale from '../store/Locale';
import i18nInit, {reactToLangChange} from '../lib/i18n';
import Routes from './Routes';
import Loading from './Loading';
import Footer from './Footer';
import './App.scss';

const answer = new Answer();
const locale = new Locale();

const i18n = i18nInit();
reactToLangChange(locale);

const App = () => {
  const [t] = useTranslation();

  return (
    <Provider answer={answer} locale={locale}>
      <I18nextProvider i18n={i18n}>
        <div id='app'>
          <Section>
            <Container>
              <h1 className='title'>{t('title')}</h1>

              <Routes />
            </Container>
          </Section>

          <Section>
            <Footer />
          </Section>

          <DevTools />
        </div>
      </I18nextProvider>
    </Provider>
  );
};

export default () => (
  <Suspense fallback={<Loading />}>
    <App />
  </Suspense>
);
