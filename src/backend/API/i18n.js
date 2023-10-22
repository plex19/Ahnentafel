const i18next = require('i18next');
const backend = require('i18next-node-fs-backend');

i18next
  .use(backend)
  .init({
    lng: 'de', // Default language
    fallbackLng: 'en', // Fallback language
    preload: ['de', 'en'], // Preload languages for better performance
    ns: ['translations'],
    backend: {
      loadPath: '../translations/{{lng}}/{{ns}}.json'
    }
  });

console.log("i18next initzialised");

module.exports = i18next;
