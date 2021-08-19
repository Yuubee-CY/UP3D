<template>
  <div class="News_Blog2">
    <NewsBlogBanner :lang2="lang.NewsBlog2.banner"></NewsBlogBanner>
    <div class="content">
      <div class="ct-box ct-title">
        <h1 class="ct-t-h1">北京口腔展 | “云甲新品发布会邀请函”</h1>
      </div>
      <div class="ct-box ct-body1">
        <p class="ct-b1-p">
          2021年6月9-12日Sino-Dental®北京国际口腔展，云甲将在F1展览区C89-96展台，带来全新齿科数字化产品和简便的数字化技术解决方案。
        </p>
        <img class="ct-b1-img" v-lazy="require('../../assets/img/PC/News/CpmpanyActivities_Blog/ActiveBlog_1/pic1.png')">
        <p class="ct-b1-p">
          全新数字化科技实现可视化，可量化管理，贯通技工间和诊所的各个环节流程，实现实时监管，信息共享，帮助齿科技工厂和诊所实现数字化，智能化的管理和服务。
        </p>
      </div>
      <div class="ct-box ct-body2">
        <h1 class="ct-b2-h1">展会内容</h1>
        <ul class="ct-b2-list">
          <li>
            <p>
              云甲将在展会现场，“惊喜”展示UP3DLINK管理平台。它将贯穿整个生产系统环节，你仅需在UP3DLINK平台上就可以掌握全套系统的工作情况，并实时监测多台设备工作状态，实现智能化生产，全面提高工厂管理效能。同时诊所可以进行云端数据储存和传输，大数据分析和梳理追踪，帮助诊所实现可视化，可量化。</p>
            <img v-lazy="require('../../assets/img/PC/News/CpmpanyActivities_Blog/ActiveBlog_1/pic2.png')">
          </li>
          <li>
            <div class="ct-b2-title">
              <p>工厂规模化</p>
              <h1>技工端</h1>
            </div>
            <p>打造义齿智慧工厂，打破传统工厂生产模式！全套系统新品上线，用简便的智能科技，推动全口腔行业数字化时代的趋势。</p>
            <p>将传统工厂数字化，规模化！<br/>
              新品UP400扫描仪升级全新外观，提升数据采集精度；新品P53操作方式简便，赋予外部制作进度显示；全新科技UP3DLINK管理平台运用互联“云”管理新技术，实现高效订单管理及多阶段系统管理，真正实现全套一站式生产系统智能化！</p>
            <img v-lazy="require('../../assets/img/PC/News/CompanyNew_Blog/NewsBlog_1/pic3.png')">
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
    </div>
    <NewsBlogOther :lang2="lang.NewsBlog2.body2"></NewsBlogOther>
  </div>
</template>

<script>
import NewsBlogBanner from "../../components/Commen/new_blog_banner";
import NewsBlogOther from "../../components/Commen/new_blog_other";

export default {
  name: "NewsBlog2",
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

.ct-box {
  width: 50%;
  margin: 0 auto;
}
</style>