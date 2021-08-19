<template>
  <div class="About_body6" ref="launchStart">
    <h1 v-html='lang2.title'></h1>
    <!-- <img :src='lang2.img'>   -->
  </div>
</template>

<script>
import $ from "jquery"

export default {
  props: {
    lang2: {},
  },
  data() {
    return {
      lang: {}
    }
  },
  computed: {},
  created() {
  },
  mounted() {
    window.addEventListener('scroll', this.launchTitle, true)
  },
  watch: {},
  methods: {
    launchTitle() {
      try {
        let arrive = this.$refs.launchStart.getBoundingClientRect().top;
        let ScreenHeight = document.documentElement.clientHeight
        if (arrive < ScreenHeight / 1.5) {
          $('.About_body6 h1').css({"transform": "scale(1)"})
        }
      } catch (e) {

      }
    }
  },
}
</script>


<style>
.About_body6 {
  position: relative;
  height: 3.161458rem;
  background-image: url(../../../assets/img/PC/About/body_pic2.png);
  background-repeat: no-repeat;
  background-size: 10rem, 3.161458rem;
  display: flex;
  justify-content: center;
  align-items: center;
}


.About_body6 h1 {
  position: relative;
  text-align: center;
  /*font-size: 0.208333rem;*/
  font-size: 30PX;
  color: #ffffff;
  width: max-content;
  padding-bottom: 5PX;
  border-bottom: #e48013 solid 0.020833rem;
  white-space: nowrap;
  transform: scale(0);
  transition: .6s all;
}


</style>