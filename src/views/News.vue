<template>
  <div class="News">
    <NewsBanner :lang2="lang.News.banner"></NewsBanner>
    <CompanyNews
        :lang2="lang.News.news_list"
        :lang3="lang.CompanyNews.news_list"></CompanyNews>
    <CompanyActivities
        :lang2="lang.News.active_list"
        :lang3="lang.CompanyActivities.active_list"></CompanyActivities>
  </div>
</template>

<script>
import NewsBanner from "@/components/News/NewsBanner.vue"
import CompanyActivities from "@/components/News/CompanyActivities.vue"
import CompanyNews from "@/components/News/CompanyNews.vue"

export default {
  props: {
    lang: {},
  },
  components: {
    NewsBanner,
    CompanyActivities,
    CompanyNews
  },
  data() {
    return {};
  },

  methods: {},

}
</script>

<style>
.News {
  background-color: #f2f2f2;
}
</style>