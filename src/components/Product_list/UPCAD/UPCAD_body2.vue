<template>
  <div class="UPCAD_body2"></div>
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
.UPCAD_body2 {
  position: relative;
  width: 10rem;
  height: 4.015625rem;
  /* border: rebeccapurple solid .005208rem;; */
  background-image: url(../../../assets/img/PC/Product/product_info/UPCAD/body_pic1.png);
  background-repeat: no-repeat;
  background-size: 10rem, 4.015625rem;
  margin-bottom: .520833rem;;
}

@media (max-width: 767px) {
 .UPCAD_body2{
   height: 7rem;
   background-size: cover;
   background-position: -6.9rem;
 }
}

</style>
