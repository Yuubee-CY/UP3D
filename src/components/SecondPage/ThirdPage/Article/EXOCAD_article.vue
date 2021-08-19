<template>
  <div class="wrapper">
    <NewsBlogBanner class="news_blog_banner" :lang2="lang.exocad_article.banner"></NewsBlogBanner>
    <NewsBlogBody class="news_blog_body" :lang2="lang.exocad_article.body">
      <div class="content-msg">

        <div class="bc-text">
          <p class="center-title text-strong">
            Complete partial framework production in one step
          </p>
          <p>
            The one-step production of removable partial denture is a derivative method of digital removable denture.
            the removable partial framework, denture, and gingiva can be designed synchronously and milled in digital
            way at the same time, and there is no need to follow the traditional complex production process steps, which
            can effectively improve the utilization rate of equipment resources and production efficiency, and
            accelerate the digital transformation.
          </p>
          <p class="text-strong">
            Why choose”One-step digital production of partial framework”?
          </p>
          <ul>
            <li>
              <p>
                Framework, Gingiva and crown can be design at the same time.
              </p>
            </li>
            <li>
              <p>
                Orders of removable denture are increasing day by day, we can optimize patient experience through quick
                production.
              </p>
            </li>
            <li>
              <p>
                Effectively shorten production time, reduce labor costs, and increase utilization rate of machine.
              </p>
            </li>
            <li>
              <p>
                Effectively help laboratories achieve digital transformation.
              </p>
            </li>
          </ul>
        </div>
        <div class="bc-text">
          <p class="center-title text-strong">
            Introduction of One-step digital production of partial framework
          </p>
          <p class="text-strong">
            True color texture scan
          </p>
          <p>
            UP400 scans the framework model in 32s with its powerful scan speed and true color texture function.
          </p>
        </div>
        <div class="bc-img">
          <img v-lazy="require('../../../../assets/img/PC/News/CompanyNew_Blog/exocad_article/pic1.jpg')" alt="">
        </div>
        <div class="bc-text">
          <p class="text-strong">
            Partial framework design
          </p>
          <p>
            We can design RPD, crown, gingiva at the same time in 3Shape or Exocad design software.

          </p>
        </div>
        <div class="bc-img">
          <img v-lazy="require('../../../../assets/img/PC/News/CompanyNew_Blog/exocad_article/pic2.jpg')" alt="">
        </div>
        <div class="bc-text">
          <p class="text-strong">
            Partial framework, gingiva and crown milling
          </p>
          <p>
            P53,smart milling machine, mills the resin partial framework, gingiva and crown. After milling process, only
            simple adjustments will complete the production of removable partial dentures.
          </p>
        </div>
        <div class="bc-img list-img">
          <img v-lazy="require('../../../../assets/img/PC/News/CompanyNew_Blog/exocad_article/pic3.jpg')" alt="">
          <img v-lazy="require('../../../../assets/img/PC/News/CompanyNew_Blog/exocad_article/pic4.jpg')" alt="">
          <img v-lazy="require('../../../../assets/img/PC/News/CompanyNew_Blog/exocad_article/pic5.jpg')" alt="">
          <img v-lazy="require('../../../../assets/img/PC/News/CompanyNew_Blog/exocad_article/pic6.jpg')" alt="">
        </div>
        <div class="bc-text">
          <p class="text-strong">
            Partial framework, gingiva and crown adhesion
          </p>
          <p>
            Use self-curing resin to bond with the crown according to the position of the gingiva to ensure the order of
            the dentition. And bond the gingiva to the partial framework after the resin cured.
          </p>
        </div>
        <div class="bc-img">
          <img v-lazy="require('../../../../assets/img/PC/News/CompanyNew_Blog/exocad_article/pic7.gif')" alt="">
        </div>
      </div>
    </NewsBlogBody>
    <NewsBlogOther class="news_blog_other" :lang2="lang.CompanyNews.news_list.news_card.slice(0,2)"></NewsBlogOther>
  </div>
</template>

<script>
import NewsBlogBanner from "../../../../components/Commen/new_blog_banner";
import NewsBlogBody from '../../../../components/Commen/new_blog_body'
import NewsBlogOther from "../../../../components/Commen/new_blog_other";

export default {
  name: "EXOCAD_article",
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