<template>
  <div class="UPCAD_body3">
    <div class="content">
      <h1>{{ lang2.title }}</h1>
      <p>{{ lang2.content }}</p>
    </div>
    <img v-lazy='lang2.imgSrc'>
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
.UPCAD_body3 {
  position: relative;
  width: 6.5625rem;
  margin: auto;
  margin-top: .78125rem;;
  /*height: 5.5625rem;*/
  height: auto;
  /* border: red solid .005208rem;; */
}

.UPCAD_body3 h1 {
  font-size: 40PX;
  font-weight: 100;
  color: #343434;
}

.UPCAD_body3 p {
  font-size: 16PX;
  margin-top: 0.260417rem;
  color: #343434;
}

.UPCAD_body3 img {
  display: block;
  margin: auto;
  margin-top: .520833rem;;
  width: 6.5625rem;
  height: 4.020833rem;
}

@media (max-width: 1024px) {
  .UPCAD_body3 h1 {
    font-size: 30PX;
  }

  .UPCAD_body3 p {
    font-size: 14PX;
  }
}

@media (max-width: 768px) {
  .UPCAD_body3 h1 {
    font-size: 28PX;
  }

  .UPCAD_body3 p {
    font-size: 14PX;
  }
}

@media (max-width: 576px) {
  .UPCAD_body3 {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;
  }
  .UPCAD_body3 .content {
    margin: 1.3125rem;
    padding: 0;
    text-align: center;
  }
  .UPCAD_body3 .content h1 {
    font-size: 28PX;
    margin-bottom: .4375rem;
  }
  .UPCAD_body3 .content p {
    font-size: 14PX;
    color: #959595;
    margin-bottom: .4375rem;
  }
  .UPCAD_body3 img{
    width: 100%;
    height: auto;
    margin: 0;
  }
}

@media (max-width: 425px) {
  .UPCAD_body3 .content h1 {
    font-size: 24PX;
  }

}


</style>
