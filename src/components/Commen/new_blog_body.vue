<template>
  <div class="news_blog_body1">
    <div class="per-info">
      <div class="per-info-card">
        <div class="per-head">
          <img :src="lang2.userImg" alt="">
        </div>
        <div class="per-msg">
          <p class="msg-name" v-html="lang2.msgName"></p>
          <p class="msg-ref" v-html="lang2.msgRef"></p>
          <p class="msg-date" v-html="lang2.msgDate"></p>
        </div>
        <div class="per-more">
          <img :src="require('../../assets/img/PC/News/NewsBlog/fb.svg')" alt="">
          <img :src="require('../../assets/img/PC/News/NewsBlog/linked.svg')" alt="">
          <img :src="require('../../assets/img/PC/News/NewsBlog/cm.svg')" alt="">
          <img :src="require('../../assets/img/PC/News/NewsBlog/ytb.svg')" alt="">
        </div>
      </div>
    </div>
    <div class="blog-content">
      <slot></slot>
      <div class="bc-btn">
        <div class="btn like"><span>Like</span></div>
        <div class="btn favorites"><span>Favorites</span></div>
      </div>
    </div>

  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: "NewsBlogBody",
  props: {
    lang2: {},
  },
  data() {
    return {
      //初始化PC、PH的<header>高度
      temp: window.innerWidth > 1024 ? this.temp = 64 : this.temp = 94
    }
  },
  mounted() {
    //监听屏幕宽度变化
    window.addEventListener('resize', () => {
      let screenWidth = window.innerWidth
      if (screenWidth <= 768) {
        //当页面小于768px时，个人名片重置个人名片的属性
        $('.per-info-card').css({'position': 'relative', 'top': 'auto', 'bottom': 'auto'})
        //当页面小于768px时，删除监听事件
        window.removeEventListener('scroll', this.moveCard)
      } else {
        //当页面大于768px时，获取PC、PH中<header>的高度
        window.innerWidth > 1024 ? this.temp = 64 : this.temp = 94

        this.moveCard()
        window.addEventListener('scroll', this.moveCard)
      }

    })

    let screenWidth = window.innerWidth
    if (screenWidth <= 768) {
      $('.per-info-card').css({'position': 'relative', 'top': 'auto', 'bottom': 'auto'})
    } else {
      this.moveCard()
      window.addEventListener('scroll', this.moveCard)
    }
  },
  methods: {

    moveCard() {
      //获取<header>高度
      let headerH = $('header').height()
      let infoCard = $('.per-info-card')
      //调用getElementToPageTop递归获取body部分距离文档顶部距离
      let offTopBody = this.getElementToPageTop($('.news_blog_body1')[0])
      //
      let varOffCardTop = offTopBody + $('.news_blog_body1').innerHeight() - 60 - headerH - headerH - infoCard.height() - 34
      if ($('html').scrollTop() <= offTopBody - headerH - this.temp) {
        infoCard.css({'position': 'relative', 'top': 'auto'})
      } else {
        infoCard.css({'position': 'fixed', 'top': headerH + 35.5})
        if ($('html').scrollTop() >= varOffCardTop) {
          infoCard.css({'position': 'absolute', 'top': 'auto', 'bottom': '0'})
        } else if ($('html').scrollTop() < varOffCardTop) {
          infoCard.css({'position': 'fixed', 'top': headerH + 35.5})
        }
      }
    },

    //getElementToPageTop此方法获取元素距离文档顶端的距离
    getElementToPageTop(el) {
      try {
        if (el.parentElement) {
          //递归
          return this.getElementToPageTop(el.parentElement) + el.offsetTop
        }
        return el.offsetTop
      } catch (e) {
      }
    },
  }
}
</script>

<style scoped>
.news_blog_body1 {
  position: relative;
  /*width: 10rem;*/
  box-sizing: border-box;
  padding: 60PX 10PX;
  display: flex;
  gap: 20PX;
  font-family: Montserrat;
}

.news_blog_body1 .per-info {
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
}

.news_blog_body1 .per-info .per-info-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20PX;
  height: fit-content;
  border-radius: 5PX;
  max-width: 196PX;
}

.per-info .per-head {
  width: 120PX;
  height: 120PX;
}

.per-info .per-msg {
  text-align: center;
  color: #343434;
  font-size: 18PX;
  line-height: 20PX;
  display: flex;
  flex-direction: column;
  gap: 15PX;
}

.per-msg .msg-date {
  font-size: 14PX;
  color: #707070;
}

.per-info .per-more {
  width: 85%;
  min-width: 140PX;
  height: 35PX;
  padding: 0 2PX;
  border-bottom: 1PX solid #d5d5d5;
  display: flex;
  justify-content: space-between;
  gap: 5PX;
  box-sizing: border-box;
}

.per-info .per-more img {
  width: 22PX;
  height: 22PX;
}

.blog-content {
  width: 80%;
}

.bc-text p {
  color: #707070;
  font-size: 19PX;
  margin-bottom: 32PX;
}

.bc-text span {
  color: #FEBB6F;
}

.bc-text .text-strong {
  font-weight: bold;
  font-size: 21PX;
}

.bc-text .center-title {
  font-size: 24PX;
  text-align: center;
  color: rgb(228, 128, 19);
}

.blog-content .bc-img img {
  width: 100%;
  margin: .3125rem 0;
}

.blog-content .list-img {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10PX;
  margin: .3125rem 0;
}

.blog-content .list-img img {
  margin: 0;
  border-radius: 10PX;
}

.blog-content .bc-title-msg {
  font-size: 28PX;
  font-weight: 600;
  color: #1E1E1E;
  margin-top: 10PX;
  margin-bottom: 32PX;
}

.blog-content .bc-btn {
  width: 100%;
  border-top: 1PX solid #d5d5d5;
  padding-top: 32PX;
  box-sizing: border-box;
  display: flex;
  gap: 32PX;
}

.blog-content .bc-btn .btn {
  display: flex;
  align-items: center;
  gap: 5PX;
  height: 30PX;
  font-size: 16PX;
  color: #fff;
  text-align: center;
  background-color: #FEBB6F;
  border: 1PX solid #FEBB6F;
  border-radius: 15PX;
  cursor: pointer;
  padding: 0 10PX;
}

.bc-btn .like:before, .bc-btn .favorites:before {
  content: '';
  display: inline-block;
  width: 20PX;
  height: 20PX;
  vertical-align: middle;
}

.bc-btn .like:before {
  background: url("../../assets/img/PC/News/NewsBlog/like.png");
  background-size: cover;
}

.bc-btn .favorites:before {
  background: url("../../assets/img/PC/News/NewsBlog/sc.png");
  background-size: cover;
}

.bc-text ul {
  display: flex;
  flex-direction: column;
  gap: 24PX;
  margin-bottom: 48PX;
}

.bc-text li {
  display: grid;
  grid-template-columns: 20PX auto;
}

.bc-text li p {
  margin: 0;
}

.bc-text li::before {
  content: '';
  display: inline-block;
  width: 15PX;
  height: 15PX;
  transform: translateY(50%);
  vertical-align: top;
  overflow: hidden;
  border-width: 0;
  border-radius: 10PX;
  border-style: none;
  background-color: rgb(228, 128, 19);
}

@media (max-width: 768px) {
  .news_blog_body1 {
    flex-direction: column-reverse;
  }

  .news_blog_body1 .blog-content {
    width: auto;
  }

  .blog-content .bc-btn {
    justify-content: flex-end;
  }

  .news_blog_body1 .per-info {
    width: 100%;
    display: grid;
    grid-template-columns:
    1fr
    min(478PX, 100%)
    1fr;
    margin-top: 48PX;
  }

  .news_blog_body1 .per-info .per-info-card {
    flex-direction: row;
    justify-content: space-around;
    grid-column: 2;
    padding: .3125rem;
    box-shadow: 0 0px 1px rgba(0, 0, 0, 0.15),
    0 2px 2px rgba(0, 0, 0, 0.15),
    0 4px 4px rgba(0, 0, 0, 0.15);
    /*0 8px 8px rgba(0, 0, 0, 0.15);*/
    max-width: none;
  }

  .per-info .per-head {
    margin: 0;
  }

  .per-info .per-msg {
    text-align: left;
  }

  .per-info .per-more {
    width: auto;
    flex-direction: column;
    border: none;
    min-width: auto;
    height: auto;
    padding: 0;
  }
}
</style>