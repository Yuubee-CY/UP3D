<template>
  <div class="news_blog_banner">
    <img class="banner-bg" v-lazy="this.imgUrl" alt="">
    <img class="banner-bg-PH" v-lazy="this.lang2.imgUrlPH" alt="">
    <div class="shade"></div>
    <div class="banner-info">
      <div class="banner-link">
        <router-link to="/News" tag="a" class="b-link link1">{{ lang2.link1 }}</router-link>
        <span>></span>
        <router-link :to=lang2.link2Url tag="a" class="b-link link2">{{ lang2.link2 }}</router-link>
      </div>
      <div class="banner-title">
        <h1>{{ lang2.title }}</h1>
      </div>
      <div class="banner-msg">
        <p class="msg-sort">{{ lang2.sort }}</p>
        <p class="msg-author">{{ lang2.author }}</p>
        <p class="msg-date">{{ lang2.date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsBlogBanner",
  props: {
    lang2: {},
  },
  data() {
    return {
      imgUrl: this.lang2.imgUrl,
      imgUrlPH: this.lang2.imgUrlPH
    }
  },
  watch: {
    //监听语言变化
    '$store.state.lang': function () {
      this.imgUrl =  this.lang2.imgUrl
      this.imgUrlPH = this.lang2.imgUrlPH
    },
  },
  mounted() {
    // //页面初始化时判断是否小于768px
    // if (window.innerWidth <= 576) {
    //   this.imgUrl = this.lang2.imgUrlPH
    // } else {
    //   this.imgUrl = this.lang2.imgUrl
    // }
    // //监听屏幕宽度变化
    // window.addEventListener('resize', () => {
    //   let screenWidth = window.innerWidth
    //   if (screenWidth <= 576) {
    //     this.imgUrl = this.lang2.imgUrlPH
    //   } else {
    //     this.imgUrl = this.lang2.imgUrl
    //   }
    // })
  }
}
</script>

<style scoped>
.news_blog_banner {
  font-family: Montserrat;
  width: 10rem;
  height: 40vw;
  background: no-repeat center;
  background-size: cover;
  position: relative;
}

.news_blog_banner .banner-bg,
.news_blog_banner .banner-bg-PH {
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.news_blog_banner .shade {
  width: 100%;
  height: 100%;
  background-color: rgba(5, 5, 5, .5);
  position: absolute;
  top: 0;
  z-index: 5;
}

.news_blog_banner .banner-info {
  width: auto;
  height: auto;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  display: flex;
  flex-wrap: wrap;
  gap: .4125rem;
  z-index: 10;
}


.news_blog_banner .banner-info .banner-link a {
  font-size: 18PX;
  color: white;
  white-space: nowrap;
}

.news_blog_banner .banner-info .banner-link span {
  color: white;
  margin: 0 5PX;
}

.news_blog_banner .banner-info .banner-title h1 {
  font-size: 36PX;
  font-weight: 600;
  text-align: center;
}

.news_blog_banner .banner-info .banner-msg {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: .5125rem;
  white-space: nowrap;
}

.news_blog_banner .banner-info .banner-msg p {
  display: inline-block;
  font-size: 18PX;
}

span {
  font-size: 16PX;
}

.banner-bg-PH {
  display: none;
}

@media (max-width: 1024px) {
  .news_blog_banner .banner-info .banner-title h1 {
    font-size: 28PX;
  }

  .news_blog_banner .banner-info .banner-link a {
    font-size: 16PX;
  }

  .news_blog_banner .banner-info .banner-msg p {
    font-size: 16PX;
  }

}

@media (max-width: 768px) {
  .banner-bg {
    display: none;
  }

  .banner-bg-PH {
    display: block;
    object-position: bottom;
  }

  .news_blog_banner .banner-info .banner-msg p {
    font-size: 14PX;
  }

  span {
    font-size: 14PX;
  }

  .news_blog_banner {
    height: 11rem;
    background-size: cover;
    background-position: center;
    background-position-y: bottom;
  }

  .news_blog_banner .banner-info {
    width: 70%;
  }
}

@media (max-width: 576px) {


}

@media (max-width: 320px) {
}

</style>