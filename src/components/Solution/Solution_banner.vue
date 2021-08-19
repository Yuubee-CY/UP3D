<template>
  <div class="solution_banner">
    <img v-lazy="lang2.imgSrc" alt="">
  </div>
</template>

<script>
export default {
  name: "Solution_banner",
  props:{
    lang2: {}
  }
}
</script>

<style scoped>
.solution_banner{
  width: 100vw;
}
.solution_banner img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media (max-width: 576PX) {
  .solution_banner{
    height: 100vw;
  }
}
</style>