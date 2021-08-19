<template>
  <div id="UP360P">
    <div class="banner">
      <img v-lazy="require('../../assets/img/PC/Product/product_info/UP360P/banner.png')">
      <h1>UP360+</h1>
      <p>"The world's first specialized uncut-model scanner"</p>
    </div>
    <div class="body1">
      <img v-lazy="require('../../assets/img/PC/Product/product_info/UP360P/body_pic1.png')" alt="">
      <p>Camera<br>2*2.0（MP）High frame rate</p>
    </div>
    <div class="body2">
      <p class="header">High Speed</p>
      <img v-lazy="require('../../assets/img/PC/Product/product_info/UP360P/body_pic2.png')">
      <div class="infocard">
        <div class="infolist"><p class="title">70''</p>
          <p class="info">Triple tray</p></div>
        <div class="infolist"><p class="title">29''</p>
          <p class="info">12 unti multi-dies scan</p></div>
        <div class="infolist"><p class="title">37''</p>
          <p class="info">All-in-one</p></div>
        <div class="infolist"><p class="title">20''</p>
          <p class="info">Model scaning</p></div>
      </div>
    </div>
    <div class="body3">
      <div class="content">
        <h1>High definition cameras</h1>
        <p>Scan result comparison:2.0mp VS 1.3mp</p>
        <div class="card">
          <img v-lazy="require('../../assets/img/PC/Product/product_info/UP360P/body_pic3.png')">
          <p>UP360+</p>
        </div>
        <div class="card2">
          <img v-lazy="require('../../assets/img/PC/Product/product_info/UP360P/body_pic4.png')">
          <p>Traditional scanner</p>
        </div>
      </div>
    </div>

    <div class="body4">
      <div class="content">
        <h1>Full arch implants scaned in a single step</h1>
        <p>No need to loose and fasten the abutment screws.</p>
        <div class="card">
          <img v-lazy="require('../../assets/img/PC/Product/product_info/UP360P/body_pic5.png')">
          <p>UP360+</p>
        </div>
        <div class="card2">
          <img v-lazy="require('../../assets/img/PC/Product/product_info/UP360P/body_pic6.png')">
          <p>Traditional scanner</p>
        </div>
      </div>
    </div>
    <div class="body5"><h1>Multi-color projector</h1>
      <p>bule color</p></div>
    <div class="body6"><h1>New way of occlusion scan</h1></div>
    <div class="body7"><img v-lazy="require('../../assets/img/PC/Product/product_info/Commen_scanner/body_pic9.png')">
      <div class="content"><h1>UPSCAN APP</h1>
        <p>Easy to operate scanning software, free upgrade.</p></div>
    </div>

    <div class="body8"><img v-lazy="require('../../assets/img/PC/Product/product_info/Commen_scanner/body_pic10.png')">
      <div class="content"><h1>Margin link</h1>
        <p>"Draw margn line in UPSCAN and export margin data to design software"</p></div>
    </div>
    <div class="body9"><img v-lazy="require('../../assets/img/PC/Product/product_info/Commen_scanner/body_pic11.png')">
      <div class="content"><h1>True color texture scaning</h1>
        <p>Perfectly restore texture colors</p></div>
    </div>
    <div class="body10"><img v-lazy="require('../../assets/img/PC/Product/product_info/Commen_scanner/body_pic12.png')">
      <div class="content"><h1>Support vertual articulation</h1>
        <p>Aquire accurate jaw motion record in a fast and simple way.</p></div>
    </div>

    <div class="body11"><h1>Wide Applications</h1>
      <div class="card">
        <div><p class="el-icon-arrow-left"></p></div>
        <div class="content"><img
            v-lazy="require('../../assets/img/PC/Product/product_info/Commen_scanner/body_pic13.png')">
          <p>Post and core</p></div>
        <div class="content2"><img
            v-lazy="require('../../assets/img/PC/Product/product_info/Commen_scanner/body_pic14.png')">
          <p>IMPLANT</p></div>
        <div><p class="el-icon-arrow-right"></p></div>
      </div>
    </div>
    <div class="body12">
      <img v-lazy="require('../../assets/img/PC/Product/product_info/UP360P/banner.png')">
      <p>problems scanning<br>
        a narrow interproximal gap？<br>
        Try UP360+</p>
      <img v-lazy="require('../../assets/img/PC/Product/product_info/Commen_scanner/bottom_play.png')">
    </div>
    <div class="body13">
      <h1> parameter </h1>
      <div class="content">
        <img v-lazy="require('../../assets/img/PC/Product/body_pic1.png')">
        <div class="productinfo">
          <div class="card">
            <span class="title">Size</span> <span class="info">305*310*550（mm）</span><br>
            <span class="title">Weight</span> <span class="info">14kg</span><br>
            <span class="title">Camera</span> <span class="info">2*2.0（MP）High frame rate</span><br>
            <span class="title">Precision</span> <span class="info">＜ 6 microns</span><br>
            <span class="title">Project</span> <span class="info">Customized  blue-light /multi-color scaning</span><br>
            <span class="title">Lnterface</span> <span class="info">USB 3.0</span><br>
            <span class="title">Output formats</span> <span class="info">STL; UM; PLY; OBJ</span><br>
            <span class="title">Power supply</span> <span class="info">AC110-240V,50HZ</span><br>
            <img class="line" v-lazy="require('../../assets/img/PC/Commen/line.png')">
          </div>
        </div>
        <div class="arrow"><p class="el-icon-arrow-right"></p></div>
      </div>
    </div>
    <div class="body14">
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
      langc: {},
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


<style>

#UP360P {
  position: relative;
  font-family: Montserrat;
  width: 10rem;
  overflow: hidden;
}

#UP360P h1 {
  font-weight: normal;
}

#UP360P .banner {
  position: relative;
  width: 10rem;
  height: 5.09375rem;
  /* margin-bottom: 1.010417rem; */
}

#UP360P .banner p {
  position: absolute;
  top: 2.708333rem;
  left: 4.5rem;
  font-size: 0.177083rem;
  font-weight: normal;
  letter-spacing: 0rem;
  color: #1e1e1e;
}

#UP360P .banner h1 {
  position: absolute;
  top: 2.020833rem;
  left: 4.5rem;
  font-size: 0.3125rem;
  line-height: 0.359375rem;
  color: #e48013;
}

#UP360P .banner img {
  width: 10rem;
  height: 5.09375rem;
  z-index: 0;
}

#UP360P .body1 {
  position: relative;
  width: 10rem;
  height: 4.432292rem;
  background-color: #1e1e1e;
}

#UP360P .body1 img {
  width: 10rem;
  height: 4.432292rem;
}

#UP360P .body1 p {
  position: absolute;
  top: 1.786458rem;
  left: 1.953125rem;
  font-size: 0.28125rem;
  line-height: 0.333333rem;
  color: #ffffff;
}


#UP360P .body2 {
  position: relative;
  width: 10rem;
  height: 3.8rem;
  text-align: center;
  /* background-color: #1e1e1e; */
}

#UP360P .body2 .header {
  width: 5rem;
  height: 0.333333rem;
  font-size: 0.28125rem;
  line-height: 0.333333rem;
  margin-top: 1.041667rem;
  color: #343434;
}

#UP360P .body2 img {
  width: 5.692708rem;
  height: .765625rem;
  margin-top: .520833rem;
}

#UP360P .body2 .infocard {
  /* width: 5.692708rem; */
  height: .765625rem;
  margin-left: 2.1rem;
  margin-top: 0.15625rem;
  /* margin: auto; */
  text-align: left;
  /* border: solid red .005208rem;; */
}

#UP360P .body2 .infocard .infolist {
  display: inline-block;
  text-align: left;
  /* border: solid red .005208rem;; */
  width: 1.65rem;
  height: .765625rem;
}

#UP360P .body2 .infocard .infolist .title {
  text-align: left;
  width: 1.145833rem;
  font-size: 0.25rem;
  line-height: 0.244792rem;
  color: #e48013;
  /* margin-top: 0.15625rem; */
}

#UP360P .body2 .infocard .infolist .info {
  font-size: 0.104167rem;
  line-height: 0.125rem;
  margin-top: 0.104167rem;
  color: #343434;
}


#UP360P .body3 {
  position: relative;
  width: 10rem;
  height: 4.739583rem;
  /* text-align: center; */
  background-color: #f8f8f8;
  /* border:red solid .005208rem; */
}

#UP360P .body3 .content {
  position: relative;
  margin: auto;
  width: 6.5rem;;
  height: 3.864583rem;
  /* border:red solid .005208rem; */
  /* text-align: center; */
  /* background-color: #1e1e1e; */
}

#UP360P .body3 .content h1 {
  height: 0.333333rem;
  font-size: 0.28125rem;
  line-height: 0.333333rem;
  padding-top: .520833rem;;
  color: #343434;
}

#UP360P .body3 .content p {
  font-size: 0.125rem;
  line-height: 0.125rem;
  line-height: 0.333333rem;
  margin-top: .083333rem;;
  color: #343434;
}

#UP360P .body3 .content .card, #UP360P .body3 .content .card2 {
  width: 3.1rem;
  height: 2.609375rem;
  float: left;
  display: block;
  align-items: flex-end;
  /* margin-left: .052083rem;; */
  /* border:red solid .005208rem; */
}

#UP360P .body3 .content .card p, #UP360P .body3 .content .card2 p {
  display: block;
  font-size: 0.104167rem;
  color: #e48013;
  /* border:red solid .005208rem; */
}

#UP360P .body3 .content .card2 p {
  margin-left: .677083rem;
  color: #343434;
}

#UP360P .body3 .content .card img {
  display: block;
  width: 3.427083rem;
  height: 2.609375rem;
}

#UP360P .body3 .content .card2 img {
  display: block;
  margin-top: .625rem;
  margin-left: 0.520833rem;
  width: 2.65625rem;
  height: 1.989583rem;
}


#UP360P .body4 {
  position: relative;
  width: 10rem;
  height: 4.739583rem;
  /* text-align: center; */
  /* background-color: #ffffff; */
  /* border:red solid .005208rem; */
}

#UP360P .body4 .content {
  position: relative;
  margin: auto;
  width: 6.5rem;;
  height: 3.864583rem;
  /* border:red solid .005208rem; */
  /* text-align: center; */
  /* background-color: #1e1e1e; */
}

#UP360P .body4 .content h1 {
  height: 0.333333rem;
  font-size: 0.28125rem;
  line-height: 0.333333rem;
  padding-top: .854167rem;
  color: #343434;
}

#UP360P .body4 .content p {
  font-size: 0.125rem;
  line-height: 0.125rem;
  line-height: 0.333333rem;
  margin-top: .083333rem;;
  color: #343434;
}

#UP360P .body4 .content .card, #UP360P .body4 .content .card2 {
  width: 3.1rem;
  height: 2.609375rem;
  float: left;
  display: block;
  align-items: flex-end;
  /* margin-left: .052083rem;; */
  /* border:red solid .005208rem; */
}

#UP360P .body4 .content .card p, #UP360P .body4 .content .card2 p {
  display: block;
  font-size: 0.104167rem;
  margin-top: -0.3633rem;
  color: #e48013;
  /* border:red solid .005208rem; */
}

#UP360P .body4 .content .card2 p {
  margin-top: -0.05rem;
  margin-left: .677083rem;
  color: #343434;
}

#UP360P .body4 .content .card img {
  display: block;
  width: 3.473958rem;
  height: 2.458333rem;
}

#UP360P .body4 .content .card2 img {
  display: block;
  margin-top: 0.276042rem;
  margin-left: 0.520833rem;
  width: 2.901042rem;
  height: 1.911458rem;
}


#UP360P .body5 {
  position: relative;
  width: 10rem;
  height: 5.3125rem;
  background-image: url(../assets/img/PC/Product/product_info/Commen_scanner/body_pic7.png);
  background-repeat: no-repeat;
  background-size: 10rem, 5.3125rem;
}

#UP360P .body5 h1 {
  font-size: 0.28125rem;
  line-height: 0.333333rem;
  color: #ffffff;
  padding-top: 3.359375rem;
  margin-left: 2.130208rem;
}

#UP360P .body5 p {
  font-size: 0.104167rem;
  line-height: 0.125rem;
  color: #848484;
  margin-top: 0.104167rem;
  margin-left: 2.130208rem;
}

#UP360P .body6 {
  position: relative;
  width: 10rem;
  height: 3.901042rem;
  background-image: url(../assets/img/PC/Product/product_info/Commen_scanner/body_pic8.png);
  background-repeat: no-repeat;
  background-size: 10rem, 3.901042rem;
  /* text-align: center; */
  /* background-color: #ffffff; */
  /* border:red solid .005208rem; */
}

#UP360P .body6 h1 {
  font-size: 0.28125rem;
  line-height: 0.333333rem;
  color: #ffffff;
  padding-top: 2.604167rem;
  margin-left: 2.130208rem;
}

#UP360P .body7 {
  position: relative;
  width: 10rem;
  height: 4.4rem;
}

#UP360P .body7 img {
  position: relative;
  width: 6.447917rem;
  height: 4.708333rem;;
}

#UP360P .body7 .content {
  position: absolute;
  top: 2rem;
  width: 10rem;
  height: 2.083333rem;
  /* border: red solid .005208rem; */
  background-color: #f8f8f8;
  z-index: -1;
}

#UP360P .body7 .content h1 {
  font-size: 0.28125rem;
  line-height: 0.333333rem;
  margin-top: .635417rem;;
  margin-left: 5.494792rem;
  color: #343434;
}

#UP360P .body7 .content p {
  font-size: 0.104167rem;
  line-height: 0.125rem;
  margin-top: 0.15625rem;
  margin-left: 5.494792rem;
  color: #848484;
}

#UP360P .body8, #UP360P .body9, #UP360P .body10 {
  position: relative;
  width: 10rem;
  height: 3.994792rem;
}

#UP360P .body8 img, #UP360P .body9 img, #UP360P .body10 img {
  position: relative;
  width: 10rem;
  height: 3.994792rem;
}

#UP360P .body8 .content, #UP360P .body9 .content, #UP360P .body10 .content {
  position: absolute;
  top: 1.052083rem;
  left: 2.130208rem;
  width: 6rem;
  height: 2.083333rem;
  z-index: 1;
}

#UP360P .body8 .content h1, #UP360P .body9 .content h1, #UP360P .body10 .content h1 {
  font-size: 0.28125rem;
  line-height: 0.333333rem;
  color: #ffffff;
}

#UP360P .body8 .content p, #UP360P .body9 .content p, #UP360P .body10 .content p {
  font-size: 0.104167rem;
  line-height: 0.125rem;
  margin-top: 0.15625rem;
  color: #ffffff;
}

#UP360P .body10 {
  position: relative;
  width: 10rem;
  height: 3.734375rem;
}

#UP360P .body10 img {
  position: relative;
  width: 10rem;
  height: 3.734375rem;
}

#UP360P .body9 .content {
  position: absolute;
  top: 1.692708rem;
  left: 5.192708rem;
}

#UP360P .body10 .content {
  position: absolute;
  top: 1.265625rem;
  left: 2.130208rem;
}

#UP360P .body11 {
  position: relative;
  width: 10rem;
  height: 4.942708rem;
  background-color: #f8f8f8;
}

#UP360P .body11 h1 {
  width: 6.25rem;
  text-align: center;
  margin: auto;
  padding-top: .598958rem;
  margin-bottom: .713542rem;
  font-size: 0.28125rem;
  line-height: 0.333333rem;
  color: #343434;
}

#UP360P .body11 .card {
  width: 8.64792rem;
  height: 2.708333rem;
  margin: auto;
  overflow: hidden;
  /* border: red solid .005208rem; */
}

#UP360P .body11 .card div {
  float: left;
}

#UP360P .body11 .card img {
  width: 3.875rem;
  height: 2.286458rem;
}

#UP360P .body11 .card .el-icon-arrow-left, #UP360P .body11 .card .el-icon-arrow-right {
  line-height: 2.286458rem;
  font-size: 0.291667rem;
  color: #707070;
}

#UP360P .body11 .card .el-icon-arrow-left {
  margin-right: 0.107292rem;
}

#UP360P .body11 .card .el-icon-arrow-right {
  margin-left: 0.107292rem;
}

#UP360P .body11 .card .content p, #UP360P .body11 .card .content2 p {
  font-size: 0.104167rem;
  line-height: 0.125rem;
  text-align: center;
  width: 0.8rem;
  margin: auto;
  color: #e48013;
  margin-top: 0.208333rem;
  padding-bottom: .052083rem;
  border-bottom: #e48013 solid .005208rem;
}

#UP360P .body11 .card .content2 p {
  color: #343434;
  border-bottom: #707070 solid .005208rem;
}


#UP360P .body12 {
  position: relative;
  width: 7.291667rem;
  height: 4.104167rem;
  margin: auto;
  margin-top: 1.447917rem;
  background-color: #ffffff;
  /* border: solid 1px #707070; */
}

#UP360P .body12 img {
  width: 7.291667rem;
  height: 4.104167rem;
  /* border-bottom:  #707070 solid .005208rem; */
}

#UP360P .body12 img:nth-last-child(1) {
  position: absolute;
  top: 2.317708rem;
  left: 3.046875rem;;
  width: 0.390625rem;
  height: 0.390625rem;
}

#UP360P .body12 p {
  font-weight: lighter;
  position: absolute;
  top: 1.052083rem;
  left: 3.046875rem;
  font-size: 0.208333rem;
  line-height: 0.25rem;
  color: #ffffff;
}

pre {
  display: inline;
}

.white-space {
  white-space: pre;
}

#UP360P .body13 {
  position: relative;
  width: 10rem;
  height: 4.828125rem;
  margin: auto;
  margin-top: 1.447917rem;
  background-color: #f8f8f8;
  /* border: solid 1px #707070; */
}

#UP360P .body13 h1 {
  position: absolute;
  top: 0.229167rem;
  left: 1.328125rem;
  font-size: 0.333333rem;
  line-height: 0.333333rem;
  padding-bottom: 0.15625rem;
  border-bottom: #febb6f solid 0.015625rem;
  color: #1e1e1e;
}

#UP360P .body13 .content {
  width: 10rem;
  height: 4.416667rem;
  /* border: red solid .005208rem; */
}

#UP360P .body13 .content img {
  position: absolute;
  width: 2.505208rem;
  height: 4.416667rem;
  top: 1.3rem;
  left: 1rem;
}

#UP360P .body13 .content .line {
  position: absolute;
  top: 0.1rem;
  left: 0.5rem;
  width: 1.7rem;
  height: 1.9rem;
  z-index: -1;
}

#UP360P .body13 .content .productinfo {
  /* display: inline-block; */
  float: right;
  width: 4.90625rem;
  height: 2.8rem;
  margin-right: 1.328125rem;
  margin-top: 1.442708rem;
  background-color: #ffffff;
  box-shadow: 0px 1px 23px 0px rgba(0, 0, 0, 0.16);
  /* border: red solid .005208rem; */
}

#UP360P .body13 .content .productinfo .card {
  position: relative;
  margin-left: 0.442708rem;
  margin-top: 0.338542rem;
  z-index: 2;
}

#UP360P .body13 .content .arrow {
  position: absolute;
  right: 0.8rem;
  top: 1.642708rem;
  height: 2.630208rem;
  /* border: red solid .005208rem; */
}

#UP360P .body13 .content .arrow p {
  font-size: 0.3125rem;
  line-height: 2.630208rem;
  color: #707070;
  /* border: red solid .005208rem; */
}

#UP360P .body13 .content .productinfo .card .title {
  display: inline-block;
  font-size: 0.104167rem;
  line-height: 0.260417rem;
  color: #707070;
  width: 0.9rem;
  z-index: 3;
  /* border: red solid .005208rem; */
}

#UP360P .body13 .content .productinfo .card .info {
  display: inline-block;
  font-size: 0.104167rem;
  line-height: 0.260417rem;
  z-index: 3;
  color: #707070;
  margin-left: 1.3rem;
  /* border: red solid .005208rem;   */
}


#UP360P .body14 {
  margin: auto;
  margin-top: 1.140625rem;
  margin-bottom: .770833rem;
  width: 7.291667rem;
  text-align: center;
}

#UP360P .body14 button {
  font-size: 0.104167rem;
  line-height: 0.125rem;
  cursor: pointer;
  color: #ffffff;
}

#UP360P .body14 button:nth-child(1) {
  width: 1.078125rem;
  height: 0.3125rem;
  background-color: #ffb15b;
}

#UP360P .body14 button:nth-last-child(1) {
  width: 1.427083rem;
  height: 0.3125rem;
  margin-left: 1.041667rem;
  background-color: #1e1e1e;
}

</style>