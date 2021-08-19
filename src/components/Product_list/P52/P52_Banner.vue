<template>
  <div class="P52_banner">
    <div class="content">
      <h1>{{ lang2.title }}</h1>
      <p>{{ lang2.content }}</p>
    </div>
    <img :src="lang2.imgSrc" alt="">
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


<style scoped>

.P52_banner {
  width: 10rem;
  height: 4.833333rem;
  position: relative;
}

.P52_banner img {
  width: 100%;
  height: auto;
}

.P52_banner .content{
  position: absolute;
  left: 20%;
  top: 50%;
  transform: translateY(-50%);
}

.P52_banner h1 {
  font-size: 48PX;
  font-weight: 100;
  color: white;
}

.P52_banner p {
  font-size: 28PX;
  color: white;
}

@media (max-width: 768px) {
  .P52_banner h1 {
    font-size: 36PX;
    font-weight: 100;
    color: white;
  }

  .P52_banner p {
    font-size: 20PX;
    color: white;
  }
}

@media (max-width: 576px) {
  .P52_banner {
    height: 10rem;
    background-size: 20.75rem;
    background-position-x: -5.6rem;
  }

  .P52_banner img {
    width: auto;
    height: 100%;
    position: absolute;
    left: -60%;
    z-index: 5;
  }

  .P52_banner .content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
  }
  .P52_banner h1 {
    display: none;
  }

  .P52_banner p {
    text-align: center;
    font-size: .4125rem;
    line-height: normal;
    font-weight: 100;
    color: white;
  }
}

</style>