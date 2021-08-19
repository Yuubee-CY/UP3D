<template>
  <div>

    <Banner></Banner>
    <div class='middle'>
      <div class="m-text">
        DENTAL LAB
        <div class="inner-text">
          FULL DENTAL CAD/CAM SOLUTION
        </div>
      </div>
      <div class="m-guide">
        <div class="content">
          <span v-for="(item,index) in mid_title" :key="index">{{ item }}</span>
        </div>
      </div>


    </div>
    <Product class="product"></Product>
    <Blog class="block"></Blog>
    <Exhibition class="block"></Exhibition>

  </div>
</template>


<script>
import Banner from "@/components/Banner.vue"
import Blog from "@/components/Blog.vue"
import Exhibition from "@/components/Exhibition.vue"
import Product from "@/components/Product.vue"

export default {
  components: {
    Banner,
    Product,
    Blog,
    Exhibition
  },
  data() {
    return {
      mid_title: {}
    }
  },

  created() {
    this.mid_title = this.$t('index').mid_title
  },

}
</script>


<style scope>
.middle {
  margin-top: 0.166667rem;
  /* border:solid red 3px; */
  margin-bottom: 1.609375rem;
}

.middle .m-text {
  width: 8.072917rem;;
  height: 1.484375rem;
  position: relative;
  font-size: 1.239583rem;
  text-align: center;
  line-height: 1.484375rem;
  color: #f8f8f8;
  margin: auto;
}

.middle .m-text .inner-text {
  position: absolute;
  top: 40%;
  left: 30%;
  text-align: center;
  width: 3.385417rem;
  height: 3.859375rem;
  font-size: 0.177083rem;
  line-height: 0.213542rem;
  color: #1e1e1e;
}

.middle .m-guide {
  height: 1.0625rem;
  width: 5.838542rem;
  position: relative;
  margin: auto;
  margin-top: .619792rem;
  z-index: 1;
  background-image: url(../assets/img/PC/Commen/smallicon.png);
  background-repeat: no-repeat;
  background-size: 7.994792rem, 12rem;
  background-position: -0.619792rem -.786458rem;
  /* background-attachment:fixed; */
  /* background-position:center; */
  /* border:solid red 3px; */
  overflow: hidden;
}

.m-guide .content {
  /* width: 4.6875rem; */
  margin-top: .88rem;
  /* margin-left: 0.54rem; */
  /* border:solid red 3px; */
}

.m-guide .content span {
  display: inline-block;
  width: 1.44rem;
  text-align: center;
  /* height: 24px;  */
  font-size: 0.104167rem;
  /* margin-right: 1rem; */
  line-height: 24px;
  color: #707070;
  /* border:solid red 3px; */
}

.product {
  margin-top: 1.401042rem;
  margin: auto;
  /* border: black .005208rem solid; */
}

.block {
  margin-top: 1.458333rem;
}

.block {
  margin-bottom: 1.411458rem;
}



</style>
