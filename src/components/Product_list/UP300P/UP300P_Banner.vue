<template>
  <div class="UP300p_banner">
    <div class="content">
      <h1>{{ lang2.title }} <span class="s-title">{{ lang2.s_title }}</span></h1>
      <p>{{ lang2.content }} <span class="s-content">{{ lang2.s_content }}</span></p>
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


.UP300p_banner {
  position: relative;
  width: 10rem;
  height: 5.09375rem;
  background-image: url(../../../assets/img/PC/Product/product_info/UP300P/banner.png);
  background-repeat: no-repeat;
  background-size: 10rem, 5.09375rem;
}

.UP300p_banner .content {
  position: absolute;
  left: 35%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.UP300p_banner p {
  font-size: 28PX;
  font-weight: normal;
  color: #1e1e1e;
}

.UP300p_banner h1 {
  font-size: 60PX;
  line-height: normal;
  font-weight: 100;
  color: #e48013;
}

.UP300p_banner .s-title {
  display: inline-block;
  color: #343434;
  /*font-size: .1625rem;*/
  font-size: 28PX;
  font-weight: normal;
  vertical-align: middle;
  margin-left: .125rem;
}

.UP300p_banner .s-content {
  display: inline-block;
  color: #E48013;
  margin-left: -.03rem;
}

@media (max-width: 1024px) {

  .UP300p_banner .content {
    left: 28%;
  }

  .UP300p_banner h1 {
    font-size: 54PX;
  }

  .UP300p_banner p {
    font-size: 20PX;
  }

}


@media (max-width: 767px) {
  .UP300p_banner {
    height: 10rem;
    background-size: cover;
    background-position: -7.8rem;
    position: relative;
  }

  .UP300p_banner .content {
    top: 45%;
    left: 50%;
    padding: 0;
    margin: 0;
    text-align: center;
    white-space: nowrap;
  }

  .UP300p_banner div h1 {
    /*font-size: .620833rem;*/
    font-weight: normal;
    /*line-height: .620833rem;*/
    font-size: 42PX;
    color: white;
  }

  .UP300p_banner div p {
    /*font-size: .247083rem;*/
    /*line-height: .247083rem;*/
    font-size: 18PX;
    color: white;
    margin-top: .51253rem;
  }

  .UP300p_banner .s-title {
    display: inline-block;
    color: white;
    /*font-size: .1625rem;*/
    font-size: 18PX;
    font-weight: normal;
    vertical-align: middle;
    margin-left: .125rem;
  }

  .UP300p_banner .s-content {
    display: inline-block;
    color: white;
  }
}

@media (max-width: 576px) {
  .UP300p_banner div h1 {
    font-size: 36PX;
  }

}


</style>