<template>
  <div class="contact_body1">
    <div class="cb1-bg"></div>
    <div class="text">
      <p>{{ lang2.text }}</p>
      <p>{{ lang2.text1 }}</p>
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
.contact_body1 {
  width: 10rem;
  height: 5rem;
  background: url(../../../assets/img/PC/Contact/banner.png) no-repeat center;
  background-size: 10rem 5rem;
  position: relative;
}

.contact_body1 .text {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.contact_body1 .text p {
  /*font-size: 0.57971rem;*/
  font-size: 60PX;
  color: #343434;
}

.contact_body1 .text p:nth-child(2) {
  margin-top: 0.354167rem;
  /*font-size: 0.177083rem;*/
  font-size: 30PX;
  letter-spacing: .00566rem;
  color: #343434;
}
.cb1-bg{
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(255,255,255,.3);
}
</style>