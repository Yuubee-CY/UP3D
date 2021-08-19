<template>
  <div class="UP360p_banner">
    <div class="content">
      <h1>{{ lang2.title }}</h1>
      <p>{{ lang2.content }}</p>
    </div>
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

  created() {
  },
  mounted() {
  },

  watch: {},

  methods: {},


}
</script>


<style scoped>

.UP360p_banner {
  position: relative;
  width: 10rem;
  height: 4.6875rem;
  background: url(../../../assets/img/PC/Product/product_info/UP360P/banner.png) no-repeat center;
  background-size: 10rem 5rem;
}

.UP360p_banner .content{
  position: absolute;
  left: 60%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.UP360p_banner h1 {
  font-family: Montserrat !important;
  /*font-size: 0.3125rem;*/
  font-size: 54PX;
  font-weight: normal;
  color: #e48013;
}

.UP360p_banner p {
  font-size: 28PX;
  font-weight: normal;
  letter-spacing: 0rem;
  color: #1e1e1e;
}

@media (max-width: 1024px) {
  .UP360p_banner h1 {
    font-size: 48PX;
  }
  .UP360p_banner p {
    font-size: 22PX;
  }
}


@media (max-width: 768px) {
  .UP360p_banner {
    height: 10rem;
    background-size: cover;
    background-position: 0;
    position: relative;
  }

  .UP360p_banner .content {
    position: relative;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
    padding: 0;
    margin: 0;
    text-align: center;
    /*white-space: nowrap;*/
  }

  .UP360p_banner div h1 {
    /*font-size: .620833rem;*/
    font-size: 42PX;
    font-weight: normal;
    color: white;
  }

  .UP360p_banner div p {
    /*font-size: .247083rem;*/
    font-size: 20PX;
    color: white;
    margin-top: .51253rem;
    padding: 0 .5125rem;
  }
}
</style>