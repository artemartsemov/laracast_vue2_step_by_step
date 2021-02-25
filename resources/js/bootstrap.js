require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router'
import axios from 'axios';

window.Vue = Vue;
Vue.use(VueRouter);


window.axios = axios;

Vue.config.devtools = true;


window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

