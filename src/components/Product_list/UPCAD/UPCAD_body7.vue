<template>
  <div class="UPCAD_body7">
    <div class="content">
      <h1>{{ lang2.title }}</h1>
      <p v-html="lang2.content"></p>
    </div>
  </div>
</template>

<script>


export default {
  props: {
    lang2: {},
  },
  components: {},

  // name: 'carrousel',
  data() {
    return {
      lang: {},
      playflag: '0'
    }
  },
  computed: {
    //   swiper() {
    //   return this.$refs.BolgSwiper.$swiper
    // }
  },

  watch: {
    //监听语言变化
    "$store.state.lang": function () {
      //   this.lang = this.$t("index").products;
    },
  },

  created() {
  },

  mounted() {
  },
  methods: {
    play() {
      this.$refs.video.play();
      this.playflag = 1;
      this.watchpaly = setInterval(this.repaly, 500);
      //   this.$refs.bg.style.display='none' ;
    },
    repaly() {
      if (this.$refs.video.ended == true) {
        this.playflag = 0;
        clearInterval(this.watchpaly);

      }
    }
  },
}
</script>


<style scoped>

.UPCAD_body7 {
  position: relative;
  width: 10rem;
  height: 3.302083rem;
  background-image: url(../../../assets/img/PC/Product/product_info/UPCAD/body_pic6.png);
  background-repeat: no-repeat;
  background-size: 3.848958rem, 1.5rem;
  background-position: 4.625rem, 1.0625rem;
  margin-bottom: .520833rem;
  display: flex;
  align-items: center;
}

.content{
  width: 6.5625rem;
  margin: 0 auto;
}

.UPCAD_body7 h1 {
  width: 2.8rem;
  font-size: 40PX;
  font-weight: 100;
  color: #343434;
}


.UPCAD_body7 p {
  width: 2.8rem;
  font-size: 16PX;
  margin-top: .3125rem;
  color: #343434;
}

@media (max-width: 1024px) {
  .UPCAD_body7 h1 {
    font-size: 30PX;
  }

  .UPCAD_body7 p {
    font-size: 14PX;
  }
}

@media (max-width: 768px) {
  .UPCAD_body7 h1 {
    font-size: 28PX;
  }

  .UPCAD_body7 p {
    font-size: 14PX;
  }
}

@media (max-width: 576px) {
  .UPCAD_body7 {
    height: 10rem;
    background-size: 8.348958rem;
    background-position: 0.825rem;
    background-position-y: 5.425rem;
    margin-bottom: .520833rem;
    padding-top: .8333rem;
    box-sizing: border-box;
    display: block;
  }

  .UPCAD_body7 h1 {
    width: fit-content;
    font-size: 28PX;
    font-weight: 100;
    line-height: normal;
    margin: 0 auto;
    padding: 0;
    margin-bottom: .4375rem;
    text-align: center;
  }

  .UPCAD_body7 p {
    width: fit-content;
    font-size: 14PX;
    font-weight: 100;
    color: #959595;
    margin: 0 auto;
    padding: 0;
    margin-bottom: .4375rem;
    line-height: normal;
  }
}

@media (max-width: 425px) {
  .UPCAD_body7 .content h1 {
    font-size: 24PX;
    white-space: nowrap;
  }
}

@media (max-width: 320px) {
  .UPCAD_body7{
    height: 11.5rem;
    background-position-y: 6.5rem;
  }
}


</style>