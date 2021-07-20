import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueSweetalert2 from 'vue-sweetalert2';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';
import '../node_modules/animate.css/animate.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

// vee-validate
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import rules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import App from './App.vue';
import router from './router';

// 設置語系
configure({ generateMessage: localize({ zh_TW: zhTW }), validateOnInput: true });
setLocale('zh_TW');

// 載入全部規則
Object.keys(rules).forEach((rule) => {
  defineRule(rule, rules[rule]);
});

const app = createApp(App);
app.use(router);
app.component('Loading', Loading);
app.use(VueSweetalert2);
app.use(VueAxios, axios);
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.use(AOS);
AOS.init();
app.mount('#app');
