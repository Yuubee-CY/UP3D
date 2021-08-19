<template>
  <div class="UPCAD_body4">
    <div class="content">
      <h1>{{ lang2.title }}</h1>
      <p v-html="lang2.content"></p>
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
    return {
      lang: ['1', '2', '2']
    }
  },
}
</script>


<style scoped>
.UPCAD_body4 {
  position: relative;
  width: 6.5625rem;
  height: auto;
  margin: .83333rem auto;
  display: flex;
  align-items: center;
}

.UPCAD_body4 img {
  width: 3.90625rem;
  height: 2.083333rem;
}

.UPCAD_body4 .content{
  padding-right: .125rem;
}

.UPCAD_body4 h1 {
  font-size: 40PX;
  font-weight: 100;
  color: #343434;
}

.UPCAD_body4 p {
  font-size: 16PX;
  margin-top: .3125rem;
  color: #343434;
}

@media (max-width: 1024px) {
  .UPCAD_body4 h1 {
    font-size: 30PX;
  }

  .UPCAD_body4 p {
    font-size: 14PX;
  }
}

@media (max-width: 768px) {
  .UPCAD_body4 h1 {
    font-size: 28PX;
  }

  .UPCAD_body4 p {
    font-size: 14PX;
  }
}

@media (max-width: 768px) {
  .UPCAD_body4 {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;
  }
  .UPCAD_body4 .content {
    margin: 1.3125rem;
    padding: 0;
    text-align: center;
  }
  .UPCAD_body4 .content h1 {
    font-size: 28PX;
    font-weight: 100;
    line-height: normal;
    margin: 0;
    padding: 0;
    margin-bottom: .4375rem;
  }
  .UPCAD_body4 .content p {
    font-size: 14PX;
    font-weight: 100;
    color: #959595;
    margin: 0;
    padding: 0;
    /*margin-bottom: .4375rem;*/
    line-height: normal;

  }
  #UPCAD img{
    width: 6.5625rem;
    height: auto;
    margin: 0;
    position: relative;
    top: 0;
    left: 0;
  }

}
@media (max-width: 576px) {
  #UPCAD img{
    width: 100%;
    height: auto;
    margin: 0;
    position: relative;
    top: 0;
    left: 0;
  }
}

@media (max-width: 425px) {
  .UPCAD_body4 .content h1 {
    font-size: 24PX;
  }

}

</style>
