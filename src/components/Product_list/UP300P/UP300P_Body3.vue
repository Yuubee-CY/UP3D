<template>
  <div class="UP300P_Body3">
    <div v-show="false">
    <video preload="none" ref="video" controls="controls">
      <source :src="lang2.videoSrc">
    </video>
    <transition name="playshow">
      <div class="bg" ref="bg" v-show="playflag==0">
        <div class="content">
          <p v-html="lang2.content">
          </p>
          <div @click="play()" class="start-buttom"></div>
        </div>
      </div>
    </transition>
    </div>
  </div>
</template>

<script>


export default {
  props: {
    lang2: {},
  },
  components: {},

  // name: 'carrousel',
  data() {
    return {
      lang: {},
      playflag: '0'
    }
  },
  computed: {
    //   swiper() {
    //   return this.$refs.BolgSwiper.$swiper
    // }
  },

  watch: {
    //监听语言变化
    '$store.state.lang': function () {
      this.$refs.video.load()
      this.playflag = 0;
      document.querySelector('.UP300P_Body3 .bg').style.backgroundImage = "url(" + this.lang2.videoBg + ")";
    },
  },

  created() {

  },

  mounted() {
    document.querySelector('.UP300P_Body3').style.height = '0px'
    document.querySelector('.UP300P_Body3').style.margin = '0'
    document.querySelector('.UP300P_Body3').style.padding = '0'
    document.querySelector('.UP300P_Body3 .bg').style.backgroundImage = "url(" + this.lang2.videoBg + ")";
  },
  methods: {
    play() {
      this.$refs.video.play();
      this.playflag = 1;
      this.watchpaly = setInterval(this.repaly, 500);
      //   this.$refs.bg.style.display='none' ;
    },
    repaly() {
      try {
        if (this.$refs.video.ended == true) {
          this.playflag = 0;
          clearInterval(this.watchpaly);

        }
      }catch (e){

      }

    }
  },
}
</script>


<style>

.UP300P_Body3 {
  position: relative;
  width: 7.291667rem;
  height: 4.104167rem;
  margin: auto;
  margin-top: 0.541667rem;
  padding-top: .27rem;
  padding-bottom: 0.381667rem;
  background-color: #ffffff;
  /* border: solid 1px #707070; */
}

.UP300P_Body3 video {
  width: 7.291667rem;
  height: 4.104167rem;
  margin: auto;
}

.UP300P_Body3 .bg {
  position: absolute;
  top: .27rem;
  width: 7.293667rem;
  height: 4.104167rem;
  background-size: cover;
}

.UP300P_Body3 .bg .start-buttom {
  width: .390625rem;
  height: .390625rem;
  cursor: pointer;
  background-image: url(../../../assets/img/PC/Small_Icon/PC-03.png);
  background-repeat: no-repeat;
  background-size: 6.859375rem, 2.75rem;
  background-position: -4.34rem -.0rem;
  margin-top: .489583rem;
}


.UP300P_Body3 .bg .content {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
}


.UP300P_Body3 .bg .content p {
  font-weight: lighter;
  /* position:absolute; */
  /* top: 1.052083rem;
  left: 3.046875rem; */
  /*font-size: 0.208333rem;*/
  font-size: 16PX;
  /*line-height: 0.25rem;*/
  color: #707070;
}


.playshow-enter,
.playshow-leave-to {
  opacity: 0;
  /* transform: translateY(50px); */
}

.playshow-enter-active, .playshow-leave-active {
  /* opacity: 1; */
  transition: all 1.5s ease;
}

@media (max-width: 576px) {

  .UP300P_Body3{
    width: 100%;
    height: 12rem;
    position: relative;
  }
  .UP300P_Body3 video{
    width: 100%;
    height: 100%;
  }
  .UP300P_Body3 .bg{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: -10.35rem;
  }
  .UP300P_Body3 .bg .content{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
  }
  .UP300P_Body3 .bg .content p{
    position: absolute;
    top: 50%;
    left: 100%;
    width: 2.8333rem;
    transform: translate(10%, -50%);
    color: white;
    /*font-size: .2125rem;*/
    /*line-height: normal;*/
    font-size: 14PX;
  }
  .UP300P_Body3 .bg .start-buttom{
    margin: 0;
    padding: 0;
    /*width: .390625rem;*/
    /*height: .390625rem;*/
    width: 1.125rem;
    height: 1.125rem;
    background-size: 17.04rem;
    background-position: -10.7rem -.0rem;
  }
}

</style>