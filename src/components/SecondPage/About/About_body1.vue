<template>
  <div class="About_banner">
    <div class="text">
      <p>{{ lang2.title[0] }}</p>
      <p>{{ lang2.title[1] }}</p>
    </div>
  </div>
</template>

<script>
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
    //加载语言包
    // this.lang=this.$t('About')
  },
  watch: {
    //监听语言变化
    // '$store.state.lang':function() {
    //    this.lang=this.$t('About')
    //   }
  },
}
</script>


<style >
.About_banner {
  width: 10rem;
  height: 4.6875rem;
  background-image: url(../../../assets/img/PC/About/banner-04.jpg);
  background-repeat: no-repeat;
  background-size: 10rem, 4.6875rem;
  /* background-position: -0.619792rem -.786458rem; */
}

.About_banner .text {
  position: relative;
  text-align: center;
  padding-top: 1.302083rem;
  /* border:  red solid .005208rem;; */
}

.About_banner .text p {
  /*font-size: 0.3125rem;*/
  font-size: 36PX;
  /* border: red solid .005208rem; */
  color: #1e1e1e;
}

.About_banner .text p:nth-child(2) {
  margin-top: 0.354167rem;
  /*font-size: 0.177083rem;*/
  font-size: 24PX;
  color: #1e1e1e;
}

@media (max-width: 576px){
  .About_banner .text p{
    font-size: 26PX;
  }
  .About_banner .text p:nth-child(2){
    font-size: 20PX;
  }
}

</style>