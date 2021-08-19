<template>
  <div class="UP360P">
    <Guide :lang2="lang.Commen_Guide"></Guide>
    <UP360P_Banner :lang2="lang.UP360P.banner"></UP360P_Banner>
    <UP360PBody1 id="Accuracy" :lang2="lang.UP360P.body1"></UP360PBody1>
    <UP360PBody2 :lang2="lang.UP360P.body2"></UP360PBody2>
    <UP360PBody3 :lang2="lang.UP360P.body3"></UP360PBody3>
    <UP360PBody4 :lang2="lang.UP360P.body4"></UP360PBody4>
    <loopPic id="Function" :lang2="lang.LoopPic"></loopPic>
    <Productbuttombanner :lang2="lang.Productbuttombanner"></Productbuttombanner>
    <UP360PBody5 id="Video" :lang2="lang.UP360P.body5"></UP360PBody5>
    <UP360PBody6 id="Parameter" :lang2="lang.UP360P.body6"></UP360PBody6>
    <Productfooterbutton :lang2="lang.Productfooterbutton"></Productfooterbutton>
  </div>

</template>

<script>
import Guide from "@/components/Commen/Guide.vue"
import loopPic from "@/components/Commen/loopPic.vue"
import Productbuttombanner from "@/components/Commen/Product_buttom_banner.vue"
import Productfooterbutton from "@/components/Commen/Product_footer_button.vue"
import UP360P_Banner from '@/components/Product_list/UP360P/UP360P_Banner.vue'
import UP360PBody1 from '@/components/Product_list/UP360P/UP360P_Body1.vue'
import UP360PBody2 from '@/components/Product_list/UP360P/UP360P_Body2.vue'
import UP360PBody3 from '@/components/Product_list/UP360P/UP360P_Body3.vue'
import UP360PBody4 from '@/components/Product_list/UP360P/UP360P_Body4.vue'
import UP360PBody5 from '@/components/Product_list/UP360P/UP360P_Body5.vue'
import UP360PBody6 from '@/components/Product_list/UP360P/UP360P_Body6.vue'

export default {
  props: {
    lang: {},
  },

  components: {
    Guide,
    loopPic,
    UP360P_Banner,
    UP360PBody1,
    UP360PBody2,
    UP360PBody3,
    UP360PBody4,
    Productbuttombanner,
    UP360PBody5,
    UP360PBody6,
    Productfooterbutton
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
    // console.log(this.lang.UP360P.Banner)
  },


  watch: {
    //监听语言变化
    '$store.state.lang': function () {
      if (this.$store.state.lang == '中文'){
        document.querySelector('#Video').style.display = 'none'
      }else {
        document.querySelector('#Video').style.display = 'block'
      }
    },
  },

  mounted() {
    if (this.$store.state.look_vide != '') {
      document.getElementById(this.$store.state.look_vide).scrollIntoView({
        behavior: "smooth",  // 平滑过渡
        block: "start"  // 上边框与视窗顶部平齐。默认值
      });
    }
    setTimeout(() => {
      if (this.$store.state.lang == '中文'){
        document.querySelector('#Video').style.display = 'none'
      }
    }, .0001)
  },
  methods: {},
}
</script>


<style scoped>

.UP360P {
  position: relative;
  width: 10rem;
  overflow: hidden;
}
</style>