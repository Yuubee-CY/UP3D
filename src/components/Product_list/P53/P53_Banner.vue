<template>
  <div class="P53_banner">
    <div class="content">
      <h1>{{ lang2.title }}</h1>
      <p v-html="lang2.content"></p>
    </div>
    <img :src="this.imgSrc" alt="">
  </div>
</template>

<script>
export default {
  name: "P53banner",
  props: {
    lang2: {},
  },
  data() {
    return {
      imgSrc: this.lang2.imgSrc
    }
  },
  mounted() {
    //页面初始化时判断是否小于1024px
    if (window.innerWidth <= 576) {
      this.imgSrc = this.lang2.imgSrcPH
    } else {
      this.imgSrc = this.lang2.imgSrc
    }
    //监听屏幕宽度变化
    window.addEventListener('resize', () => {
      let screenWidth = window.innerWidth
      if (screenWidth <= 576) {
        this.imgSrc = this.lang2.imgSrcPH
      } else {
        this.imgSrc = this.lang2.imgSrc
      }
    })
  }
}
</script>

<style scoped>
.P53_banner {
  position: relative;
  width: 100%;
  height: 4.833333rem;
}

.P53_banner img {
  width: 100%;
  height: auto;
}

.content {
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translateY(-50%);
}

.content h1 {
  font-size: 0.3125rem;
  font-weight: 100;
  line-height: 0.394583rem;
  color: #E48013;
  margin-bottom: .125rem;
}

.content p {
  font-size: 20PX;
  color: white;
  width: 1.4125rem;
}

@media (max-width: 1024px) {
  .content p {
    font-size: 16PX;
  }
}

@media (max-width: 576px) {
  .P53_banner {
    height: auto;
  }

  .content {
    top: 12%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    z-index: 10;
    white-space: nowrap;
  }

  .P53_banner img {
    width: 100%;
    height: auto;
    z-index: 5;
  }

  .content h1 {
    font-size: .737rem;
    color: #E48013;
    margin-bottom: .5925rem;
  }

  .content p {
    margin: 0 auto;
    font-size: .3125rem;
    width: 2.9rem;
    line-height: 0.458rem;
    color: #707070;
  }
}

@media (max-width: 425px) {
  .content p {
    width: 3.3rem;
    line-height: 0.458rem;
  }
}

</style>