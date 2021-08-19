<template>
  <div class="Product_body1">
    <div class="header bgpic1"></div>
    <p class="title">{{ lang2.big_title }}</p>
    <div class="bigcard wbg">
      <h1 v-html="lang2.content1"></h1>
      <p v-html="lang2.content2"></p>
      <img v-lazy='lang2.img'>
      <div class="bottom">
        <router-link :to='lang2.url1' class="b">
          <button> {{ lang2.bt1 }}</button>
        </router-link>
<!--        <router-link :to='lang2.url2' class="b">-->
<!--          <button>{{ lang2.bt2 }}</button>-->
<!--        </router-link>-->
      </div>
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
</style>