<template>
  <div class="P5_body3">
    <div class="content">
      <h1>{{ lang2.title }}</h1>
      <p v-html="lang2.content"></p>
    </div>
  </div>
</template>

<script>
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


<style scoped>

.P5_body3 {
  width: 10rem;
  height: 3.484375rem;
  background-image: url(../../../assets/img/PC/Product/product_info/P5/body_pic3.png);
  background-repeat: no-repeat;
  background-size: 5rem, 3.484375rem;
  background-color: black;
  background-position-x: right;
}

.P5_body3 .content {
  padding-top: 1.427083rem;
  margin-left: 1.6875rem;
}

.P5_body3 .content h1 {
  display: block;
  font-size: .25rem;
  line-height: .270833rem;
  color: #ffffff;
}

.P5_body3 .content p {
  display: block;
  margin-top: .265625rem;
  font-size: .104167rem;
  line-height: .270833rem;
  color: #ffffff;
}

</style>