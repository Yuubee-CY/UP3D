<template>
  <div id="P4">
    <div class="banner"><img src='../../assets/img/PC/Product/product_info/P4/banner.png'>
      <h1>P4</h1>
      <p>4 axis smart dental milling machiine</p>
    </div>

    <div class="body2"><img src='../../assets/img/PC/Product/product_info/Commen_scanner/body_pic16.png'>
      <h1>Auto calibration</h1>
      <p>The most convenient and smart control system among
        the dental milling machines</p>
    </div>

    <div class="body3"><img src='../../assets/img/PC/Product/product_info/Commen_scanner/body_pic17.png'>
      <h1>Cast framework in one piece</h1>
      <p>Portable, precise and great durability</p>
    </div>

    <div class="body4">
      <div>
        <h1>UPCAM software</h1>
        <p>Compatible with up3d smart milling machine P4, P5.</p>
      </div>

      <div>
        <h1>UPCNC software</h1>
        <p>One interface for multi-mills, easy to operate and one-cllick milling.</p>
      </div>
    </div>

    <div class="body5"><h1>Wide application</h1>
      <p>Support muliple restoration cases</p></div>


    <!-- <div class="body6"></div> -->
    <div class="body7">
      <p>PRODUCT PARAMETERS</p>
      <p class="left">
        Model<br>
        Dimension<br>
        Weight<br>
        Input voltage<br>
        Max power<br>
        Spindle power <br>
        Axis <br>
        Milling range<br>
        Milling mode<br>
        Max rotate speed<br>
        Max feed rate<br>
        Tool capacity<br>
        Tools changing<br>
        Spindle cooling<br>
        Milling materials<br>
        Milling time<br>
        <br>
        Tools
      </p>

      <p class="right" v-html="p_right"></p>
    </div>

    <div class="body8">
      <button>Sales</button>
      <button>product support</button>
    </div>

  </div>

</template>

<script>
export default {
  // name: 'carrousel',
  data() {
    return {
      p_right: 'P4<br>\
        620×430×560（mm）<br>\
        72Kg<br>\
        AC 100~235V、50~60Hz<br>\
        0.8KW<br>\
        0.52KW（max）<br>\
        4 axis (tilt&lt15 degree)<br>\
        X/Y/Z：165/135/70mm  A：360° <br>\
        Dry milling<br>\
        40,000~60,000rpm<br>\
        3000mm/min<br>\
        11<br>\
        Automatic (air pressure&gt0.5 MPa)<br>\
        Air cooling<br>\
        Zirconia, wax, PMMA, wood<br>\
        Zirconia(Coping)：12min、wax：4min<br>\
        Zirconia(Crown)：15min、wax：5min<br>\
        2+1+0.6mm,Φ4<br>\
        ',


      langc: {},
      en:
          [
            {text: 'High speed scanner fully upgrade ', pic: 'img/banner/1banner.png', url: '#'},
            {text: 'High speed scanner fully ', pic: 'img/banner/1banner.png', url: '#'},
            {text: 'High speed scanner ', pic: 'img/banner/1banner.png', url: 'http://www.baidu.com'},

          ],
      zh:
          [
            {text: '高速扫描仪', pic: 'img/banner/1banner.png', url: '#'},
            {text: '牛逼扫描仪', pic: 'img/banner/1banner.png', url: 'http://www.baidu.com'},
            {text: '无敌扫描仪', pic: 'img/banner/1banner.png', url: '#'},
          ],
    }
  },
  computed: {
    //   swiper() {
    //   return this.$refs.BolgSwiper.$swiper
    // }
  },
  created() {
    this.langc = this.en;
  },
  mounted() {
  }
}
</script>


<style scoped>

#P4 {
  position: relative;
  font-family: Montserrat;
  width: 10rem;
  overflow: hidden;
}

#P4 h1 {
  font-weight: normal;

}

#P4 .banner {
  position: relative;
  width: 10rem;
  height: 4.885417rem;
  /* margin-bottom: 1.010417rem; */
}

#P4 .banner h1 {
  position: absolute;
  top: 1.979167rem;
  left: 5.276042rem;
  font-size: 0.3125rem;
  line-height: 0.364583rem;
  color: #e48013;
}

#P4 .banner p {
  position: absolute;
  top: 2.395833rem;
  left: 5.276042rem;
  font-size: 0.177083rem;
  line-height: 0.364583rem;
  color: #343434;
}

#P4 .banner img {
  width: 10rem;
  height: 5.510417rem;
  z-index: 0;
}

#P4 .body2 {
  position: relative;
  width: 10rem;
  height: 3.510417rem;
  /* text-align: center; */
  /* border: red solid .005208rem; */
}

#P4 .body2 img {
  display: block;
  margin-left: 5rem;
  width: 5.28125rem;
  height: 3.510417rem;
}

#P4 .body2 h1 {
  position: absolute;
  top: 1.151042rem;
  left: 1.6875rem;
  font-size: 0.25rem;
  color: #343434;
}

#P4 .body2 p {
  position: absolute;
  width: 2.786458rem;
  top: 1.713542rem;
  left: 1.6875rem;
  font-size: 0.104167rem;
  color: #343434;
}


#P4 .body3 {
  position: relative;
  width: 10rem;
  height: 4.333333rem;
  /* text-align: center; */
  /* border: red solid .005208rem; */
}

#P4 .body3 img {
  margin-top: 0.932292rem;
  margin-left: 1.390625rem;
  width: 2.864583rem;
  height: 2.625rem;
}

#P4 .body3 h1 {
  position: absolute;
  top: 1.640625rem;
  left: 5.5rem;
  font-size: 0.25rem;
  color: #343434;
}

#P4 .body3 p {
  position: absolute;
  width: 2.786458rem;
  top: 2.203125rem;
  left: 5.5rem;
  font-size: 0.104167rem;
  color: #343434;
}


#P4 .body4 {
  position: relative;
  width: 10rem;
  height: 4.8rem;
  /* border: rebeccapurple solid .005208rem;; */
  background-image: url(../../assets/img/PC/Product/product_info/Commen_scanner/body_pic18.png);
  background-repeat: no-repeat;
  background-size: 10rem, 4.8rem;
}

#P4 .body4 h1 {
  font-size: 0.25rem;
  color: #343434;
}

#P4 .body4 p {
  font-size: 0.104167rem;
  margin-top: 0.104167rem;
  color: #343434;
}

#P4 .body4 div:nth-child(1) {
  padding-top: 1.6rem;
  margin-left: 6.0rem;
}

#P4 .body4 div:nth-child(2) {
  margin-top: 1.7rem;
  margin-left: 3.234375rem;
}


#P4 .body5 {
  position: relative;
  width: 10rem;
  height: 4.302083rem;
  /* background-color: black; */
  /* border: red solid .005208rem;; */
  background-image: url(../../assets/img/PC/Product/product_info/Commen_scanner/body_pic19.png);
  background-repeat: no-repeat;
  background-size: 10rem, 6.145833rem;
}

#P4 .body5 h1 {
  text-align: center;
  padding-top: 1rem;
  font-size: 0.25rem;
  color: #ffffff;
}

#P4 .body5 p {
  text-align: center;
  margin-top: 0.1875rem;
  font-size: 0.15625rem;
  color: #ffffff;
}

#P4 .body6 {
  position: relative;
  width: 10rem;
  height: 6.604167rem;
  /* background-color: black; */
  /* border: red solid .005208rem;; */
  background-image: url(../../assets/img/PC/Product/product_info/Commen_scanner/body_pic22.png);
  background-repeat: no-repeat;
  background-size: 7.885417rem, 4.4375rem;
  background-position: center;
}

#P4 .body7 {
  position: relative;
  width: 10rem;
  height: 4.828125rem;
  /* background-color: black; */
  /* border: red solid .005208rem;; */
  background-color: #f8f8f8;
  background-image: url(../../assets/img/PC/Product/product_info/Commen_scanner/body_pic23.png);
  background-repeat: no-repeat;
  background-size: 4.604167rem, 4.5625rem;
  background-position: bottom left;
}

#P4 .body7 p {
  display: block;
  float: left;
  color: #343434;
}

#P4 .body7 p:nth-child(1) {
  margin-top: auto;
  width: 5.208333rem;
  text-align: center;
  line-height: 4.828125rem;
  font-size: 0.166667rem;
}

#P4 .body7 .left {
  margin-top: 0.364583rem;
  text-align: right;
  font-size: 0.104167rem;
  line-height: 0.234375rem;
  /* border: red solid .005208rem;; */
}

#P4 .body7 .right {
  text-align: left;
  margin-top: 0.364583rem;
  margin-left: 0.364583rem;
  font-size: 0.104167rem;
  line-height: 0.234375rem;
  /* border: red solid .005208rem;; */
  color: #e48013;
}


#P4 .body8 {
  margin: auto;
  margin-top: 1.140625rem;
  margin-bottom: .770833rem;
  width: 7.291667rem;
  text-align: center;
}

#P4 .body8 button {
  font-size: 0.104167rem;
  line-height: 0.125rem;
  cursor: pointer;
  color: #ffffff;
}

#P4 .body8 button:nth-child(1) {
  width: 1.078125rem;
  height: 0.3125rem;
  background-color: #ffb15b;
}

#P4 .body8 button:nth-last-child(1) {
  width: 1.427083rem;
  height: 0.3125rem;
  margin-left: 1.041667rem;
  background-color: #1e1e1e;
}
</style>