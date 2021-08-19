<template>
  <div class="UP560">
    <Guide :lang2="lang.Commen_Guide"></Guide>
    <UP560banner :lang2="lang.UP560.banner"></UP560banner>
    <UP560body1 id="Accuracy" :lang2="lang.UP560.body1"></UP560body1>
    <UP560body2 :lang2="lang.UP560.body2"></UP560body2>
    <UP560body3 :lang2="lang.UP560.body3"></UP560body3>
    <UP560body4 :lang2="lang.UP560.body4"></UP560body4>
    <UP560body5 :lang2="lang.UP560.body5"></UP560body5>
    <UP560body6 :lang2="lang.UP560.body6"></UP560body6>
    <loopPic id="Function" :lang2="lang.LoopPic"></loopPic>
    <UP560body7 id="Video" :lang2="lang.UP560.body7"></UP560body7>
    <UP560body8 id="Parameter" :lang2="lang.UP560.body8"></UP560body8>
    <Productfooterbutton :lang2="lang.Productfooterbutton"></Productfooterbutton>
  </div>
</template>

<script scoped>
import Guide from "@/components/Commen/Guide.vue"
import loopPic from "@/components/Commen/loopPic.vue"
import Productfooterbutton from "@/components/Commen/Product_footer_button.vue"

import UP560banner from "@/components/Product_list/UP560/UP560_banner.vue"
import UP560body1 from "@/components/Product_list/UP560/UP560_body1.vue"
import UP560body2 from "@/components/Product_list/UP560/UP560_body2.vue"
import UP560body3 from "@/components/Product_list/UP560/UP560_body3.vue"
import UP560body4 from "@/components/Product_list/UP560/UP560_body4.vue"
import UP560body5 from "@/components/Product_list/UP560/UP560_body5.vue"
import UP560body6 from "@/components/Product_list/UP560/UP560_body6.vue"
import UP560body7 from "@/components/Product_list/UP560/UP560_body7.vue"
import UP560body8 from "@/components/Product_list/UP560/UP560_body8.vue"

export default {
  props: {
    lang: {},
  },
  components: {
    Guide,
    loopPic,
    UP560banner,
    UP560body1,
    UP560body2,
    UP560body3,
    UP560body4,
    UP560body5,
    UP560body6,
    UP560body7,
    Productfooterbutton,
    UP560body8
  },
  data() {
    return {}
  },
}
</script>


<style scoped>
.UP560 {
  position: relative;
  /* font-family: Montserrat; */
  width: 10rem;
  overflow: hidden;
}

.UP560 h1 {
  font-weight: normal;
}

</style>
