<template>
  <div class="UP560_body5">
    <div class="b5-content">
      <div class="title">{{ lang2.title }}</div>
      <div class="line"></div>
      <div class="list">
        <div class="card" v-for="(item,index1) of lang2.content" :key="index1">
          <div class="dot"></div>
          <div class="content">
            <div class="text">{{ item.name }}</div>
            <div class="bg">{{ item.bg }}</div>
          </div>
        </div>
      </div>
      <div class="img">
        <img v-lazy="require('../../../assets/img/PC/Product/product_info/UP560/body_pic5.png')">
<!--        <img src="../../../assets/img/PC/Product/product_info/UP560/body_pic6.png">-->
        <img v-lazy="require('../../../assets/img/PC/Product/product_info/UP560/body_pic7.png')">
      </div>
    </div>

    <div class="b5-content b5-content-PH">
      <div class="title">{{ lang2.title }}</div>
      <div class="line"></div>
      <div class="list">
        <div class="card" v-for="(item,index1) of lang2.content" :key="index1">
          <div class="dot"></div>
          <div class="content">
            <div class="text">{{ item.name }}</div>
            <div class="bg">{{ item.bg }}</div>
            <img class="ct-img" v-lazy="item.imgUrl"  :key="item.imgUrl">
          </div>
        </div>
      </div>
<!--      <div class="img">-->
<!--        <img src="../../../assets/img/PC/Product/product_info/UP560/body_pic5.png">-->
<!--        <img src="../../../assets/img/PC/Product/product_info/UP560/body_pic6.png">-->
<!--        <img src="../../../assets/img/PC/Product/product_info/UP560/body_pic7.png">-->
<!--      </div>-->
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
      lang: ['1', '2', '2']
    }
  },
}
</script>


<style scoped>
.UP560_body5 {
  position: relative;
  width: 10rem;
  height: 5.364583rem;
  font-family: Montserrat;
  font-weight: normal;

  /* background-image: url(../../assets/img/PC/Product/product_info/UP560/body_pic2.png);
  background-repeat: no-repeat;
  background-size: 10rem, 2.338542rem; */
}

.UP560_body5 .title {
  margin: auto;
  margin-top: .666667rem;
  width: max-content;
  /*font-size: .28125rem;*/
  font-size: 50PX;
}

.UP560_body5 .line {
  position: absolute;
  top: .82458rem;
  left: 1.703125rem;
  width: 6.822917rem;
  height: .005208rem;
  /* border: solid  .005208rem #ffb15b; */
  background-color: #ffb15b;
  display: none;
}

.UP560_body5 .list {
  width: 6.822917rem;
  margin: auto;
  margin-top: .411458rem;
  display: flex;
  justify-content: space-around;
  /* border:  red solid .005208rem; */
  border-top: .005208rem solid #FEBB6F;
}

.UP560_body5 .list .card {
  float: left;
  text-align: center;
  width: 2.25rem;
  /* border:  red solid .005208rem; */
  position: relative;
}

.UP560_body5 .list .card .dot {
  /* border:  red solid .005208rem; */
  margin: auto;
  width: .166667rem;
  height: .166667rem;
  background-image: url(../../../assets/img/PC/Small_Icon/PC-03.png);
  background-repeat: no-repeat;
  background-size: 6.859375rem, 2.75rem;
  background-position: -5.515625rem -0.145833rem;
  margin-bottom: .104167rem;
  position: absolute;
  left: 50%;
  transform: translate(-50%,-50%);
}


.UP560_body5 .list .card .content {
  position: relative;
  margin: auto;
  width: 1.5625rem;
  /* border:  red solid .005208rem; */
}

.UP560_body5 .list .card .content .text {
  position: absolute;
  font-size: 16PX;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
}

.UP560_body5 .list .card .content .bg {
  /*font-size: .583333rem;*/
  font-size: 74PX;
  color: #ffb15b;
  opacity: 0.16;
}


.UP560_body5 .img {
  display: flex;
  justify-content: space-around;
  width: 6.422917rem;
  margin: auto;
  vertical-align: middle;
  align-items: center;
  padding-top: .239583rem;
  /* border: red solid .005208rem; */
}


.UP560_body5 .img img:nth-child(1) {
  margin-left: .2rem;
  width: 1.536458rem;
  height: 1.479167rem;
  /* border: red solid .005208rem; */
}

.UP560_body5 .img img:nth-child(2) {
  margin-left: .65rem;
  width: 1.520833rem;
  height: 2.260417rem;
  /* border: red solid .005208rem; */
}

.UP560_body5 .img img:last-child {
  margin-left: .7rem;
  width: 1.802083rem;
  height: 1.479167rem;
  /* border: red solid .005208rem; */
}

.UP560_body2 .content .text .grap {
  margin: auto;
  float: left;
  width: 1.666667rem;
  text-align: center;
}

.UP560_body2 .content .text .grap .num {
  font-size: .25rem;
  line-height: .296875rem;
  color: #ffb15b;
}

.UP560_body2 .content .text .grap .name {
  font-size: .104167rem;
  line-height: .125rem;
  font-weight: lighter;
  font-family: Montserrat;

  color: #ffffff;
}
.b5-content.b5-content-PH{
  display: none;
}


@media (max-width: 1024px) {
  .UP560_body5 .title {
    font-size: 42PX;
  }
}

@media (max-width: 768px) {
  .UP560_body5 .title {
    font-size: 36PX;
  }
}


@media (max-width: 576px) {
  .UP560_body5 {
    height: auto;
    margin: 1.5rem auto;
  }
  .b5-content{
    display: none;
  }
  .b5-content.b5-content-PH{
    display: block;
    height: 100%;
    box-sizing: border-box;
  }
  .b5-content-PH .list{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 85%;
    justify-content: space-between;
    margin: 0 auto;
    border-top: none;
    border-left: 1PX solid #FEBB6F;
    box-sizing: border-box;
  }
  .b5-content-PH .title{
    margin: 0 auto;
    height: 15%;
    /*font-size: .5125rem;*/
    font-size: 32PX;
    line-height: 1.4125rem;
    font-weight: 100;
  }
  .b5-content-PH .line{
    display: none;
  }
  .b5-content-PH .list .card{
    display: flex;
    align-items: flex-start;
    width: 100%;
  }
  .b5-content-PH .list .card .content{
    display: flex;
    align-items: flex-start;
    width: 100%;
    margin: 0;
    position: relative;
  }
  .b5-content-PH .list .card .dot{
    margin: 0;
    width: 18PX;
    height: 18PX;
    position: absolute;
    left: 0;
    background-size: 600PX;
    background-position: -481PX -11PX;
    margin-top: 44PX;
  }
  .b5-content-PH .list .card .content .text{
    top: 44PX;
    left: 8PX;
    transform: translateY(-50%);
    color: #343434;
  }
  .b5-content-PH .list .card .content .bg{
    font-size: 68PX;
    margin-left: 8PX;
  }
  .ct-img{
    width: 4.220833rem;
    height: auto;
    margin-left: .5125rem;
    margin-top: 1.325rem;
  }
}

@media (max-width: 425px) {
  /*.b5-content-PH .list .card .content .text{*/
  /*  top: .6925rem;*/
  /*  color: #343434;*/
  /*}*/
}

</style>
