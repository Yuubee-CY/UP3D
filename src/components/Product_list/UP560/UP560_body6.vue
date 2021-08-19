<template>
  <div class="UP560_body6">
    <div class="content">
      <p>{{ lang2.title }}</p>
      <p v-for="(item,index) in lang2.content" :key="index">{{ item }}</p>
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
.UP560_body6 {
  position: relative;
  width: 10rem;
  height: 5rem;
  font-family: Montserrat;
  /* font-weight: normal; */
  background-image: url(../../../assets/img/PC/Product/product_info/UP560/body_pic8.png);
  background-repeat: no-repeat;
  background-size: 10rem, 5rem;
}

.UP560_body6 .content {
  padding-top: 1.833333rem;
  margin-left: 1.942708rem;
}

.UP560_body6 .content p {
  width: 3.057292rem;
  font-size: 20PX;
  line-height: normal;
  color: #ffffff;
}

.UP560_body6 .content p:nth-child(1) {
  font-size: .28125rem;
  color: #ffffff;
  margin-bottom: .4375rem;
}

@media (max-width: 768px) {
  .UP560_body6 .content p {
    width: 3.057292rem;
    font-size: 14PX;
  }

  .UP560_body6 .content p:nth-child(1) {
    font-size: 24PX;
    white-space: nowrap;
  }

}


@media (max-width: 576px) {
  .UP560_body6 {
    height: 12rem;
    background-size: cover;
    background-position: -10rem;
  }

  .UP560_body6 .content {
    margin: 0;
    padding: 0;
    text-align: center;
    position: relative;
    top: 65%;
    font-weight: 100;
    transform: translateY(-50%);
  }

  .UP560_body6 .content p {
    width: 50%;
    margin: 0 auto;
    height: auto;
  }

  .UP560_body6 .content p:nth-child(1) {
    /*font-size: .6125rem;*/
    font-size: 30PX;
    line-height: normal;
    margin-bottom: .5125rem;
    white-space: normal;
  }


}

</style>
