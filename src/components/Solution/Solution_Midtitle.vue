<template>
  <div class="solution_midtitle">
    <div class="m-text">
      <p class="bg-text">DENTAL LAB</p>
      <p class="inner-text">{{ lang2.HTitle }}</p>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'
export default {
  name: "Solution_Midtitle",
  props: {
    lang2: {}
  },
  data() {
    return {
      mid_title: [],
    };
  },
  mounted() {
    // document.querySelector('.bg-text').style.fontSize = $('html').prop('style').fontSize
    //
    // //监听屏幕宽度变化
    // window.addEventListener('resize', () => {
    //   document.querySelector('.bg-text').style.fontSize = $('html').prop('style').fontSize
    // })
  },
}
</script>

<style scoped>
.solution_midtitle {
  /*display: grid;*/
  /*grid-template-columns: 1fr min(1265PX, 80%) 1fr;*/
  position: relative;
  margin: 75PX 0;
}

.solution_midtitle .m-text {
  grid-column: 2;
  position: relative;
  text-align: center;
  color: #f8f8f8;
  margin: auto;
}
.solution_midtitle .m-text .bg-text{
  font-size: 1.239583rem;
}

.solution_midtitle .m-text .inner-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 0.177083rem;
  color: #1e1e1e;
  width: fit-content;
  width: -moz-fit-content;
}


@media (max-width: 1024px) {
}

@media (max-width: 576px) {
  .solution_midtitle .m-text .inner-text{
    font-size: 14PX;
  }
}

</style>