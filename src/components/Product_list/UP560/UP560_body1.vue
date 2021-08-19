<template>
  <div class="UP560_body1">
    <div class="body1-PC">
      <div class="content">
        <span>{{ lang2.title[0] }}</span><span>{{ lang2.title[1] }}</span>
        <p>{{ lang2.content }}</p>
      </div>
      <img v-lazy="require('../../../assets/img/PC/Product/product_info/UP560/body_pic1.png')">
    </div>

    <div class="body1-PH">
      <div class="content">
        <span>{{ lang2.title[0] }}</span><span>{{ lang2.title[1] }}</span>
      </div>
      <p>{{ lang2.content }}</p>
      <img v-lazy="require('../../../assets/img/PC/Product/product_info/UP560/body_pic1.png')">
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
}
</script>


<style scoped>
.UP560_body1 {
  position: relative;
  width: 10rem;
  height: 3.508333rem;
  font-family: Montserrat;
  font-weight: normal;
}

.UP560_body1 img {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 2.041667rem;
  width: 1.833333rem;
  height: 2.473958rem;
  /* border:  red solid .005208rem;; */
}

.UP560_body1 .content {
  padding-top: .776042rem;
  margin-left: 4.6875rem;
}

.UP560_body1 .content span {
  display: inline-block;
  font-size: .28125rem;
  margin-bottom: .4375rem;
  color: #343434;
}

.UP560_body1 .content span:nth-child(2) {
  margin-left: .078125rem;
  color: #e48013;
}

.UP560_body1 .content p {
  width: 3.57292rem;
  /*font-size: .104167rem;*/
  /*line-height: .166667rem;*/
  font-size: 16PX;
}

.body1-PH {
  display: none;
}

@media (max-width: 767px) {
  .UP560_body1 {
    height: auto;
    padding: 1rem .6125rem;
    box-sizing: border-box;
  }

  .body1-PC {
    display: none;
  }

  .body1-PH {
    display: grid;
    grid-template-columns: 66% 34%;
    grid-template-rows: 25% 75%;
    margin: 0 auto;
    /*width: 90%;*/
    height: auto;
  }

  .UP560_body1 img {
    position: relative;
    left: auto;
    width: 100%;
    height: auto;
  }

  .UP560_body1 .body1-PH .content {
    margin: 0;
    padding: 0;
    grid-column-start: 1;
    grid-column-end: 3;
    white-space: nowrap;
  }

  .UP560_body1 .content span {
    font-size: .520833rem;
    /*font-size: 30PX;*/
    font-weight: lighter;
  }

  .UP560_body1 .body1-PH p {
    font-size: 16PX;
    line-height: 32PX;
    color: #343434;
    padding-right: .325rem;
  }
}

@media (max-width: 425px) {
  .UP560_body1 .content span {
    font-size: 20PX;
  }
  .UP560_body1 .body1-PH p {
    font-size: 14PX;
    line-height: 28PX;
  }
  .body1-PH {
    grid-template-rows: 18% 75%;
  }
}

@media (max-width: 375px) {
  .UP560_body1 .content span {
    font-size: 16PX;
  }
  .UP560_body1 .body1-PH p {
    line-height: 24PX;
  }
}

</style>
