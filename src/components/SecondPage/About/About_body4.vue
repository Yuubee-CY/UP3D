<template>
  <div class="About_body4">
    <h1>{{ lang2.title }}</h1>
    <div class="we-team">
      <div class="team-pic" v-for="(item,index) in lang2.weTeam" :key="index">
        <img v-lazy="item.imgUrl" :key="item.imgUrl" @mouseenter="showInfo($event)" @mouseleave="hideInfo($event)">
        <div class="info-list" @mouseenter="showInfo($event)" @mouseleave="hideInfo($event)">
          <div class="info-item" v-for="(item2, index2) in item.info" :key="index2">
            <p class="t-1">{{ item2.title }}</p>
            <p class="d-1">{{ item2.data }}</p>
          </div>
        </div>
      </div>

      <swiper class="weTeamSilde" :options="swiperOptionsBody4">
        <swiper-slide class="team-pic" v-for="(item,index) in lang2.weTeam" :key="index">
          <img :src="item.imgUrl" :key="item.imgUrl" @mouseenter="showInfo($event)" @mouseleave="hideInfo($event)">
          <div class="info-list" @mouseenter="showInfo($event)" @mouseleave="hideInfo($event)">
            <div class="info-item" v-for="(item2, index2) in item.info" :key="index2">
              <p class="t-1">{{ item2.title }}</p>
              <p class="d-1">{{ item2.data }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>
</template>

<script>
import Login from "../../../views/Login";

export default {
  props: {
    lang2: {},
  },
  data() {
    return {
      swiperOptionsBody4: {
        slidesPerView: 1,
        slidesPerColumn: 2,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
          clickable: true,
        },//这样写小圆点就有了
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  computed: {},
  watch: {},
  methods: {
    showInfo(e) {
      e.target.parentNode.querySelector('.info-list').style.opacity = '.8'
      e.target.parentNode.querySelector('.info-list').style.transform = 'scale(1,1)'

    },
    hideInfo(e) {
      e.target.parentNode.querySelector('.info-list').style.opacity = '0'
      e.target.parentNode.querySelector('.info-list').style.transform = 'scale(.2,.2)'
    }
  },
  mounted() {
    //测试用，查看图文信息，待删
    // let doc = document.getElementsByClassName('info-list')
    // for (let i = 0; i <= 7; i++) {
    //   doc[i].parentNode.querySelector('.info-list').style.opacity = '.8'
    //   doc[i].parentNode.querySelector('.info-list').style.transform = 'scale(1,1)'
    // }
  }

}
</script>


<style>

.About_body4 {
  height: 5.916667rem;
  position: relative;
  margin-top: 1.208333rem;
  background-color: #f8f8f8;
}

.About_body4 h1 {
  display: block;
  font-weight: normal;
  padding-top: 0.416667rem;
  margin-left: 1.411458rem;
  font-size: 30PX;
  width: fit-content;
  width: -moz-fit-content;
  height: auto;
  padding-bottom: .026042rem;
  padding-right: 0.07246rem;
  border-bottom: #febb6f solid 0.020833rem;
}

.About_body4 .we-team {
  display: flex;
  margin: 0.16908rem auto 0 auto;
  width: 7.48792rem;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-bottom: 0.28986rem;
  box-sizing: border-box;
}

.team-pic {
  box-sizing: border-box;
  margin-top: 0.14493rem;
  position: relative;
}

.team-pic img {
  display: block;
  width: 1.69082rem;
  height: 1.69082rem;
}


.team-pic .info-list {
  position: absolute;
  top: 7%;
  left: 7%;
  width: 1.44928rem;
  height: 1.44928rem;
  background-color: white;
  box-sizing: border-box;
  padding: 0.07246rem 0.12077rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  transform: scale(0.5, 0.5);
  opacity: 0;
  transition: all .7s;
}

.info-item {
  box-sizing: border-box;
}

.t-1 {
  font-family: "Microsoft YaHei";
  /*font-size: 0.07662rem;*/
  font-size: 16PX;
  margin-bottom: 0.02015rem;
}

.d-1 {
  font-family: "Microsoft YaHei";
  /*font-size: 0.11077rem;*/
  font-size: 14PX;
  font-weight: bold;
}

.weTeamSilde {
  display: none;
}

.About_body4 .swiper-pagination {
  display: none;
}

.About_body4 .swiper-button-prev,
.About_body4 .swiper-button-next {
  display: none;
  background-size: contain;
}

.About_body4 .swiper-button-prev {
  left: .3125rem;
}

.About_body4 .swiper-button-next {
  right: .3125rem;
}

</style>