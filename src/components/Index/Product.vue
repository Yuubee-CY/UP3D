<template>
  <div class="product">
    <p>{{ lang.title }}</p>
    <div class="tab">
      <div class="tab-select">
        PRODUCT
        <ul>
          <li v-on:click='changeCard(index)' :class='currentIndex==index?"active":""' :key='index'
              v-for='(item,index) in lang.product'>
            {{ item.type }}
          </li>
        </ul>
      </div>

      <transition-group name="show">
        <div id="tab-pic" class="current" v-show="currentIndex==index" :key="'my-name'+index"
             v-for='(item,index) in lang.product'>
          <div class="pic-card" v-for='(i,index) in item.info' :key="index">
            <router-link tag="div" :to="i.url" class="upper">
              <img v-lazy="i.pic" :key="i.pic">
            </router-link>
            <div class="card-info">
              <div class="middle">
                {{ i.name }}
              </div>
              <div class="buttom">
                <router-link :to="i.url">{{ lang.more }}</router-link>
                <p @click="leanMore(i)">{{ lang.video }}</p>
              </div>
            </div>
          </div>
        </div>
      </transition-group>

      <swiper :options="swiperOptions"
              id="tab-picPH"
              class="current"
              v-show="currentIndex==index"
              :key="'my-name'+index"
              v-for='(item,index) in lang.product'>
        <swiper-slide class="pic-card" v-for='(i,index) in item.info' :key="index">
          <div class="upper">
            <img v-lazy="i.pic" :key="i.pic">
          </div>
          <div class="card-info">
            <div class="middle">
              {{ i.name }}
            </div>
            <div class="buttom">
              <router-link :to="i.url">{{ lang.more }}</router-link>
              <p @click="leanMore(i)">{{ lang.video }}</p>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination-product" slot="pagination"></div>
      </swiper>
    </div>

  </div>
</template>
<script>
export default {
  props: {
    lang: {},
  },
  namespaced: true,
  data() {
    return {
      currentIndex: 0,
      swiperOptions: {
      // slidesPerView : 2,
      //  spaceBetween: 1000,
        pagination: {
          el: '.swiper-pagination-product',
          type: 'progressbar',
          clickable: true,
        },//这样写小圆点就有了
        // loop: true,
        hide: true
      },
    };
  },
  watch: {},
  created() {
  },
  mounted() {
    // this.langc=this.en;
  },
  methods: {
    changeCard: function (index) {
      // 在这里实现选项卡切换操作：本质就是操作类名
      // 如何操作类名？就是通过currentIndex
      this.currentIndex = index;
      // console.log(this.lang.product);
    },
    leanMore(i) {
      this.$router.push({path: i.url});
      //  this.$store.commit("set_product_posistion",index1*10+index2+'')
      this.$store.commit("set_look_vide", i.video);
    }
  },

};
</script>

<style scope>
.product {
  height: 5rem;
  width: 6.770833rem;
  margin: auto;
  overflow: hidden;
  /* border: green solid .005208rem; */
}

.product p {
  width: max-content;
  margin: auto;
  font-family: Montserrat;
  font-size: 0.208333rem;
  line-height: normal;
  color: #1e1e1e;
}

.product .tab .tab-select {
  width: 6.770833rem;
  height: auto;
  text-align: center;
  position: relative;
  margin: auto;
  /* overflow: hidden; */
  font-family: Montserrat;
  font-size: 1.239583rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 1.484375rem;
  letter-spacing: 0px;
  color: #f8f8f8;
  /* border: solid red 3px; */
}

.product .tab .tab-select ul {
  position: absolute;
  /* align-content: center; */
  /* text-align: center; */
  width: 100%;
  top: 40%;
  border-bottom: solid 0.005208rem #d5d5d5;
  display: flex;
  justify-content: space-around;
  /* border:solid .005208rem #febb6f; */
}

.product .tab .tab-select ul li {
  width: fit-content;
  height: 0.234375rem;
  font-family: Montserrat;
  text-align: center;
  list-style: none;
  float: left;
  /*margin-left: .526042rem;*/
  /* margin-right: 0.3125rem; */
  font-size: 0.177083rem;
  line-height: 0.213542rem;
  color: #707070;
  cursor: pointer;
  /* border:solid .005208rem red; */
}

.product .tab ul li.active {
  color: #343434;
  border-bottom: solid 0.020833rem #febb6f;
}

#tab-pic {
  width: 6.510417rem;;
  height: 1.5625rem;
  margin: auto;
  float: left;
  display: none;
  font-size: 0.15625rem;
  /*line-height: 1.5625rem;*/
  border-top: 0px;
  /* border: blue solid .005208rem; */
}

#tab-pic.current {
  display: flex;
  justify-content: space-evenly;
  width: 6.770833rem;
  /*height: 4.739583rem;*/
  height: auto;
  margin: auto;
  overflow: hidden;
  /* border: red .005208rem solid; */
}

#tab-pic .pic-card {
  width: 1.875rem;
  /*height: 2.78125rem;*/
  height: auto;
  float: left;
  /*margin-left: 0.213542rem;*/
  /*margin-right: 0.109375rem;*/
  margin-bottom: .3125rem;
  padding: 0px;
  box-shadow: 0px 0.005208rem 0.052083rem 0px rgba(0, 0, 0, 0.19);
}

/* #tab-pic .pic-card :after, #tab-pic .pic-card :before{
       content: "1";
       display: table;
} */


#tab-pic .pic-card .upper {
  width: 1.875rem;
  height: 2.1875rem;
  background-color: #f8f8f8;
  text-align: center;
  cursor: pointer;
}

#tab-pic .pic-card .upper img {
  /*width: 1.875rem;*/
  width: auto;
  height: 2.1875rem;
}

#tab-pic .pic-card .card-info {
  height: auto;
  padding: 10PX 15PX;
  box-sizing: border-box;
}

#tab-pic .pic-card .middle {
  /*width: 1.5625rem;*/
  /*height: 0.171875rem;*/
  font-family: Montserrat;
  /*font-size: 0.145833rem;*/
  font-size: 20PX;
  font-weight: normal;
  font-stretch: normal;
  line-height: 0.171875rem;
  letter-spacing: 0PX;
  margin: auto;
  /*margin-top: 0.072917rem;*/
  color: #707070;
}

#tab-pic .pic-card .buttom {
  /*height: 0.171875rem;*/
  height: auto;
  margin-top: .122917rem;
  white-space: nowrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#tab-pic .pic-card .buttom a:nth-child(1) {
  display: block;
  float: left;
  width: fit-content;
  height: fit-content;
  font-family: Montserrat;
  font-size: 14PX;
  font-weight: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0px;
  color: #707070;
  text-align: center;
  border-bottom: .015rem solid #FEBB6F;
  padding: 0 .01rem;
  padding-bottom: .01rem;
}

#tab-pic .pic-card .buttom p {
  display: block;
  width: 60PX;
  height: 26PX;
  float: right;
  font-family: Montserrat;
  font-size: 14PX;
  text-align: center;
  font-weight: normal;
  font-stretch: normal;
  line-height: 26PX;
  letter-spacing: 0px;
  color: #ffffff;
  background-color: #febb6f;
  border-radius: 0.8125rem;

  margin: 0;
  box-shadow: 0px 0.005208rem 0.020833rem 0px rgba(0, 0, 0, 0.16);
  cursor: pointer;
}

/* .show-enter,
.show-leave-to {
opacity: 0;
}

.show-enter-active,
.show-leave-active {
opacity: 1;
transition: all 0.5s ease;
} */

.show-enter,
.show-leave-to {
  opacity: 0;
}

.show-enter-active {
  transition: all 1.5s ease;
}

.show-leave-active {
  opacity: 1;
}

</style>