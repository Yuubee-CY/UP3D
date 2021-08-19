<template>
  <div class="news_blog_banner">
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
  mounted() {
    document.querySelector('.news_blog_banner').style.backgroundImage = 'url(' + this.lang2.imgUrl + ')'
  }
}
</script>

<style scoped>
.news_blog_banner {
  font-family: Montserrat;
  width: 10rem;
  height: 3.645833rem;
  background: no-repeat center;
  background-size: cover;
  position: relative;
}

.news_blog_banner .shade{
  width: 100%;
  height: 100%;
  background-color: rgba(5,5,5,.3);
}

.news_blog_banner .banner-info {
  width: 2.604167rem;
  height: 2.395833rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  display: flex;
  justify-content: space-around;
}

.news_blog_banner .banner-info .banner-link{
  position: absolute;
  top: -0.24155rem;
  left: -50%;
}

.news_blog_banner .banner-info .banner-link a {
  font-size: .083333rem;
  color: white;
  white-space:nowrap;
}

.news_blog_banner .banner-info .banner-link span {
  color: white;
  margin: 0 0.03623rem;
}

.news_blog_banner .banner-info .banner-title h1 {
  font-size: .208333rem;
  font-weight: 400;
}

.news_blog_banner .banner-info .banner-msg {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.news_blog_banner .banner-info .banner-msg p {
  display: inline-block;
  font-size: .083333rem;
}
</style>