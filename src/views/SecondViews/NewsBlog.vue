<template>
  <div id="NewsBlog">
    <NewsBlogBanner :lang2="lang.NewsBlog.banner"></NewsBlogBanner>
    <NewsBlogBody1 :lang2="lang.NewsBlog.body1"></NewsBlogBody1>
    <NewsBlogBody2 :lang2="lang.NewsBlog.body2"></NewsBlogBody2>
  </div>
</template>

<script>
import NewsBlogBanner from "../../components/SecondPage/NewsBlog/NewsBlogBanner";
import NewsBlogBody1 from "../../components/SecondPage/NewsBlog/NewsBlogBody1";
import NewsBlogBody2 from "../../components/SecondPage/NewsBlog/NewsBlogBody2";
export default {
  name: "NewsBlog",
  props: {
    lang: {},
  },
  components: {
    NewsBlogBanner,
    NewsBlogBody1,
    NewsBlogBody2
  }
}
</script>

<style scoped>

</style>