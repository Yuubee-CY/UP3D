<template>
  <div class="wrapper">
    <NewsBlogBanner class="news_blog_banner" :lang2="lang.ids_article.banner"></NewsBlogBanner>
    <NewsBlogBody class="news_blog_body" :lang2="lang.ids_article.body">
      <div class="content-msg">
        <div class="bc-img">
          <img v-lazy="require('../../../../assets/img/PC/News/CompanyNew_Blog/ids_article/banner.jpg')" alt="">
        </div>
        <div class="bc-text">
          <p style="color: #FEBB6F; font-size: 24PX">
            We have what you're looking for：
          </p>
        </div>

        <div class="bc-text">
          <p class="text-strong">
            UP400,--a newly upgraded ultrahigh speed scanner
          </p>
          <p>
            UP400 has the same 1.3 MP camera technology as UP300, but we have upgraded the function of true color
            scanning.
          </p>
          <p>
            It can provide you with more clear images, it will be easier to design, and better to complete the partial
            framwork design.
          </p>
        </div>
        <div class="bc-img">
          <img v-lazy="require('../../../../assets/img/PC/News/CompanyNew_Blog/labday/pic1.jpg')" alt="">
        </div>
        <div class="bc-text">
          <p class="text-strong">
            P53--new 5-axis intelligent dental milling machine
          </p>
          <p>
            P53 has 11 tool libraries. You can place two sets of burs to complete the milling of multiple materials such
            as zirconia or resin.
          </p>
          <p>
            Automatic calibration ensure the milling machine in high-precision processing mode.
          </p>
          <p>
            A platform controls a complete set of devices, and monitors the production status of multiple devices in
            real time.
          </p>
        </div>
        <div class="bc-img">
          <img v-lazy="require('../../../../assets/img/PC/News/CompanyNew_Blog/labday/pic2.jpg')" alt="">
        </div>
        <div class="bc-text">
          <p class="text-strong">
            P41--4-axis wet dental milling machine
          </p>
          <p>
            The built-in PC and intelligent operation mode can complete the griding work very quickly.
          </p>
          <p>
            Intelligent automatic tool changer, which can preplace two sets of burs of glass ceramic and premilled
            titanium blanks at the same time, without changing burs manually, which improves production efficiency.
          </p>
        </div>
        <div class="bc-img">
          <img v-lazy="require('../../../../assets/img/PC/News/CompanyNew_Blog/labday/pic3.png')" alt="">
        </div>
        <div class="bc-text">
          <p class="text-strong" style="text-align: center">
            Visit us at IDS 2021
          </p>
          <p class="text-strong" style="text-align: center">
            Hall 11.2, Stand P038
          </p>
        </div>
        <div class="bc-img" style="text-align: center">
          <img style="width: 100%;max-width: 328px" v-lazy="require('../../../../assets/img/PC/News/CompanyNew_Blog/ids_article/pic1.jpg')" alt="">
        </div>
      </div>
    </NewsBlogBody>
    <NewsBlogOther class="news_blog_other" :lang2="lang.CompanyNews.news_list.news_card.slice(0,2)"></NewsBlogOther>
  </div>
</template>

<script>
import NewsBlogBanner from "../../../Commen/new_blog_banner";
import NewsBlogOther from "../../../Commen/new_blog_other";
import NewsBlogBody from "../../../Commen/new_blog_body";

export default {
  name: "IDS_article",
  components: {
    NewsBlogBanner,
    NewsBlogOther,
    NewsBlogBody
  },
  props: {
    lang: {},
  },
}
</script>

<style scoped>

* {
  line-height: 1.6;
}

.wrapper {
  display: grid;
  grid-template-columns:
    .6fr
    min(1024PX, 100%)
    1fr;
}

.wrapper > * {
  grid-column: 2;
}

.news_blog_banner,
.news_blog_other {
  width: 100%;
  grid-column: 1 / 4;
}

.title {
  text-align: center;
  font-size: 38PX;
  padding: 100PX 0;
  font-family: Montserrat;
  position: relative;
}

.title::after {
  content: '';
  display: block;
  width: 15%;
  height: 1PX;
  border-bottom: 2PX solid #FEBB6F;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  transition: .2s width;
}

.msg {
  font-size: 19PX;
  font-family: Montserrat;
}

.paragraph {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.paragraph1 img {
  width: 100%;
  height: 50vh;
  object-fit: cover;
  margin: 30PX auto;
}

.info-img1::after,
.info-img2::after {
  content: '4-axis machine';
  display: block;
  width: fit-content;
  font-size: 16PX;
  color: #707070;
  margin-left: 50%;
  margin-top: -8PX;
  margin-bottom: 20PX;
  transform: translate(-50%);
}

.info-img2::after {
  content: '5-axis machine';
}

@media (max-width: 1024px) {

}
</style>