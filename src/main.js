import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible';
import './plugins/element.js'
import './assets/css/globle.css'
import './assets/css/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import axios from 'axios'
import store from './store'
import VueI18n from 'vue-i18n'
import AlloyFinger from "alloyfinger";
import AlloyFingerPlugin from 'alloyfinger/vue/alloy_finger_vue'
import VueLazyload from "vue-lazyload";
import MetaInfo from 'vue-meta-info';
// import 'swiper/dist/css/swiper.css'

Vue.use(MetaInfo)

//图片懒加载插件
Vue.use(VueLazyload, {
  //配置图片请求出错时替换的图片
  error: require('./assets/img/PC/Commen/footer_icon.png'),
  //配置正在加载时替换的图片
  loading: require('./assets/img/PC/Commen/footer_icon.png'),
})

//使用AlloyFinger插件（移动端手势库）
Vue.use(AlloyFingerPlugin, {
  AlloyFinger
})

// axios 请求后台地址设定
axios.defaults.baseURL = 'http://49.235.206.119:3000/'
// axios.defaults.baseURL = 'http://localhost:3000/'

Vue.prototype.$http=axios

//使用Swiper组件
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

//使用多语言控制组件
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'en', // 语言标识
  messages: {
    'zh': require('./assets/lang/zh'),
    'en': require('./assets/lang/en')
  },
  silentTranslationWarn: true
})


//路由重定向后返回页面最顶部
router.beforeEach((to, from, next) => {
    // chrome
    document.body.scrollTop = 0
    // firefox
    document.documentElement.scrollTop = 0
    // safari
    window.pageYOffset = 0
    next()
});


new Vue({
  router,
  history,
  store,
  i18n,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
