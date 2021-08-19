<template>
  <div class="UP400">
    <Guide :lang2="lang.Commen_Guide"></Guide>
    <UP400_Banner :lang2="lang.UP400.banner"></UP400_Banner>
    <UP400_Body1 id="Accuracy" :lang2="lang.UP400.body1"></UP400_Body1>
    <UP400_Body2 :lang2="lang.UP400.body2"></UP400_Body2>
    <UP400_Body3 :lang2="lang.UP400.body3"></UP400_Body3>
    <loopPic id="Function" :lang2="lang.LoopPic"></loopPic>
    <UP400_Body4 id="Video" :lang2="lang.UP400.body4"></UP400_Body4>
    <UP400_Body5 id="Parameter" :lang2="lang.UP400.body5"></UP400_Body5>
    <Product_footer_button :lang2="lang.Productfooterbutton"></Product_footer_button>
  </div>
</template>

<script>
import Guide from "@/components/Commen/Guide.vue"
import UP400_Banner from "@/components/Product_list/UP400/UP400_Banner";
import UP400_Body1 from "@/components/Product_list/UP400/UP400_Body1";
import UP400_Body2 from "@/components/Product_list/UP400/UP400_Body2";
import UP400_Body3 from "@/components/Product_list/UP400/UP400_Body3";
import loopPic from "@/components/Commen/loopPic";
import UP400_Body4 from "@/components/Product_list/UP400/UP400_Body4";
import UP400_Body5 from "@/components/Product_list/UP400/UP400_Body5";
import Product_footer_button from "../../components/Commen/Product_footer_button";
export default {
  name: "UP400",
  props: {
    lang: {}
  },
  components: {
    Guide,
    UP400_Banner,
    UP400_Body1,
    UP400_Body2,
    UP400_Body3,
    loopPic,
    UP400_Body4,
    UP400_Body5,
    Product_footer_button
  },
}
</script>

<style scoped>

</style>