<template>
  <div class="P5_body1">
    <div class="message_info" v-for="(item,index) in lang2.message" :key="index">
      <h1>{{ item.title }}</h1>
      <p v-html="item.content"></p>
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

.P5_body1 {
  width: 10rem;
  height: 4.401042rem;
  background-image: url(../../../assets/img/PC/Product/product_info/P5/body_pic1.png);
  background-repeat: no-repeat;
  background-size: 2.927083rem, 2.958333rem;
  background-position: center;
}

.P5_body1 .message_info {
  float: left;;
  width: 2.604167rem;
  /* height: max-content; */
  margin-top: 0.9rem;
  margin-left: .6rem;
  text-align: right;
  /* border: red solid .005208rem;; */

}


.P5_body1 .message_info h1 {
  font-size: .166667rem;
  line-height: .270833rem;
  color: #343434;
}

.P5_body1 .message_info p {
  max-width: 2.604167rem;
  margin-top: .208333rem;
  font-size: .083333rem;
  line-height: .140625rem;
  color: #e48013;
}

/* 偶数选中 */
.P5_body1 .message_info:nth-child(even) {
  margin-left: 3.5rem;
  text-align: left;
}
</style>