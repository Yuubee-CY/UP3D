import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store(
  {
    state: {
      lang: 'EN',
      activetag: -1,
      activetag2: -1,
      product_posistion: null,
      look_vide: '',
      token: '',
      userinfo: {},
      isProduct: false,
      logoSrc: '',
      footerLogoSrc: '',
      metaInfo:{
        title: '齿科3D扫描仪_义齿设计软件_义齿排版软件_智能义齿雕刻机_口内扫描仪 - 云甲科技', // set a title
        meta: [
          {                 // set meta
            name: 'keywords',
            content: '齿科扫描仪,口内扫描仪,智能义齿雕刻机,义齿设计软件,义齿排版软件,齿科数字化管理,齿科数字化,云甲科技'
          },
          {
            name: 'description',
            content: '云甲科技首家独立自主研发义齿科技公司，自2012年专注齿科行业利用数字化科技研发出齿科全套的CAD，CAM齿科设计软件及齿科硬件设备；从研发，生产，销售。主要产品为齿科3D扫描仪、桌面3D齿科扫描仪、口内扫描仪、义齿设计软件、义齿排版软件、齿科雕刻机，智能义齿雕刻机等；'
          },
          {
            property: 'og:title',
            content: '云甲'
          },
          {
            property: 'og:type',
            content: 'website'
          },
          {
            property: 'og:url',
            content: 'https://www.up3d.cn/'
          },
          {
            property: 'og:image',
            content: 'http://up3d.cn/favicon.ico'
          }
        ]
      },
    },

    mutations: {
      re_set_lang(state, chose_lang) {
        //chose_lang：commit传递过来的对象，包含了选择的语言以及元素根节点（<header>）
        //chose：{lange,doc}
        //chose_lang.doc：commit提交过来的根节点，此处是<header>
        // let logoDoc = chose_lang.doc.querySelector(".logo").querySelector('img')
        state.lang = chose_lang.lange;
        if (state.lang == 'EN') {
          //判断语种，根据根节点（<header>）切换当前语种的logo
          state.logoSrc = require('../assets/img/PC/Commen/logo_en.png')
          state.footerLogoSrc = require('../assets/img/PC/Commen/footer_logo_EN.png')
          // logoDoc.setAttribute('src', require('../assets/img/PC/Commen/logo_en.png'))
          // logoDoc.style.background = "url(" + require('../assets/img/PC/Commen/logo_en.png') + ") no-repeat center"
          // logoDoc.style.backgroundSize = " 0.833333rem 0.25rem"
        } else if (state.lang == '中文') {
          state.logoSrc = require('../assets/img/PC/Commen/logo_zh.png')
          state.footerLogoSrc = require('../assets/img/PC/Commen/footer_logo_CN.png')
          // logoDoc.setAttribute('src', require('../assets/img/PC/Commen/logo_zh.png'))
          // logoDoc.style.background = "url(" + require('../assets/img/PC/Commen/logo_zh.png') + ") no-repeat center"
          // logoDoc.style.backgroundSize = " 0.833333rem 0.25rem"
        }
      },

      set_user_info(state, set) {
        state.userinfo = set;
      },

      set_product_posistion(state, set_posistion) {
        state.product_posistion = set_posistion;
        // console.log(state.product_posistion);
      },

      //首页产品视频跳转锚点
      set_look_vide(state, set) {
        state.look_vide = set;
      },

      //将 token 放入 store 中
      set_token(state, set) {
        state.token = set;
      },
      set_product_guide(state, set) {
        state.isProduct = set;
      },
      // 设置logo
      set_logo(state, set) {
        state.logoSrc = set
      },
      // 设置Footerlogo
      set_footerLogo(state, set) {
        state.footerLogoSrc = set
      },
      // 设置metaInfo
      set_metaInfo(state, set) {
        state.metaInfo = set
      },
    },

    getters: {
      send_lang: function (state) {
        return state.lang
      },

      send_user_info: function (state) {
        return state.userinfo
      },
    },

    actions: {},

    modules: {}
  })
