import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'

import vuexI18n from 'vuex-i18n';

const store = new Vuex.Store({
  state: {
    langs: ['en', 'de']
  },
  modules: {
    a: moduleA,
    b: moduleB,
    i18n: vuexI18n.store
  }
})

Vue.use(vuexI18n.plugin, store);

const translationsEn = {
    "content": "This is some {type} content"
};

// translations can be kept in separate files for each language
// i.e. resources/i18n/de.json.
const translationsDe = {
    "My nice title": "Ein schöner Titel",
    "content": "Dies ist ein toller Inhalt"
};

// add translations directly to the application
Vue.i18n.add('en', translationsEn);
Vue.i18n.add('de', translationsDe);

// set the start locale to use
Vue.i18n.set('en');

export default store