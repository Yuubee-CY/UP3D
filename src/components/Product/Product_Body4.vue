<template>
  <div class="Product_body1">
    <div class="header"></div>
    <p class="title">{{ lang2.big_title }}</p>
    <div class="bigcard">

      <div class="smallcard" v-for="(item,index) in lang2.card" :key="index">
        <h1>{{ item.small_title }}</h1>
        <p class="info" v-html="item.content1">
        <p>
        <p class="hightlight" v-html="item.content2"></p>
        <div class="bottom">
          <router-link :to='item.url1' class="b">
            <button> {{ item.bt1 }}</button>
          </router-link>
          <router-link :to='item.url2' class="b">
            <button>{{ item.bt2 }}</button>
          </router-link>
        </div>
        <img class='p' v-lazy='item.img' :key="item.img">
      </div>

      <swiper :options="swiperOptions">
        <swiper-slide class="smallcard" v-for="(item,index) in lang2.card" :key="index">
          <h1>{{ item.small_title }}</h1>
          <p class="info" v-html="item.content1">
          <p>
          <p class="hightlight" v-html="item.content2"></p>
          <div class="bottom">
            <router-link :to='item.url1' class="b">
              <button> {{ item.bt1 }}</button>
            </router-link>
            <router-link :to='item.url2' class="b">
              <button>{{ item.bt2 }}</button>
            </router-link>
          </div>
          <img class='p' :src='item.img'>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="swiper-button-next"></div>
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
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },//这样写小圆点就有了
        // loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
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