<template>
  <div class="UPAM_Body4">
    <div class="color"></div>
    <div class="card">
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
    this.langc = this.en;
  },
  mounted() {
  }
}
</script>


<style>

.UPAM_Body4 {
  position: relative;
  width: 10rem;
  height: 3.671875rem;
  background-image: url(../../../assets/img/PC/Product/product_info/UPCAM/body_pic3.png);
  background-repeat: no-repeat;
  background-size: 4.65625rem, 3.010417rem;
  background-position-x: .291667rem;
}

.UPAM_Body4 .card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: .78125rem;
  left: 4.838542rem;
  width: 4.401042rem;
  height: 1.421875rem;
  background-color: #343434;
  z-index: 2;
}

.UPAM_Body4 .card h1 {
  /*margin-top: .296875rem;*/
  margin-left: .25rem;
  font-size: .25rem;
  line-height: 0.364583rem;
  color: white;
}

.UPAM_Body4 .card p {
  margin-left: .25rem;
  margin-top: .25625rem;
  /*font-size: .104167rem;*/
  /*line-height: .166667rem;*/
  font-size: 16PX;
  line-height: normal;
  color: white;
}

.UPAM_Body4 .color {
  position: absolute;
  right: 0;
  width: 4.083333rem;
  height: 2.734375rem;
  background-color: #f8f8f8;
  z-index: 1;
}

@media (max-width: 1024px) {
  .UPAM_Body4 .card p{
    font-size: 14PX;
  }
}

@media (max-width: 768px) {
  .UPAM_Body4 .card p{
    font-size: 12PX;
  }
}

@media (max-width: 576px) {
  .UPAM_Body4 {
    height: 12rem;
    background-size: 8.85625rem;
    background-position-x: .5667rem;
    background-position-y: bottom;
    background-color: #343434;
  }
  .UPAM_Body4 .color{
    display: none;
  }
  .UPAM_Body4 .card {
    width: auto;
    height: auto;
    position: relative;
    top: 20%;
    left: 50%;
    transform: translate(-50%);
    background: none;
    z-index: 2;
    text-align: center;
  }

  .UPAM_Body4 .card h1 {
    margin: 0;
    font-size: .5125rem;
    font-weight: 100;
    line-height: normal;
    margin-bottom: 1.4375rem;
  }

  .UPAM_Body4 .card p {
    margin: 0;
    font-size: .28125rem;
    font-weight: 100;
    color: white;
    margin-bottom: .4375rem;
    line-height: .5125rem;
  }
}

</style>