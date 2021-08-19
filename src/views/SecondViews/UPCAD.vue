<template>
  <div id="UPCAD">
    <UPCADbanner :lang2="lang.UPCAD.banner"></UPCADbanner>
    <UPCADbody1 :lang2="lang.UPCAD.body1"></UPCADbody1>
    <UPCADbody2 :lang2="lang.UPCAD.body2"></UPCADbody2>
    <UPCADbody3 :lang2="lang.UPCAD.body3"></UPCADbody3>
    <UPCADbody4 :lang2="lang.UPCAD.body4"></UPCADbody4>
    <UPCADbody5 :lang2="lang.UPCAD.body5"></UPCADbody5>

    <UPCADbody6 :lang2="lang.UPCAD.body6"></UPCADbody6>
    <UPCADbody7 :lang2="lang.UPCAD.body7"></UPCADbody7>
    <UPCADbody8 :lang2="lang.UPCAD.body8"></UPCADbody8>
  </div>

</template>

<script>
import UPCADbanner from "@/components/Product_list/UPCAD/UPCAD_banner.vue"
import UPCADbody1 from "@/components/Product_list/UPCAD/UPCAD_body1.vue"
import UPCADbody2 from "@/components/Product_list/UPCAD/UPCAD_body2.vue"
import UPCADbody3 from "@/components/Product_list/UPCAD/UPCAD_body3.vue"
import UPCADbody4 from "@/components/Product_list/UPCAD/UPCAD_body4.vue"
import UPCADbody5 from "@/components/Product_list/UPCAD/UPCAD_body5.vue"
import UPCADbody6 from "@/components/Product_list/UPCAD/UPCAD_body6.vue"
import UPCADbody7 from "@/components/Product_list/UPCAD/UPCAD_body7.vue"
import UPCADbody8 from "@/components/Product_list/UPCAD/UPCAD_body8.vue"


export default {
  props: {
    lang: {},
  },
  components: {

    UPCADbanner,
    UPCADbody1,
    UPCADbody2,
    UPCADbody3,
    UPCADbody4,
    UPCADbody5,
    UPCADbody6,
    UPCADbody7,
    UPCADbody8,
  },
  // name: 'carrousel',
  data() {
    return {
      langc: {},
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


<style scoped>

#UPCAD {
  position: relative;
  /* font-family: Montserrat; */
  width: 10rem;
  overflow: hidden;
}


</style>