<template>
  <div class="News_Banner">
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
    document.querySelector('.News_Banner .news_shade').style.backgroundImage = 'url(' + this.lang2.imgUrl + ')'
  },
  methods: {}
}
</script>

<style>
.News_Banner {
  font-family: Montserrat;
  width: 10rem;
  height: 4.2rem;
  background-color: #161617;
  position: relative;
}

.News_Banner .news_shade {
  width: 8.21875rem;
  height: 3.28125rem;
  background: no-repeat center;
  background-size: cover;
  border-radius: 7PX;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.News_Banner .content{
  position: absolute;
  top: 15%;
  left: 18%;
}
.News_Banner .time {
  font-size: .083333rem;
  color: #707070;
}

.News_Banner .title {
  width: max-content;
  font-size: .197917rem;
}

@media (max-width: 576px) {
  .News_Banner {
    /*height: 10rem;*/
  }
}

</style>