<template>
  <div class="UPAM_Body5">
    <div class="content">
      <h1>{{ lang2.title }}</h1>
      <p v-html="lang2.content"></p>
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
  },
  mounted() {
  }
}
</script>


<style>

.UPAM_Body5 {
  position: relative;
  width: 10rem;
  height: 3.0625rem;
  background-image: url(../../../assets/img/PC/Product/product_info/UPCAM/body_pic1.png);
  background-repeat: no-repeat;
  background-size: 10rem, 3.0625rem;
}

.UPAM_Body5 .content{
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.UPAM_Body5 h1 {
  margin: auto;
  width: max-content;
  font-size: .25rem;
  line-height: normal;
  color: #ffffff;
}

.UPAM_Body5 p {
  margin: auto;
  margin-top: .432292rem;
  width: 55%;
  font-size: 16PX;
  line-height: normal;
  text-align: center;
  color: #ffffff;
}

@media (max-width: 1024px) {
  .UPAM_Body5 p{
    font-size: 14PX;
  }
}

@media (max-width: 768px) {
  .UPAM_Body5 p{
    font-size: 12PX;
  }
}

@media (max-width: 576px) {
  .UPAM_Body5 {
    height: 12rem;
    background-size: 39.95rem;
    background-position-x: -13rem;
  }

  .UPAM_Body5 .content {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 10%;
    box-sizing: border-box;
  }

  .UPAM_Body5 h1 {
    width: 100%;
    padding: 0;
    margin: 0;
    font-size: .5125rem;
    font-weight: 100;
    line-height: normal;
    margin-bottom: 1.4375rem;
    color: #ffffff;
  }

  .UPAM_Body5 p {
    margin: 0;
    padding: 0;
    width: 100%;
    font-size: .28125rem;
    font-weight: 100;
    color: white;
    margin-bottom: .4375rem;
    line-height: .6333rem;
    text-align: left;
  }
}

</style>