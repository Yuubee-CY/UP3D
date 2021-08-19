<template>
  <div class="P41_banner">
    <div class="content">
      <h1>{{ lang2.title }}</h1>
      <p>{{ lang2.content }}</p>
    </div>
    <img :src="lang2.imgSrc" alt="">
  </div>
</template>

<script>
export default {
  name: "P41_banner",
  props: {
    lang2: {}
  },
  mounted() {
  }
}
</script>

<style scoped>
.P41_banner {
  width: 10rem;
  height: 4.833333rem;
  position: relative;
}

.P41_banner img {
  width: 100%;
  height: auto;
}

.P41_banner .content {
  position: absolute;
  left: 55%;
  top: 50%;
  transform: translateY(-50%);
}

.P41_banner h1 {
  font-size: 46PX;
  color: #e48013;
}

.P41_banner p {
  font-size: 24PX;
  color: white;
}

@media (max-width: 768px) {
  .P41_banner h1 {
    font-size: 36PX;
  }

  .P41_banner p {
    font-size: 18PX;
  }
}

@media (max-width: 576px) {
  .P41_banner {
    height: 12rem;
    background-color: black;
    overflow: hidden;
  }
  .P41_banner img {
    width: auto;
    height: 85%;
    position: absolute;
    top: 25%;
    left: -25%;
    z-index: 5;
  }
  .P41_banner .content{
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
  }
  .P41_banner h1 {
    position: relative;
    top: 0;
    left: 0;
    text-align: center;
    /*font-size: .6125rem;*/
    font-size: 42PX;
    line-height: normal;
    font-weight: 100;
    color: #E48013;
  }

  .P41_banner p {
    position: relative;
    top: 0;
    left: 0;
    text-align: center;
    /*font-size: .4125rem;*/
    font-size: 22PX;
    line-height: normal;
    font-weight: 100;
    color: white;
  }
}

</style>