<template>
  <div class="UP400_Body1">
    <div class="title-pic">
      <div class="img"></div>
      <div class="tp-info-box">
        <p>{{ lang2.tpInfoTitle }}</p>
        <p>12s'</p>
      </div>
    </div>
    <div class="info-box">
      <img v-lazy="lang2.infoImg">
      <div class="info-card">
        <div class="info-list" v-for="(item, index) in lang2.infoCard" :key="index">
          <p class="title">{{ item.title }}</p>
          <p class="info">{{ item.content }}</p>
        </div>
      </div>
    </div>

    <div class="info-box info-box-PH">
      <div class="text">
        <div class="grap">
          <p class="grap-title">{{ lang2.infoTitle }}</p>
        </div>
        <div class="grap" v-for="(item1, index1) in lang2.infoCard" :key="'index1'+index1">
          <img v-lazy="item1.imgUrl"/>
          <span class="num">{{ item1.title }}</span>
          <span class="name">{{ item1.content }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UP400_Body1",
  props: {
    lang2: {}
  }
}
</script>

<style scoped>
.UP400_Body1 {
  width: 100%;
  height: auto;
  padding: .4125rem 0;
}

.title-pic {
  width: 70%;
  margin: 0 auto;
  position: relative;
}

.img {
  width: 100%;
  height: 3.83333rem;
  background: url("../../../assets/img/PC/Product/product_info/UP400/UP400_pic1.png");
  background-size: cover;
}

.tp-info-box {
  width: fit-content;
  position: absolute;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
}

.tp-info-box p {
  color: white;
  /*font-size: .1225rem;*/
  font-size: 20PX;
}

.tp-info-box p:nth-child(2) {
  /*font-size: .26875rem;*/
  font-size: 48PX;
  margin-top: .08333rem;
}

.info-box {
  width: 65%;
  margin: 0 auto;
  text-align: center;
  margin-top: .6125rem;
}

.info-box img {
  width: 99%;
  height: auto;
}

.info-card {
  display: flex;
  justify-content: space-between;
  margin-top: .26875rem;
}

.info-list {
  display: flex;
  width: 1.09rem;
  justify-content: center;
  white-space: nowrap;
  align-items: center;
}

.info-list:last-child {
  margin-right: -.125rem;
}

.title {
  font-size: 36PX;
  line-height: 36PX;
  color: #FEBB6F;
  text-align: left;
  white-space: nowrap;
}

.info {
  font-size: 16PX;
  margin-top: 0.104167rem;
  color: #343434;
  margin-left: 0.04831rem;
  line-height: normal;
}

.UP400_Body1 .info-box .text .grap {
  /*width: 1.666667rem;*/
  width: 2rem;
}

.info-box.info-box-PH {
  display: none;
}

@media (max-width: 1024px) {
  .info-list {
    flex-direction: column;
  }
  .info{
    margin-top: .05rem;
  }
  .title{
    font-size: 28PX;
  }
}

@media (max-width: 768px) {

  .tp-info-box {
    left: 73%;
  }

  .tp-info-box p[data-v-54210aa2]:nth-child(2) {
    font-size: 40PX;
  }

  .title {
    font-size: 30PX;
  }

  .info {
    font-size: 14PX;
  }
}

@media (max-width: 576px) {

  .UP400_Body1 {
    padding-top: 0;
  }

  .title-pic {
    width: 100%;
    height: 15.5rem;
  }

  .img {
    height: 100%;
    background-position: -8.2rem -.5125rem;
    background-size: 29rem;
  }

  .tp-info-box {
    top: 12%;
    left: 20%;
    display: flex;
    flex-direction: column-reverse;
  }

  .tp-info-box p {
    color: white;
    /*font-size: .4125rem;*/
    font-size: 14PX;
    margin-top: .125rem;
  }

  .tp-info-box p:nth-child(2) {
    font-size: .63333rem;
    margin: 0;
  }

  .info-box {
    display: none;
  }

  .info-box.info-box-PH {
    display: block;
  }

  .UP400_Body1 .header {
    display: none;
  }

  .UP400_Body1 .info-box {
    padding: 0;
  }

  .UP400_Body1 .info-box .text {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: auto;
    width: max-content;
  }


  .UP400_Body1 .info-box .text .grap {
    float: left;
    text-align: center;
    width: auto;
    margin: 0;
    margin-top: .6125rem;
  }

  .info-box img {
    width: 50%;
  }

  .UP400_Body1 .info-box .text .grap .name,
  .UP400_Body1 .info-box .text .grap .num {
    display: block;
    line-height: normal;
    margin-top: .08rem;
  }

  .UP400_Body1 .info-box .text .grap .num {
    /*font-size: .3125rem;*/
    font-size: 20PX;
    color: #ffb15b;
    margin-top: -.125rem;
  }

  .UP400_Body1 .info-box .text .grap .name {
    /*font-size: .14167rem;*/
    font-size: 14PX;
    font-weight: 100;
    font-family: Montserrat;
    white-space: nowrap;
    color: #343434;
  }


  .UP400_Body1 .info-box .text .grap:first-child {
    width: auto;
    margin-top: 0;
  }

  .grap-title {
    color: black;
    /*font-size: .5125rem;*/
    font-size: 28PX;
    white-space: nowrap;
    width: fit-content;
  }

}

</style>