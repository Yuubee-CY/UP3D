<template>
  <div class="wrapper">
    <NewsBlogBanner class="news_blog_banner" :lang2="lang.P53ENBlog.banner"></NewsBlogBanner>
    <NewsBlogBody class="news_blog_body" :lang2="lang.P53ENBlog.body">
      <div class="content-msg">
        <div class="bc-text">
          <p>
            Are you still worrying about using blocks too quickly?
          </p>
          <p>
            Are you still annoyed why others can mill 44 teeth with a zirconium block, while you can only mill 28 teeth?
          </p>
          <p>
            Are you still thinking about why the cost of materials is getting higher and higher?
          </p>
          <p>
            Are you still nesting like this?
          </p>
        </div>
        <div class="bc-img">
          <img v-lazy="require('../../../../assets/img/PC/News/CompanyNew_Blog/P53ENBlog/pic1.png')" alt="">
        </div>
        <div class="bc-text">
          <p>
            Check here!
          </p>
          <p>
            P53, new smart dental milling machine of UP3D, can mill 44 crowns at a time! The full smart machine will
            help you save 35% utilization rate of materials!
          </p>
        </div>
        <div class="bc-img">
          <img v-lazy="require('../../../../assets/img/PC/News/CompanyNew_Blog/P53ENBlog/pic2.png')" alt="">
        </div>
        <div class="bc-text">
          <p>
            Why P53 can make it?
          </p>
          <p>
            Let us uncover the secret
          </p>
        </div>
        <div class="bc-text">
          <p>
            Smaller and thicker burs enable the materials waste rate to minimum range;
          </p>
          <p>
            As we all known that the diameter of traditional burs is 2.0mm, while the milling space has reached
            3.0-4.0mm, which wastes a lot of zirconium block space during milling process;
          </p>
          <p>
            P53 adopts diameter of burs as 1.0mm, and reduce the milling space to 2.0mm; the overall material can be
            saved by 35%.
          </p>
        </div>
        <div class="bc-img">
          <img v-lazy="require('../../../../assets/img/PC/News/CompanyNew_Blog/P53ENBlog/pic3.png')" alt="">
        </div>
        <div class="bc-text">
          <p>
            Half-clamp to improve utilization rate of material at the edge
            The entire edge is covered by the clamp in traditional way, and the edge cannot be used better. Generally,
            only 28 teeth can be nested in the entire block.
          </p>
        </div>
        <div class="bc-img">
          <img v-lazy="require('../../../../assets/img/PC/News/CompanyNew_Blog/P53ENBlog/pic4.png')" alt="">
        </div>
        <div class="bc-text">
          <p>
            The half clamp of P53 greatly improves the utilization rate of materials at the edge. With a 1.5mm bur to
            open the thick, compact typesetting saves 35% utilization rate of materials and reduces costs; 44 teeth can
            be nested at a time!
          </p>
        </div>
        <div class="bc-img">
          <img v-lazy="require('../../../../assets/img/PC/News/CompanyNew_Blog/P53ENBlog/pic5.png')" alt="">
        </div>
        <div class="bc-text">
          <p>
            Ps: We recommended that put the pin below the contact position when it is in contact with the surface, so it
            won’t affect the positioning
          </p>
          <p>
            Zirconium block locator will solve the problem of secondary positioning of materials
          </p>
          <p>
            Because the zirconium block used to be positioned entirely by alignment manually, and rely entirely on the
            eyes, so a safe space must be left, otherwise the milled teeth will be inaccurate, and even half of the
            teeth are milled, which cause waste of materials;
          </p>
          <p>
            P53 creates the zirconium block locator, so there is no need to worry about the secondary positioning of the
            material.
          </p>
          <p>
            The physical positioning is more accurate, only 2mm in size,, and more importantly, it only costs a few
            cents, and it can be printed or milled by itselves. It can't be better as a positioning tool.
          </p>
        </div>
        <div class="bc-img">
          <img style="margin-bottom: 0" v-lazy="require('../../../../assets/img/PC/News/CompanyNew_Blog/P53ENBlog/pic6.png')" alt="">
        </div>
        <div class="bc-img">
          <img style="margin-top: 0" v-lazy="require('../../../../assets/img/PC/News/CompanyNew_Blog/P53ENBlog/pic7.png')" alt="">
        </div>
        <div class="bc-text">
          <p>
            5-axis simultaneous motion makes the processing angle larger
          </p>
          <p>
            For 4-axis machine, because there are only four axes: x-axis, y-axis, z-axis, a-axis, and no b-rotation axis, the bridge positioning path cannot be adjusted during nesting, which causes the bridge to tilt and requires thicker materials for nesting;
          </p>
          <p>
            And the 5-axis machine has an additional rotation axis, the positioning direction can be adjusted appropriately, so that the inclined bridge can be lined up with a thin block.
          </p>
        </div>
        <div class="bc-img info-img1">
          <img style="margin-bottom: 0;" v-lazy="require('../../../../assets/img/PC/News/CompanyNew_Blog/P53ENBlog/pic8.png')" alt="">
        </div>
        <div class="bc-img info-img2">
          <img style="margin-top: 0;margin-bottom: 0" v-lazy="require('../../../../assets/img/PC/News/CompanyNew_Blog/P53ENBlog/pic9.png')" alt="">
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
  name: "P53ENBlog",
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
.info-img2::after{
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
.info-img2::after{
  content: '5-axis machine';
}
@media (max-width: 1024px) {

}
</style>