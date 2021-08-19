<template>
  <div class="UP300e_body2">
    <div class="content">
      <h1>{{ lang2.title }}</h1>
      <div class="img"></div>
      <p>{{ lang2.content[0] }}</p>
      <p>{{ lang2.content[1] }}</p>
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

.UP300e_body2 {
  position: relative;
  /* border: red solid .005208rem; */
  width: 10rem;
  height: 4.6875rem;
  background-image: url(../../../assets/img/PC/Product/product_info/UP300e/body_pic2.png);
  background-repeat: no-repeat;
  background-size: 5.333333rem, 3.322917rem;
  background-position: 3.229167rem .9375rem;;
}

.UP300e_body2 .content {
  padding-top: .859375rem;
  margin-left: 1.953125rem
}

.UP300e_body2 .content h1 {
  font-size: 0.28125rem;
  line-height: 0.333333rem;
  color: #343434;
}


.UP300e_body2 .content p {

  font-size: .25rem;
  line-height: .302083rem;
  color: #e48013;
  margin-top: .15625rem;
}

.UP300e_body2 .content p:last-child {

  font-size: .104167rem;
  color: #343434;
}

.UP300e_body2 .content .img {
  /* margin: auto; */
  width: .911458rem;
  height: .911458rem;
  /* border: solid .005208rem red; */
  background-image: url(../../../assets/img/PC/Small_Icon/PC-03.png);
  background-repeat: no-repeat;
  background-size: 6.859375rem, 2.75rem;
  background-position: -5.5125rem -0.60rem;
  margin-top: .885417rem;
  margin-left: .052083rem;
}

@media (max-width: 576px) {
  .UP300e_body2 {
    height: 12rem;
    position: relative;
    background-size: 12.5rem, 4.6875rem;
    background-position: -1.35125rem;
    background-position-y: bottom;
  }

  .UP300e_body2 .content {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    background-color: #fff;
    padding-top: 1.525rem;
    box-sizing: border-box;
  }
  .UP300e_body2 .content h1{
    font-size: .5125rem;
    font-weight: 100;
    color: #343434;
    line-height: normal;
  }
  .UP300e_body2 .content .img{
    width: 1.83333rem;
    height: 1.83333rem;
    background-size: 13.859375rem, 2.75rem;
    background-position: -11.25rem -1.1rem;;
    margin: 0;
    margin-top: .1333rem;
    margin-bottom: .5125rem;
  }
  .UP300e_body2 .content p{
    font-size: .325rem;
  }
}

</style>