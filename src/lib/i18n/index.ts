import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptBR from './locales/br/pt-br.json';
import enUS from './locales/en/en-us.json';

const resources = {
    'en': enUS,
    'br': ptBR,
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        debug: true,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n;