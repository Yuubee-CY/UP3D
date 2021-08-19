<template>
  <header>
    <div class="header-ph">
      <div class="logo">
        <router-link tag="li" to="/" v-finger:tap="backMenu">
<!--          <img v-lazy="require('../assets/img/PC/Commen/logo_zh.png')" alt="">-->
          <img :src="this.$store.state.logoSrc" alt="">
          <img>
        </router-link>
      </div>
      <div class="right_menu">
        <div class="language_change content">
          <!--  登录与切换语言  -->
          <div class="m-language">
            <div class="l-nav">
              <div class="l_login" v-for="(item,index) in lang.login_list" :key="index">
                <li>
                  <router-link :to="item.url" v-finger:tap="menu_hidden">{{ item.title }}</router-link>
                </li>
              </div>
              <span class="split_line"></span>
              <div class="r_language" v-for="(item1, index1) in lang.about_login" :key="'index1'+index1">
                <li :class=item1.className>
                  <router-link class="text" :to="item1.url" v-finger:tap="changeLanguage">
                    {{ $store.getters.send_lang }}
                    <i class="iconfont icon-xiangxia"></i>
                  </router-link>
                  <ul v-show="sub_nav" class="sub-nav">
                    <li v-for="(item2,index2) in item1.list" :key="index2">
                      <router-link
                          :to="item2.url"
                          v-finger:tap="changeLanguage"
                      >
                        {{ item2.name }}
                      </router-link>
                    </li>
                  </ul>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div class="menu-start" v-finger:tap="showlist">
          <div class="icon-menu">
            <p></p>
            <p></p>
            <p></p>
          </div>
          <i class="iconfont icon-ic_close"></i>
        </div>
      </div>
    </div>
    <!--      产品详情导航-->
    <transition name="pro_enter">
      <div class="m-product" v-show="this.$store.state.isProduct">
        <div class="pro_f_mod">
          <div class="nav_title" v-finger:tap="showProList">
            <a href="javascript:;">{{ this.lang.seconde_guide.nav_title }}</a>
            <span class="el-icon-arrow-right"></span>
          </div>
        </div>
        <div class="pro_s_mod" v-show="false">
          <ul class="list_guide">
            <li class="guide_item"
                v-for="(item,index1) in lang.seconde_guide.nav_content"
                :key="index1"
                :data-index="index1"
                v-finger:tap="showProCard">
              <a href="javascript:;">{{ item.name }}</a>
              <span class="el-icon-arrow-right"></span>
            </li>
          </ul>
          <ul class="list_info"
              v-for="(item, index2) in lang.seconde_guide.nav_content"
              :key="index2"
              v-show="show_pro_card == index2">
            <swiper :options="guideListSwiper">
              <swiper-slide class="pro_card" v-for="(sublist, index3) in item.list"
                            :key="index3">
                <li>
                  <router-link :to="sublist.url"><img v-lazy="sublist.imgurl" :key="sublist.imgurl"></router-link>
                  <p class="pro_name">
                    {{ sublist.name }}
                  </p>
                </li>
              </swiper-slide>
              <div class="guide-swiper-pagination" slot="pagination"></div>
            </swiper>

          </ul>
        </div>
      </div>
    </transition>
    <transition>
      <div class="content" v-show="menu_show">
        <!--  主要内容  -->
        <div class="m-menu">
          <ul class="m-nav">
            <li v-for="(item,index) in this.lang.guide_list"
                :key="index"
                :class=item.className>
              <router-link
                  :to=item.url
                  class="text"
                  v-finger:tap="menu_hidden">
                {{ item.title }}
                <span class="underline"></span>
              </router-link>
              <ul v-if="item.className" v-show="sub_nav" class="sub-nav">
                <li v-for="(item1,index1) in item.list" :key="index1">
                  <router-link :to="item1.url" v-finger:tap="menu_hidden">
                    {{ item1.name }}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <!--  登录与切换语言  -->
        <!--        <div class="m-language">-->
        <!--          <div class="l-nav">-->
        <!--            <div class="l_login" v-for="(item,index) in lang.login_list" :key="index">-->
        <!--              <li>-->
        <!--                <router-link :to="item.url" v-finger:tap="menu_hidden">{{ item.title }}</router-link>-->
        <!--              </li>-->
        <!--            </div>-->
        <!--            <span class="split_line"></span>-->
        <!--            <div class="r_language" v-for="(item1, index1) in lang.about_login" :key="'index1'+index1">-->
        <!--              <li :class=item1.className>-->
        <!--                <router-link class="text" :to="item1.url" v-finger:tap="menu_hidden">-->
        <!--                  {{ $store.getters.send_lang }}-->
        <!--                  <i class="iconfont icon-xiangxia"></i>-->
        <!--                </router-link>-->
        <!--                <ul v-show="sub_nav" class="sub-nav">-->
        <!--                  <li v-for="(item2,index2) in item1.list" :key="index2">-->
        <!--                    <router-link-->
        <!--                        :to="item2.url"-->
        <!--                        v-finger:tap="menu_hidden"-->
        <!--                    >-->
        <!--                      {{ item2.name }}-->
        <!--                    </router-link>-->
        <!--                  </li>-->
        <!--                </ul>-->
        <!--              </li>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
    </transition>
  </header>
</template>
<script>
import $ from 'jquery'
import Login from "../views/Login";
import Swiper from "swiper";

export default {
  props: {
    lang: {},
  },
  data() {
    return {
      menu_show: false,
      sub_nav: false,
      show_pro_card: 0,
      doc: '',
      guideListSwiper: {
        pagination: {
          el: '.guide-swiper-pagination',
          Type: 'fraction',
          clickable: true,
        },//这样写小圆点就有了
        // loop: true,
        // speed: 1000,
        // autoplay: {
        //   //隔2000ms切换一次
        //   delay: 3000,
        //   autoplay: true,
        //   disableOnInteraction: false,
        // },
        slidesPerView: 1,
        observer: true,
        observeParents: true,
        resizeObserver: true,
      }
    };
  },
  created() {
  },
  mounted() {
    let languageWidth = this.$t('allinfo').guidePH.about_login[0].list.length * 28
    document.querySelector('.content .m-language .l-nav a').style.width = languageWidth+'px'
    // 页面加载后,判断isProduct,就是判断页面加载后是否为产品页或产品详情页
    // 从而改变<header/>的高度,在mounted()中是为了避免用户刷新后watch监听不到
    if (this.$store.state.isProduct) {
      this.$el.style.height = '118PX'
    } else {
      this.$el.style.height = '70PX'
    }
    // setTimeout(()=>{
    // if (this.$store.state.lang == '中文') {
    //   document.querySelector(".logo").querySelector('img').setAttribute('src', require('../assets/img/PC/Commen/logo_zh.png'))
    // } else if (this.$store.state.lang == 'EN') {
    //   document.querySelector(".logo").querySelector('img').setAttribute('src', require('../assets/img/PC/Commen/logo_en.png'))
    // }
    // },.0001)
  },
  watch: {
    menu_show() {
      //监听menu_show,如果menu菜单展开,则给<html/>添加active类用于禁止滚动
      // 给.menu-start添加.ac-menu类用于菜单栏'三'和'×'的显示隐藏
      if (this.menu_show) {
        $('html').addClass('active')
        $('.menu-start').addClass("ac-menu")
      } else {
        $('html').removeClass('active')
        $('.menu-start').removeClass("ac-menu")
      }
    },
    '$route': function (router) {
      //监听路由,改变时判断isProduct是否为true
      //也就是判断当前页面是否为产品页或产品详细页,改变当前<header/>的高度
      if (this.$store.state.isProduct) {
        this.$el.style.height = '118PX'
      } else {
        this.$el.style.height = '70PX'
      }
      // 监听到页面路由跳转时,收回产品二级菜单栏
      $('.pro_s_mod').slideUp()
      // 当监听到页面路由跳转时,删除产品二级菜单栏右侧小箭头类名
      $('.pro_f_mod .nav_title').children('span').removeClass('active-icon')
    }
  },
  methods: {
    backMenu(e) {
      this.menu_show = false
    },
    //该方法用于显示隐藏menu菜单栏，以及重置样式
    showlist(e) {
      // 1.切换.menu-start中名为ac-menu的类名，该类名用于显示隐藏那三根线和那个'×'
      $('.menu-start').toggleClass("ac-menu")
      // 2.切换菜单栏显示隐藏
      this.menu_show = !this.menu_show
      // 3.重置menu上半部分的文字颜色
      $('.m-menu .m-nav li a').css({color: '#fff'})
      // 4.重置'登录'中的文字颜色
      $('.l-nav .l_login li a').css({color: '#fff'})
      // 5.重置'语言'中的文字颜色
      // $('.l-nav .r_language li a').css({color: '#fff'})
      // 6.重置'语言'二级菜单栏中的文字颜色
      // $('.sub-nav li a').css({color: '#fff'})
      // 7.重置'语言'中小icon的文字颜色和2D角度
      // $('.text>.icon-xiangxia').css({color: '#fff', transform: 'rotate(90deg)'})
      // 8.删除menu上半部分中含有二级菜单栏的下划线
      $('.content .m-menu .m-nav>.cur>.text').removeClass('b_line')
      // 9.调用reExpCls()重置语言栏的样式
      // this.reExpCls()
      // 10.重置doc
      this.doc = ''
      // 11.重置被下拉的语言二级栏
      $('.m-menu .m-nav .sub-nav').slideUp()

      //当菜单栏滑下时给</html>标签添加active类，在App.vue中完成遮罩要是，删除滚动条
      $('html').toggleClass('active')
    },
    menu_hidden(e) {
      //调用被封装的方法
      this.menuSlideToggle(this, e)

      //调用被封装的方法
      // this.languageToggle(e)


    },

    changeLanguage(e) {
      this.languageToggle(e)
    },

    //封装方法，为了看着方便
    //此方法用于切换二级菜单栏状态
    //1.创建全局变量doc（在data()中），记录每次被点击的元素
    //2.判断每次点击的元素是否是第一次或上一次点击的元素
    //3.不是的话就把上次的二级栏收回，弹出本次的二级栏
    menuSlideToggle(that, e) {
      //1.判断当前点击元素的父元素类名是否包含.cur，当前被点击元素是router-link:tag='a'(父元素包含.cur)
      //2.包含.cur的元素就是含有二级菜单栏的元素
      if (e.target.parentNode.className.indexOf('cur') != -1 || e.target.className.indexOf('iconfont') != -1) {
        //4. 如果当前被点击是含有二级菜单栏的li.cur
        //5. 那么就调用that.doc判断是否为空，如果为空说明是第一次点击
        if (that.doc == '') {
          //6. 如果是第一次点击，则改变router-link:tag='a'
          // 为它添加b_line类，该类名用于展示它们文本底下会缩放的下划线
          // 调用jq中slideDown下拉出二级栏，调用callback时为doc赋值为当前点击的元素
          if (e.target.className.indexOf('iconfont') == -1) {
            e.target.style.color = '#FEBB6F'
            $(e.target).addClass('b_line')
            that.doc = e.target
            $(e.target).next().slideDown(() => {

            })
          } else {
            e.target.parentNode.style.color = '#FEBB6F'
            $(e.target.parentNode).addClass('b_line')
            that.doc = e.target.parentNode
            $(e.target.parentNode).next().slideDown(() => {

            })
          }
        } else if (that.doc == e.target || that.doc == e.target.parentNode) {
          //7. 如果当前点击元素与doc相同，说明用户点击了两次相同的元素
          // 那么第二次点击就要收回二级菜单栏，因此删除下划线，改变颜色，重置doc
          if (e.target.className.indexOf('iconfont') == -1) {
            $(e.target).removeClass('b_line')
            $(e.target).css({color: '#fff'})
            that.doc = ''
            $(e.target).next().slideToggle(() => {

            })
          } else {
            $(e.target.parentNode).removeClass('b_line')
            $(e.target.parentNode).css({color: '#fff'})
            that.doc = ''
            $(e.target.parentNode).next().slideToggle(() => {

            })
          }

        } else {
          //8. 如果不是第一次也不是点击相同的，那肯定点的就是不同的
          // 点击不同的就让上一个已经被点开的上滑收回，改变上一个的样式
          // 因为语言栏的箭头是单独的，所以要让语言的小箭头样式更改
          $(that.doc).next().slideUp()
          $(that.doc).css({color: '#fff'})
          // $('.text>.icon-xiangxia').css({color: '#fff', transform: 'rotate(90deg)'})
          $(that.doc).removeClass('b_line')

          //9. 不仅要重置上一个元素的样式，肯定还要改变当前被点击元素的样式
          // 因此添加下划线、颜色等，然后然后下拉出二级菜单栏，并且赋值doc为当前被点击的元素
          //然后调用reExpCls()重置语言栏的样式
          if (e.target.className.indexOf('iconfont') == -1) {
            $(e.target).addClass('b_line')
            e.target.style.color = '#FEBB6F'
            that.doc = e.target
            $(e.target).next().slideToggle(() => {

            })
            // that.reExpCls()
          } else {
            $(e.target.parentNode).addClass('b_line')
            e.target.parentNode.style.color = '#FEBB6F'
            that.doc = e.target.parentNode
            $(e.target.parentNode).next().slideToggle(() => {

            })
            // that.reExpCls()
          }

        }
      } else {
        //3.如果当前被点击元素的父元素不是含有二级菜单栏的li.cur，
        // 那么就改变颜色并且关闭菜单栏，然后调用that.reExpCls()方法重置掉语言扩展栏样式
        //因为router-link:tag='a'标签中包含一个<i>会触发父元素事件，所以要排除<i>触发父元素事件的可能性
        $(e.target).css({color: '#FEBB6F'})
        that.menu_show = !that.menu_show
        // that.reExpCls()
      }
    },

    //封装方法，为了看着方便
    //此方法用于切换'语言'的二级栏按钮状态
    languageToggle(e) {
      //判断当前点击元素是否是小箭头
      let iconCls = e.target.className.indexOf('iconfont')
      //1.判断当前元素的两层父元素的类名是否为.r_language
      //2.也就是判断当前点击元素是否为<router-link>中文</router-link>
      if (e.target.parentNode.parentNode.className == 'r_language' || e.target.parentNode.parentNode.parentNode.className == 'r_language') {
        //3.如果点击的是'语言选择'按钮，则判断该按钮是否有language_exp类名
        if (e.target.className.indexOf('language_exp') != -1 || e.target.parentNode.className.indexOf('language_exp') != -1) {
          //4.如果有此类名，且点击的不是小箭头，则调用indexOf('language_exp')获取该类名在className中的索引
          if (iconCls == -1) {
            let endExp = e.target.className.indexOf('language_exp')
            //5.删除类名：调用subString()删除language_exp字符串
            e.target.className = e.target.className.toString().substring(0, endExp)
            //收回语言栏
            $('.r_language .sub-nav').slideUp()
            //6.旋转icon,更改icon图标
            $('.text>.icon-xiangxia').css({transform: 'rotate(90deg)', color: '#fff'})
          } else {
            //4-1.否则点击的就是小箭头，则调用indexOf('language_exp')获取该类名在className中的索引
            let endExp = e.target.parentNode.className.indexOf('language_exp')
            //5-1.删除类名：调用subString()删除language_exp字符串
            e.target.parentNode.className = e.target.parentNode.className.toString().substring(0, endExp)
            //收回语言栏
            $('.r_language .sub-nav').slideUp()
            //6-1.旋转icon,更改icon图标
            $('.text>.icon-xiangxia').css({transform: 'rotate(90deg)', color: '#fff'})
          }

        } else {
          //7.如果该'语言选择'按钮无此类名，则说明处于为展开状态
          //8.因此添加类名、展开语言栏、旋转icon、更改icon颜色
          if (iconCls == -1) {
            //添加类名
            e.target.className += ' language_exp'
            //展开语言栏
            $('.r_language .sub-nav').slideDown()
            //旋转icon
            $('.text>.icon-xiangxia').css({transform: 'rotate(0deg)', color: '#FEBB6F'})
          } else {
            //添加类名
            e.target.parentNode.className += ' language_exp'
            //展开语言栏
            $('.r_language .sub-nav').slideDown()
            //旋转icon
            $('.text>.icon-xiangxia').css({transform: 'rotate(0deg)', color: '#FEBB6F'})
          }

        }
      }

      // 该判断用于切换语言
      // 1.判断当前点击的元素e.target（选择的语种）的两层父节点，是不是ul.sub-nav
      // 2.如果是说明当前点击的确实是语种，调用re_set_lang，传入当前语种的文本以及this.$el
      // 3.选择完语种后调用reExpCls()重置语言栏样式
      if (document.querySelector('.r_language .cur .sub-nav') == e.target.parentNode.parentNode) {
        this.reExpCls()
        let lange = e.target.innerText
        let doc = this.$el
        this.$store.commit("re_set_lang", {lange, doc})
      }
    },
    //reExpCls()用于重置语言选择中的按钮样式，re意为重置，Exp意为扩展，Cls意为class
    reExpCls() {
      try {
        let expCls = document.querySelector('.language_exp')
        // 1.判断元素是否含有.language_exp类名
        if (expCls.className.indexOf('language_exp') != -1) {
          // 2.调用indexOf()获取该类名在className中的索引
          let endExp = expCls.className.indexOf('language_exp')
          // 3.调用subString()删除language_exp字符串
          expCls.className = expCls.className.toString().substring(0, endExp)
          // 4.重置小icon的样式
          $('.text>.icon-xiangxia').css({transform: 'rotate(90deg)', color: '#FFF'})
          //收回语言栏
          $('.r_language .sub-nav').slideUp()
        }
      } catch (e) {
      }
    },
    showProList(e) {
      // 展开/收回产品详情二级栏
      $('.pro_s_mod').slideToggle()
      // 给小箭头添加类名，通过css改变箭头指向
      $('.pro_f_mod .nav_title').children('span').toggleClass('active-icon')
      // 让当前被点击的产品处于高亮状态
      $('.pro_s_mod .list_info').each((index, val) => {
        // if(val.getAttribute('style').toString().indexOf('display: none;') == null){
        if (val.getAttribute('style') == null || val.getAttribute('style') == '') {
          $('.pro_s_mod .list_guide')[0].children[index].children[0].style.color = '#FEBB6F'
          $('.pro_s_mod .list_guide')[0].children[index].children[1].style.color = '#FEBB6F'
        }
      })
    },
    showProCard(e) {

      $('.pro_s_mod .list_guide li').each((idx, val) => {
        val.children[0].style.color = '#000'
        val.children[1].style.color = '#000'
      })
      // 判断当前被触摸点击元素是否为.guide_item，不是的话就只能是他的子元素触发了
      // 这么做完全是因为我阻止不了子元素的事件冒泡
      if ($(e.target)[0].tagName != 'LI') {
        this.show_pro_card = $(e.target).parent().attr('data-index')
        $(e.target).parent().children()[0].style.color = '#FEBB6F'
        $(e.target).parent().children()[1].style.color = '#FEBB6F'
      } else {
        this.show_pro_card = $(e.target).attr('data-index')
        $(e.target).children()[0].style.color = '#FEBB6F'
        $(e.target).children()[1].style.color = '#FEBB6F'
      }
    },
  },
}
</script>
<style scoped>

/*产品详情导航*/
.m-product {
  position: fixed;
  top: 70PX;
  width: 100%;
  height: 48PX;
  box-sizing: border-box;
  background-color: #fff;
  z-index: 995;
}

.right_menu {
  display: flex;
  align-items: center;
}

.language_change.content {
  position: absolute;
  right: 55PX;
  width: auto;
  height: 70PX;
  background: none;
  z-index: 998;
  box-sizing: border-box;
  padding-top: 0;
}

.language_change.content .m-language {
  height: 100%;
}

.language_change.content .m-language .l-nav {
  padding: 0;
}

.language_change.content .r_language .language_exp {
  color: #FEBB6F;
}

.language_change .r_language .cur .sub-nav li a {
  width: auto;
}

.language_change.content .m-language .l-nav a {
  /*width: calc(10PX + 1rem);*/
  transform: translateZ(0);
}


.pro_f_mod, .pro_s_mod {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 15PX;
  box-sizing: border-box;
  box-shadow: 0PX 1PX 3PX #d5d5d5;
}

.pro_f_mod {
  border-bottom: 1PX solid #f7f7f7;
}

.nav_title {
  height: 48PX;
  width: 140PX;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav_title a,
.nav_title span {
  font-size: 20PX;
  color: black;
}

.nav_title span {
  transition: .3s all;
}

.nav_title span.active-icon {
  transform: rotate(90deg);
}

.pro_s_mod {
  background-color: #fff;
  display: flex;
  height: auto;
  padding: 15PX 15PX;
  box-sizing: border-box;
}

.list_guide {
  width: 120PX;
  min-width: 120PX;
}

.guide_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50PX;
  border-bottom: 1PX solid #D5D5D5;
}

.guide_item:last-child {
  border-bottom: none;
}

.list_guide a, .list_guide span {
  font-size: 14PX;
  color: black;
}

.list_info {
  text-align: center;
  width: calc(100vw - 135PX);
  min-width: 170PX;
  position: relative;
}

.pro_card {
  text-align: center;
  position: relative;
  width: 200PX;
}

.pro_card li {
  text-align: center;
}

.pro_card li a {
  display: block;
}

.pro_card img {
  width: 170PX;
  object-fit: cover;
}

.pro_card .pro_name {
}

.pro_name {
  font-size: 14PX;
  color: black;
}

.list_info .guide-swiper-pagination {
  position: absolute;
  width: auto;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
}

.swiper-container {
  padding-bottom: 30PX;
  height: auto;
}

.list_info >>> .swiper-pagination-bullet {
  /*padding-top: 0.15625rem;*/
  width: .208333rem;
  height: .208333rem;
  background: url(../assets/img/PC/Commen/Unactive.png) no-repeat center;
  background-size: cover;
}

.list_info >>> .swiper-pagination-bullet-active {
  background: url(../assets/img/PC/Commen/active.png) no-repeat center;
  background-size: cover;
}

header {
  height: 70PX;
}

header .header-ph {
  display: flex;
  width: 100%;
  height: 70PX;
  position: fixed;
  background-color: black;
  z-index: 999;
  box-sizing: border-box;
  padding: 0 25PX;
  justify-content: space-between;
  align-items: center;
}

header .logo {
  background-color: black;
  z-index: 10;
  cursor: pointer;
}

header .logo li {
  display: block;
  font-size: 0;

}

header .logo li img {
  height: 35PX;
}

header .menu-start {
  width: 30PX;
  height: 21PX;
  cursor: pointer;
  position: relative;
}

header .menu-start div {
  transform: scale(1, 1);
  opacity: 1;
  transition: .5s all;
}

header .menu-start.ac-menu div {
  transform: scale(0, 0);
  opacity: 0;
}

header .menu-start .icon-menu p {
  width: 30PX;
  height: 2PX;
  background-color: white;
  border-radius: 1PX;
  margin-bottom: 6PX;
}

header .menu-start .icon-ic_close {
  font-size: 30PX;
  color: #fff;
  position: absolute;
  top: -8PX;
  transform: scale(0, 0);
  opacity: 0;
  transition: .5s all;
}

header .menu-start.ac-menu .icon-ic_close {
  opacity: 1;
  transform: scale(1, 1);
}

.content {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 998;
  box-sizing: border-box;
  padding-top: 70PX;
}

.content .m-menu {
  width: 100%;
  /*height: 88%;*/
  height: 100%;
  overflow: hidden;
  padding: 0 26PX;
  box-sizing: border-box;
}

.content .m-menu .m-nav {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-top: 1PX solid rgba(255, 255, 255, .5);
  /*border-bottom: 1PX solid rgba(255, 255, 255, .5);*/
  box-sizing: border-box;
}

.content .m-menu .m-nav > li {
  position: relative;
  left: 50%;
  width: fit-content;
  transform: translate(-50%);
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  cursor: pointer;
}


.content .m-menu .m-nav .cur .sub-nav {
  margin-top: 5PX;
  z-index: 99;
}

.content .m-menu .m-nav .cur .sub-nav li a {
  display: inline-block;
  color: #fff;
  font-size: 16PX;
  white-space: nowrap;
  line-height: 32PX;
}

.content .m-menu .m-nav > .cur > .text span {
  display: block;
  width: 0%;
  height: 1PX;
  border-bottom: 1PX solid #fff;
  position: absolute;
  left: 50%;
  box-sizing: border-box;
  padding-top: 5PX;
  transition: .5s all;
  transform: translate(-50%);
}

.content .m-menu .m-nav > .cur > .text.b_line span {
  border-bottom: 1PX solid #FEBB6F;
  width: 30%;
}

.content .m-menu .m-nav li .text {
  display: inline-block;
  width: fit-content;
  height: fit-content;
  font-size: 28PX;
  color: white;
  background-color: black;
  transition: .5s color;
}

.content .m-language {
  width: 100%;
  height: 12%;
  text-align: center;
}

.content .m-language .l-nav {
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 0 26PX;
  align-items: center;
}

.content .m-language .l-nav a {
  font-size: 16PX;
  color: #fff;
  display: inline-block;
  width: 85PX;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.content .m-language .l-nav .l_login,
.content .m-language .l-nav .r_language {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-sizing: border-box;
}

.content .m-language .l-nav .l_login li,
.content .m-language .l-nav .r_language li {
  display: flex;
  flex-direction: column;
}


.text > .icon-xiangxia {
  display: inline-block;
  font-size: 14PX;
  transform: rotate(90deg);
  transition: .5s all;
}

.split_line {
  display: block;
  height: 27PX;
  border-left: 1PX solid #fff;
  /*隐藏了登录按钮，把这线也给隐藏了*/
  display: none;
}

.r_language .cur {
  position: relative;
  text-align: center;
}

.r_language .cur .sub-nav {
  display: flex;
  justify-content: space-evenly;
}

.r_language .cur .sub-nav li {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.r_language .cur .sub-nav li a {
  width: 40PX;
}

.pro_enter-enter,
.pro_enter-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

.pro_enter-enter-active,
.pro_enter-leave-active {
  opacity: 1;
  transition: all 1s ease;
}


.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

.v-enter-active,
.v-leave-active {
  opacity: 1;
  transition: all 0.5s ease;
}


</style>