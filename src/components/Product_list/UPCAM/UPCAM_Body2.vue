<template>
  <div class="UPAM_Body2">
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

.UPAM_Body2 {
  position: relative;
  width: 10rem;
  height: 4.6875rem;
  background-image: url(../../../assets/img/PC/Product/product_info/UPCAM/body_pic4.jpg);
  background-repeat: no-repeat;
  background-size: 10rem, 4.6875rem;
}

.UPAM_Body2 h1 {
  position: absolute;
  top: 1.234375rem;
  left: 1.177083rem;
  font-size: .25rem;
  line-height: 0.364583rem;
  color: #343434;
}

.UPAM_Body2 p {
  position: absolute;
  top: 1.666667rem;
  left: 1.177083rem;
  /*font-size: .104167rem;*/
  /*line-height: 0.364583rem;*/
  font-size: 16PX;
  color: black;
}

@media (max-width: 1024px) {
  .UPAM_Body2 h1 {
    font-size: 24PX;
  }

  .UPAM_Body2 p {
    font-size: 14PX;
  }

}

@media (max-width: 768px) {
  .UPAM_Body2 h1 {
    font-size: 20PX;
  }

  .UPAM_Body2 p {
    font-size: 12PX;
  }
}

@media (max-width: 576px) {
  .UPAM_Body2 {
    height: 10rem;
    background-repeat: no-repeat;
    background-size: 10rem, 4.6875rem;
    background-position-y: bottom;
  }

  .UPAM_Body2 .content {
    position: relative;
    top: 25%;
    transform: translateY(-50%);
    width: auto;
    height: auto;
    padding: 0 10%;
    box-sizing: border-box;
  }

  .UPAM_Body2 h1 {
    position: relative;
    top: 0;
    left: 0;
    font-size: .5125rem;
    font-weight: 100;
    line-height: normal;
    margin-bottom: .4375rem;
    color: #343434;
  }

  .UPAM_Body2 p {
    position: relative;
    top: 0;
    left: 0;
    font-size: .28125rem;
    font-weight: 100;
    color: #959595;
    margin: 0;
    padding: 0;
    margin-bottom: .4375rem;
    line-height: normal;
  }
}

</style>