<template>
  <div class="UPAM_Body3">
    <div class="content">
      <h1>{{ lang2.title }}</h1>
      <p v-for="(item,index) in lang2.message" :key="index" v-html="item.content"></p>
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


<style scoped>

.UPAM_Body3 {
  position: relative;
  width: 10rem;
  height: auto;
  background-image: url(../../../assets/img/PC/Product/product_info/UPCAM/body_pic2.png);
  background-repeat: no-repeat;
  background-size: 5.546875rem, 1.588542rem;
  background-position-y: 2.083333rem;
  background-position-x: 3.927083rem;
  padding-bottom: 1.234375rem;
}

.UPAM_Body3 h1 {
  position: absolute;
  top: 1.234375rem;
  left: 1.177083rem;
  font-size: .25rem;
  line-height: 0.364583rem;
  color: #343434;
}

.UPAM_Body3 p {
  margin-left: 1.177083rem;
  margin-top: .234375rem;
  width: 2.65625rem;
  /*font-size: .104167rem;*/
  /*line-height: .166667rem;*/
  font-size: 16PX;
  line-height: normal;
  color: black;
}

.UPAM_Body3 p:nth-child(2) {
  padding-top: 1.90625rem;
}

@media (max-width: 1024px) {
  .UPAM_Body3 p {
    font-size: 14PX;
  }
}

@media (max-width: 768px) {
  .UPAM_Body3 p {
   font-size: 12PX;
  }
}

@media (max-width: 576px) {
  .UPAM_Body3 {
    height: 14rem;
    background-size: 25.546875rem;
    background-position-y: bottom;
    background-position-x: -7.072917rem;
    padding-top: .5125rem;
  }

  .UPAM_Body3 .content{
    position: relative;
    top: 27%;
    height: auto;
    width: auto;
    transform: translateY(-50%);
    padding: 0 10%;
    box-sizing: border-box;
  }

  .UPAM_Body3 h1 {
    position: relative;
    top: 0;
    left: 0;
    font-size: .5125rem;
    font-weight: 100;
    line-height: normal;
    margin-bottom: .4375rem;
    color: #343434;
  }

  .UPAM_Body3 p {
    margin: 0;
    width: 100%;
    font-size: .28125rem;
    font-weight: 100;
    color: #959595;
    margin: 0;
    padding: 0;
    margin-bottom: .4375rem;
    line-height: .512rem;
  }

  .UPAM_Body3 p:nth-child(2) {
    padding-top: 0.90625rem;
  }

}

</style>