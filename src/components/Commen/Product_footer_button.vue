<template>
  <div class="Product_footer_button">
    <router-link :to="{ path: lang2[0].url, name: 'Contact', params:{PContact: true}}">
      <button>{{ lang2[0].name }}</button>
    </router-link>
    <router-link :to="lang2[1].url">
      <button>{{ lang2[1].name }}</button>
    </router-link>

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
      lang: {},
    }
  },
  computed: {
    //   swiper() {
    //   return this.$refs.BolgSwiper.$swiper
    // }
  },
  created() {
    this.lang = this.en;
  },
  mounted() {

  },
  methods: {},
}
</script>


<style scoped>


.Product_footer_button {
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 7.291667rem;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
}

.Product_footer_button button {
  width: 1.78125rem;
  height: 0.55125rem;
  /*font-size: 0.104167rem;*/
  font-size: 16PX;
  line-height: 0.125rem;
  cursor: pointer;
  color: #ffffff;
  border: none;
  border-radius: .020833rem;
  background-color: #1e1e1e;
}

.Product_footer_button button:hover {
  background-color: #ffb15b;
}

@media (max-width: 768px) {
  .Product_footer_button button {
    font-size: 14PX;
  }
}

@media (max-width: 576px) {
  .Product_footer_button{
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    white-space: nowrap;
    box-sizing: border-box;
    height: 4.5rem;
  }
  .Product_footer_button button:nth-last-child(1){
    margin: 0;
  }
  .Product_footer_button a{
    margin-top: 0;
  }
  .Product_footer_button a button{
    width: 120PX;
    height: 35PX;
    box-sizing: border-box;

  }
}

/*@media (max-width: 425px) {*/
/*  .Product_footer_button a button {*/
/*    width: 125PX;*/
/*    height: 0.95125rem;*/
/*  }*/
/*}*/

/*@media (max-width: 320px) {*/
/*  .Product_footer_button a button {*/
/*    width: 125PX;*/
/*    height: 1.15125rem;*/
/*  }*/
/*}*/


</style>