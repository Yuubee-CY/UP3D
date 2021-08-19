<template>
  <div class="P53">
    <Guide :lang2="lang.Commen_Guide"></Guide>
    <P53banner :lang2="lang.P53.banner"></P53banner>
    <P53_Body1  id="Accuracy" :lang2="lang.P53.body1"></P53_Body1>
    <P53_Body2 :lang2="lang.P53.body2"></P53_Body2>
    <P53_Body3 :lang2="lang.P53.body3"></P53_Body3>
    <P53_Body4 :lang2="lang.P53.body4"></P53_Body4>
    <P5body5 :lang2="lang.P5.body5"></P5body5>
    <P53_Body6 :lang2="lang.P53.body6"></P53_Body6>
    <P53_Body7  id="Function" :lang2="lang.P53.body7"></P53_Body7>
    <P53_Body8  id="Video" :lang2="lang.P53.body8"></P53_Body8>
    <P53_Body9  id="Parameter" :lang2="lang.P53.body9"></P53_Body9>
  </div>
</template>

<script>
import Guide from "@/components/Commen/Guide.vue"
import P53banner from "@/components/Product_list/P53/P53_Banner";
import P53_Body1 from "@/components/Product_list/P53/P53_Body1";
import P53_Body2 from "@/components/Product_list/P53/P53_Body2";
import P53_Body3 from "@/components/Product_list/P53/P53_Body3";
import P53_Body4 from "@/components/Product_list/P53/P53_Body4";
import P53_Body6 from "@/components/Product_list/P53/P53_Body6";
import P5body5 from "@/components/Product_list/P5/P5_Body5.vue"
import P53_Body7 from "@/components/Product_list/P53/P53_Body7";
import P53_Body8 from "@/components/Product_list/P53/P53_Body8";
import P53_Body9 from "@/components/Product_list/P53/P53_Body9";
export default {
  name: "P53",
  props:{
    lang:{}
  },
  components: {
    Guide,
    P53banner,
    P53_Body1,
    P53_Body2,
    P53_Body3,
    P53_Body4,
    P5body5,
    P53_Body6,
    P53_Body7,
    P53_Body8,
    P53_Body9
  }
}
</script>

<style scoped>

</style>