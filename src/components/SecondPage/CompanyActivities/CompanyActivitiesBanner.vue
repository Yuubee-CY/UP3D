<template>
  <div class="company_activities_banner">
    <div class="news_shade"></div>
    <div class="content">
      <p class="time">{{ lang2.time }}</p>
      <p class="title">{{ lang2.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lang2: {},
  },
  data() {
    return {};
  },
  mounted() {
    document.querySelector('.company_activities_banner .news_shade').style.backgroundImage = 'url(' + this.lang2.imgUrl + ')'
  },
  methods: {}
}
</script>

<style>
.company_activities_banner {
  font-family: Montserrat;
  width: 10rem;
  height: 4.2rem;
  background-color: #161617;
  position: relative;
}

.company_activities_banner .news_shade {
  width: 8.21875rem;
  height: 3.28125rem;
  background: no-repeat center;
  background-size: cover;
  border-radius: 8PX;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.company_activities_banner .content{
  position: absolute;
  top: 15%;
  left: 18%;
}
.company_activities_banner .time {
  font-size: .083333rem;
  line-height: .098958rem;
  color: #707070;
}

.company_activities_banner .title {
  width: max-content;
  font-size: .197917rem;
  line-height: .234375rem;
  /*border-bottom: #161617 solid .010417rem;*/
}

@media (max-width: 576px) {
  .company_activities_banner {
    /*height: 10rem;*/
  }
}
</style>