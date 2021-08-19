<template>
  <header>
    <div class="nav-header">
      <div class="bg_color"></div>
      <div class="nav_list">
        <div class="logo">
          <router-link tag="li" to="/">
            <img :src="this.$store.state.logoSrc" alt="">
          </router-link>
          <!--          <a :href=logoUrl title="UP3D-云甲科技有限公司">UP3D-云甲科技有限公司</a>-->
        </div>
        <!--      <div class="guide_list_all">-->
        <div class="guide_list">
          <div class="item"
               v-for="(item,index1) in lang.guide_list"
               :key="index1"
               @mouseover="TopGuideChose(index1)"
               @mouseleave="OutChosse(index1)">
            <div>
              <router-link
                  :class="{'active':TopGuide_Chose==index1,'unactive_topguide':TopGuide_Chose!=index1}"
                  :to="item.url">{{ item.title }}
              </router-link>
              <transition-group>
                <div class="content" v-show="TopGuide_Chose==index1" :key="3">
                  <!-- <div class="content" > -->
                  <div class="list" v-for='(sublist ,index2) in item.list' :key="index2"
                       @mouseover="SecondeGuideChose(index1,index2)">
                    <!--                <div class="line"></div>-->
                    <router-link
                        :class="{'active':SecondeGuide_Chose==index1*10+index2,'unactive_topguide':SecondeGuide_Chose!=index1*10+index2}"
                        :to="sublist.url"> {{ sublist.name }}
                    </router-link>
                  </div>
                </div>
              </transition-group>
            </div>
          </div>
        </div>
        <!-- 切换语言 -->
        <div class="login_list">
          <div class="item" v-for="(item,index2) in lang.login_list" :key="'index2'+ index2">
            <div>
              <router-link class="text" :to="item.url">{{ item.title }}</router-link>
            </div>
          </div>
          <div class="item" v-for="(item,index1) in lang.about_login" :key="index1" @mouseover="showlang=index1"
               @mouseleave="showlang=-1">
            <div>
              <router-link class="text" :to="item.url">{{ $store.getters.send_lang }}</router-link>
              <transition-group>
                <div class="content" v-show="showlang==index1" :key="2">
                  <div class="list" v-for='(sublist ,index2) in item.list' :key="index2">
                    <div class="line"></div>
                    <div class="text" :to="sublist.url" @click="changeLange(sublist.name,$el,sublist.url)">
                      {{ sublist.name }}
                    </div>
                  </div>
                </div>
              </transition-group>
            </div>
          </div>
        </div>
        <!--      </div>-->
      </div>

      <!-- 产品详情导航 -->
      <transition-group>
        <div class="product-menu" v-show="TopGuide_Chose==2" @mouseleave="OutChosse()" :key="1">
          <div class="list_guide">
            <div class="plist" v-for='(item ,index1) in lang.seconde_guide' :key="index1"
                 @mouseover="chose_product_list(index1)" @click.stop="jump_mainProduct(item.id)">
              <router-link :to="item.url" class="title"
                           :class="{'active':show_product_list==index1,'unactive':show_product_list!=index1}">
                {{ item.name }}
              </router-link>
              <span class="el-icon-arrow-right"
                    :class="{'active':show_product_list==index1,'unactive':show_product_list!=index1}"></span>
            </div>
          </div>
          <div class="list_info" v-for='(item ,index2) in lang.seconde_guide' :key="index2">
            <transition-group name="slowshow" mode="out-in">
              <div class="card" v-show='show_product_list==index2' v-for='(sublist ,index3) in item.list'
                   :key="sublist.name" @mouseover="chose_product_pic(index3)">
                <router-link :to="sublist.url"><img v-lazy="sublist.imgurl" :key="sublist.imgurl"></router-link>
                <p class="product_name" :class="{'active':chose_pic==index3,'unactive':chose_pic!=index3}">
                  {{ sublist.name }}</p>
              </div>
            </transition-group>
          </div>
        </div>
      </transition-group>

      <div class="personal-page" v-show="login==1">
        <router-link to="/Member" class="text">{{ lang.Lang_self }}</router-link>
      </div>
    </div>
  </header>
</template>


<script>
export default {
  props: {
    lang: {},
  },

  data() {
    return {
      logoUrl: window.location.origin,
      logoImg: {},
      login: 0,
      TopGuide_Chose: -1,
      SecondeGuide_Chose: 0,
      show_product_list: 0,
      chose_pic: 0,
      showlang: -1,
    };
  },

  created() {
    sessionStorage.toId = 0
  },
  computed: {},

  watch: {
    '$route': function (router) {
      let objGuide = this.lang.guide_list
      for (let key in objGuide) {
        document.querySelector('.guide_list').getElementsByClassName('item')[key].querySelector('a').style.color = 'white'
        if (this.$route.path == objGuide[key].url) {
          document.querySelector('.guide_list').getElementsByClassName('item')[key].querySelector('a').style.color = 'orange'
        }
        for (let key2 in objGuide[key].list) {
          if (this.$route.path == objGuide[key].list[key2].url) {
            document.querySelector('.guide_list').getElementsByClassName('item')[key].querySelector('a').style.color = 'orange'
          }
        }
      }
      for (let key in this.lang.seconde_guide) {
        for (let key2 in this.lang.seconde_guide[key].list) {
          if (this.$route.path == this.lang.seconde_guide[key].list[key2].url) {
            document.querySelector('.guide_list').getElementsByClassName('item')[2].querySelector('a').style.color = 'orange'
          }
        }
      }
    }
  },

  mounted() {
    setTimeout(() => {

    }, 1)
    this.timerwatch = setInterval(this.watch_login, 500);
  },


  methods: {
    // 监听登录状态
    watch_login() {
      if (!window.sessionStorage.getItem('token')) {
        this.login = 0
      } else this.login = 1
    },

    //语言切换
    changeLange(lange, doc, langeUrl) {
      // console.log('当前被点击的id=' + lange);
      this.$store.commit("re_set_lang", {lange, doc})
      // this.$store.state.lang=this.Lang[id].text ;
      if (langeUrl) {
        window.location.href = langeUrl;
      }
    },
    jump_mainProduct(id) {
      if (this.$route.path != '/MainProduct') {
        this.$router.push({path: '/MainProduct'});
        // console.log('跳转')
      }
      this.$store.commit("set_product_posistion", id)
    },
    chose_product_pic(index1) {
      this.chose_pic = index1;
    },
    chose_product_list(index1) {
      this.show_product_list = index1;
      this.chose_pic = -1
    },
    TopGuideChose(index1) {
      this.TopGuide_Chose = index1;
    },
    SecondeGuideChose(index1, index2) {
      this.SecondeGuide_Chose = index1 * 10 + index2;
    },
    OutChosse(index1) {
      if (index1 != 2) {
        this.SecondeGuide_Chose = -1
        this.TopGuide_Chose = -1;
        this.chose_pic = -1
      }
    }


  }
}
</script>
<style scoped>
/* Logo 样式 */
header {
  height: 86PX;
}

header .nav-header {
  position: fixed;
  letter-spacing: 0px;
  color: #ffffff;
  top: 0px;
  width: 10rem;
  height: 86PX;
  background-color: black;
  z-index: 999;
  box-sizing: border-box;
  box-shadow: 0 1PX 10PX rgba(0, 0, 0, .2);
}

header .nav_list {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 0 2.6%;
  height: 100%;
  background-color: white;
  z-index: 999;
  justify-content: space-between;
}

header .nav_list .logo {
  height: 86PX;
  background-color: black;
  z-index: 10;
  display: flex;
  align-items: center;
}

header .nav_list .guide_list_all {
  width: 85%;
  display: flex;
}

header .logo li {
  display: block;
  font-size: 0;
  cursor: pointer;
}

header .logo li img {
  height: 43PX;
}

header .bg_color {
  width: 10rem;
  height: 0.5rem;
  height: 86PX;
  position: absolute;
  background-color: black;
  z-index: 1;
}

/* 导航栏样式 */
header .guide_list {
  position: relative;
  display: flex;
  /*width: max-content;*/
  background-color: black;
  z-index: 1;
}

/* 导航栏标题 */
header .guide_list .item {
  /* float: left; */
  pointer-events: all;
  position: relative;
  background-color: black;
  display: inline-block;
  vertical-align: top;
  width: 130PX;
  text-align: center;
  font-size: 16PX;
  padding-top: 35PX;
  box-sizing: border-box;
  height: 86PX;
  margin: 0 8PX;
  /*height: .3rem;*/
  /* overflow: hidden; */
}

/* 导航栏子标题框架 */
header .guide_list .item .content {
  background-color: #1e1e1e;
  position: absolute;
  width: 100%;
  opacity: 0.79;
  top: 86PX;
  z-index: -1;
}

/* 导航栏子标题 */
header .guide_list .item .content .list,
header .login_list .item .content .list {
  font-size: .0625rem;
  height: 50PX;
  position: relative;
}

header .guide_list .item .content .list a,
header .login_list .item .content .list a {
  width: 100%;
  display: block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

header .login_list .item > div {
  border-left: .005rem solid #fff;
}

header .login_list .item:first-child > div:first-child {
  border-left: none;
}

header .guide_list .item .content .list::before,
header .login_list .item .content .list::before {
  content: '';
  width: 80%;
  margin: 0 auto;
  display: block;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  border-top: solid .005208rem #d5d5d5;
}

header .guide_list .item .content .list:first-child::before,
header .login_list .item .content .list:first-child::before {
  border: none;
  padding: 0 0;
  margin: 0 0;
  /*margin-top: .05rem;*/
}

/* 导航画线 */
header .guide_list .item .content .line,
header .login_list .item .content .line {
  width: 80%;
  margin: auto;
  /*border-bottom: solid .005208rem #d5d5d5;*/
}


header .guide_list .item:nth-child(7) {
  /*margin-left: .9375rem;*/
}

header .login_list {
  position: relative;
  margin-right: -2%;
  display: flex;
  width: max-content;
  z-index: 2;
}


header .login_list .item {
  position: relative;
  background-color: black;
  display: inline-block;
  vertical-align: top;
  width: 100PX;
  text-align: center;
  font-size: 16PX;
  padding-top: 35PX;
  box-sizing: border-box;
  height: 86PX;
}

header .login_list .item .content {
  background-color: #1e1e1e;
  position: absolute;
  top: 86PX;
  width: 70PX;
  left: 15%;
  /*transform: translate(-50%);*/
  opacity: 0.79;
  color: white;
  cursor: pointer;
  z-index: -1;
  box-sizing: border-box;
}

header .login_list .text {
  color: white;
}

header .login_list .list .text {
  line-height: 50PX;
}

header .login_list .text:hover {
  color: orange;
}

.product-menu {
  position: absolute;
  width: 10rem;
  background-color: #f7f7f7;
  z-index: 0;
  display: flex;
  box-sizing: border-box;
  padding-bottom: 0.24155rem;
}

.list_guide {
  display: inline-block;
  margin-left: 3.104167rem;
  position: relative;
  vertical-align: top;
  margin-top: .270833rem;
  /* border: red solid .005208rem; */

}

.list_guide .plist {
  display: flex;
  position: relative;
  width: .885417rem;
  height: .260417rem;
  cursor: pointer;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.list_guide .plist .title {
  font-size: .083333rem;
  line-height: .098958rem;
}

.list_guide .plist span {
  font-size: .125rem;
}

.list_info {
  /* position: absolute; */
  display: inline-block;
  width: max-content;
  overflow: hidden;

  margin-top: .270833rem;
}

.list_info span {
  display: flex;
  width: 100%;
}

.list_info .card {
  display: inline-block;
  overflow: hidden;
  margin-left: .390625rem;
}

.list_info .card img {
  width: 0.802083rem;
  /*height: 0.989583rem;*/
  /*width: 10%;*/
  /*height: auto;*/
  transition: all 0.6s;
  -ms-transition: all 0.8s;
  image-rendering: auto;
}

.list_info .card img:hover {
  transform: scale(1.2);
  -ms-transform: scale(1.2);

}

.personal-page {
  position: absolute;
  top: .17rem;
  left: 7.88rem;
  text-align: center;
  min-width: .520833rem;
  width: max-content;
  height: .208333rem;
  background-color: black;
  /* border: red solid .005208rem; */
  z-index: 10;

}


.personal-page .text {
  font-size: .083333rem;
  color: white;
}

.personal-page .text:hover {
  color: orange;
}


.product_name {
  text-align: center;
  color: #1e1e1e;
  font-size: .052083rem;
}

.product_name:hover {
  color: orange;
}

.active {
  color: orange !important;
}

.unactive {
  color: #1e1e1e;
}

.unactive_topguide {
  color: white;
}

header .guide_list .item {
  transition: .3s all;
  -webkit-transition: all .3s;
}

@media (max-width: 1300px) {
  header .guide_list .item {
    width: 90PX;
  }

  header .login_list .item {
    width: 90PX;
  }
}

@media (max-width: 1024px) {
  header .guide_list .item {
    width: 90PX;
  }

  header .login_list .item {
    width: 90PX;
  }
}


.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(-110px);
}

.v-enter-active,
.v-leave-active {
  opacity: 1;
  transition: all 0.6s ease;
}

.slowshow-enter,
.slowshow-leave-to {
  opacity: 0;
}

.slowshow-enter-active {
  transition: all 0.6s ease;
}

.slowshow-leave-active {
  opacity: 0;
}


</style>