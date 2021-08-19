<template>
  <div id="CompanyActivitiesPage">
    <CompanyActivitiesBanner :lang2="lang.CompanyActivities.banner"></CompanyActivitiesBanner>
    <CompanyActivitiesBody1 :lang2="lang.CompanyActivities.active_list"></CompanyActivitiesBody1>
  </div>
</template>

<script>
import CompanyActivitiesBanner from "@/components/SecondPage/CompanyActivities/CompanyActivitiesBanner.vue";
import CompanyActivitiesBody1 from "@/components/SecondPage/CompanyActivities/CompanyActivitiesBody1.vue";
export default {
  props: {
    lang: {},
  },
  name: "CompanyActivitiesPage",
  components: {
    CompanyActivitiesBanner,
    CompanyActivitiesBody1,
  }
}
</script>

<style scoped>
  #CompanyActivitiesPage{
    background-color: #f2f2f2;
  }
</style>