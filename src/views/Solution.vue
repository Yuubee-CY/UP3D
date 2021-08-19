<template>
  <div id="solution">
    <Solution_banner :lang2="lang.Solution.banner"></Solution_banner>
    <Solution_Midtitle :lang2="lang.Solution.mid_title"></Solution_Midtitle>
    <Solution_Main :lang2="lang.Solution.main"></Solution_Main>
    <Solution_Media :lang2="lang.Solution.media"></Solution_Media>
  </div>
</template>

<script>
import Solution_banner from "../components/Solution/Solution_banner";
import Solution_Midtitle from "../components/Solution/Solution_Midtitle";
import Solution_Main from "../components/Solution/Solution_Main";
import Solution_Media from "../components/Solution/Solution_Media";
export default {
  name: "Solution",
  props: {
    lang: {},
  },
  components: {
    Solution_banner,
    Solution_Midtitle,
    Solution_Main,
    Solution_Media
  },
}
</script>

<style scoped>

</style>