<template>
  <div class="wrapper">
    <NewsBlogBanner class="news_blog_banner" :lang2="lang.UPCAM_article.banner"></NewsBlogBanner>
    <NewsBlogBody class="news_blog_body" :lang2="lang.UPCAM_article.body">
      <div class="content-msg">
        <div class="bc-text">
          <p>
            UPCAM is a dental nesting software independently researched and developed by UP3D Tech. The core of tool path of UPCAM uses the algorithm of ModuleWorks from Germany.
          </p>
          <p>
            (Ps: ModuleWorks is one of the most advanced CAM core algorithm suppliers in Germany)
          </p>
          <div class="bc-img">
            <img v-lazy="require('../../../../assets/img/PC/News/CompanyNew_Blog/UPCAM_article/pic1.jpg')" alt="">
          </div>
          <p>
            The software user interface is simple, the sections are clearly distributed, and any new dental technician can learn how to nest in five minutes.
          </p>
        </div>
        <div class="bc-img">
          <img v-lazy="require('../../../../assets/img/PC/News/CompanyNew_Blog/UPCAM_article/pic2.png')" alt="">
        </div>
        <div class="bc-text">
          <p class="text-strong">
            Widely range of applications<br>
            and compatible with all dental miling machines
          </p>
          <p>
            Whether milling or grinding, 4-axis or 5-axis, the software can select the milling strategy automatically , making the processing more flexible and more efficient.
          </p>
          <p>
            UPCAM is compatible with all types of restorations, and is equipped with different milling strategies for each type, ensuring the diverse needs of milling types.
          </p>
          <p class="text-strong">
            【等Gary渲染图片】
          </p>
        </div>
        <div class="bc-img">
          <img v-lazy="require('../../../../assets/img/PC/News/CompanyNew_Blog/labday/pic1.jpg')" alt="">
        </div>
        <div class="bc-text">
          <p class="text-strong">
            Save more materials <br>
            Realize the most material-saving nesting with P53
          </p>
          <p>
            The compact nesting saves more materials, and it is matched with the P53 C-type fixture to maximize the utilization rate of zirconia blanks and save materials.
          </p>
        </div>
        <div class="bc-img">
          <img v-lazy="require('../../../../assets/img/PC/News/CompanyNew_Blog/UPCAM_article/pic4.png')" alt="">
        </div>
        <div class="bc-text">
          <p>
            Optimize the model direction automatically: optimize the minimum height position of the model on the blank automatically to ensure that the inclination angle of the most economical material does not exceed the maximum milling angle.
          </p>
        </div>
        <div class="bc-img">
          <img v-lazy="require('../../../../assets/img/PC/News/CompanyNew_Blog/UPCAM_article/pic5.png')" alt="">
        </div>
        <div class="bc-text">
          <p class="text-strong">
            More inclusive <br>
            Intelligent software, automatically avoid errors
          </p>
          <p>
            When dragging the model to adjust the nesting position, if the restoration moves to the wrong position, it will automatically bounce back to the legal position. The software restricts the nestingposition automatically , making it more intelligent.
          </p>
        </div>
        <div class="bc-img" >
          <img v-lazy="require('../../../../assets/img/PC/News/CompanyNew_Blog/UPCAM_article/pic6.gif')" alt="">
        </div>
        <div class="bc-text">
          <p>
            In the model list on the left side of the interface, there will be a prompt to display illegal restorations, which can be corrected in real time. It is convenient to troubleshoot problems and intelligent design is a good way to avoid errors.
          </p>
        </div>
        <div class="bc-img" >
          <img v-lazy="require('../../../../assets/img/PC/News/CompanyNew_Blog/UPCAM_article/pic7.jpg')" alt="">
        </div>
        <div class="bc-text">
          <p class="text-strong">
            How to quickly upgrade UPCAM software?
          </p>
          <p>
            Click the link below to download the software installation file; the file contains the installation package, installation document and video, please read it carefully before installing the software.
          </p>
          <p>
            <a style="" href="https://drive.google.com/file/d/1f3cLQCyuBt52qaZk1KxhqC0a0_pQptE8/view?usp=sharing" target="_blank">
              https://drive.google.com/file/d/1f3cLQCyuBt52qaZk1KxhqC0a0_pQptE8/view?usp=sharing
            </a>
          </p>
          <p>
            If you have any questions, you can leave your contact information, and our technical support will reply to your message within 48 hours.
          </p>
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
  name: "UPCAM-article",
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
a{
  color: #FEBB6F;
}
a:hover{
  color: #E48013;
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