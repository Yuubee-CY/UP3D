<template>
  <div class="middle">
    <div class="m-text">
      DENTAL LAB
      <p class="inner-text">{{ lang.HTitle }}</p>
    </div>
    <div class="m-guide">
      <ul class="content">
        <li v-for="(item, index) of lang.title" :key="index">{{ item }}</li>
      </ul>
    </div>
    <div class="m-guidePH">
      <ul class="content" v-for="(item, index) of lang.title" :key="index">
        <li>{{ item }}</li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    lang: {},
  },
  data() {
    return {
      mid_title: [],
    };
  },
  watch: {},
  created() {
  },
};
</script>


<style>
.middle {
  margin-bottom: 1.609375rem;
}

.middle .m-text {
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
  top: 0;
  left: 50%;
  transform: translate(-50%);
  text-align: center;
  font-size: 0.177083rem;
  color: #1e1e1e;
}

.middle .m-guide {
  height: 1.7rem;
  width: 80%;
  position: relative;
  margin: auto;
  margin-top: 0.619792rem;
  z-index: 1;
  background-image: url('../../assets/img/PC/Commen/smallicon.png');
  background-repeat: no-repeat;
  background-size: 10.52rem, 12rem;
  background-position: -0.619792rem -0.786458rem;
  overflow: hidden;
}

.middle .m-guidePH {
  display: none;
}

.m-guide .content {
  /*margin-top: 0.88rem;*/
  position: absolute;
  bottom: .1525rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}

.m-guide .content li {
  display: inline-block;
  width: 1.44rem;
  text-align: center;
  font-size: 0.104167rem;
  line-height: 0.125rem;
  color: #707070;
}

@media (max-width: 1024px) {
}

@media (max-width: 768px) {
}

</style>
