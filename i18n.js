import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import common_en from './public/locales/en/common.json'; // Adjust the path as needed
import common_de from './public/locales/de/common.json'; // Adjust the path as needed
import common_tr from './public/locales/tr/common.json';
import footer_de from './public/locales/de/footer.json'; // Adjust the path as needed


i18n
    .use(initReactI18next) // Passes i18n down to react-i18next
    .init({
        resources: {
            en: {
                common: common_en // Your JSON file content
            },
            de: {
                common: common_de, // Your JSON file content
                footer: footer_de
            },
            tr: {
                common: common_tr // Your JSON file content
            }
        },
        lng: 'en', // Default language
        fallbackLng: 'en', // Fallback language
        interpolation: {
            escapeValue: false // React already does escaping
        }
    });

export default i18n;