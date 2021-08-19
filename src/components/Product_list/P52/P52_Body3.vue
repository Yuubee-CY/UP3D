<template>
  <div class="P52_body3">
    <div class="content">
      <h1>{{ lang2.title }}</h1>
      <p>{{ lang2.content }}</p>
    </div>
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

.P52_body3 {
  position: relative;
  width: 10rem;
  height: 4.833333rem;
  background-image: url(../../../assets/img/PC/Product/product_info/P52/body_pic2.png);
  background-repeat: no-repeat;
  /*background-size: 10rem, 4.833333rem;*/
  background-size: cover;
}

.P52_body3 h1 {
  position: absolute;
  top: 1.885417rem;
  left: 2.479167rem;
  font-size: .28125rem;
  line-height: 0.364583rem;
  color: white;
}

.P52_body3 p {
  position: absolute;
  top: 2.479167rem;
  left: 2.479167rem;
  font-size: .104167rem;
  /*line-height: .166667rem;*/
  line-height: normal;
  color: white;
}

@media (max-width: 1024px) {
  .P52_body3 p{
    font-size: 14PX;
  }
}

@media (max-width: 768px) {
  .P52_body3 p{
    font-size: 12PX;
  }
}

@media (max-width: 576px) {

  .P52_body3 {
    height: 12rem;
    background-size: 26rem;
    background-position-x: -8.95rem;
  }

  .P52_body3 .content{
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    padding: 0 8%;
  }

  .P52_body3 h1 {
    position: relative;
    top: 0;
    left: 0;
    font-size: .5125rem;
    font-weight: 100;
    line-height: normal;
    margin-bottom: .6125rem;
    color: white;
  }

  .P52_body3 p {
    position: relative;
    top: 0;
    left: 0;
    font-size: .28125rem;
    line-height: .5125rem;
    font-weight: 100;
    color: white;
  }

}


</style>