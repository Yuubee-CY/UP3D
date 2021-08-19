<template>
  <div id="MainBlog">
    <div class="banner"><img src='../assets/img/PC/Blog/banner.png'>
      <p>NEWS & BLOG</p></div>
    <div class="body1">
      <div class="bigcard">
        <div class="content">
          <img src="../assets/img/PC/Commen/blog_pic1.png">
          <div class='text'>
            <h1>Company</h1>
            <p>UP3D is a high tech company headquartered in Shenzhen since 2013. </p>
            <p>As one of the only few companies in the world that are capable of developing......</p>
            <router-link to='/Login' class="more">more</router-link>
          </div>
        </div>
      </div>
      <div class="big-title">NEWS</div>
      <div class="small-title">BLOG</div>
    </div>

    <div class="body2">
      <div class="smallcard">
        <div class="content">
          <img src="../assets/img/PC/Commen/blog_pic1.png">
          <p>BLOG</p>
          <router-link to='/Login' class="more">more</router-link>
        </div>
      </div>

      <div class="smallcard">
        <div class="content">
          <img src="../assets/img/PC/Commen/blog_pic1.png">
          <p>BLOG</p>
          <router-link to='/Login' class="more">more</router-link>
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

#MainBlog {
  position: relative;
  font-family: Montserrat;
  width: 10rem;
  overflow: hidden;
}

#MainBlog h1 {
  font-weight: normal;
}

#MainBlog .banner {
  position: relative;
  width: 10rem;
  height: 5.09375rem;
  margin-bottom: 1.010417rem;
}

#MainBlog .banner p {
  position: absolute;
  top: 1.770833rem;
  left: 3.901042rem;
  font-size: 0.3125rem;
  line-height: 0.375rem;
  color: #1e1e1e;
}

#MainBlog .banner img {
  width: 10rem;
  height: 5.09375rem;
}

#MainBlog .body1 {
  position: relative;
  height: 3.505208rem;

}


#MainBlog .body1 .bigcard {
  width: 8.177083rem;
  height: 3.505208rem;
  margin: auto;
  background-color: #ffffff;
  box-shadow: 0px 0.005208rem 0.119792rem 0px rgba(0, 0, 0, 0.16);
  /* text-align: right; */
  /* border: brown solid 0.005208rem; */
}

#MainBlog .body1 .bigcard .content {
  position: relative;
  padding-top: .520833rem;
  margin-left: 0.286458rem;
  /* width: 6.25rem; */
  height: 2.34375rem;
  /* border: green solid 0.005208rem; */
  /* z-index: 0; */
}

#MainBlog .body1 .bigcard .content img {
  /* display: block; */
  float: left;
  width: 3.286458rem;
  height: 2.34375rem;
  /* border: red solid 0.005208rem; */
}

#MainBlog .body1 .bigcard .content .text {
  /* width: 2.8rem; */
  margin-left: .572917rem;
  height: 2.34375rem;
  float: left;
  /* border: blue solid 0.005208rem; */
}

#MainBlog .body1 .bigcard .content .text h1 {
  text-align: left;
  margin-top: 0.739583rem;
  font-size: 0.145833rem;
  margin-bottom: 0.302083rem;
  color: #707070;
}

#MainBlog .body1 .bigcard .content .text p {
  text-align: left;
  font-size: .083333rem;
  color: #707070;
  margin-top: 0.083333rem;
  width: 2.640625rem;
}


#MainBlog .body1 .bigcard .content .text .more, #MainBlog .body2 .smallcard .content .more {
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

#MainBlog .body1 .big-title {
  position: absolute;
  top: -0.15625rem;
  left: 6.078125rem;;
  font-size: 1.239583rem;
  color: #f8f8f8;
  z-index: 1;
}

#MainBlog .body1 .small-title {
  position: absolute;
  height: 0.260417rem;
  top: 0.625rem;;
  left: 5.057292rem;
  font-size: 0.208333rem;
  border-bottom: #febb6f solid 0.010417rem;
  z-index: 1;
}


#MainBlog .body2 {
  width: 8.177083rem;
  height: 3.505208rem;
  margin: auto;
  /* border: brown solid 0.005208rem; */
  margin-top: .890625rem;
  margin-bottom: 2.786458rem;
}

#MainBlog .body2 .smallcard {
  float: left;
  width: 3.875rem;
  height: 3.505208rem;
  background-color: #ffffff;
  box-shadow: 0px 0.005208rem 0.119792rem 0px rgba(0, 0, 0, 0.16);
}

#MainBlog .body2 .smallcard:nth-last-child(1) {
  margin-left: 0.416667rem;
}

#MainBlog .body2 .smallcard .content {
  margin: auto;
  width: 3.286458rem;
  /* border: brown solid 0.005208rem; */
}

#MainBlog .body2 .smallcard .content img {
  width: 3.286458rem;
  height: 2.109375rem;
  margin-top: 0.171875rem;
  margin-left: -0.052083rem;
  /* border: brown solid 0.005208rem; */
}

#MainBlog .body2 .smallcard .content p {
  font-size: 0.208333rem;
  margin-top: 0.286458rem;
}

#MainBlog .body2 .smallcard .content .more {
  margin-top: 0.234375rem;
}
</style>