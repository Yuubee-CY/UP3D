<template>
  <div class="UP360P_body3">
    <div class="content">
      <div class="ct-info">
        <h1>{{ lang2.title }}</h1>
        <p>{{ lang2.content }}</p>
      </div>
      <div class="card">
        <img v-lazy="require('../../../assets/img/PC/Product/product_info/UP360P/body_pic3.png')">
        <p>{{ lang2.card_content[0] }}</p>
      </div>
      <div class="card2">
        <img v-lazy="require('../../../assets/img/PC/Product/product_info/UP360P/body_pic4.png')">
        <p>{{ lang2.card_content[1] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lang2: {},
  },
  data() {
    return {
      langc: {},
    }
  },
  computed: {
    //   swiper() {
    //   return this.$refs.BolgSwiper.$swiper
    // }
  },
  created() {
  },
  mounted() {
  },
  methods: {},
}
</script>


<style>

.UP360P_body3 {
  position: relative;
  width: 10rem;
  height: 4.739583rem;
  /* text-align: center; */
  background-color: #f8f8f8;
  /* border:red solid .005208rem; */
}

.UP360P_body3 .content {
  position: relative;
  margin: auto;
  width: 6.5rem;;
  height: 3.864583rem;
  /* border:red solid .005208rem; */
  /* text-align: center; */
  /* background-color: #1e1e1e; */
}

.UP360P_body3 .content h1 {
  font-size: 40PX;
  font-weight: 100;
  line-height: normal;
  padding-top: .520833rem;;
  color: #343434;
}

.UP360P_body3 .content p {
  font-size: 16PX;
  margin-top: .083333rem;;
  color: #343434;
}

.UP360P_body3 .content .card, .UP360P_body3 .content .card2 {
  width: 3.1rem;
  height: 2.609375rem;
  float: left;
  display: block;
  align-items: flex-end;
  /* margin-left: .052083rem;; */
  /* border:red solid .005208rem; */
}

.UP360P_body3 .content .card p, .UP360P_body3 .content .card2 p {
  display: block;
  /*font-size: 0.104167rem;*/
  font-size: 14PX;
  color: #e48013;
  text-align: center;
  /* border:red solid .005208rem; */
}

.UP360P_body3 .content .card2 p {
  margin-left: .677083rem;
  color: #343434;
}

.UP360P_body3 .content .card img {
  display: block;
  width: 3.427083rem;
  height: 2.609375rem;
}

.UP360P_body3 .content .card2 img {
  display: block;
  margin-top: .625rem;
  margin-left: 0.520833rem;
  width: 2.65625rem;
  height: 1.989583rem;
}

@media (max-width: 1024px) {
  .UP360P_body3 .content h1 {
    font-size: 30PX;
  }

  .UP360P_body3 .content p {
    font-size: 14PX;
  }

}

@media (max-width: 768px) {
  .UP360P_body3 .content h1 {
    font-size: 26PX;
  }
}


@media (max-width: 576px) {
  .UP360P_body3 {
    width: 100%;
    height: auto;
    background-color: #f8f8f8;
    padding: 1.25rem 0;
  }

  .UP360P_body3 .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  .ct-info {
    text-align: center;
  }

  .UP360P_body3 .content h1 {
    margin: 0;
    padding: 0;
    font-size: .6125rem;
    font-weight: 100;
    margin-bottom: .7375rem;
  }
  .UP360P_body3 .content .card,
  .UP360P_body3 .content .card2 {
    width: auto;
    height: auto;
    text-align: center;
  }

  .UP360P_body3 .content .card img {
    width: 6.427083rem;
    height: auto;
  }

  .UP360P_body3 .content .card2 img {
    margin: 0;
    padding: 0;
    width: 5.65625rem;
    height: auto;
  }

  .UP360P_body3 .content .card2 p,
  .UP360P_body3 .content .card p {
    margin: 0;
    padding: 0;
    font-size: .28125rem;
    margin-top: .5rem;
  }

  .UP360P_body3 .content .card2 p {
    color: #959595;
  }
}

</style>