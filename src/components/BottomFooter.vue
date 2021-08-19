<template>
  <footer>
    <div class="foot-father">

      <div class="footer-top">
        <div class="footer-top-logo">
<!--          <img v-lazy="require('../assets/img/PC/Commen/footer_logo.png')"/>-->
          <img :src="this.$store.state.footerLogoSrc" alt="">
        </div>

        <div class="foot-top-message">
          <div class="message">
            <ul v-for="(item, index1) in lang.indexfooter1" :key="index1">
              <router-link :to=item.url>
                {{ item.title }}
              </router-link>
              <li v-for="(sublist, index2) of item.list" :key="index2">
                <router-link :to=sublist.url>
                  {{ sublist.name }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="line"></div>
      <div class="under-foot">
        <div class="foot-bottom-message">
          <ul v-for="(item, index1) in lang.indexfooter2" :key="index1">
            <p>
              {{ item.title }}
            </p>
            <li v-for="(sublist, index2) of item.list" :key="index2">
              <p>
                {{ sublist }}
              </p>
            </li>
          </ul>
        </div>
        <div class="icon">
          <a :class="item.WxClass"
             :href="item.Href"
             v-for="(item, index3) in lang.icon"
             :key="index3"
             target="_blank"
             v-finger:tap="showQR"
             @mouseover="addWxClass($event)"
             @mouseleave="removeWxClass($event)"
          >
            <img v-lazy="item.ImgSrc" :key="item.ImgSrc">
          </a>
        </div>
      </div>
      <transition name="fade">
        <div class="back-top" v-if=this.show @click="backTop($event)">
          <i class="iconfont icon-xiangshang"><span></span></i>
        </div>
      </transition>
    </div>
  </footer>
</template>

<script>
import $ from 'jquery'

export default {
  props: {
    lang: {},
  },
  data() {
    return {
      indexfooter: {},
      show: true,
    };
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true)
    setTimeout(() => {
      $('.wx-class').attr('target', '')
    }, 2000)

  },
  methods: {
    handleScroll() {
      let backTop = document.querySelector('.back-top')
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      if (scrollTop >= window.screen.height) {
        this.show = true
      } else if (scrollTop < window.screen.height) {
        this.show = false
      }
    },
    backTop(e) {
      let h = document.documentElement.scrollTop;
      let subH = parseInt(h / 120);
      //在返回顶部时监听鼠标滚动事件停止返回顶部操作
      window.addEventListener('mousewheel', () => {
        clearInterval(timer);
      })
      //返回顶部
      let timer = setInterval(function () {
        let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        //ispeed:返回顶部的速度，数值越大越慢
        let ispeed = Math.floor(-scrolltop / 60);
        if (scrolltop == 0) {
          clearInterval(timer);
        }
        document.documentElement.scrollTop = document.body.scrollTop = scrolltop + ispeed;
      }, 1);
    },
    showQR(e) {
      try {
        if ($('.wx-class')[0] == e.target || $('.wx-class')[0].children[0] == e.target) {
          $('.wx-class').removeClass('showQRCode')
          if ($('.wx-class').attr('class').indexOf('showQRCodePH') != -1) {
            $('.wx-class').removeClass('showQRCodePH')
          } else {
            $('.wx-class').addClass('showQRCodePH')
          }
        }
      } catch (e) {

      }
    },
    addWxClass(e) {
      try {
        if ($('.wx-class')[0] == e.target || $('.wx-class')[0].children[0] == e.target) {
          $('.wx-class').addClass('showQRCode')
        }
      } catch (e) {

      }
    },
    removeWxClass(e) {
      try {
        if ($('.wx-class')[0] == e.target || $('.wx-class')[0].children[0] == e.target) {
          $('.wx-class').removeClass('showQRCode')
        }
      } catch (e) {

      }
    }
  },
};
</script>


<style scoped>

footer {
  background-color: black;
  width: 100%;
  height: auto;
  background-image: url(../assets/img/PC/Commen/footer_icon.png);
  background-position: center right;
  background-repeat: no-repeat;
  background-size: 2.489583rem, 2.625rem;
  overflow: hidden;
}

footer .foot-father {
  position: relative;
  /*width: 8.541667rem;*/
  max-width: 1440PX;
  height: 100%;
  margin: 0 auto;
  /*box-sizing: border-box;*/
  padding: 0.5rem;
}

.footer-top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 0 .5rem;
  box-sizing: border-box;
}

footer .footer-top-logo {
  display: inline-block;
  float: left;
  margin: 0px;
  width: 0.973958rem;
  height: 0.395833rem;
}

footer .footer-top-logo img {
  /*width: 0.973958rem;*/
  /*height: 0.395833rem;*/
  /*width: 140PX;*/
  width: auto;
  height: 56.9PX;
}

footer .foot-top-message {
  position: relative;
  display: inline-block;
  float: right;
}

footer .foot-top-message ul {
  float: left;
  font-family: Montserrat;
  width: 0.7rem;
  min-width: 60PX;
  /*font-size: 0.083333rem;*/
  font-size: 14PX;
  /*line-height: 0.140625rem;*/
  color: #ffffff;
  text-align: center;
}

footer .foot-top-message li {
  list-style: none;
  font-family: Montserrat;
  font-size: 12PX;
  /*font-size: 0.072917rem;*/
  /*line-height: 0.109375rem;*/
  line-height: normal;
  color: #ffffff;
  opacity: 0.8;
  padding-top: 0.125rem;
}

footer .foot-top-message a {
  color: #fff;
}

footer .foot-top-message a:hover {
  color: #FEBB6F;
}

footer .line {
  background: white;
  opacity: 0.8;
  margin: .208333rem 0;
  height: 0.005208rem;
  position: relative;
}

.under-foot {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 0 .5rem;
  box-sizing: border-box;
}

footer .foot-bottom-message {
  display: block;
}

footer .foot-bottom-message ul {
  float: left;
  font-family: Montserrat;
  /*font-size: 0.072917rem;*/
  font-size: 14PX;
  margin-right: 0.338542rem;
  color: #ffffff;
}

footer .foot-bottom-message ul > p {
  opacity: 1;
}

footer .foot-bottom-message li {
  list-style: none;
  width: auto;
  /*font-size: 0.052083rem;*/
  font-size: 12PX;
  line-height: normal;
  letter-spacing: .004rem;
  color: #ffffff;
  padding-top: 0.072083rem;
}

footer .foot-bottom-message li > p {
  opacity: .7;
}

footer .icon {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

footer .icon a {
  display: block;
  margin-right: 5PX;
}

footer .icon a:last-child{
  margin: 0;
}

footer .icon img:nth-child(1) {
  /*width: .208333rem;*/
  /*height: .208333rem;*/
  width: 25PX;
  height: auto;
}

/*footer .icon img:nth-child(2) {*/
/*  width: 0.15625rem;*/
/*  height: 0.15625rem;*/
/*}*/

/*footer .icon img:nth-child(3) {*/
/*  width: 0.15625rem;*/
/*  height: 0.109375rem;*/
/*}*/

.wx-class {
  position: relative;
}

/*.showQRCode.wx-class:before {*/
/*  content: "扫码添加我们！";*/
/*  text-indent: 8PX;*/
/*  line-height: 256PX;*/
/*  text-align: center;*/
/*  width: 125PX;*/
/*  height: 125PX;*/
/*  display: block;*/
/*  position: absolute;*/
/*  bottom: 0;*/
/*  left: 38PX;*/
/*  transform: translateY(50%);*/
/*  background: url('../assets/img/PC/Commen/wx_id.png') no-repeat;*/
/*  background-size: 100% 90%;*/
/*  background-color: white;*/
/*  border-radius: 5PX;*/
/*  padding-bottom: 14PX;*/
/*  font-family: Montserrat;*/
/*  font-size: 12PX;*/
/*  color: black;*/
/*  white-space: nowrap;*/
/*}*/

/*.showQRCode.wx-class::after {*/
/*  content: '';*/
/*  display: block;*/
/*  width: 0.07246rem;*/
/*  height: 0.07246rem;*/
/*  background-color: white;*/
/*  position: absolute;*/
/*  top: 0.03623rem;*/
/*  left: .24875rem;*/
/*  transform: rotate(45deg);*/
/*}*/
.showQRCode.wx-class:before,
.showQRCodePH.wx-class:before {
  content: "扫码添加我们！";
  text-indent: 8PX;
  line-height: 184PX;
  text-align: center;
  width: 86PX;
  height: 86PX;
  display: block;
  position: absolute;
  top: 50%;
  bottom: 0;
  left: 39PX;
  transform: translateY(-50%);
  background: url('../assets/img/PC/Commen/wx_id.png') no-repeat;
  background-size: 100% 90%;
  background-color: white;
  border-radius: 5PX;
  padding-bottom: 14PX;
  font-family: Montserrat;
  font-size: 12PX;
  color: black;
  white-space: nowrap;
  z-index: 5;
}

.showQRCode.wx-class::after,
.showQRCodePH.wx-class::after {
  content: '';
  display: block;
  width: 15PX;
  height: 15PX;
  background-color: white;
  position: absolute;
  top: 10PX;
  left: 32PX;
  transform: rotate(45deg);
  z-index: 1;
}

footer .foot-father .back-top {
  position: fixed;
  bottom: 20%;
  right: 0.02415rem;
  z-index: 9999;
  background: #f7f9fa;
  border: .005rem solid #e5e9ef;
  border-radius: .015625rem;
  width: .234375rem;
  height: .234375rem;
  cursor: pointer;
  color: #999;
  text-align: center;
  line-height: .234375rem;
  user-select: none;
}

/*返回顶部按钮的动画*/
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

footer .foot-father .back-top:hover {
  color: #fff;
  background-color: #FEBB6F;
  border-color: #FEBB6F;
}

@media (max-width: 1024px) {
  footer .footer-top-logo img {
    /*width: 100PX;*/
    width: auto;
    height: 40PX;
  }

  .showQRCode.wx-class:before,
  .showQRCodePH.wx-class:before {
    line-height: 143PX;
    width: 72PX;
    height: 72PX;
    left: 28PX;
    content: '';
    padding: 0;
    background-size: cover;
    top: 50%;
    transform: translateY(-50%);
  }
}

@media (max-width: 768px) {
  .showQRCode.wx-class:before,
  .showQRCodePH.wx-class:before {
    content: "";
    line-height: 163PX;
    width: 75PX;
    height: 75PX;
    left: 28PX;
    background-size: contain;
    padding: 0;
  }
  footer .icon{
    margin-right: 20PX;
  }
}

@media (max-width: 576px) {
  .footer-top {
    display: none;
  }

  .foot-father .line {
    display: none;
  }

  footer {
    background-color: black;
    height: 10rem;
    min-height: 425PX;
    background-image: url(../assets/img/PC/Commen/footer_icon.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 90%;
  }

  footer .foot-father {
    height: 100%;
    box-sizing: border-box;
    padding: 0.5rem;
  }

  footer .foot-bottom-message {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    text-align: center;
  }
  footer .icon{
    margin: 0;
  }
  .under-foot {
    display: flex;
    position: relative;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    height: 100%;
    box-sizing: border-box;
  }

  footer .foot-bottom-message ul {
    float: none;
    font-family: Montserrat;
    /*font-size: 0.072917rem;*/
    font-size: 14PX;
    margin-right: 0;
    color: #ffffff;
    margin-bottom: .625rem;
  }

  footer .foot-bottom-message ul > p {
    margin-bottom: .21875rem;
  }

  footer .foot-bottom-message li {
    list-style: none;
    width: auto;
    height: auto;
    font-size: 12PX;
    line-height: normal;
    letter-spacing: .004rem;
    color: #ffffff;
    padding-top: 0.072083rem;
  }

  footer .icon img:nth-child(1) {
    /*width: .729167rem;*/
    /*height: .729167rem;*/
    width: 32PX;
    height: auto;
  }

  footer .icon {
    width: 100%;
  }

  .showQRCode.wx-class:before,
  .showQRCodePH.wx-class:before {
    content: "扫码添加我们！";
    text-indent: 8PX;
    line-height: 206PX;
    text-align: center;
    width: 100PX;
    height: 100PX;
    display: block;
    position: absolute;
    top: 50%;
    bottom: 0;
    left: 52PX;
    transform: translateY(-50%);
    background: url('../assets/img/PC/Commen/wx_id.png') no-repeat;
    background-size: contain;
    background-color: white;
    border-radius: 5PX;
    padding-bottom: 14PX;
    font-family: Montserrat;
    font-size: 12PX;
    color: black;
    white-space: nowrap;
    z-index: 5;
  }
  .showQRCode.wx-class:before,
  .showQRCodePH.wx-class::after {
    content: '';
    display: block;
    width: 15PX;
    height: 15PX;
    background-color: white;
    position: absolute;
    top: 10PX;
    left: 45PX;
    transform: rotate(45deg);
    z-index: 1;
  }
}

</style>
