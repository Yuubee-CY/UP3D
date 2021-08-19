<template>
  <div class="Company_News_Banner">
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
    document.querySelector('.Company_News_Banner .news_shade').style.backgroundImage = 'url(' + this.lang2.imgUrl + ')'
  },
  methods: {}
}
</script>

<style scoped>
.Company_News_Banner {
  font-family: Montserrat;
  width: 10rem;
  height: 4.2rem;
  background-color: #161617;
  position: relative;
}

.Company_News_Banner .news_shade {
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
.Company_News_Banner .content{
  position: absolute;
  top: 15%;
  left: 18%;
}
.Company_News_Banner .time {
  font-size: .083333rem;
  line-height: .098958rem;
  color: #707070;
}

.Company_News_Banner .title {
  width: max-content;
  font-size: .197917rem;
  line-height: .234375rem;
  /*border-bottom: #161617 solid .010417rem;*/
}

@media (max-width: 576px) {
  .Company_News_Banner {
    /*height: 10rem;*/
  }
}

</style>