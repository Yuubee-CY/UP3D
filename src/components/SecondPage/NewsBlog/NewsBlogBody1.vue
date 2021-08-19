<template>
  <div class="news_blog_body1">
    <div class="per-info">
      <div class="per-info-card">
        <div class="per-head"></div>
        <div class="per-msg">
          <p class="msg-name">Yuubee</p>
          <p class="msg-ref">Front-End Web Developer</p>
          <p class="msg-date">2021-06-15</p>
        </div>
        <div class="per-more">
          <img v-lazy="require('../../../assets/img/PC/News/NewsBlog/fb.svg')" alt="">
          <img v-lazy="require('../../../assets/img/PC/News/NewsBlog/linked.svg')" alt="">
          <img v-lazy="require('../../../assets/img/PC/News/NewsBlog/cm.svg')" alt="">
          <img v-lazy="require('../../../assets/img/PC/News/NewsBlog/ytb.svg')" alt="">
        </div>
      </div>
    </div>
    <div class="blog-content">
      <div class="bc-text text1">
        <p>
          UP3D  is a high tech company headquartered in Shenzhen since 2013.<br/>
          As one of the only few companies in the world that are capable of developing a full dental CAD/CAM solution including software and hardwares.<br/>
          We are committed to provide our worldwide customers with high quality dental CAD/CAM products to benefit from the digital dental revolution.
        </p>
      </div>
      <div class="bc-img img1">
        <img v-lazy="require('../../../assets/img/PC/News/NewsBlog/blog_content_img.png')" alt="">
      </div>
      <div class="bc-img text2">
        <p class="title">"UP3D / Digital techology improves life."</p>
      </div>
      <div class="bc-text text3">
        <p>
          UP3D  is a high tech company headquartered in Shenzhen since 2013.<br/>
          As one of the only few companies in the world that are capable of developing a full dental CAD/CAM solution including software and hardwares.<br/>
          We are committed to provide our worldwide customers with high quality dental CAD/CAM products to benefit from the digital dental revolution.
        </p>
      </div>
      <div class="bc-btn">
        <div class="btn like"><span>Like</span></div>
        <div class="btn favorites"><span>Favorites</span></div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "NewsBlogBody1",
  props: {
    lang2: {},
  },
}
</script>

<style scoped>
.news_blog_body1{
  position: relative;
  width: 10rem;
  box-sizing: border-box;
  padding: .520833rem 1.40625rem;
  display: flex;
}

.news_blog_body1 .per-info{
  width: 20%;
  height: 100%;
}

.news_blog_body1 .per-info .per-info-card{
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.per-info .per-head{
  /*width: .890625rem;*/
  width: .833333rem;
  height: .833333rem;
  background-color: #FEBB6F;
  border-radius: 50%;
  margin-bottom: .15625rem;
}

.per-info .per-msg{
  text-align: center;
  color: #707070;
  font-family: Montserrat;
  line-height: .208333rem;
  margin-bottom: .15625rem;
}

.per-info .per-more{
  width: 100%;
  height: .234375rem;
  border-bottom: .005rem solid #d5d5d5;
  display: flex;
  justify-content: space-evenly;
}
.per-info .per-more img{
  width: .145833rem;
  height: .145833rem;
}

.news_blog_body1 .blog-content{
  width: 80%;
}

.news_blog_body1 .bc-text{
  color: #707070;
  font-family: Montserrat;
  line-height: .213542rem;
  font-size: .083333rem;
}

.blog-content .bc-img img{
  width: 100%;
  margin: .520833rem 0;
}
.blog-content .title{
  font-size: .177083rem;
  color: #1E1E1E;
  margin-bottom: .369792rem;
}
.blog-content .bc-btn{
  width: 100%;
  border-top: .005rem solid #d5d5d5;
  margin-top: .520833rem;
  padding-top: .21875rem;
  box-sizing: border-box;
}
.blog-content .bc-btn .btn{
  width: .916667rem;
  height: .244792rem;
  border: .005rem solid #FEBB6F;
  border-radius: .125rem;
  text-align: center;
  line-height: .244792rem;
  font-size: .072917rem;
  color: #fff;
  font-family: Montserrat;
  background-color: #FEBB6F;
  cursor: pointer;
}
.bc-btn .like{
  float: left;
}
.bc-btn .like:before, .bc-btn .favorites:before{
  content: '';
  display: inline-block;
  width: .15625rem;
  height: .15625rem;
  margin-right: .125rem;
  vertical-align: middle;
}
.bc-btn .like:before{
  background: url("../../../assets/img/PC/News/NewsBlog/like.png");
  background-size: cover;
}
.bc-btn .favorites{
  margin-left: 1.067708rem;
}
.bc-btn .favorites:before{
  background: url("../../../assets/img/PC/News/NewsBlog/sc.png");
  background-size: cover;
}
</style>