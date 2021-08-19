<template>
  <div class="P41">
    <Guide :lang2="lang.Commen_Guide"></Guide>
    <P41_Banner :lang2="lang.P41.banner"></P41_Banner>
    <P41_Body1 id="Accuracy" :lang2="lang.P41.body1"></P41_Body1>
    <P41_Body2 :lang2="lang.P41.body2"></P41_Body2>
    <P41_Body3 :lang2="lang.P41.body3"></P41_Body3>
    <P41_Body4 :lang2="lang.P41.body4"></P41_Body4>
    <P41_Body5 :lang2="lang.P41.body5"></P41_Body5>
    <P41_Body6 :lang2="lang.P41.body6"></P41_Body6>
    <P41_Body7 id="Function" :lang2="lang.P41.body7"></P41_Body7>
    <P41_Body8 id="Video" :lang2="lang.P41.body8"></P41_Body8>
    <P41_Body9 id="Parameter" :lang2="lang.P41.body9"></P41_Body9>
    <Product_footer_button :lang2="lang.Productfooterbutton"></Product_footer_button>
  </div>
</template>

<script>
import Guide from "@/components/Commen/Guide.vue"
import P41_Banner from "../../components/Product_list/P41/P41_Banner";
import P41_Body1 from "../../components/Product_list/P41/P41_Body1";
import P41_Body2 from "../../components/Product_list/P41/P41_Body2";
import P41_Body3 from "../../components/Product_list/P41/P41_Body3";
import P41_Body4 from "../../components/Product_list/P41/P41_Body4";
import P41_Body5 from "../../components/Product_list/P41/P41_Body5";
import P41_Body6 from "../../components/Product_list/P41/P41_Body6";
import P41_Body7 from "../../components/Product_list/P41/P41_Body7";
import P41_Body8 from "../../components/Product_list/P41/P41_Body8";
import P41_Body9 from "../../components/Product_list/P41/P41_Body9";
import Product_footer_button from "../../components/Commen/Product_footer_button";

export default {
  name: "P41",
  props: {
    lang: {},
  },
  components: {
    Guide,
    P41_Banner,
    P41_Body1,
    P41_Body2,
    P41_Body3,
    P41_Body4,
    P41_Body5,
    P41_Body6,
    P41_Body7,
    P41_Body8,
    P41_Body9,
    Product_footer_button
  }
}
</script>

<style scoped>

</style>