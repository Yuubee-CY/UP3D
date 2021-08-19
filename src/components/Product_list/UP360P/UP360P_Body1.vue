<template>
  <div class="UP360p_body1">
    <img v-lazy="require('../../../assets/img/PC/Product/product_info/UP360P/body_pic1.png')">
    <div>
      <p>{{ lang2.title }}</p>
      <p>{{ lang2.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lang2: {},
  },
  // name: 'carrousel',
  data() {
    return {
      langc: {},
      guidelang: {}
    }
  },

  created() {
    this.guidelang = this.$t('UP360P')
  },
  mounted() {
  },

  methods: {},
}
</script>


<style scpoed>
.UP360p_body1 {
  position: relative;
  width: 10rem;
  height: 4.432292rem;
  background-color: #1e1e1e;
}

.UP360p_body1 img {
  width: 10rem;
  height: 4.432292rem;
}

.UP360p_body1 div {
  position: absolute;
  top: 1.786458rem;
  left: 1.953125rem;
  font-size: 0.28125rem;
  color: #ffffff;
}

@media (max-width: 768px) {
  .UP360p_body1 {
    height: 10rem;
    background-image: url("../../../assets/img/PC/Product/product_info/UP360P/body_pic1.png");
    background-position: -11rem;
    background-size: cover;
  }

  .UP360p_body1 img {
    display: none;
  }

  .UP360p_body1 div {
    left: 50%;
    top: 65%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .UP360p_body1 div p{
    line-height: normal;
    white-space: nowrap;
    font-size: 16PX;
  }

  .UP360p_body1 div p:first-child {
    /*font-size: .5125rem;*/
    /*line-height: 1.5125rem;*/
    font-size: 34PX;
  }
}
</style>