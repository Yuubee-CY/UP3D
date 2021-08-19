<template>
  <div id="CompanyNewsPage">
    <CompanyNewsBanner :lang2="lang.CompanyNews.banner"></CompanyNewsBanner>
    <CompanyNewsBody1 :lang2="lang.CompanyNews.news_list"></CompanyNewsBody1>
  </div>
</template>

<script>
import CompanyNewsBanner from "@/components/SecondPage/CompanyNews/CompanyNewsBanner.vue";
import CompanyNewsBody1 from "@/components/SecondPage/CompanyNews/CompanyNewsBody1.vue";

export default {
  props: {
    lang: {},
  },
  name: "CompanyNewsPage",
  components: {
    CompanyNewsBanner,
    CompanyNewsBody1,
  }
}
</script>

<style scoped>
  #CompanyNewsPage{
    background-color: #f2f2f2;
  }
</style>