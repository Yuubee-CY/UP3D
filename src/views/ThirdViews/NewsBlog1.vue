<template>
  <div class="New_Blog1">
    <NewsBlogBanner :lang2="lang.NewsBlog1.banner"></NewsBlogBanner>
    <div class="content">
      <div class="ct-box ct-title">
        <h1 class="ct-t-h1">云甲科技新品发布P41四轴湿切磨削机</h1>
      </div>
      <div class="ct-box ct-body1">
        <img class="ct-b1-img" v-lazy="require('../../assets/img/PC/News/CompanyNew_Blog/NewsBlog_1/pic1.png')">
        <p class="ct-b1-p">
          云甲科技新品发布，P41智能湿切磨削机。一款独立自主研发的四轴椅旁切削设备。P41采用湿法加工，立式一体结构设计，智能控制系统与一体结构完美结合，相比传统设备节能60~80%，关键控制部件采用优质金楼原件，丝杆、导轨等部件免维护设计，减少对设备进行专业维护的烦恼。
        </p>
      </div>
      <div class="ct-box ct-body2">
        <h1 class="ct-b2-h1">简单，满足你的需求</h1>
        <ul class="ct-b2-list">
          <li>
            <p>应用广泛，支持多种材料（玻璃陶瓷、钛棒等材料，支持牙冠、嵌体、贴面、种植基台等多种修复类型）切削修复</p>
            <img v-lazy="require('../../assets/img/PC/News/CompanyNew_Blog/NewsBlog_1/pic2.png')">
            <p class="img-info">（贴面、嵌体、全冠、三连桥、基台）</p>
          </li>
          <li>
            <p>机器体积小，颠覆传统大型加工设备的设计，小巧稳定，不占地，实现真正的“桌面”修复</p>
            <img v-lazy="require('../../assets/img/PC/News/CompanyNew_Blog/NewsBlog_1/pic3.png')">
            <p class="img-info">（P41 外观）</p>
          </li>
          <li>
            <p>更加便捷的操作方式，将智能控制系统CNC软件与立式一体结构完美结合</p>
            <img v-lazy="require('../../assets/img/PC/News/CompanyNew_Blog/NewsBlog_1/pic4.png')">
            <p class="img-info">（P41 内置电脑）</p>
          </li>
          <li>
            <p>自动换刀，提高生产效率同时预设玻璃陶瓷与钛棒加工车针</p>
            <img v-lazy="require('../../assets/img/PC/News/CompanyNew_Blog/NewsBlog_1/pic5.png')">
            <p class="img-info">（P41 6把刀位）</p>
          </li>
          <li>
            <p>可同时加工3个玻璃陶瓷瓷块，支持前牙连桥切削</p>
            <img v-lazy="require('../../assets/img/PC/News/CompanyNew_Blog/NewsBlog_1/pic6.png')">
            <p class="img-info">（P41 内仓情况）</p>
          </li>
        </ul>
        <p>同时还延续了我们智能雕刻系统的优势，具备自动校准，断点续传，UPCAM排版软件，UPCNC控制软件湿切加工策略，可以实现更快的加工速度</p>
      </div>
      <div class="ct-box ct-body3">
        <h1 class="ct-b3-h1">产品应用方案</h1>
        <img v-lazy="require('../../assets/img/PC/News/CompanyNew_Blog/NewsBlog_1/pic7.png')" >
      </div>
      <div class="ct-box ct-body4">
        <h1 class="ct-b4-h1">产品参数</h1>
        <img v-lazy="require('../../assets/img/PC/News/CompanyNew_Blog/NewsBlog_1/pic8.png')" >
      </div>
      <div class="ct-box ct-footer">
        <p>更多资讯可在微信公众号搜索：深圳云甲科技或扫描下方二维码</p>
        <img v-lazy="require('../../assets/img/PC/News/CompanyNew_Blog/NewsBlog_1/pic9.png')" >
      </div>
    </div>
    <NewsBlogOther :lang2="lang.NewsBlog1.body2"></NewsBlogOther>
  </div>
</template>

<script>
import NewsBlogBanner from "../../components/Commen/new_blog_banner";
import NewsBlogOther from "../../components/Commen/new_blog_other";

export default {
  name: "NewsBlog1",
  components: {
    NewsBlogBanner,
    NewsBlogOther
  },
  props: {
    lang: {},
  },
}
</script>

<style scoped>
/*统一样式*/
.content {
  text-align: center;
  padding: .5rem 0;
  box-sizing: border-box;
}

p {
  margin: .215rem auto;
  font-size: 0.1225rem;
  color: #343434;
  text-align: left;
}

h1 {
  font-size: .2125rem;
  color: #343434;
  margin: .2125rem 0;
  position: relative;
}

img {
  width: 100%;
  height: auto;
}
.img-info{
  color: #959595;
  margin: 0;
  text-align: center;
}
.ct-box {
  width: 50%;
  margin: 0 auto;
}
.ct-b2-list li{
  margin-bottom: .5125rem;
}
.ct-b2-h1,
.ct-b3-h1,
.ct-b4-h1{
  text-align: left;
  padding: .3125rem 0;
  padding-left: .4125rem;
}

.ct-b2-h1::before ,
.ct-b3-h1::before ,
.ct-b4-h1::before {
  content: '01';
  display: flex;
  align-items: center;
  justify-content: center;
  width: .3125rem;
  height: .3125rem;
  background-color: #FEBB6F;
  position: absolute;
  left: 0;
  color: white;
}
.ct-b3-h1::before{
  content: '02';
}
.ct-b4-h1::before{
  content: '03';
}

.ct-footer{
  margin-top: .6125rem;
}

</style>