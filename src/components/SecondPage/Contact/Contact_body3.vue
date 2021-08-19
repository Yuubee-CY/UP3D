<template>
  <div class="Contact_body3" onselectstart="return false" style="-moz-user-select: none;">
    <p>{{ lang2.title }}</p>
    <img v-lazy="require('../../../assets/img/PC/Contact/body_pic1.png')">
  </div>
</template>

<script>
export default {
  props: {
    lang2: {},
  },
  data() {
    return {
      lang: {},
    }
  },
  computed: {},

  created() {
  },

  watch: {},

  mounted() {
  },
  methods: {},
}
</script>


<style >

.Contact_body3 {
  position: relative;
  width: 8.541667rem;
  height: 5.09375rem;
  margin: auto;
  margin-top: 1.1625rem;
  margin-bottom: 0.770833rem;
}

.Contact_body3 p {
  position: absolute;
  font-size: .177083rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -100%);
  text-align: center;
  box-sizing: border-box;
  color: #000;
  z-index: 1;
}

.Contact_body3 p::after{
  content: '';
  display: block;
  width: 120%;
  height: .020833rem;
  transform: translateX(-8%);
  margin-top: .0625rem;
  border-bottom: #FEBB6F .020833rem solid;
}

.Contact_body3 img {
  margin-top: .3125rem;
  width: 8.541667rem;;
  height: 5.09375rem;
}

</style>