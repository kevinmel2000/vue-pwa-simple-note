import '@babel/polyfill'
import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'siimple/dist/siimple.min.css';

// font awesome
import 'font-awesome/css/font-awesome.min.css'


// color swatches css
import "vue-swatches/dist/vue-swatches.min.css";

// vue animation transition
import "vue2-animate/dist/vue2-animate.min.css"

// load vuefy
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
