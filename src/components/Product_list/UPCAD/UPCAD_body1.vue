<template>
  <div class="UPCAD_body1">
    <div class="fb-PC">
      <img v-lazy="require('../../../assets/img/PC/Product/product_info/Commen_scanner/body_pic_15.png')">
      <div class="card">
        <span v-for="(item,index) in lang2.content" :key="'index'+index">{{ item }} </span>
      </div>
    </div>
    <div class="fb-PH">
      <div class="card" v-for="(item,index) in lang2.content" :key="index">
        <img  v-lazy="imgUrl[index]" :key="imgUrl[index]">
        <span>{{ item }}</span>
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
      imgUrl: [
          require('../../../assets/img/PC/Product/product_info/UPCAD/bd1_pic1.svg'),
          require('../../../assets/img/PC/Product/product_info/UPCAD/bd1_pic2.svg'),
          require('../../../assets/img/PC/Product/product_info/UPCAD/bd1_pic3.svg'),
          require('../../../assets/img/PC/Product/product_info/UPCAD/bd1_pic4.svg'),
      ]
    }
  },
}
</script>


<style scoped>
.UPCAD_body1 {
  position: relative;
  width: 7.28125rem;
  height: 1.5625rem;
  margin: auto;
  margin-top: 0.78125rem;
  /* text-align: center; */
  /* border: red solid .005208rem;; */
}

.UPCAD_body1 img {
  display: block;
  margin: auto;
  width: 5.28125rem;
  height: 0.489583rem;
  margin-top: .520833rem;
}

.UPCAD_body1 span {
  text-align: center;
  display: inline-block;
  width: .9375rem;
  font-size: 16PX;
  color: #343434;
  margin-right: 0.5rem;
}

.UPCAD_body1 span:nth-child(1) {
  margin-right: 0.72rem;
}

.UPCAD_body1 span:nth-child(2) {
  margin-right: 0.72rem;
}

.UPCAD_body1 span:last-child {
  margin-right: 0rem;
}

.card {
  width: max-content;
  margin: auto;
  /* border: red solid .005208rem;; */
}

.fb-PH{
  display: none;
}

@media (max-width: 1024px) {
  .UPCAD_body1 span {
    font-size: 14PX;
    white-space: nowrap;
  }
}

@media (max-width: 768PX) {
  .UPCAD_body1 span {
    font-size: 14PX;
    white-space: normal;
  }
}


@media (max-width: 576px) {
  .UPCAD_body1 {
    height: 13rem;
    margin: 0 auto;
    padding: .8333rem 0;
  }
  .fb-PC{
    display: none;
  }
  .fb-PH{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .fb-PH .card{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  #UPCAD img{
    width: auto;
    height: 1.489583rem;
  }
  .UPCAD_body1 span{
    width: fit-content;
    white-space: nowrap;
    /*font-size: .3125rem;*/
    font-size: 14PX;
    font-weight: 100;
    line-height: normal;
    color: #343434;
    margin-top: .3125rem;
  }
}

</style>
