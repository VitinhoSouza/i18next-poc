import i18next from 'i18next'
import { initReactI18next } from 'react-i18next';
//import HttpApi from 'i18next-http-backend';

import {messages} from './languages'

const i18n = i18next.createInstance().use(initReactI18next);

i18n.init({
    defaultNS: ['accessibilityBar'],
    fallbackLng: 'pt',
    ns: ['accessibilityBar', 'Menu'],
    resources: messages
});

export default i18n;