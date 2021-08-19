<template>
  <div class="UP300P">
    <Guide :lang2="lang.Commen_Guide"></Guide>
    <Banner :lang2="lang.UP300P.banner"></Banner>
    <!-- 暂使共用 360+ -->
    <UP360PBody2 id="Accuracy" :lang2="lang.UP360P.body2"></UP360PBody2>
    <UP300PBody1 :lang2="lang.UP300P.body1"></UP300PBody1>
    <UP300PBody2 :lang2="lang.UP300P.body2"></UP300PBody2>
    <loopPic class='up300p_loopic' id="Function" :lang2="lang.LoopPic"></loopPic>
<!--    <Productbuttombanner :lang2="lang.Productbuttombanner"></Productbuttombanner>-->
    <UP300PBody3 id="Video" :lang2="lang.UP300P.body3"></UP300PBody3>
    <UP300PBody4 id="Parameter" :lang2="lang.UP300P.body4"></UP300PBody4>
    <Productfooterbutton :lang2="lang.Productfooterbutton"></Productfooterbutton>

  </div>
</template>

<script>
import Banner from '@/components/Product_list/UP300P/UP300P_Banner.vue'
import Guide from "@/components/Commen/Guide.vue"
import loopPic from "@/components/Commen/loopPic.vue"
import Productbuttombanner from "@/components/Commen/Product_buttom_banner.vue"
import Productfooterbutton from "@/components/Commen/Product_footer_button.vue"
import UP360PBody2 from '@/components/Product_list/UP360P/UP360P_Body2.vue'

import UP300PBody1 from '@/components/Product_list/UP300P/UP300P_Body1.vue'
import UP300PBody2 from '@/components/Product_list/UP300P/UP300P_Body2.vue'
import UP300PBody3 from '@/components/Product_list/UP300P/UP300P_Body3.vue'
import UP300PBody4 from '@/components/Product_list/UP300P/UP300P_Body4.vue'


export default {
  props: {
    lang: {},
  },
  components: {
    Guide,
    loopPic,
    Banner,
    UP360PBody2,
    // Productbuttombanner,
    Productfooterbutton,
    UP300PBody1,
    UP300PBody2,
    UP300PBody3,
    UP300PBody4
  },


  data() {
    return {}
  },
  computed: {},
  created() {
  },
  mounted() {
  }
}
</script>


<style scoped>

.UP300P {
  position: relative;
  /* font-family: Montserrat  !important; ; */
  width: 10rem;
  overflow: hidden;
}
</style>