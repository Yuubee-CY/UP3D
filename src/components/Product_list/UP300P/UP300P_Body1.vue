<template>
  <div class="UP300P_body1">
    <img v-lazy="require('../../../assets/img/PC/Product/product_info/UP300P/body_pic2.png')">
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

.UP300P_body1 {
  position: relative;
  /* border: red solid .005208rem; */
  width: 10rem;
  height: 4.59167rem;
  /*background-image: url(../../../assets/img/PC/Product/product_info/UP300P/body_pic2.png);*/
  /*background-repeat: no-repeat;*/
  /*background-size: 10rem, 3.729167rem;*/
  font-weight: normal;
  /*margin-bottom: .484375rem;*/
}

.UP300P_body1 img {
  width: 100%;
  height: auto;
}

.UP300P_body1 .content {
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translateY(-50%);
}

.UP300P_body1 h1 {
  font-size: 48PX;
  font-weight: 100;
  color: #343434;
}

.UP300P_body1 p {
  /*font-size: 0.104167rem;*/
  font-size: 16PX;
  width: 3.2rem;
  margin-top: .3125rem;
  line-height: normal;
  color: #343434;
}

@media (max-width: 1024px) {
  .UP300P_body1 h1 {
    font-size: 42PX;
  }
}

@media (max-width: 768px) {
  .UP300P_body1 h1 {
    font-size: 36PX;
  }

  .UP300P_body1 p {
    font-size: 14PX;
  }
}

@media (max-width: 576px) {
  .UP300P_body1 {
    display: flex;
    flex-direction: column-reverse;
    height: auto;
    align-items: center;
    justify-content: space-evenly;
  }

  .UP300P_body1 img {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: auto;
  }

  .UP300P_body1 .content {
    position: relative;
    left: auto;
    margin: .8333rem 1.5rem;
    padding: 0;
    text-align: center;
    transform: none;
  }

  .UP300P_body1 .content h1 {
    font-size: 30PX;
    font-weight: 100;
    margin: 0;
    margin-bottom: .4375rem;
  }

  .UP300P_body1 .content p:nth-child(2) {
    color: #959595;
    margin: 0 auto;
    width: auto;
    line-height: normal;
  }
}

@media (max-width: 375px) {
  .UP300P_body1 .content h1 {
    font-size: 24PX;
  }
  .UP300P_body1 .content p:nth-child(2) {
    font-size: 12PX;
  }

}


</style>