<template>
  <div id="MainExhibition">
    <div class="banner"><img src='../assets/img/PC/Blog/banner.png'>
      <p>NEWS & BLOG</p></div>
    <div class="body1">
      <div class="bigcard">
        <div class="content">
          <div class='text'>
            <h1>Exhibition</h1>
            <div class="time"><span>JUNE.18</span><span>09am-19pm</span></div>
            <p>511 Nanshan Yungu Complex Building, </p>
            <p>Liuxian Avenue, Nanshan District, Shenzhen</p>
            <router-link to='/Login' class="more">more</router-link>
          </div>
        </div>
      </div>
      <div class="big-title">NEWS</div>
      <div class="small-title">Exhibition</div>
      <img class='clandan' src="../assets/img/PC/Commen/clandan_icon.png">
      <img class='clock' src="../assets/img/PC/Commen/clock_icon.png">
      <img class='bg' src="../assets/img/PC/Commen/body_pic1.png">
    </div>

    <div class="body2">
      <div class="smallcard">
        <div class="content">
          <img src="../assets/img/PC/Commen/blog_pic1.png">
          <p>Exhibition</p>
          <div class="time"><span>JUNE.18</span><span>09am-19pm</span>
            <router-link to='/Login' class="more">more</router-link>
            <img class='clandan' src="../assets/img/PC/Commen/clandan_icon.png">
            <img class='clock' src="../assets/img/PC/Commen/clock_icon.png">
          </div>
        </div>
      </div>

      <div class="smallcard">
        <div class="content">
          <img src="../assets/img/PC/Commen/blog_pic1.png">
          <p>Exhibition</p>
          <div class="time">
            <div class="time"><span>JUNE.18</span><span>09am-19pm</span>
              <router-link to='/Login' class="more">more</router-link>
              <img class='clandan' src="../assets/img/PC/Commen/clandan_icon.png">
              <img class='clock' src="../assets/img/PC/Commen/clock_icon.png">
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  // name: 'carrousel',
  data() {
    return {
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


<style>

#MainExhibition {
  position: relative;
  font-family: Montserrat;
  width: 10rem;
  overflow: hidden;
}

#MainExhibition h1 {
  font-weight: normal;
}

#MainExhibition .banner {
  position: relative;
  width: 10rem;
  height: 5.09375rem;
  margin-bottom: 1.010417rem;
}

#MainExhibition .banner p {
  position: absolute;
  top: 1.770833rem;
  left: 3.901042rem;
  font-size: 0.3125rem;
  line-height: 0.375rem;
  color: #1e1e1e;
}

#MainExhibition .banner img {
  width: 10rem;
  height: 5.09375rem;
}

#MainExhibition .body1 {
  position: relative;
  height: 3.505208rem;
}


#MainExhibition .body1 .bigcard {
  position: relative;
  width: 8.177083rem;
  height: 3.505208rem;
  margin: auto;

  background-color: #ffffff;
  box-shadow: 0px 0.005208rem 0.119792rem 0px rgba(0, 0, 0, 0.16);
  /* text-align: right; */
  /* border: brown solid 0.005208rem; */
}

#MainExhibition .body1 .bigcard .content {
  position: relative;
  padding-top: .520833rem;
  margin-left: 0.286458rem;
  /* width: 6.25rem; */
  height: 2.34375rem;
  /* border: green solid 0.005208rem; */
  /* z-index: 0; */
}

#MainExhibition .body1 .bg {
  position: absolute;
  top: -0.05rem;
  left: 3.62rem;
  width: 5.520833rem;
  height: 3.59375rem;
  /* border: red solid 0.005208rem; */
}

#MainExhibition .body1 .bigcard .content .text {
  /* width: 2.8rem; */
  margin-left: 0.2rem;
  height: 2.34375rem;
  float: left;
  /* border: blue solid 0.005208rem; */
}

#MainExhibition .body1 .bigcard .content .text h1 {
  text-align: left;
  margin-top: 0.739583rem;
  font-size: 0.145833rem;
  margin-bottom: 0.302083rem;
  color: #707070;
}

#MainExhibition .body1 .bigcard .content .text p {
  text-align: left;
  font-size: .083333rem;
  color: #707070;
  margin-top: 0.083333rem;
  width: 2.640625rem;
}

#MainExhibition .body1 .bigcard .content .text .time, #MainExhibition .body2 .time {
  text-align: left;
  font-size: .083333rem;
  margin-bottom: 0.166667rem;
  color: #707070;
  width: 2.640625rem;
}

#MainExhibition .body1 .bigcard .content .text .time span, #MainExhibition .body2 .smallcard .content .time span:nth-child(1) {
  margin-left: 0.341rem;
}

#MainExhibition .body1 .bigcard .content .text .time span:nth-last-child(1), #MainExhibition .body2 .smallcard .content .time span:nth-child(2) {
  margin-left: .65625rem;
}


#MainExhibition .body1 .big-title {
  position: absolute;
  top: -0.15625rem;
  /* left: 0.776042rem; */
  font-size: 1.239583rem;
  color: #f8f8f8;
  z-index: 1;
}

#MainExhibition .body1 .small-title {
  position: absolute;
  height: 0.260417rem;
  top: 0.625rem;
  left: 1.395833rem;
  font-size: 0.208333rem;
  border-bottom: #febb6f solid 0.010417rem;
  z-index: 1;
}

#MainExhibition .body1 .clandan {
  position: absolute;
  top: 1.735rem;
  left: 1.4rem;
  width: 0.140625rem;
  height: 0.130208rem;
}

#MainExhibition .body1 .clock {
  position: absolute;
  top: 1.735rem;
  left: 2.4rem;
  width: 0.140625rem;
  height: 0.130208rem;
}

#MainBlog .body2 .smallcard .content .time .img {
  position: absolute;
  top: 1.735rem;
  left: 2.4rem;
  width: 0.140625rem;
  height: 0.130208rem;
}

#MainExhibition .body1 .bigcard .content .text .more {
  cursor: pointer;
  display: block;
  width: .572917rem;;
  height: 0.182292rem;
  text-align: center;
  background-color: #ffb15b;
  margin-top: 0.15625rem;
  border-radius: 0.234375rem;
  font-family: Montserrat;
  font-size: 0.09375rem;;
  line-height: 0.192708rem;
  letter-spacing: 0px;
  color: #ffffff;
}


#MainExhibition .body2 {
  width: 8.177083rem;
  height: 3.505208rem;
  margin: auto;
  /* border: brown solid 0.005208rem; */
  margin-top: .890625rem;
  margin-bottom: 2.786458rem;
}

#MainExhibition .body2 .smallcard {
  float: left;
  width: 3.875rem;
  height: 3.505208rem;
  background-color: #ffffff;
  box-shadow: 0px 0.005208rem 0.119792rem 0px rgba(0, 0, 0, 0.16);
}

#MainExhibition .body2 .smallcard:nth-last-child(1) {
  margin-left: 0.416667rem;
}

#MainExhibition .body2 .smallcard .content {
  margin: auto;
  width: 3.286458rem;
  /* border: brown solid 0.005208rem; */
}

#MainExhibition .body2 .smallcard .content .time {
  position: relative;
  width: 3.286458rem;
  margin-top: 0.151042rem;
  /* border: brown solid 0.005208rem; */
}


#MainExhibition .body2 .smallcard .content img {
  width: 3.286458rem;
  height: 2.109375rem;
  margin-top: 0.171875rem;
  margin-left: -0.052083rem;
  /* border: brown solid 0.005208rem; */
}

#MainExhibition .body2 .smallcard .content p {
  font-size: 0.208333rem;
  margin-top: 0.286458rem;
  color: #707070;
}

#MainExhibition .body2 .smallcard .content .more {
  cursor: pointer;
  display: inline-block;;
  width: .572917rem;;
  height: 0.182292rem;
  text-align: center;
  background-color: #ffb15b;
  border-radius: 0.234375rem;
  font-family: Montserrat;
  font-size: 0.09375rem;;
  line-height: 0.192708rem;
  margin-left: 0.65625rem;
  letter-spacing: 0px;
  color: #ffffff;
}

#MainExhibition .body2 .smallcard .content p {
  text-align: left;
  font-size: 0.145833rem;
  color: #707070;
  margin-top: 0.151042rem;
  width: 2.640625rem;
}

#MainExhibition .body2 .smallcard .content .time .clandan, #MainExhibition .body2 .smallcard .content .time .clock {
  position: absolute;
  top: -0.13rem;
  left: 0.07rem;
  width: 0.140625rem;
  height: 0.130208rem;
}

#MainExhibition .body2 .smallcard .content .time .clock {
  left: 1.05rem
}


</style>