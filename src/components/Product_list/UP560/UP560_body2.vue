<template>
  <div class="UP560_body2">
    <div class="content">
      <div class="pic"></div>
      <div class="text">
        <div class="grap">
          <span class="num">70" </span>
          <span class="name">{{ lang2.name[0] }}</span>
        </div>
        <div class="grap">
          <span class="num">17" </span>
          <span class="name">{{ lang2.name[1] }}</span>
        </div>
        <div class="grap">
          <span class="num">21" </span>
          <span class="name">{{ lang2.name[2] }}</span>
        </div>
        <div class="grap">
          <span class="num">15" </span>
          <span class="name">{{ lang2.name[3] }}</span>
        </div>
      </div>
    </div>

    <div class="content content-PH">
      <div class="text">
        <div class="grap">
          <p class="grap-title">{{ lang2.title }}</p>
        </div>
        <div class="grap">
          <img v-lazy="require('../../../assets/img/PC/Product/product_info/UP560/pic1.svg')"/>
          <span class="num">70" </span>
          <span class="name">{{ lang2.name[0] }}</span>
        </div>
        <div class="grap">
          <img v-lazy="require('../../../assets/img/PC/Product/product_info/UP560/pic2.svg')"/>
          <span class="num">17" </span>
          <span class="name">{{ lang2.name[1] }}</span>
        </div>
        <div class="grap">
          <img v-lazy="require('../../../assets/img/PC/Product/product_info/UP560/pic3.svg')"/>
          <span class="num">21" </span>
          <span class="name">{{ lang2.name[2] }}</span>
        </div>
        <div class="grap">
          <img v-lazy="require('../../../assets/img/PC/Product/product_info/UP560/pic4.svg')"/>
          <span class="num">15" </span>
          <span class="name">{{ lang2.name[3] }}</span>
        </div>
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
.UP560_body2 {
  position: relative;
  width: 10rem;
  height: 2.338542rem;
  font-family: Montserrat;
  font-weight: normal;
  background-image: url(../../../assets/img/PC/Product/product_info/UP560/body_pic2.png);
  background-repeat: no-repeat;
  background-size: 10rem, 2.338542rem;
}

.UP560_body2 .content {
  /*padding-top: .484375rem;*/
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
}

.UP560_body2 .content .pic {
  margin: auto;
  width: 6.379167rem;
  height: .835625rem;
  /* border: solid .005208rem red; */
  background-image: url(../../../assets/img/PC/Product/product_info/Commen_scanner/product_icon.png);
  background-repeat: no-repeat;
  background-size: contain;
  /*background-size: 6.859375rem, 2.75rem;*/
  /*background-position: -0.71rem -0.59rem;*/
  margin-bottom: .15625rem;
}

.UP560_body2 .content .text {
  margin: auto;
  width: max-content;
  display: flex;
}

.UP560_body2 .content .text .grap {
  margin: auto;
  float: left;
  width: 1.666667rem;
  text-align: center;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.UP560_body2 .content .text .grap .num {
  /*font-size: .25rem;*/
  /*line-height: .296875rem;*/
  font-size: 48PX;
  color: #ffb15b;
}

.UP560_body2 .content .text .grap .name {
  /*font-size: .104167rem;*/
  /*line-height: .125rem;*/
  font-size: 18PX;
  font-weight: lighter;
  font-family: Montserrat;
  color: #ffffff;
}

.content.content-PH {
  display: none;
}

@media (max-width: 1024px) {
  .UP560_body2 .content .text .grap .num {
    font-size: 36PX;
  }

  .UP560_body2 .content .text .grap .name {
    font-size: 14PX;
  }
}

@media (max-width: 768px) {
  .UP560_body2 .content .text .grap {
    align-items: center;
    flex-direction: column;
  }

  .UP560_body2 .content .text .grap .num {
    font-size: 32PX;
  }

  .UP560_body2 .content .text .grap .name {
    font-size: 12PX;
  }
}

@media (max-width: 576px) {

  .UP560_body2 {
    width: 100%;
    height: auto;
    background: url("../../../assets/img/PC/Product/product_info/UP560/body_pic2_2.png") no-repeat center;
    background-size: cover;
    padding: .8333rem 0;
  }

  .UP560_body2 .content .text {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .content {
    display: none;
  }

  .content.content-PH {
    display: block;
    height: 100%;
    transform: translate(-50%);
  }

  .UP560_body2 .content {
    padding: 0;
  }

  .UP560_body2 .content .text {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .UP560_body2 .content .text .grap {
    width: auto;
    margin: 0;
    margin-bottom: .5125rem;
    font-weight: 100;
  }

  .UP560_body2 .content .text .grap:last-child {
    margin: 0;
  }

  .UP560_body2 .content .text .grap .name,
  .UP560_body2 .content .text .grap .num {
    display: block;
    line-height: normal;
    margin-top: .08rem;
  }
  .UP560_body2 .content .text .grap .name{
    font-size: 14PX;
  }
  .grap-title {
    color: white;
    font-size: 30PX;
    margin-bottom: .26125rem;
  }

}
</style>
