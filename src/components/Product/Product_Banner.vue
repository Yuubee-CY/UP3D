<template>
<!--  <div class="Product_banner" v-lazy:background-image="this.bgImg">-->
  <div class="Product_banner">
  </div>
</template>

<script>
export default {
  props: {
    lang2: {},
  },
  // name: 'carrousel',
  data() {
    return {
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
    //页面初始化时判断是否小于768px
    let docImg = document.querySelector('.Product_banner')
    let PHSrc = "url("+ this.lang2.imgUrlPH +")"
    let PCSrc = "url("+ this.lang2.imgUrl +")"
    //页面初始化时判断是否小于768px
    if (window.innerWidth <= 576) {
      docImg.style.backgroundImage = PHSrc
    } else {
      docImg.style.backgroundImage = PCSrc
    }
    //监听屏幕宽度变化
    window.addEventListener('resize', () => {
      let screenWidth = window.innerWidth
      if (screenWidth <= 576) {
        docImg.style.backgroundImage = PHSrc
      } else {
        docImg.style.backgroundImage = PCSrc
      }
    })
  }
}
</script>


<style scoped>
.Product_banner {
  width: 10rem;
  height: 5rem;
  background-repeat: no-repeat;
  background-size: 10rem, 5rem;
}

@media (max-width: 768px) {

}

@media (max-width: 576px) {
  .Product_banner{
    height: 12rem;
    background-size: cover;
    background-position: center;
    background-position-y: bottom;
  }
}
</style>