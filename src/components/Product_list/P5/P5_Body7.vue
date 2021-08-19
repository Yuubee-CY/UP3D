<template>
  <div class="P5_body7">
    <div class="ct-video" v-show="!currentVideo">
      <video preload="none" ref="video" controls="controls">
        <source :src="lang2.media.videoSrc">
      </video>
      <transition name="playshow">
        <div class="bg" ref="bg" v-show="playflag==0">
          <div class="content">
            <div @click="play()" class="start-buttom"></div>
          </div>
        </div>
      </transition>
    </div>
    <iframe id="video" v-show="currentVideo" src="https://www.youtube.com/embed/luoqp1JWloQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
    </iframe>
  </div>
</template>

<script>


export default {
  components: {},
  props: {
    lang2: {},
  },
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
      document.querySelector('.P5_body7 .bg').style.backgroundImage = "url(" + this.lang2.media.videoBg + ")";
      this.currentVideo = this.$store.state.lang !== '中文';

    },
  },

  created() {
  },

  mounted() {
    setTimeout(() => {
      if (this.$store.state.lang !== '中文') this.currentVideo = true
    }, .0001)
    document.querySelector('.P5_body7 .bg').style.backgroundImage = "url(" + this.lang2.media.videoBg + ")";
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


.P5_body7 {
  position: relative;
  width: 7.291667rem;
  height: 4.104167rem;
  margin: auto;
  margin: .2709335rem auto;
  padding-top: .2709335rem;
  background-color: #ffffff;
  /* border: solid 1px #707070; */
}

.P5_body7 video {
  width: 7.291667rem;
  height: 4.104167rem;
  margin: auto;
  /* border-bottom:  #707070 solid .005208rem; */
}

.P5_body7 .bg {
  position: absolute;
  top: .27rem;
  width: 7.293667rem;
  height: 4.105167rem;
  background-size: cover;
  background-position: center;
}

.P5_body7 .bg .start-buttom {
  position: absolute;
  width: .390625rem;
  height: .390625rem;
  cursor: pointer;
  background-image: url(../../../assets/img/PC/Small_Icon/PC-03.png);
  background-repeat: no-repeat;
  background-size: 6.859375rem, 2.75rem;
  background-position: -4.34rem -.0rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* border:  solid .005208rem red; */
}


.P5_body7 .bg .content {
  margin-top: 1.052083rem;
  margin-left: 2.953125rem;
  /* border:  solid .005208rem red; */

}


.P5_body7 .bg .content p {
  font-weight: lighter;
  position: absolute;
  top: 1.052083rem;
  left: 3.046875rem;
  font-size: 0.208333rem;
  line-height: 0.25rem;
  color: #ffffff;
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
  .P5_body7 {
    width: 100%;
    height: 12rem;
    position: relative;
  }

  .P5_body7 video {
    width: 100%;
    height: 100%;
  }

  .P5_body7 .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .P5_body7 .bg .content {
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
  }

  .P5_body7 .bg .start-buttom {
    margin: 0;
    padding: 0;
    /*width: .390625rem;*/
    /*height: .390625rem;*/
    width: 1.125rem;
    height: 1.125rem;
    background-size: 17.04rem;
    background-position: -10.7rem -.0rem;
    top: 0;
    left: 0;
  }
}

</style>