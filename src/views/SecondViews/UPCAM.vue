<template>
  <div class="UPCAM">
    <UPCAMBanner :lang2="lang.UPCAM.banner"></UPCAMBanner>
    <UPCAMBody1 :lang2="lang.UPCAM.body1"></UPCAMBody1>
    <UPCAMBody2 :lang2="lang.UPCAM.body2"></UPCAMBody2>
    <UPCAMBody3 :lang2="lang.UPCAM.body3"></UPCAMBody3>
    <UPCAMBody4 :lang2="lang.UPCAM.body4"></UPCAMBody4>
    <UPCAMBody5 :lang2="lang.UPCAM.body5"></UPCAMBody5>

    <Productfooterbutton :lang2="lang.Productfooterbutton"></Productfooterbutton>
  </div>
</template>

<script scoped>
import UPCAMBanner from "@/components/Product_list/UPCAM/UPCAM_Banner.vue"
import UPCAMBody1 from "@/components/Product_list/UPCAM/UPCAM_Body1.vue"
import UPCAMBody2 from "@/components/Product_list/UPCAM/UPCAM_Body2.vue"
import UPCAMBody3 from "@/components/Product_list/UPCAM/UPCAM_Body3.vue"
import UPCAMBody4 from "@/components/Product_list/UPCAM/UPCAM_Body4.vue"
import UPCAMBody5 from "@/components/Product_list/UPCAM/UPCAM_Body5.vue"


import Productfooterbutton from "@/components/Commen/Product_footer_button.vue"

export default {
  props: {
    lang: {},
  },
  components: {

    UPCAMBanner,
    UPCAMBody1,
    UPCAMBody2,
    UPCAMBody3,
    UPCAMBody4,
    UPCAMBody5,
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