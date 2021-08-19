<template>
  <div class="UP300P">
    <Guide :lang2="lang.Commen_Guide"></Guide>
    <Banner :lang2="lang.UP300E.banner"></Banner>
    <!-- 暂使共用 360+ -->
    <UP300EBody1 id="Accuracy" :lang2="lang.UP300E.body1"></UP300EBody1>
    <UP300EBody2 :lang2="lang.UP300E.body2"></UP300EBody2>


    <loopPic class='up300p_loopic' id="Function" :lang2="lang.LoopPic"></loopPic>

    <Productbuttombanner :lang2="lang.Productbuttombanner"></Productbuttombanner>

    <UP300EBody3 id="Video" :lang2="lang.UP300E.body3"></UP300EBody3>
    <UP300EBody4 id="Parameter" :lang2="lang.UP300E.body4"></UP300EBody4>

    <Productfooterbutton :lang2="lang.Productfooterbutton"></Productfooterbutton>

  </div>
</template>

<script>
import Guide from "@/components/Commen/Guide.vue"
import loopPic from "@/components/Commen/loopPic.vue"
import Productbuttombanner from "@/components/Commen/Product_buttom_banner.vue"
import Productfooterbutton from "@/components/Commen/Product_footer_button.vue"


import Banner from '@/components/Product_list/UP300E/UP300E_Banner.vue'
import UP300EBody1 from '@/components/Product_list/UP300E/UP300E_Body1.vue'
import UP300EBody2 from '@/components/Product_list/UP300E/UP300E_Body2.vue'
import UP300EBody3 from '@/components/Product_list/UP300E/UP300E_Body3.vue'
import UP300EBody4 from '@/components/Product_list/UP300E/UP300E_Body4.vue'


export default {
  props: {
    lang: {},
  },
  components: {
    Guide,
    loopPic,
    Productbuttombanner,
    Productfooterbutton,
    Banner,
    UP300EBody1,
    UP300EBody2,
    UP300EBody3,
    UP300EBody4
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
  /* font-family: Montserrat; */
  width: 10rem;
  overflow: hidden;
}
</style>