import Vue from 'vue';
var url = '//localhost:3000/api/';
export default {

  get(endpoint) {
    return Vue.http.get(url + endpoint);
  },

  post(data, endpoint) {
    return Vue.http.post(url + endpoint, data);
  }
};
