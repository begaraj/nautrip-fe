// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import VueResource from 'vue-resource';
import Form from 'iview/src/components/form';
import * as GoogleMap from 'vue2-google-maps';

var googleMapApiKey = 'AIzaSyAGT9DujTwO_A8R8y80W5RDU9TL_CRAAmg';

Vue.use(VueCharts);
Vue.use(GoogleMap, {
    load: {
      key: googleMapApiKey,
    }
  });
Vue.use(VueResource);
Vue.use(iView);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
