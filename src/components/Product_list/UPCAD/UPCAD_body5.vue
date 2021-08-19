<template>
  <div class="UPCAD_body5">
    <div class="content">
      <h1>{{ lang2.title }}</h1>
      <p v-html="lang2.content"></p>
    </div>

    <div class="ct-pic">
      <div class="tuo"></div>
      <img v-lazy='lang2.imgSrc'>
    </div>
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
.UPCAD_body5 {
  position: relative;
  width: 6.5625rem;
  height: auto;
  margin: .83333rem auto;
  display: flex;
  align-items: center;
}

#UPCAD img {
  width: 2.666667rem;
  height: 2.036458rem;
}

.UPCAD_body5 .content{
  padding-right: .125rem;
}

.UPCAD_body5 h1 {
  font-size: 40PX;
  font-weight: 100;
  color: #343434;
}

.UPCAD_body5 p {
  font-size: 16PX;
  margin-top: .3125rem;
  color: #343434;
}
.UPCAD_body5 .tuo {
  width: 3.697917rem;
  height: 0.364583rem;
  background-color: #d5d5d5;
  border-radius: 50% / 50%;
  margin-top: -.125rem;
  z-index: -1;
}

.ct-pic{
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
}

@media (max-width: 1024px) {
  .UPCAD_body5 h1 {
    font-size: 30PX;
  }

  .UPCAD_body5 p {
    font-size: 14PX;
  }
}

@media (max-width: 768px) {
  .UPCAD_body5 h1 {
    font-size: 28PX;
  }

  .UPCAD_body5 p {
    font-size: 14PX;
  }
}

@media (max-width: 768px) {
  .UPCAD_body5 {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;
  }
  .UPCAD_body5 .content {
    margin: 1.3125rem;
    padding: 0;
    text-align: center;
  }
  .UPCAD_body5 .content h1 {
    font-size: 28PX;
    font-weight: 100;
    line-height: normal;
    margin: 0;
    padding: 0;
    margin-bottom: .4375rem;
  }
  .UPCAD_body5 .content p {
    font-size: 14PX;
    font-weight: 100;
    color: #959595;
    margin: 0;
    padding: 0;
    margin-bottom: .4375rem;
    line-height: normal;
  }

  .ct-pic{
    margin-bottom: 1rem;
  }

  #UPCAD img{
    width: 4.5625rem;
    height: auto;
    margin: 0;
  }

  .UPCAD_body5 .tuo{
    width: 6.5625rem;
    height: .6125rem;
    margin: 0;
    padding: 0;
    position: absolute;
    left: 50%;
    bottom: .5875rem;
    transform: translateX(-50%);
  }

}

@media (max-width: 425px) {
  .UPCAD_body5 .content h1 {
    font-size: 24PX;
  }

}
</style>
