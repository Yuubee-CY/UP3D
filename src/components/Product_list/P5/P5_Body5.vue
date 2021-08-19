<template>
  <div class="P5_body5">
    <div class="message_info">
      <div class="content-pc" v-for="(item,index) in lang2.message" :key="index">
        <h1>{{ item.title }}</h1>
        <p v-html="item.content"></p>
      </div>
      <img v-lazy=this.lang2.imgUrl alt="">
    </div>

    <div class="message_info_PH" v-for="(item,index1) in lang2.message" :key="'index1'+index1">
      <div class="content">
        <h1>{{ item.title }}</h1>
        <p v-html="item.content"></p>
      </div>
      <img v-lazy=item.imgUrlPH alt="">
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

.P5_body5 {
  width: 10rem;
  height: 5rem;
  box-sizing: border-box;
  position: relative;
}

.message_info{
  height: 100%;
}

.P5_body5 img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.P5_body5 .content-pc{
  position: absolute;
  width: 4.2rem;
}

.P5_body5 .content-pc:first-child{

  bottom: 7%;
  left: 56%;
  white-space: nowrap;
}

.P5_body5 .content-pc:nth-child(2){
  width: 3.5rem;
  bottom: 7%;
  left: 12%;
}

.P5_body5 h1 {
  font-size: 0.25rem;
  color: #fff;
}

.P5_body5 p {
  font-size: 20PX;
  margin-top: 0.104167rem;
  color: #fff;
}

.message_info_PH {
  display: none;
}

@media (max-width: 1024px) {
  .P5_body5 p {
    font-size: 16PX;
  }
}

@media (max-width: 768px) {
  .P5_body5 p {
    font-size: 14PX;
  }
}

@media (max-width: 576px) {

  .P5_body5{
    height: auto;
  }

  .message_info {
    display: none;
  }

  .message_info_PH {
    display: block;
    position: relative;
    height: 14rem;
    margin-bottom: 1PX;
  }

  .P5_body5 .message_info_PH .content {
    width: 70%;
    position: absolute;
    bottom: 15%;
    left: 50%;
    transform: translate(-50%);
    padding: 0;
    margin: 0;
    text-align: center;
  }

  .content h1 {
    font-size: .5125rem;
    font-weight: 100;
    line-height: normal;
    margin-bottom: .6125rem;
  }

  .content p {
    font-size: .28125rem;
    line-height: .5125rem;
    font-weight: 100;
  }
}
</style>