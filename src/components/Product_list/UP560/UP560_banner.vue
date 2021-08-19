<template>
  <div class="UP560_banner">
    <div class="content">
      <h1>{{ lang2.title }}</h1>
      <p>{{ lang2.content }}</p>
    </div>
    <img :src="lang2.imgSrc" alt="">
  </div>
</template>

<script>
export default {

  props: {
    lang2: {},
  },

  data() {
    return {}
  },
}
</script>


<style scoped>
.UP560_banner {
  width: 10rem;
  height: 4.833333rem;
  position: relative;
}

.UP560_banner img {
  width: 100%;
  height: auto;
}

.UP560_banner .content {
  width: fit-content;
  position: absolute;
  top: 50%;
  left: 35%;
  transform: translate(-50%, -50%);
}

.UP560_banner div h1 {
  font-size: 60PX;
  font-weight: normal;
  color: #e48013;
}

.UP560_banner div p {
  font-size: 34PX;
  color: #343434;
  width: 2rem;
}

@media (max-width: 1144px) {
  .UP560_banner div h1 {
    font-size: 54PX;
  }

  .UP560_banner div p {
    font-size: 28PX;
  }
}

@media (max-width: 1024px) {
  .UP560_banner div h1 {
    font-size: 48PX;
  }

  .UP560_banner div p {
    font-size: 24PX;
  }
}

@media (max-width: 768px) {
  .UP560_banner {
    height: 10rem;
    background-size: cover;
    background-position: center;
    position: relative;
  }

  .UP560_banner .content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 0;
    margin: 0;
    text-align: center;
    white-space: nowrap;
    z-index: 10;
  }
  .UP560_banner img {
    position: absolute;
    left: -60%;
    width: auto;
    height: 100%;
    z-index: 5;
  }
  .UP560_banner div h1 {
    /*font-size: .620833rem;*/
    font-size: 42PX;
    font-weight: normal;
    /*line-height: .620833rem;*/
    color: white;
  }

  .UP560_banner div p {
    /*font-size: .247083rem;*/
    /*line-height: .247083rem;*/
    font-size: 20PX;
    color: white;
    margin-top: .51253rem;
    width: fit-content;
  }
}

@media (max-width: 425px) {
  .UP560_banner div h1 {
    font-size: 34PX;
  }
  .UP560_banner div p {
    font-size: 18PX;
  }

}

</style>
