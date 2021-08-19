<template>
  <div class="UP300P_body2">
    <div class="content">
      <h1>{{ lang2.title }}</h1>
      <p>{{ lang2.content }}</p>
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

.UP300P_body2 {
  position: relative;
  width: 10rem;
  height: 6.25rem;
}

.UP300P_body2 .content {
  position: absolute;
  top: 45%;
  left: 20%;
  transform: translateY(-50%);
}

.UP300P_body2 h1 {
  font-size: 48PX;
  font-weight: 100;
  color: #343434;
}

.UP300P_body2 p {
  /*font-size: 0.104167rem;*/
  font-size: 16PX;
  width: 3.5rem;
  color: #FEBB6F;
  margin-top: .3125rem;
}

.UP300P_body2 {
  background-image: url(../../../assets/img/PC/Product/product_info/UP300P/body_pic3.png);
  background-repeat: no-repeat;
  background-size: 13rem;
  background-position-y: .75rem;
  background-position-x: -1.7rem;
}

@media (max-width: 1024px) {
  .UP300P_body2 h1 {
    font-size: 42PX;
  }

}

@media (max-width: 768px) {
  .UP300P_body2 h1 {
    font-size: 32PX;
  }

  .UP300P_body2 p {
    font-size: 14PX;
  }
}

@media (max-width: 576px) {
  .UP300P_body2 {
    height: 12rem;
    background-size: 20rem;
    background-position: -9.1rem 3.1rem;
    background-color: #f8f8f8;
  }

  .UP300P_body2 .content {
    position: relative;
    left: auto;
    top: 15%;
    padding: 0;
    text-align: center;
    transform: none;
  }

  .UP300P_body2 .content h1 {
    /*font-size: .5125rem;*/
    font-size: 30PX;
    font-weight: 100;
    margin: 0;
    margin-bottom: .4375rem;
  }

  .UP300P_body2 .content p:nth-child(2) {
    /*color: #959595;*/
    margin: 0 auto;
    width: 70%;
    line-height: normal;
  }
}

@media (max-width: 375px) {
  .UP300P_body2 .content h1 {
    font-size: 24PX;
  }

  .UP300P_body2 .content p:nth-child(2) {
    font-size: 12PX;
  }

}


</style>