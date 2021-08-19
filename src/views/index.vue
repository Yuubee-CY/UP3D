<template>
  <div id='index'>
    <Banner :lang="lang.index.banner" :langPH="lang.indexPH.banner"></Banner>
    <Midtitle :lang="lang.index.mid_title"></Midtitle>
    <Product :lang="lang.index.products"></Product>
    <Blog class="block" :lang="lang.index.indexblog"></Blog>
    <Exhibition class="block" :lang="lang.index.indexexhibition"></Exhibition>
  </div>
</template>


<script>
import Banner from "@/components/Index/Banner.vue"
import Blog from "@/components/Index/Blog.vue"
import Exhibition from "@/components/Index/Exhibition.vue"
import Product from "@/components/Index/Product.vue"
import Midtitle from "@/components/Index/Midtitle.vue"
import $ from 'jquery'

export default {
  props: {
    lang: {},
  },
  components: {
    Banner,
    Product,
    Blog,
    Exhibition,
    Midtitle
  },
  data() {
    return {}
  },

  metaInfo() {
    return {
      title: this.lang.index.metaInfo.title,
      meta: this.lang.index.metaInfo.meta
    }
  },

  mounted() {
    //页面初始化时判断是否小于1024px
    // if (window.innerWidth <= 576) {
    //   $('.ph-banner').css({display: 'block'})
    // } else {
    // }
  },
}
</script>


<style>

.block {
  margin-top: 1.458333rem;
  margin-bottom: 1.411458rem;
}

#tab-picPH.current{
  display: none;
}

.small-title-PH{
  display: none;
}

@media (max-width: 1024px) {
  #exhibition .swiper-slide .text .time-icon-clock {
    display: inline-block;
    margin-left: 0;
    width: 0.28rem;
    height: 0.28rem;
    background-repeat: no-repeat;
    background-size: 9.5rem;
    background-position: -7.15rem -.65em;
    margin-right: .08333rem;
  }

  #exhibition .swiper-slide .text .time .time-icon {
    display: inline-block;
    margin-left: 0;
    width: 0.28rem;
    height: 0.28rem;
    background-repeat: no-repeat;
    background-size: 9.5rem;
    background-position: -5.98rem -.65em;
    margin-right: .08333rem;
  }


  /*#exhibition .swiper-slide .text .more,*/
  /*#blog .swiper-slide .text .more{*/
  /*  padding: .05125rem;*/
  /*}*/



}

@media (max-width: 768px) {

  #blog .small-title{
    /*display: none;*/
  }

  #exhibition .small-title{
    /*display: none;*/
  }

  .small-title-PH{
    display: block;
  }

  .ph-banner {
    display: none;
  }

  .pc-banner {
    display: block;
  }

  .product {
    height: auto;
    width: 9rem;
    margin: auto;
    overflow: hidden;
  }

  .product p {
    font-size: .416667rem;
  }

  .product .tab .tab-select {
    width: 100%;
    height: auto;
    font-size: 1.439583rem;
    line-height: normal;
    /*white-space: nowrap;*/
  }

  .product .tab .tab-select ul {
    position: absolute;
    width: 100%;
    top: 40%;
    border-bottom: solid 0.005208rem #d5d5d5;
    display: flex;
    justify-content: space-around;

  }

  .product .tab .tab-select ul li {
    margin-left: 0;
    font-size: 16PX;
    height: fit-content;
    width: fit-content;
    line-height: normal;
    padding-bottom: .125rem;
  }

  #tab-pic.current {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 .05125rem;
    box-sizing: border-box;
  }

  #tab-pic .pic-card {
    width: 30%;
    /*height: 4.12rem;*/
  }

  #tab-pic .pic-card .upper {
    width: 100%;
    /*height: 78%;*/
    height: auto;
    line-height: normal;
    background-color: #f8f8f8;
  }

  #tab-pic .pic-card .upper img {
    width: 100%;
    height: auto;
  }

  #tab-pic .pic-card .card-info{
  }

  #tab-pic .pic-card .middle {
    /*height: 0.171875rem;*/
    /*font-size: 0.145833rem;*/
    /*line-height: 0.171875rem;*/
    margin-top: 0.072917rem;
  }

  #tab-pic .pic-card .buttom {
    margin-top: .2521rem;
    margin-bottom: .02125rem;
    white-space: nowrap;
  }

  #tab-pic .pic-card .buttom p {
    width: 52PX;
    height: 22PX;
    line-height: 22PX;
  }

  #blog .bolg-card {
    width: 8rem;
    height: auto;
    background-color: #ffffff;
    box-shadow: 0 0.02415rem 0.55556rem 0 rgba(0, 0, 0, .16);
    text-align: center;
    margin: 0 auto;
    padding: 0;
    padding-top: 80PX;
    padding-bottom: .6125rem;

  }

  #blog .bolg-card .bolg-card-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #blog .blog-swiper-pagination {
    display: none;
  }

  #blog .blog-swiper-pagination span {
    float: none;
  }

  #blog .swiper-container {
    width: 100%;
    margin-left: 0;
    overflow: visible;
  }

  #exhibition .swiper-container {
    width: 100%;
    margin-left: 0;
    overflow: visible;
  }

  #blog .swiper-slide img {
    display: block;
    width: 78%;
    height: auto;
  }

  #exhibition .swiper-slide img {
    display: block;
    width: 78%;
    height: auto;
    margin: 0;
  }

  #blog .small-title-PH, #exhibition .small-title-PH {
    position: absolute;
    /*height: 0.72833rem;*/
    top: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    /*font-size: .520833rem;*/
    border-bottom: #febb6f solid 0.05rem;
    z-index: 1;
    display: none;
  }
  #blog .small-title,
  #exhibition .small-title {
    width: fit-content;
    font-size: 28PX;
    font-weight: 100;
    border-bottom: #febb6f solid 0.025417rem;
    padding-bottom: .01625rem;
    position: absolute;
    top: -60PX;
    left: 50%;
    transform: translateX(-50%);
    border-bottom: #febb6f solid 0.05rem;
    z-index: 1;
  }

  #blog .swiper-wrapper{
    align-items:normal;
  }

  #blog .swiper-slide .text {
    width: 77%;
    margin-left: 0;
    /*height: 2.34375rem;*/
    height: auto;
    float: left;
  }

  #blog .swiper-slide .text h1,
  #exhibition .swiper-slide .text h1 {
    /*font-size: .3625rem;*/
    max-width: 100%;
    margin-bottom: .3125rem;
    margin-top: .5125rem;
  }

  #blog .swiper-slide .text p,
  #exhibition .swiper-slide .text p {
    text-align: left;
    /*font-size: .083333rem;*/
    color: #9f9f9f;
    margin-top: 0.125rem;
    max-width: 100%;
    /*line-height: .4125rem;*/
    /*line-height: normal;*/
  }

  #blog .swiper-slide .text .more,
  #exhibition .swiper-slide .text .more {
    /*width: 1.5rem;*/
    /*height: .5125rem;*/
    /*line-height: .4525rem;*/
    margin-top: .512rem;
    /*padding: .05125rem;*/
    /*font-size: .26125rem;*/
  }

  #exhibition .exhibition-card {
    width: 8rem;
    height: auto;
    background-color: #ffffff;
    box-shadow: 0 0.02415rem 0.55556rem 0 rgba(0, 0, 0, .16);
    text-align: center;
    margin: 0 auto;
    padding: 0;
    padding-top: 80PX;
    padding-bottom: .6125rem;
  }

  #exhibition .swiper-slide .text {
    width: 77%;
    height: auto;
    margin-left: 0;
    float: left;
  }

  #exhibition .exhibition-card .ex-card-info {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }

  #exhibition .exhibition-swiper-pagination {
    display: none;
  }

  #exhibition .swiper-slide {
    position: relative;
    margin-top: 0;
    overflow: visible;
    height: 2.34375rem;
    /*!* z-index: 0;*/
  }

  #exhibition .swiper-slide .text .time {
    width: 100%;
    margin-bottom: 0.366667rem;
  }

  #exhibition .swiper-slide .text .time .time-text {
    /*font-size: .260417rem;*/
    font-size: 16PX;
    line-height: normal;
    margin: 0;
    margin-right: 15PX;
  }

  #exhibition .swiper-slide .text .time .time-icon,
  #exhibition .swiper-slide .text .time-icon-clock {
    width: .39625rem;
    height: .39625rem;
    background-image: url(../assets/img/PC/Small_Icon/PH-01.png);
    background-repeat: no-repeat;
    background-size: 20rem;
    background-position: -9.9rem -3.295rem;
    margin-right: .125rem;
  }

  #exhibition .swiper-slide .text .time-icon-clock {
    background-position: -11.27rem -3.295rem;
  }

  #blog .swiper-slide,
  #exhibition .swiper-slide {
    /*height: 4.34375rem;*/
    height: auto;
  }

  #blog .swiper-button-prev,
  #blog .swiper-button-next,
  #exhibition .swiper-button-prev,
  #exhibition .swiper-button-next {
    display: block;
    background-size: .6rem;
    width: calc(var(--swiper-navigation-size) / 75 * 56);
  }

  #blog .swiper-button-prev,
  #exhibition .swiper-button-prev {
    left: 0rem;
    /*background: url("../assets/img/PC/Commen/prev_icon.png") no-repeat;*/
  }

  #blog .swiper-button-next,
  #exhibition .swiper-button-next {
    right: 0rem;
    /*background: url("../assets/img/PC/Commen/next_icon.png") no-repeat;*/
  }

  #blog .swiper-button-prev.swiper-button-disabled,
  #blog .swiper-button-next.swiper-button-disabled,
  #exhibition .swiper-button-prev.swiper-button-disabled,
  #exhibition .swiper-button-next.swiper-button-disabled {
    opacity: .45;
  }

}

@media (max-width: 576px) {
  #indexbanner {
    width: 100%;
    height: 13.3rem;
  }

  .banner-box {
    width: 100%;
    height: 100%;
    /*background: url("../assets/img/PC/index/indexPH/banner_bg.svg") no-repeat center;*/
    /*background-position: bottom;*/
    /*background-size: cover;*/
  }

  .ph-banner {
    display: block;
  }

  .pc-banner {
    display: none;
  }

  .swiper-container{
    height: 100%;
  }

  #indexbanner .swiper-slide img {
    /*width: 283PX;*/
    /*height: 330PX;*/
    width: 100%;
    height: 100%;
    /*height: auto;*/
    object-fit: cover;
  }

  #exhibition .swiper-slide .text .time .time-text{
    font-size: 14PX;
  }

  #indexbanner .swiper-slide .text {
    position: absolute;
    height: 2.083333rem;
    text-align: left;
    top: 18%;
    left: auto;
    padding: 0 10%;
  }

  #indexbanner .swiper-slide:nth-child(2) .text,
  #indexbanner .swiper-slide:nth-child(3) .text{
    left: auto;
  }

  #indexbanner .swiper-slide .text span {
    font-size: 18PX;
  }

  #blog .swiper-slide .text h1,
  #exhibition .swiper-slide .text h1 {
    font-size: 18PX;
  }

  #indexbanner .swiper-slide .text .more {
    cursor: pointer;
    display: block;
    width: 1.25rem;
    height: .572917rem;
    text-align: center;
    background-color: #ffb15b;
    margin-top: 0.260417rem;
    border-radius: 20PX;
    font-family: Montserrat;
    font-size: .208333rem;
    line-height: .572917rem;
    letter-spacing: 0;
    color: #ffffff;
  }
  #indexbanner .swiper-slide:first-child .text .more{
    margin-top: 0.260417rem;
  }
  #indexbanner .swiper-pagination-bullet {
    width: 20PX;
    height: 20PX;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAABHNCSVQICAgIfAhkiAAAAidJREFUOE+tlLtrVFEQxr85KJpV0drGB9hIiiRiIYhgqUQk+Q9EWVDcnbOQ4ANrRZTszL0BZcFHKSyYygc2QcVGNBswVQqtdhtTRISFED0jd7m7XDd3xYinnDPzO/OdeRAGHGa+TERHAIwAWAWwx8waIYSFOI5n88Ko31ipVM6Y2VMzUyJaArAoIove+5EQwiiAw865cghhIoqi59n432DMfBfAoVarNVmv138OyrpYLG4tFApzZvZJVa91/XqwFPRDVa8OgvTbvfd3AAQRuZLcdWCJtBDCBVU9+7egrh8zPyOiWRF50YF579ebzeb2P0kb9EipVNrmnFtV1SFKqgZgv6pO9Qcw8wkiumlme4noq5lNq+qbHLlVAMvkvX8E4LWIPM46lcvl0865JwB2ZezfzWy8H8jM5wEcS2ANAOeS8mdhzPyeiI7myHsnIsez9lKpNOqce5DA5kXkZI7Ez0R0oN9uZl9U9WCO1Pn/mxkzPzSzt1EUJX/XO//0Z0k1zWxfFEXT/amnwOtJNQGsAJjKqyYzV0MIy90+W2u32ztrtdr6Zpu2UqkMhRBWVHVHB5ZmcElExjcLY+aXzrmZarX6Kjubt4hoi4hskDvoAWaeIaK2iNzozWbX2Xt/28yGQwiTcRyvDYKk0uaI6EMXtAGWzumpZJ8R0X0zW0qXYSNtzDEAwwCKzrmJRFr2wQ3LMZPlRTNLNu0YEX0zs90AFojoo4jcy8v6F/ucHqObf9jEAAAAAElFTkSuQmCC) no-repeat center;
    background-size: contain;
  }

  #indexbanner .swiper-pagination-bullet-active {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABHNCSVQICAgIfAhkiAAAAaxJREFUKFOlUz1vE0EQfW8uJRLwC5DoaIjd0FBBvLZElQJR8aGkA9l3zi8g+Qm3joiEFMlEIvkN8SoxpKWwU9CHH4AQBZ1vBu2RM0csIyS2m91582bevCWuHDtNH+kMTwg0SH4zs5sGTIV6RLd7XE9nPShC9hbAitA+QmzKh4NzO+2tQtmAYU2BH4nzLyvMHFyM0iOhndEN9q52U8UWsi5g9+j883hXgiOjQCd/A1YFipD2AN5JXP6K5YwFHifOb8YEG/dvYKaZGddBxHYvSBvS+Z1agQMB37MYpUMRjNny7351kW4TfL0gJGwncX67JAi9TQXvU0fplCv2IooTHzSkFwBvLcxtmEo7b16Cmwbu00I2pssfVMkaMlsmmLh8LnCJ+3dmO5e2b/zB/F8zW+h2lPI0aflnldo60z4N6yBXAftiwLASqxR1lB0KbP9yz+meCD9zLd9dNu/cKMfdLZXkduLyXk2A/gFUP7HjB8sKFCHbEuIuW/nG3GG/l5+9AeyawD4AiI6bWOjF9TTVpAXia2Rc8HbNvx2FxV/VJPjdYNcNmIjhkG1/Uu/qJxQ02kJi3WR7AAAAAElFTkSuQmCC) no-repeat center;
    background-size: contain;
  }

  #indexbanner .swiper-button-prev {
    display: none;
  }

  #indexbanner .swiper-pagination {
    display: none;
  }

  #indexbanner .swiper-button-next {
    width: 32PX;
    height: 32PX;
    background: url(data:image/png;base64,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) no-repeat center;
    background-size: 32PX 32PX;
    left: 8.8725rem;
    top: 35%;
  }

  .swiper-paginationPH {
    position: absolute;
    left: 8.989583rem;
    bottom: 0;
    display: block;
    z-index: 99;
  }

  .middle .m-text .inner-text {
    font-size: 14PX;
    /*white-space: nowrap;*/
  }

  .middle .m-text {
    height: 1.484375rem;
    font-size: 1.439583rem;
    white-space: nowrap;
    line-height: 1.484375rem;
  }

  .middle .m-guide {
    display: none;
  }

  .middle .m-guidePH {
    display: flex;
    flex-wrap: wrap;
    height: 6.725rem;
    width: 6rem;
    position: relative;
    margin: auto;
    /*margin-top: 0.619792rem;*/
  }

  .middle .m-guidePH .content {
    height: 3.4725rem;
    width: 3rem;
    z-index: 1;
    position: relative;
    background-image: url(../assets/img/PC/Commen/smallicon.png);
    background-repeat: no-repeat;
    overflow: hidden;
    margin-top: 0rem;
    background-size: 978%;
    background-position: -15.34rem -11.03125rem;
  }

  .middle .m-guidePH .content:nth-child(2) {
    background-position: -18.3rem -11.03125rem;
  }

  .middle .m-guidePH .content:nth-child(3) {
    background-position: -21.4rem -11.03125rem;
  }

  .middle .m-guidePH .content:nth-child(4) {
    background-position: -24.3rem -11.03125rem;
  }

  .m-guidePH .content li {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    display: inline-block;
    width: fit-content;
    text-align: center;
    font-size: .3125rem;
    line-height: .3125rem;
    color: #707070;
    padding: .112rem;
    border-radius: .3125rem;
    box-shadow: 0PX 0PX 3PX rgba(0, 0, 0, .16);
    margin-bottom: .0833rem;
  }

  #tab-pic.current {
    display: none;
  }

  #tab-picPH.current {
    width: 7rem;
    height: auto;
    box-shadow: 0PX 0PX 6PX rgba(0, 0, 0, 0.19);
    margin-bottom: 5PX;
    margin-top: .6125rem;
    display: block;
  }

  #tab-picPH .pic-card {
    width: 100%;
  }

  #tab-picPH .pic-card .upper {
    width: 100%;
    height: 83%;
    text-align: center;
    background-color: #f8f8f8;
  }

  #tab-picPH .pic-card .upper img {
    width: 100%;
    height: auto;
  }

  #tab-picPH .pic-card .middle {
    font-size: 22PX;
    line-height: 22PX;
    margin: 0;
    margin-top: 0.072917rem;
    color: #707070;
  }

  #tab-picPH .pic-card .buttom {
    margin-top: .3521rem;
    white-space: nowrap;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #tab-picPH .pic-card .buttom p {
    width: .625rem;
    height: 0.21833rem;
    font-size: 0.09375rem;
    line-height: 0.21833rem;
    border-radius: 0.21833rem;
    margin: 0;
  }

  #tab-picPH .pic-card .card-info {
    padding: 15PX 15PX;
    height: 15%;
    box-sizing: border-box;
  }

  #tab-picPH .pic-card .buttom a:nth-child(1) {
    display: block;
    float: left;
    /* width: 0.270833rem; */
    /* height: 0.125rem; */
    font-family: Montserrat;
    font-size: 16PX;
    font-weight: normal;
    font-stretch: normal;
    /*line-height: 0.35rem;*/
    line-height: normal;
    letter-spacing: 0;
    color: #707070;
    border-bottom: 2PX solid #FEBB6F;
    padding: 0 .01rem;
    padding-bottom: .03rem;
  }

  #tab-picPH .pic-card .buttom p {
    display: block;
    float: right;
    /*width: 1.25rem;*/
    /*height: .4125rem;*/
    width: 55PX;
    height: 20PX;
    font-size: 14PX;
    line-height: 20PX;
    border-radius: 20PX;
    font-family: Montserrat;
    text-align: center;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #ffffff;
    background-color: #febb6f;
    box-shadow: 0px 0.005208rem 0.020833rem 0px rgba(0, 0, 0, 0.16);
    padding: .0925rem;
  }

  .product .swiper-container-horizontal > .swiper-pagination-progressbar,
  .product .swiper-container-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {
    top: auto;
    bottom: 0;
    height: .05125rem;
  }

  .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
    background-color: #FEBB6F !important;
  }

  .product .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
    background-color: #FEBB6F;
  }

  .product .tab ul li.active {
    color: #343434;
    border-bottom: solid 0.050833rem #febb6f;
  }

}

@media (max-width: 425px) {

  #exhibition .swiper-slide .text .time .time-icon,
  #exhibition .swiper-slide .text .time-icon-clock {
    width: .49625rem;
    height: 0.49625rem;
    background-size: 25rem;
    background-position: -12.36rem -4.13rem;
  }

  #exhibition .swiper-slide .text .time-icon-clock {
    background-position: -14.08rem -4.13rem;
  }
}

@media (max-width: 412px) {
  #tab-picPH.current {
    margin-top: 1.125rem;
  }
}

@media (max-width: 375px) {
  #indexbanner .swiper-slide .text .more {
    cursor: pointer;
    display: block;
    width: 55PX;
    height: 25PX;
    text-align: center;
    background-color: #ffb15b;
    margin-top: 0.260417rem;
    border-radius: 20PX;
    font-family: Montserrat;
    font-size: .208333rem;
    line-height: 25PX;
    letter-spacing: 0;
    color: #ffffff;
  }

  #tab-picPH .pic-card .card-info {
    padding: 7PX 9PX;
  }
  #exhibition .swiper-slide .text .time{
    /*display: grid;*/
    /*grid-template-columns: .635rem auto;*/
    /*grid-column-gap: 5PX;*/
    /*grid-row-gap: 5PX;*/
  }

  #exhibition .swiper-slide .text .time .time-icon,
  #exhibition .swiper-slide .text .time-icon-clock {
    width: 0.635rem;
    height: 0.635rem;
    background-size: 32rem;
    background-position: -15.83rem -5.25rem;
  }

  #exhibition .swiper-slide .text .time-icon-clock {
    background-position: -18.05rem -5.25rem;
  }

}

</style>
