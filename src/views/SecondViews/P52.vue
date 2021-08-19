<template>
  <div class="P52">
    <Guide :lang2="lang.Commen_Guide"></Guide>
    <P52banner :lang2="lang.P52.banner"></P52banner>
    <P52body1 id="Accuracy" :lang2="lang.P52.body1"></P52body1>
    <P52body2 :lang2="lang.P52.body2"></P52body2>
    <P52body3 :lang2="lang.P52.body3"></P52body3>
    <P5body4 :lang2="lang.P52.body4"></P5body4>
    <P5body5 :lang2="lang.P5.body5"></P5body5>
    <P5body6 id="Function" :lang2="lang.P52.body6"></P5body6>
    <P5body7 id="Video" :lang2="lang.P52.body7"></P5body7>
    <P5body8  id="Parameter" :lang2="lang.P52.body8"></P5body8>
    <Productfooterbutton :lang2="lang.Productfooterbutton"></Productfooterbutton>
  </div>

</template>

<script scoped>
import Guide from "@/components/Commen/Guide.vue"
import P52banner from "@/components/Product_list/P52/P52_Banner.vue"
import P52body1 from "@/components/Product_list/P52/P52_Body1.vue"
import P52body2 from "@/components/Product_list/P52/P52_Body2.vue"
import P52body3 from "@/components/Product_list/P52/P52_Body3.vue"
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
    Guide,
    P52banner,
    P52body1,
    P52body2,
    P52body3,
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

.P52 {
  position: relative;
  /* font-family: Montserrat; */
  width: 10rem;
  overflow: hidden;
}
</style>