<template>
  <div class="P5_Body8">
    <p class="par-title">{{ lang2.title }}</p>
    <div class="par-content">
      <div class="card">
        <div class="left_text">
          <p v-for='(item ,index) in lang2.left_text' :key="index" v-html="item"></p>
        </div>
        <div class="right_text">
          <p v-for='(item ,index) in lang2.right_text' :key="index" v-html="item"></p>
        </div>
      </div>
    </div>
    <div class="parameter">
      <div class="par-item" v-for="(item,index) in this.lang2.parameter" :key="index">
        <p class="title">{{ item.title }}</p>
        <p class="content">{{ item.content }}</p>
      </div>
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

.P5_Body8 {
  position: relative;
  width: 10rem;
  height: auto;
  padding: .3125rem 0;
  background-color: white;
  background-image: url(../../../assets/img/PC/Product/product_info/P52/line_bg.jpg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: center;
  margin-top: .833333rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.par-title {
  display: inline-block;
  color: #343434;
  font-size: 24PX;
}

.card {
  position: relative;
  width: max-content;
  margin: auto;
  z-index: 2;
}


.P5_Body8 .par-content .card .left_text {
  float: left;
  text-align: right;
  font-size: 16PX;
  line-height: .234375rem;
  color: #1e1e1e;
  display: flex;
  flex-direction: column;
  gap: 10PX;
}

.P5_Body8 .par-content .card .right_text {
  float: right;
  text-align: left;
  font-size: 16PX;
  line-height: .234375rem;
  margin-left: .348958rem;
  color: #ffb15b;
  display: flex;
  flex-direction: column;
  gap: 10PX;
}

.parameter {
  display: none;
}

@media (max-width: 1024px) {

  .par-title {
    font-size: 20PX;
  }

  .P5_Body8 .par-content .card .left_text {
    font-size: 14PX;

  }

  .P5_Body8 .par-content .card .right_text {
    font-size: 14PX;
  }
}

@media (max-width: 768px) {
  .P5_Body8 {
    height: auto;
    background-image: url(../../../assets/img/PC/Product/product_info/P52/line_bg_PH.jpg);
    background-size: cover;
    background-position: center;
    padding: .6125rem 0;
    flex-direction: column;
  }

  .P5_Body8 > .title {
    top: .125rem;
    font-size: .5125rem;
    border-bottom: .05rem solid #FEBB6F;
    white-space: nowrap;
    max-width: fit-content;
  }

  .card {
    display: inline-grid;
    grid-template-columns: auto auto;
    height: 13.5rem;
    padding: .325rem 0;
    width: 100%;
  }

  .P5_Body8 .content .card .left_text,
  .P5_Body8 .content .card .right_text {
    float: none;
    height: 100%;
    display: inline-grid;
    margin: 0;
    padding: 0;
    line-height: normal;
  }

  .P5_Body8 .content .card .right_text {
    margin-left: .348958rem;
  }

  .par-content {
    display: none;
  }

  .par-title {
    display: inline-block;
    position: relative;
    color: #343434;
    top: 0;
    width: fit-content;
    max-width: none;
    font-size: 24PX;
    line-height: 38PX;
    border-bottom: .05rem solid #FEBB6F;
    margin-bottom: .2875rem;
  }


  .parameter {
    width: 75%;
    position: relative;
    top: 0;
    right: 0;
    transform: translate(0, 0);
    margin: 0 auto;
    display: grid;
    height: 100%;
  }

  .parameter .par-item {
    display: flex;
    width: 100%;
    border-bottom: none;
    box-sizing: border-box;
    border-bottom: none;
    margin: .125rem 0;
  }

  .parameter .par-item p {
    font-size: 14PX;
    line-height: normal;
    color: #343434;
    white-space: normal;
  }

  .parameter .par-item .title {
    width: 30%;
  }

  .parameter .par-item .content {
    width: 70%;
    color: #ffb15b;
    padding-left: .125rem;
  }

  .parameter .par-item:nth-child(odd) .title {
    width: 30%;
  }

  .parameter .par-item:nth-child(odd) {
    width: 100%;
    float: none;
  }

  .parameter .par-item:nth-last-child(-n + 2) {
    border-bottom: none;
  }
}

@media (max-width: 576px) {
  .par-title {
    font-size: 24PX;
    line-height: 36PX;
  }
}

@media (max-width: 425px) {
  .parameter {
    width: 80%;
  }
}


</style>