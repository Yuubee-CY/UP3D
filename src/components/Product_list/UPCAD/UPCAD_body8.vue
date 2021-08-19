<template>
  <div class="UPCAD_body8">
    <h1 v-html="lang2.title"></h1>
    <div class="buttom">
      <div class="content">
        <div class="list" v-for="(item,index1) in lang2.content" :key="index1">
          <div class="dot"></div>
          <div class="text" v-html="item"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  props: {
    lang2: {},
  },
  data() {
    return {
      lang: {},

      UP560_SwitchCard: {
        //    pagination:{
        //    el:'.swiper-pagination',
        //    Type : 'fraction',
        //    clickable:true,
        // },//这样写小圆点就有了
        loop: true,
        speed: 1000,
        autoplay: {
          //隔2000ms切换一次
          delay: 3000,
          autoplay: true,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        observer: true,
        observeParents: true,
      },


    }
  },
  computed: {},
  watch: {
    // //监听语言变化
    // '$store.state.lang':function() {
    //    this.lang=this.$t('UP360P').UP360P_Body6
    //   }
  },
  created() {
    // this.lang=this.$t('UP360P').UP360P_Body6
  },
  mounted() {
  },
  methods: {},
}
</script>


<style>


.UPCAD_body8 {
  position: relative;
  width: 10rem;
  height: 3.302083rem;
  background-color: black;
  background-image: url(../../../assets/img/PC/Product/product_info/UPCAD/body_pic7.png);
  background-repeat: no-repeat;
  background-size: 1.916667rem, .661458rem;
  background-position: 5.963542rem, 0.520833rem;
  background-position-y: 1.036458rem;
}

.UPCAD_body8 h1 {
  font-size: 0.25rem;
  /*line-height: 0.359375rem;*/
  /*font-size: 40PX;*/
  padding-top: 1.0rem;
  margin-left: 1.17917rem;
  color: #ffffff;
}

.UPCAD_body8 .buttom {
  /* width: 1.5625rem; */
  height: 0.15rem;
  color: #ffffff;
  margin-top: 0.820833rem;
  margin-left: 5.108333rem;
  /* border: solid 0.015625rem #e48013;   */
}

.UPCAD_body8 .content {
  display: flex;
  flex-direction: row-reverse;
  position: absolute;
  top: 2.083333rem;
  left: 5.85rem;;
  width: max-content;
  vertical-align: middle;
}

.UPCAD_body8 .content .list {
  display: flex;
  vertical-align: middle;
  width: 1.041667rem;
  margin-right: 0.35rem;
}

.UPCAD_body8 .buttom .list .dot {
  display: inline-block;
  width: .098958rem;
  height: .098958rem;
  font-size: 0.104167rem;
  border-radius: 0.062083rem;
  border: solid .005208rem #e48013;
  /* margin-left: 0.7125rem; */
}


.UPCAD_body8 .buttom .list .text {
  display: inline-block;
  font-size: .104167rem;
  line-height: .104167rem;
  margin-left: .140625rem;
  /* border: solid 0.015625rem #e48013; */
}

@media (max-width: 1024px) {
  .UPCAD_body8 h1 {
    font-size: 24PX;
  }
}

@media (max-width: 768px) {
  .UPCAD_body8 h1 {
    font-size: 18PX;
  }
}

@media (max-width: 576px) {
  .UPCAD_body8 {
    height: 10rem;
    padding: 1.2333rem 0;
    box-sizing: border-box;
    background-size: 5.916667rem;
    background-position: 1.963542rem;
    background-position-y: 5.036458rem;
    margin-bottom: 0;
  }

  .UPCAD_body8 h1 {
    width: fit-content;
    /*font-size: .5125rem;*/
    font-size: 22PX;
    font-weight: 100;
    /*line-height: 1.12333rem;*/
    margin: 0 auto;
    padding: 0;
    margin-bottom: .4375rem;
  }

  .UPCAD_body8 .buttom {
    margin: 0;
    padding: 0;
    height: auto;
  }

  .UPCAD_body8 .content {
    top: 7.83333rem;
    left: 50%;
    transform: translate(-50%);
    width: 80%;
    vertical-align: middle;
    justify-content: space-around;
  }

  .UPCAD_body8 .content .list {
    width: fit-content;
  }

  .UPCAD_body8 .buttom .list .dot {
    width: .215rem;
    height: .215rem;
    border-radius: 50%;
  }

  .UPCAD_body8 .buttom .list .text {
    font-size: .28125rem;
    margin-left: .4125rem;
  }

}

@media (max-width: 375px) {
  .UPCAD_body8 h1 {
    font-size: 18PX;
  }

}


</style>