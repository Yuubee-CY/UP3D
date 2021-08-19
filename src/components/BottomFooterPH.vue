<template>
  <footer>
    <div class="footer-top-logo">
      <img v-lazy="require('../assets/img/PC/Commen/footer_logo.png')">
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      indexfooter: {},
      indexfooter2: {}
    };
  },
  props: [''],
  computed: {},
  created() {
    this.indexfooter = this.guidelang = this.$t('index').indexfooter;
    this.indexfooter2 = this.guidelang = this.$t('index').indexfooter2
  },
  mounted() {
  },
  watch: {},
  methods: {}
}
</script>


<style scoped>
footer {
  width: 414PX;
  height: 618PX;
  background-color: #1e1e1e;
  background-image: url(../assets/img/PC/Commen/footer_icon.png);
  background-position: center right;
  background-repeat: no-repeat;
  background-size: 2.489583rem, 2.625rem;
}


</style>
