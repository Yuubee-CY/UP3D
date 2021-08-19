<template>
  <div class="solution_media">
    <div class="ct-video" v-show="!currentVideo">
      <video preload="none" ref="video" controls="controls">
        <source :src="lang2.videoSrc">
      </video>
      <transition name="playshow">
        <div class="bg" ref="bg" v-show="playflag==0">
          <div class="content">
            <div @click="play()" class="start-buttom"></div>
          </div>
        </div>
      </transition>
    </div>
    <iframe id="video" v-show="currentVideo" src="https://www.youtube.com/embed/ILYSvzDwnN0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
    </iframe>
  </div>
</template>

<script>
export default {
  name: "Solution_Media",
  props: {
    lang2: {}
  },
  data() {
    return {
      lang: {},
      playflag: '0',
      currentVideo: false,
      player: {}
    }
  },
  watch: {
    //监听语言变化
    '$store.state.lang': function () {
      this.$refs.video.load()
      this.playflag = 0;
      document.querySelector('.solution_media .bg').style.backgroundImage = "url(" + this.lang2.videoBg + ")";
      this.currentVideo = this.$store.state.lang !== '中文';
    },
  },
  mounted() {
    setTimeout(() => {
      if (this.$store.state.lang !== '中文') this.currentVideo = true
    }, .0001)
    document.querySelector('.solution_media .bg').style.backgroundImage = "url(" + this.lang2.videoBg + ")";
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

<style scoped>

.solution_media {
  position: relative;
  width: 7.291667rem;
  height: 4.104167rem;
  margin: .2709335rem auto;
  margin-bottom: .8333rem;
  padding-top: .2709335rem;
  background-color: #ffffff;
  box-sizing: border-box;
}

.solution_media video {
  width: 7.291667rem;
  height: 4.104167rem;
  margin: auto;
}

iframe {
  width: 7.291667rem;
  height: 4.104167rem;
  margin: auto;
}

.solution_media .bg {
  position: absolute;
  top: .2709335rem;
  width: 7.291667rem;
  height: 4.114167rem;
  background-size: cover;
}

.solution_media .bg .start-buttom {
  width: .390625rem;
  height: .390625rem;
  cursor: pointer;
  background-image: url(../../assets/img/PC/Small_Icon/PC-03.png);
  background-repeat: no-repeat;
  background-size: 6.859375rem, 2.75rem;
  background-position: -4.34rem -.0rem;
  /*margin-top: 2.083333rem;*/
  position: absolute;
  margin-left: 50%;
  margin-top: 25%;
  transform: translateX(-50%);
}


.solution_media .bg .content {
  position: relative;
}


.solution_media .bg .content p {
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

  .solution_media {
    width: 100%;
    height: 12rem;
    position: relative;
    margin: .83333rem auto;
  }

  .solution_media video,iframe,.ct-video {
    width: 100%;
    height: 100%;
  }

  .solution_media .bg {
    position: absolute;
    top: 0rem;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }

  .solution_media .bg .content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
  }

  .solution_media .bg .start-buttom {
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