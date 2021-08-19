<template>
  <div class="UPCAD_banner">
    <div>
      <h1 v-html="lang2.title"></h1>
      <p>{{ lang2.content }}</p>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    lang2: {},
  },

  data() {
    return {}
  },
  mounted() {
    let docImg = document.querySelector('.UPCAD_banner')
    let PHSrc = "url("+require('../../../assets/img/PC/Product/product_info/UPCAD/banner-PH.jpg')+")"
    let PCSrc = "url("+require('../../../assets/img/PC/Product/product_info/UPCAD/banner-PC.png')+")"
    //页面初始化时判断是否小于768px
    if (window.innerWidth <= 768) {
      docImg.style.backgroundImage = PHSrc
    } else {
      docImg.style.backgroundImage = PCSrc
    }
    //监听屏幕宽度变化
    window.addEventListener('resize', () => {
      let screenWidth = window.innerWidth
      if (screenWidth <= 768) {
        docImg.style.backgroundImage = PHSrc
      } else {
        docImg.style.backgroundImage = PCSrc
      }
    })
  }
}
</script>


<style scoped>
.UPCAD_banner {
  width: 10rem;
  height: 5.09375rem;
  /*background-image: url(../../../assets/img/PC/Product/product_info/UPCAD/banner.png);*/
  background-repeat: no-repeat;
  background-size: 10rem, 4.833333rem;
}

.UPCAD_banner h1 {
  position: absolute;
  top: 2.36667rem;
  left: 5.197917rem;
  text-align: right;
  font-size: 0.3125rem;
  line-height: 0.364583rem;
  color: #ffffff;
}

.UPCAD_banner p {
  position: absolute;
  top: 2.86667rem;
  left: 6.897917rem;
  text-align: right;
  font-size: 0.3125rem;
  line-height: 0.364583rem;
  color: #ffffff;
}

@media (max-width: 768px) {
  .UPCAD_banner {
    height: 12rem;
    background-size: cover;
    background-position: center;
  }

  .UPCAD_banner div {
    width: auto;
    height: auto;
    position: relative;
    left: 50%;
    top: 0;
    transform: translate(-50%);
    white-space: nowrap;
  }

  .UPCAD_banner div h1 {
    position: absolute;
    top: 2.125rem;
    font-size: .5125rem;
    left: 50%;
    transform: translate(-50%);
  }

  .UPCAD_banner div h1::before {
    content: 'UPCAD';
    display: block;
    position: absolute;
    top: -1.5125rem;
    left: 50%;
    transform: translate(-50%);
    color: #E48013;
    font-size: .8333rem;
    font-weight: normal;
    line-height: normal;
  }

  .UPCAD_banner div p{
    display: none;
  }
}

</style>
