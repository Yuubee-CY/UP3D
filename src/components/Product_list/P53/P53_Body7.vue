<template>
  <div class="P53_Body7">
    <div class="P53-box" v-for="(item, index) in lang2" :key="index">
      <div class="left">
        <div class="left-head">
          <div class="l-h-icon"></div>
          <div class="l-h-intro">
            <p>{{ item.left.head_intro.title }}</p>
            <p>{{ item.left.head_intro.product }}</p>
          </div>
        </div>
        <div class="left-img">
          <img
              v-for="(item1, index1) in item.left.left_img"
              :key="index1"
              v-lazy="item1"
          >
        </div>
      </div>
      <div class="right">
        <div class="right-head">
          <p>{{ item.right.head_intro.sort }}</p>
          <h1>{{ item.right.head_intro.title }}</h1>
        </div>
        <div class="right-list">
          <div class="r-l-item" v-for="(item2, index2) in item.right.right_list" :key="index2">
            <div class="item-content">
              <div class="item-icon"></div>
              <div class="item-intro">
                <p>{{ item2.title }}</p>
                <p>{{ item2.product }}</p>
              </div>
            </div>
            <div class="item-img">
              <img v-lazy="item2.imgUrl" :key="item2.imgUrl">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div  v-for="(item3, index3) in lang2" :key="'index3' + index3">
      <div class="P53-box P53-box-PH">
        <div class="right">
          <div class="right-head">
            <p>{{ item3.right.head_intro.sort }}</p>
            <h1>{{ item3.right.head_intro.title }}</h1>
          </div>
          <div class="right-list">
            <swiper :options="swiperOptions" ref="mySwiper">
              <swiper-slide class="r-l-item" v-for="(item4, index4) in item3.right.right_list" :key="'index4'+index4">
                <div class="item-content">
                  <div class="item-icon"></div>
                  <div class="item-intro">
                    <p>{{ item4.title }}</p>
                    <p>{{ item4.product }}</p>
                  </div>
                </div>
                <div class="item-img">
                  <img :src="item4.imgUrl" :key="item4.imgUrl">
                </div>
              </swiper-slide>
              <div class="swiper-pagination-p53" slot="pagination"></div>
            </swiper>
          </div>
        </div>
        <span class="prompt-msg">{{item3.prompt}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "P53_Body7",
  props: {
    lang2: {}
  },
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      // left: this.lang2.left,
      // right: this.lang2.right,
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination-p53',
          type: 'progressbar',
          clickable: true,
        },

        // loop: true,
      },
    }
  },
  computed:{
    // swiper() {
    //   return this.$refs.mySwiper[0].swiper;
    // }
  },
  mounted() {
  }
}
</script>

<style scoped>
.P53_Body7 {
  width: 10rem;
  height: auto;
  background-repeat: no-repeat;
  background-size: cover;
  padding: .328125rem 1.466146rem;
  box-sizing: border-box;
  background-color: black;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.P53_Body7 p {
  font-size: 20PX;
  color: #ffffff;
}

.P53_Body7 h1 {
  font-size: .25rem;
  line-height: .270833rem;
  color: #ffffff;
  white-space: nowrap;
}

.P53_Body7 .left, .P53_Body7 .right {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: .005rem;
  box-sizing: border-box;
}

.P53_Body7 .left {
  float: left;
}

.P53_Body7 .right {
  float: right;
}

.left .left-head .l-h-icon,
.right .right-list .r-l-item .item-icon {
  width: .166667rem;
  height: .166667rem;
  background-image: url("../../../assets/img/PC/Product/product_info/P41/list_header.png");
  background-size: cover;
  float: left;
}

.left .left-head {
  margin-top: .3rem;
}

.left .left-head .l-h-intro {
  margin-left: .25rem;
}

.left img {
  width: 2.697917rem;
  height: 1.484375rem;
  margin-top: .171875rem;
}

.right .right-head {
  text-align: right;
}


.right .right-list .r-l-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.right .right-list .r-l-item .item-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.right .right-list .r-l-item .item-intro {
  margin-left: 10px;
}

.right img {
  width: 1.796875rem;
  height: .947917rem;
  margin-top: .171875rem;
}

.P53-box.P53-box-PH {
  display: none;
}

@media (max-width: 1024px) {
  .P53_Body7 p{
    font-size: 16PX;
  }
}

@media (max-width: 768px) {
  .P53_Body7 p{
    font-size: 14PX;
  }
}

@media (max-width: 576px) {
  .P53_Body7{
    height: auto;
    padding: 0;
  }

  .P53-box {
    display: none;
  }

  .P53-box.P53-box-PH {
    display: block;
    padding-bottom: .5125rem;
    width: 100%;
  }

  .P53_Body7 .left, .P53_Body7 .right {
    width: auto;
    height: 100%;
  }

  .P53_Body7 .right {
    float: none;
  }

  .prompt-msg{
    display: block;
    width: fit-content;
    height: auto;
    color: #9f9f9f;
    /*font-size: .083333rem;*/
    font-size: 12PX;
    font-weight: 100;
    margin-top: .0575rem;
    margin-left: 50%;
    transform: translate(-50%);
  }

  .right .right-list .r-l-item {
    display: flex;
    align-items: center;
    position: relative;
    flex-direction: column-reverse;
  }

  .right .right-head {
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
  }
  .right .right-head h1{
    font-size: .5125rem;
    font-weight: 100;
    line-height: normal;
    margin-bottom: .3125rem;
  }
  .item-content{
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .item-intro p{
    font-size: .28125rem;
    line-height: .5125rem;
    font-weight: 100;
  }

  .right .right-list .r-l-item .item-icon{
    display: none;
  }

  .right .right-list .r-l-item .item-intro::before{
    content: '';
    display: block;
    width: .3125rem;
    height: .3125rem;
    position: absolute;
    transform: translate(-155%,30%);
    background: url("../../../assets/img/PC/Product/product_info/P41/list_header.png") no-repeat center;
    background-size: cover;

  }

  .right .right-head p{
    font-size: .28125rem;
    line-height: normal;
    font-weight: 100;
  }

  .P53_Body7 .swiper-container {
    width: 100%;
    margin: 0;
  }



  .P53_Body7 .swiper-container:nth-child(4){
    background-color: white;
  }

  .P53_Body7 .swiper-container:nth-child(4) p,
  .P53_Body7 .swiper-container:nth-child(4) h1{
    color: #343434;
  }

  .item-img{
    width: 100%;
  }
  .right img{
    width: 100%;
    height: auto;
  }

  .P53_Body7 .swiper-pagination-progressbar,
  .P53_Body7 .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{
    top: auto;
    bottom: 0;
    height: .05125rem;
  }

}

</style>