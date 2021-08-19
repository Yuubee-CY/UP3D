<template>
  <div class="P5_banner">
    <h1>{{ lang2.title }}</h1>
    <p>{{ lang2.content }}</p>
  </div>
</template>

<script scoped>
export default {
  props: {
    lang2: {},
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

.P5_banner {
  width: 10rem;
  height: 4.833333rem;
  background-image: url(../../../assets/img/PC/Product/product_info/P5/banner.png);
  background-repeat: no-repeat;
  background-size: 10rem, 4.833333rem;
}

.P5_banner h1 {
  position: absolute;
  top: 1.979167rem;
  left: 5.276042rem;
  font-size: 0.3125rem;
  line-height: 0.364583rem;
  color: #e48013;
}

.P5_banner p {
  position: absolute;
  top: 2.395833rem;
  left: 5.276042rem;
  font-size: 0.177083rem;
  line-height: 0.364583rem;
  color: white;
}

</style>