<template>
  <div id="P4">
    <P5banner :lang2="lang.P5.banner"></P5banner>
    <P5body1 :lang2="lang.P5.body1"></P5body1>
    <P5body2 :lang2="lang.P5.body2"></P5body2>
    <P5body3 :lang2="lang.P5.body3"></P5body3>
    <P5body4 :lang2="lang.P5.body4"></P5body4>
    <P5body5 :lang2="lang.P5.body5"></P5body5>
    <P5body6 :lang2="lang.P5.body6"></P5body6>
    <P5body7 :lang2="lang.P5.body7"></P5body7>
    <P5body8 :lang2="lang.P5.body8"></P5body8>
    <Productfooterbutton :lang2="lang.Productfooterbutton"></Productfooterbutton>
  </div>

</template>

<script scoped>
import P5banner from "@/components/Product_list/P5/P5_Banner.vue"
import P5body1 from "@/components/Product_list/P5/P5_Body1.vue"
import P5body2 from "@/components/Product_list/P5/P5_Body2.vue"
import P5body3 from "@/components/Product_list/P5/P5_Body3.vue"
import P5body4 from "@/components/Product_list/P5/P5_Body4.vue"
import P5body5 from "@/components/Product_list/P5/P5_Body5.vue"
import P5body6 from "@/components/Product_list/P5/P5_Body6.vue"
import P5body7 from "@/components/Product_list/P5/P5_Body7.vue"
import P5body8 from "@/components/Product_list/P5/P5_Body8.vue"
import Productfooterbutton from "@/components/Commen/Product_footer_button.vue"

export default {
  props: {
    lang: {},
  },
  components: {

    P5banner,
    P5body1,
    P5body2,
    P5body3,
    P5body4,
    P5body5,
    P5body6,
    P5body7,
    P5body8,
    Productfooterbutton,

  },
  // name: 'carrousel',
  data() {
    return {}
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

#P4 {
  position: relative;
  /* font-family: Montserrat; */
  width: 10rem;
  overflow: hidden;
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