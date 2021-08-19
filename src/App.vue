<template>
  <div id="app" :class="{'en_font':font=='Montserrat','zh_font':font=='SourceHanSansCN'}">
    <!-- PC 页面 -->
    <!-- <TopGuideNew  v-if="driver=='PC'" :lang="lang.guide"> </TopGuideNew> -->
    <TopGuide v-if="driver=='PC'" :lang="lang.guide2"></TopGuide>
    <transition name="router" mode="out-in">
      <router-view name='PC' v-if="driver=='PC'" class="viewbody" :lang="lang"></router-view>
    </transition>
    <BottomFooter v-if="driver=='PC'" class="Bootom" :lang="lang.footer"></BottomFooter>

    <!--通过设备显示不同的组件-->
    <TopGuidePH v-if="driver=='PH'" :lang="lang.guidePH"></TopGuidePH>
    <transition name="router" mode="out-in">
      <router-view v-finger:tap="slideUpProGui" name='PC' v-if="driver=='PH'" class="viewbody"
                   :lang="lang"></router-view>
    </transition>
    <BottomFooter v-if="driver=='PH'" class="Bootom" :lang="lang.footer"></BottomFooter>
    <!--        <router-view name='PH' v-if="driver=='PH'" class="viewbody"></router-view>-->
    <!--        <BottomFooterPH v-if="driver=='PH'"></BottomFooterPH>-->
  </div>
</template>


<script>
// import TopGuideNew from "@/components/TopGuideNew.vue"
import TopGuide from "@/components/TopGuide.vue"
import TopGuidePH from "@/components/TopGuideNewPH.vue"
import BottomFooter from "@/components/BottomFooter.vue"
import $ from 'jquery'
// import BottomFooterPH from "./components/BottomFooterPH";

export default {
  data() {
    return {
      driver: 'PC',
      login: 0,
      lang: {},
      urlList: [],
      font: '',
    };
  },
  components: {
    // TopGuideNew,
    TopGuide,
    TopGuidePH,
    BottomFooter,
    // BottomFooterPH
  },

  created() {
    this.lang = this.$t('allinfo')
    //1.调用this.showProGuide返回flag，若判断到当前路径中包含guidePH（移动端导航）中的url，设置Vuex中的isProduct为true
    //2.isProduct：在TopGuideNewPH.vue中控制头部“产品”导航模块显示/隐藏
    this.$store.commit('set_product_guide', this.showProGuide(this.$route, this))
  },
  metaInfo() {
    return {
      title: this.$store.state.metaInfo.title,
      meta: this.$store.state.metaInfo.meta
    }
  },
  mounted() {
    //自动加载indexs方法
    this.index();
    // 判断设配
    if (this._isMobile()) {
      // alert("手机端");
      this.driver = 'PH'
    } else {
      // alert("pc端");
      this.driver = 'PC'
    }
    this.timerwatch = setInterval(this.watch_login, 1)

    //页面初始化时判断是否小于1024px
    if (window.innerWidth <= 1024) {
      this.driver = 'PH'
    } else {
      this.driver = 'PC'
    }
    //监听屏幕宽度变化
    window.addEventListener('resize', () => {
      let screenWidth = window.innerWidth
      if (screenWidth <= 1024) {
        this.driver = 'PH'
      } else {
        this.driver = 'PC'
      }
    })
    setTimeout(() => {
      if (this.$store.state.lang == '中文') {
        this.$store.commit('set_logo', require('../src/assets/img/PC/Commen/logo_zh.png'))
        this.$store.commit('set_footerLogo', require('../src/assets/img/PC/Commen/footer_logo_CN.png'))
      } else if (this.$store.state.lang == 'EN') {
        this.$store.commit('set_logo', require('../src/assets/img/PC/Commen/logo_en.png'))
        this.$store.commit('set_footerLogo', require('../src/assets/img/PC/Commen/footer_logo_EN.png'))
      }
    }, .1)
  },

  methods: {
    //获取浏览器语言环境
    index() {
      let langp = navigator.language || navigator.userLanguage;
      langp = langp.substr(0, 2); //也可以不用截取
      if (langp == 'en') { //英文
        this.$store.state.lang = 'EN'
      } else if (langp == 'zh') { //中文
        this.$store.state.lang = '中文'
      }
    },
    _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    },

    watch_login() {
      if (!window.sessionStorage.getItem('token')) {
        this.login = 0
      } else this.login = 1
    },

    //该方法用于在移动端产品页及产品详细页显示头部“产品”导航
    showProGuide(router, that) {
      //1.flag初始为false（隐藏），用于保存最后结果
      let flag = false
      //2.将JSON中guidePH（移动端导航）中有关产品的url保存进urlList
      that.lang.guidePH.seconde_guide.nav_content.forEach((value) => {
        // console.log(value.list)
        value.list.forEach(value1 => {
          that.urlList.push(value1.url)
        })
      })
      //3.因为guidePH（移动端导航）中list没有/MainProduct路径，因此手动添加
      that.urlList.push('/MainProduct')
      //4.因为默认语言与当前被加载语言不用，因此list也不同，请手动添加：
      that.urlList.push('/UP300P')
      that.urlList.push('/UP300e')
      that.urlList.forEach(value => {
        //4.判断当前路径是否包含guidePH（移动端导航）中的url
        if (router.path.toString() == value) {
          flag = true
        }
      })
      //5.返回flag结果，若判断到当前路径中包含guidePH（移动端导航）中的url，设置Vuex中的isProduct为true
      //6.isProduct：在TopGuideNewPH.vue中控制头部“产品”导航模块显示/隐藏
      return flag
    },

    slideUpProGui(e) {
      // 监听到页面路由跳转时,收回产品二级菜单栏
      $('.pro_s_mod').slideUp()
      // 当监听到页面路由跳转时,删除产品二级菜单栏右侧小箭头类名
      $('.pro_f_mod .nav_title').children('span').removeClass('active-icon')
    },

    //当语言栏切换时，如果在产品详情页面，需要重新计算移动端“规格参数模块”的dot长度
    addDot() {
      let resultWidth = []
      try {
        $(".left_text span").each((index, val) => {
          resultWidth.push($(".left_text").width() - val.offsetWidth )
        })
        resultWidth.forEach((val, idx) => {
          $("s")[idx].style.width = (val - 5) + 'px'
          $("s")[idx].style.left = $(".left_text").width() - $("s")[idx].offsetWidth + 'px'
        })
      } catch (e) {

      }
    }

  },

  watch: {
    //监听语言变化
    '$store.state.lang': function () {
      if (this.$store.state.lang == 'EN') {
        this.$i18n.locale = 'en'
        this.font = 'Montserrat'
      } else if (this.$store.state.lang == '中文') {
        this.$i18n.locale = 'zh'
        this.font = 'SourceHanSansCN'
      }
      this.lang = this.$t('allinfo')

      setTimeout(() => {
        this.addDot()
      }, .1)

      //在/UP300P或/UP300E页面中切换中英文语言，默认跳转到/MainProduct页面
      // if(this.$route.path == '/UP300P' || this.$route.path == '/UP300E' ){
      //   this.$router.push({path: '/MainProduct'})
      // }

    },
    //监听路由变化
    '$route': function (router) {
      // 重置页面meta
      // setTimeout(()=>{
        let metaInfoData = {
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
            {property: 'og:title', content: '云甲'},
            {property: 'og:type', content: 'website'},
            {property: 'og:url', content: 'https://www.up3d.cn/'},
            {property: 'og:image', content: 'http://up3d.cn/favicon.ico'}
          ]
        }
        for(let key  in this.lang){
          if(key == router.name){
            if(!this.lang[key].metaInfo){
              this.$store.commit('set_metaInfo', metaInfoData)
            }
          }
        }
      // },1)
      //1.调用this.showProGuide返回flag，若判断到当前路径中包含guidePH（移动端导航）中的url，设置Vuex中的isProduct为true
      //2.isProduct：在TopGuideNewPH.vue中控制头部“产品”导航模块显示/隐藏
      this.$store.commit('set_product_guide', this.showProGuide(router, this))
    }
  },
};
</script>

<style>
/* #app,#app div ,#app h1 {
font-family: Montserrat  ; 
font-weight: normal  !important;
} */

.en_font {
  font-family: Montserrat;
  font-weight: normal !important;
  color: black;
}

.zh_font {
  font-family: SourceHanSansCN;
  font-weight: normal !important;
  color: black;
}

.box {
  position: absolute;
  z-index: 12;
  top: 0rem;
  left: 8.750833rem;
  width: 1.238rem;
  height: 0.5rem;
}

.viewbody {
  overflow: hidden;
}

@media (max-width: 1024px) {
  html.active {
    height: 100%;
    overflow: hidden;
  }

  html.active body {
    height: 100%;
    overflow: hidden;
  }
}

/* 组件切换动画 */
.router-enter {
  opacity: 0;
  transform: translateY(-30px);
}

.router-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.router-leave-active {
  opacity: 0;
  transition: all 1s ease;
}

.router-enter-active {
  opacity: 1;
  transition: all 1s ease;
}
</style>
