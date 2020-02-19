import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'

// import '../public/dist/js/app.js';

// import '../public/scss/AdminLTE.scss';

Vue.use(VueRouter);


const router = new VueRouter ({
  routes: Routes,
  mode: 'history'
})


Vue.config.productionTip = false




new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
