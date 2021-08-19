<template>
  <div class="About_body3" @mouseleave="switchbgnum=-1">
    <transition-group>
      <img v-show="switchbgnum==0" v-bind:key="1" class="bgimg" :src='this.bgimgSrc[0]'>

      <img v-show="switchbgnum==1" v-bind:key="2" class="bgimg" :src='this.bgimgSrc[1]'>

      <img v-show="switchbgnum==2" v-bind:key="3" class="bgimg" :src='this.bgimgSrc[2]'>

      <img v-show="switchbgnum==3" v-bind:key="4" class="bgimg" :src='this.bgimgSrc[3]'>
    </transition-group>

    <div class="content">
      <div class="card" v-for='(sublist ,index2) in lang2.cardinfo' :key="index2" @mouseover="switchbg(index2)">
        <div class="item">
          <router-link
              :class="{'active':switchbgnum==index2,'active2':switchbgnum!=index2}"
              :to="sublist.url">
            <img v-lazy="sublist.imgurl" :key="sublist.imgurl">
            <h1>{{ sublist.name }}</h1>
          </router-link>
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
    return {
      switchbgnum: -1,
      bgimgSrc: this.lang2.bgimg
    }
  },
  computed: {},
  created() {
  },
  watch: {
    //监听语言变化
    '$store.state.lang': function () {
      this.bgimgSrc =  this.lang2.bgimg
    },
  },
  mounted() {
    //页面初始化时判断是否小于1024px
    if (window.innerWidth <= 768) {
      this.bgimgSrc = this.lang2.bgimgPH
    } else {
      this.bgimgSrc = this.lang2.bgimg
    }
    //监听屏幕宽度变化
    window.addEventListener('resize', () => {
      let screenWidth = window.innerWidth
      if (screenWidth <= 768) {
        this.bgimgSrc = this.lang2.bgimgPH
      } else {
        this.bgimgSrc = this.lang2.bgimg
      }
    })

  },
  methods: {
    switchbg(index2) {
      this.switchbgnum = index2
    },
  },
}
</script>


<style>

.About_body3 {
  width: 7.15rem;
  height: 4.296875rem;
  position: relative;
  margin: auto;
  background-color: #1e1e1e;
  margin-top: 0.447917rem;
  overflow: hidden;
}

.About_body3 .bgimg {
  width: 100%;
  height: 4.296875rem;
  object-fit: cover;
  position: absolute;
  top: 0rem;
  left: 0rem;
  z-index: 8;
}

.About_body3 .content {
  width: 100%;
  position: absolute;
  top: 0rem;
  display: flex;
  z-index: 9;
}

.About_body3 .card {
  float: left;
  /*width: 1.770833rem;*/
  width: 25%;
  height: 4.296875rem;
  border-right: solid .005208rem #707070;
  box-shadow: .067708rem 0.052083rem 0.114583rem 0px rgba(0, 0, 0, 0.11);
  color: #ffffff;
}

.About_body3 .card:last-child {
  border-right: none
}

.About_body3 .card .item {
  width: .854167rem;
  margin: auto;
  margin-top: 1.625rem;
  text-align: center;
  color: #ffffff;
}

.About_body3 .card .item .active {
  text-decoration: none;
  color: orange;
}

.About_body3 .card .item .active2 {
  text-decoration: none;
  color: white;
}


.About_body3 .card:nth-last-child(1) div {
  margin-top: 1.5rem;
}

.About_body3 .card:nth-child(1) div img {
  width: 0.484375rem;
  height: 0.536458rem;
}

.About_body3 .card:nth-child(2) div img {
  width: 0.5rem;
  height: 0.536458rem;
}

.About_body3 .card:nth-child(3) div img {
  width: 0.854167rem;
  height: 0.546875rem;
}

.About_body3 .card:nth-child(4) div img {
  width: 0.442708rem;
  height: 0.666667rem;
}

.About_body3 .card div h1 {
  /*font-size: 0.104167rem;*/
  font-size: 14PX;
  margin-top: 0.234375rem;
}

.About_body3 .card div:hover {
  color: orange;
  cursor: pointer;
}
</style>