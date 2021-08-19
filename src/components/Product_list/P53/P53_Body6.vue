<template>
  <div class="P53_Body6">
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

.P53_Body6 {
  width: 10rem;
  height: 4.302083rem;
  background-image: url(../../../assets/img/PC/Product/product_info/P53/P53_4.png);
  background-repeat: no-repeat;
  background-size: 10rem, 4.302083rem;
}

.P53_Body6 .content {
  width: max-content;
  padding-top: 1rem;
  margin: auto;
  text-align: center;
}

.P53_Body6 .content h1 {
  font-size: 0.25rem;
  color: #FFB15B;
}

.P53_Body6 .content p {
  margin-top: 0.1875rem;
  /*font-size: 0.15625rem;*/
  font-size: 20PX;
  color: #ffffff;
}

@media (max-width: 1024px) {
  .P53_Body6 .content p{
    font-size: 16PX;
  }
}

@media (max-width: 768px) {
  .P53_Body6 .content p{
    font-size: 14PX;
  }
}

@media (max-width: 576px) {
  .P53_Body6 {
    height: 13rem;
    background-image: url(../../../assets/img/PC/Product/product_info/P5/body_pic6_1.png);
    background-size: cover;
    background-position-y: -1rem;
  }

  .P53_Body6 .content {
    width: max-content;
    padding-top: 1.5rem;
    margin: 0 auto;
    text-align: center;
    width: 80%;
  }

  .P53_Body6 .content h1 {
    font-size: .5125rem;
    font-weight: 100;
    line-height: normal;
    margin-bottom: .6125rem;
    color: #ffffff;
  }

  .P53_Body6 .content p {
    font-size: .28125rem;
    line-height: .5125rem;
    font-weight: 100;
    color: #ffffff;
  }
}
</style>