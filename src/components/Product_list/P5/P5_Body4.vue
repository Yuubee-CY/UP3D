<template>
  <div class="P5_body4">
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

.P5_body4 {
  width: 10rem;
  height: 3.484375rem;
  background-image: url(../../../assets/img/PC/Product/product_info/P5/body_pic4.png);
  background-repeat: no-repeat;
  background-size: 2.526042rem, 2.296875rem;
  background-position-x: 1.71875rem;
  background-position-y: .739583rem;
}

.P5_body4 .content {
  padding-top: 1.427083rem;
  margin-left: 5.5rem;
}

.P5_body4 .content h1 {
  display: block;
  font-size: .25rem;
  line-height: .270833rem;
  color: #343434;
}

.P5_body4 .content p {
  display: block;
  margin-top: .265625rem;
  font-size: 20PX;
  line-height: normal;
  padding-right: .5125rem;
  color: #343434;
}

@media (max-width: 1024px) {
  .P5_body4 .content p{
    font-size: 14PX;
  }
}

@media (max-width: 768px) {
  .P5_body4 .content p{
    font-size: 12PX;
  }
}

@media (max-width: 576px) {
  .P5_body4 {
    height: 13rem;
    background-size: 6rem;
    background-position-x: 2.05rem;
    background-position-y: 6.5rem;
  }

  .P5_body4 .content{
    position: relative;
    top: 25%;
    transform: translateY(-50%);
    text-align: center;
    padding: 0 8%;
    margin: 0;
  }

  .P5_body4 .content h1 {
    position: relative;
    top: 0;
    left: 0;
    font-size: .5125rem;
    font-weight: 100;
    line-height: normal;
    margin-bottom: .6125rem;
    color: #343434;
  }

  .P5_body4 .content p {
    position: relative;
    top: 0;
    left: 0;
    font-size: .28125rem;
    line-height: .5125rem;
    font-weight: 100;
    color: #343434;
  }

}

</style>