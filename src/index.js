import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import global_en from "./Translation/en/global.json";
import global_ru from "./Translation/ru/global.json";
import i18next from "i18next";
import { I18nextProvider } from 'react-i18next';

i18next.init({
  intetpolation: {escapeValue: false},
  lng: "en",
  resources: {
    en: {
      global: global_en
    },
    ru: {
      global: global_ru
    },
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
