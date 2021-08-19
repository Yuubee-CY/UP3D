<template>
  <div class="UPAM_Banner">
    <div class="content">
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

.UPAM_Banner {
  width: 10rem;
  height: 4.833333rem;
  background-image: url(../../../assets/img/PC/Product/product_info/UPCAM/banner.png);
  background-repeat: no-repeat;
  background-size: 10rem, 4.833333rem;
  position: relative;
}

.UPAM_Banner .content {
  position: absolute;
  right: 10%;
  top: 55%;
  transform: translateY(-50%);
}

.UPAM_Banner h1 {
  font-size: .3125rem;
  font-weight: 100;
  color: white;
}

.UPAM_Banner p {
  font-size: .3125rem;
  text-align: right;
  color: white;
}

@media (max-width: 1024px) {
  .UPAM_Banner h1 {
    font-size: 32PX;
  }

  .UPAM_Banner p {
    font-size: 32PX;
  }
}

@media (max-width: 767px) {
  .UPAM_Banner {
    height: 10rem;
    background-size: 19rem;
    background-position: -5.125rem;
    background-position-y: 0.8125rem;
    background-color: black;
  }

  .UPAM_Banner .content {
    position: absolute;
    right: auto;
    left: 50%;
    top: 30%;
    transform: translate(-50%);
    white-space: nowrap;
  }

  .UPAM_Banner div h1::before {
    content: 'UPCAM';
    display: block;
    position: absolute;
    top: -1.7125rem;
    left: 50%;
    transform: translate(-50%);
    color: #E48013;
    /*font-size: .8333rem;*/
    font-size: 44PX;
    font-weight: normal;
    line-height: normal;
  }

  .UPAM_Banner div p {
    display: none;
  }
}

@media (max-width: 425px) {
  .UPAM_Banner h1 {
    font-size: 24PX;
  }

  .UPAM_Banner div h1::before {
    font-size: 36PX;
  }

}

</style>