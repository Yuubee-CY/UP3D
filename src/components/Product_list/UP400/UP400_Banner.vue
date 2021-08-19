<template>
  <div class="UP400_Banner">
    <div class="content">
      <h1>{{ lang2.title }}</h1>
      <p>{{ lang2.content }}</p>
    </div>
    <img :src="lang2.imgSrc" alt="">
  </div>
</template>

<script>
export default {
  name: "UP400_Banner",
  props: {
    lang2: {}
  },
  mounted() {
    // document.getElementsByClassName('UP400_Banner')[0].style.backgroundImage = "url("+this.lang2.bgUrl+")"
  }
}
</script>

<style scoped>
.UP400_Banner {
  position: relative;
  width: 100%;
  height: auto;
}

.UP400_Banner img {
  width: 100%;
  height: auto;
}

.content {
  width: fit-content;
  position: absolute;
  top: 50%;
  left: 65%;
  transform: translate(-50%, -50%);
}

h1 {
  /*font-size: 0.3125rem;*/
  font-size: 54PX;
  font-weight: 100;
  color: #E48013;
}

p {
  /*font-size: 0.177083rem;*/
  font-size: 24PX;
  color: #343434;
}

@media (max-width: 1024px) {
  h1 {
    font-size: 48PX;
  }

  p {
    font-size: 24PX;
  }

  .content {
    top: 50%;
    left: 70%;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 42PX;
  }

  p {
    font-size: 20PX;
  }

  .content {
    top: 50%;
    left: 72%;
  }
}

@media (max-width: 576px) {
  .UP400_Banner {
    height: 12rem;
    background-size: 26rem;
    background-position: -4.3rem bottom;
  }

  .content {
    top: 15%;
    left: 50%;
    text-align: center;
    z-index: 10;
  }

  .UP400_Banner img {
    width: auto;
    height: 100%;
    position: absolute;
    left: -38%;
    z-index: 5;
  }

  h1 {
    font-size: 42PX;
    color: #E48013;
  }

  p {
    font-size: 20PX;
    color: #343434;
    margin-top: .31253rem;
  }
}

</style>