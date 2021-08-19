<template>
  <div class="UP560_body3">
    <img v-lazy="require('../../../assets/img/PC/Product/product_info/UP560/body_pic3.png')">
    <div class="content">
      <p>{{ lang2.title }}</p>
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
}
</script>


<style scoped>
.UP560_body3 {
  position: relative;
  width: 10rem;
  height: 3.229167rem;
  font-family: Montserrat;
  font-weight: normal;
}

.UP560_body3 img {
  position: absolute;
  top: .744792rem;
  left: .588542rem;
  width: 3.864583rem;
  height: 2.442708rem;
  /* border:  red solid .005208rem;; */
}

.UP560_body3 .content {
  padding-top: 1.921875rem;
  margin-left: 4.78125rem;
}

.UP560_body3 .content p {
  /*font-size: .104167rem;*/
  font-size: 20PX;
  margin-bottom: .083333rem;
  color: #1e1e1e;
}

.UP560_body3 .content p:nth-child(2) {
  /*font-size: .28125rem;*/
  font-size: 48PX;
}

@media (max-width: 1024px) {
  .UP560_body3 .content p:nth-child(2) {
    font-size: 40PX;
  }
}

@media (max-width: 768px) {
  .UP560_body3 .content p:nth-child(2) {
    font-size: 28PX;
  }
}

@media (max-width: 576px) {
  .UP560_body3 {
    display: flex;
    flex-direction: column-reverse;
    height: auto;
    align-items: center;
    justify-content: space-evenly;
  }

  .UP560_body3 img {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: auto;
  }

  .UP560_body3 .content {
    margin: 1.5rem auto;
    padding: 0;
    text-align: center;
  }

  .UP560_body3 .content p {
    font-size: .5125rem;
    font-weight: 100;
    margin-bottom: .4375rem;
  }

  .UP560_body3 .content p{
    font-size: 28PX;
  }

  .UP560_body3 .content p:nth-child(2) {
    color: #959595;
    margin: 0 auto;
    font-size: 14PX;
  }
}
</style>
