<template>
  <div class="UP300e_banner">
    <div>
      <h1>{{ lang2.title }}</h1>
      <p>{{ lang2.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lang2: {},
  },
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


.UP300e_banner {
  position: relative;
  width: 100%;
  height: 4.833333rem;
  background-image: url(../../../assets/img/PC/Product/product_info/UP300e/banner.png);
  background-repeat: no-repeat;
  background-size: 10rem, 4.833333rem;
  background-position-x: center;
  background-position-y: center;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.16);
  z-index: 10;
}

.UP300e_banner p {
  position: absolute;
  top: 2.20833rem;
  left: 1.953125rem;
  font-size: 0.177083rem;
  font-weight: normal;
  letter-spacing: 0rem;
  color: #1e1e1e;
}

.UP300e_banner h1 {
  font-family: Montserrat;
  position: absolute;
  top: 1.729167rem;
  left: 1.953125rem;
  font-size: 0.3125rem;
  line-height: 0.359375rem;
  color: #e48013;
}

@media (max-width: 767px) {
  .UP300e_banner {
    height: 10rem;
    background-size: 14rem, 4.833333rem;
    background-position-x: -4.6125rem;
    background-position-y: bottom;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.16);
  }

  .UP300e_banner div {
    position: relative;
    left: 50%;
    top: 15%;
    transform: translate(-50%, -50%);
    padding: 0;
    margin: 0;
    text-align: center;
    white-space: nowrap;
  }

  .UP300e_banner div h1 {
    top: 0;
    left: 50%;
    transform: translate(-50%);
    font-size: .620833rem;
    font-weight: normal;
    line-height: .620833rem;
    color: #E48013;
  }

  .UP300e_banner div p {
    top: .6125rem;
    left: 50%;
    transform: translate(-50%);
    font-size: .247083rem;
    line-height: .247083rem;
    color: #959595;
    margin-top: .51253rem;

  }
}
</style>