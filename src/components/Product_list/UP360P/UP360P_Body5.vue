<template>
  <div class="UP360P_Body5">
    <div class="ct-video" v-show="!currentVideo">
      <video preload="none" ref="video" controls="controls">
        <source :src="lang2.media.videoSrc">
      </video>
      <transition name="playshow">
        <div class="bg" ref="bg" v-show="playflag==0">
          <div class="content">
            <p>{{ lang2.content[0] }}<br>
              {{ lang2.content[1] }}<br>
              {{ lang2.content[2] }}+</p>
            <div @click="play()" class="start-buttom"></div>
          </div>
        </div>
      </transition>
    </div>
    <iframe id="video" v-show="currentVideo"
            src="https://www.youtube.com/embed/wvAG_bpVWh0?list=PLlybLQIhcWpEj3MSNo36HUMslq67bafeo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>

    </iframe>
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
      playflag: '0',
      currentVideo: false,
      player: {}
    }
  },
  computed: {
    //   swiper() {
    //   return this.$refs.BolgSwiper.$swiper
    // }
  },

  watch: {
    //监听语言变化
    // "$store.state.lang": function () {
    //   this.lang = this.$t("index").products;
    // },
    //监听语言变化
    '$store.state.lang': function () {
      this.$refs.video.load()
      this.playflag = 0;
      document.querySelector('.UP360P_Body5 .bg').style.backgroundImage = "url(" + this.lang2.media.videoBg + ")";
      this.currentVideo = this.$store.state.lang !== '中文';

    },
  },

  created() {
  },

  mounted() {
    setTimeout(() => {
      if (this.$store.state.lang !== '中文') this.currentVideo = true
    }, .0001)
    document.querySelector('.UP360P_Body5 .bg').style.backgroundImage = "url(" + this.lang2.media.videoBg + ")";
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
      } catch (e) {

      }
    }
  },
}
</script>


<style>


.UP360P_Body5 {
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

.UP360P_Body5 video {
  width: 7.291667rem;
  height: 4.104167rem;
  margin: auto;
  /* border-bottom:  #707070 solid .005208rem; */
}

.UP360P_Body5 .bg {
  position: absolute;
  top: .27rem;
  width: 7.291667rem;
  height: 4.104167rem;
  background-size: cover;
}

.UP360P_Body5 .bg .start-buttom {
  width: .390625rem;
  height: .390625rem;
  cursor: pointer;
  background-image: url(../../../assets/img/PC/Small_Icon/PC-03.png);
  background-repeat: no-repeat;
  background-size: 6.859375rem, 2.75rem;
  background-position: -4.34rem -.0rem;
  /*margin-top: 2.083333rem;*/

}


.UP360P_Body5 .bg .content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-25%, -75%);
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}


.UP360P_Body5 .bg .content p {
  font-weight: lighter;
  /*font-size: 0.208333rem;*/
  font-size: 18PX;
  line-height: normal;
  color: #ffffff;
  margin-bottom: .125rem;
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
  .UP360P_Body5 {
    width: 100%;
    height: 12rem;
    position: relative;
  }

  .UP360P_Body5 video {
    width: 100%;
    height: 100%;
  }

  .UP360P_Body5 .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: -1.5rem;
  }

  .UP360P_Body5 .bg .content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-25%, -75%);
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  .UP360P_Body5 .bg .content p {
    line-height: normal;
  }

  .UP360P_Body5 .bg .start-buttom {
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