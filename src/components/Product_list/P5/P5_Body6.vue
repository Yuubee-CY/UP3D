<template>
  <div class="P5_body6">
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

.P5_body6 {
  width: 10rem;
  height: 4.302083rem;
  background-image: url(../../../assets/img/PC/Product/product_info/P5/body_pic6.png);
  background-repeat: no-repeat;
  background-size: 10rem, 4.302083rem;
  margin-top: 1PX;
}

.P5_body6 .content {
  width: max-content;
  padding-top: 1rem;
  margin: auto;
  text-align: center;
}

.P5_body6 .content h1 {
  font-size: 0.25rem;
  color: #FEBB6F;
}

.P5_body6 .content p {
  margin-top: 0.1875rem;
  font-size: 0.15625rem;
  color: #ffffff;
}


@media (max-width: 576px) {
  .P5_body6 {
    height: 13rem;
    background-image: url(../../../assets/img/PC/Product/product_info/P5/body_pic6_1.png);
    background-size: cover;
    background-position-y: -1rem;
  }

  .P5_body6 .content {
    width: max-content;
    padding-top: 1.5rem;
    margin: 0 auto;
    text-align: center;
    width: 80%;
  }

  .P5_body6 .content h1 {
    font-size: .5125rem;
    font-weight: 100;
    line-height: normal;
    margin-bottom: .6125rem;
    color: #ffffff;
  }

  .P5_body6 .content p {
    font-size: .28125rem;
    line-height: .5125rem;
    font-weight: 100;
    color: #ffffff;
  }
}
</style>