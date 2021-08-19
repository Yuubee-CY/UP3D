<template>
  <div class="UP560_body4">
    <img v-lazy="require('../../../assets/img/PC/Product/product_info/UP560/body_pic4.png')">
    <div class="hide_bg">
      <div class="coment">
        <p>{{ lang2.title }}</p>
        <p>{{ lang2.content }}</p>
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
    return {}
  },
}
</script>


<style scoped>
.UP560_body4 {
  position: relative;
  margin-top: 1.197917rem;
  width: 10rem;
  height: 3.28125rem;
  font-family: Montserrat;
  font-weight: normal;
}

.UP560_body4 img {
  position: absolute;
  /* top: .744792rem; */
  left: 5.229167rem;
  width: 3.880208rem;
  height: 2.223958rem;
  z-index: 1;
  /* border:  red solid .005208rem;; */
}


.UP560_body4 .hide_bg {
  position: absolute;
  top: .463542rem;
  width: 10rem;
  height: 2.802083rem;
  background-color: #f5f5f5;
  z-index: 0;
}

.UP560_body4 .hide_bg .coment {
  padding-top: .505208rem;
  margin-left: 1.838542rem;
}

.UP560_body4 .hide_bg .coment p {
  /*font-size: .28125rem;*/
  font-size: 48PX;
  margin-bottom: .4375rem;
  color: #1e1e1e;
}

.UP560_body4 .coment p:nth-child(2) {
  width: 3.057292rem;
  /*font-size: .104167rem;*/
  font-size: 20PX;
}

@media (max-width: 1024px) {
  .UP560_body4 .hide_bg .coment p {
    font-size: 40PX;
  }

  .UP560_body4 .coment p:nth-child(2) {
    font-size: 16PX;
  }
}

@media (max-width: 768px) {
  .UP560_body4 .hide_bg .coment p {
    font-size: 28PX;
  }

  .UP560_body4 .coment p:nth-child(2) {
    font-size: 14PX;
  }
}


@media (max-width: 576px) {
  .UP560_body4 {
    display: flex;
    flex-direction: column-reverse;
    height: auto;
    align-items: center;
    justify-content: space-evenly;
    margin: 0;
  }

  .UP560_body4 img {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: auto;
  }

  .UP560_body4 .hide_bg {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    height: auto;
  }

  .UP560_body4 .hide_bg .coment {
    margin: 1.5rem auto;
    padding: 0;
    text-align: center;
  }

  .UP560_body4 .coment p:nth-child(2) {
    margin: 0 auto;
    line-height: normal;
    color: #959595;
    width: 50%;
  }

}

</style>
