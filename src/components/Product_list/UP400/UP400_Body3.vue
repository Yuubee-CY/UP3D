<template>
  <div class="UP400_Body3">
    <div class="content">
      <h1 class="title">{{lang2.title}}</h1>
      <p class="info">{{lang2.content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UP400_Body3",
  props: {
    lang2: {}
  }
}
</script>

<style scoped>
  .UP400_Body3{
    width: 100%;
    height: 4.6875rem;
    background: url("../../../assets/img/PC/Product/product_info/UP400/UP400_pic4.png") no-repeat;
    background-size: cover;
    position: relative;
  }
  .content{
    width: fit-content;
    position: relative;
    top: 50%;
    left: 15%;
    transform: translateY(-50%);
  }
  .title{
    /*font-size: .28125rem;*/
    font-size: 48PX;
    font-weight: 100;
    color: white;
  }
  .info{
    width: 2.5rem;
    /*font-size: .104167rem;*/
    font-size: 20PX;
    font-weight: 100;
    color: white;
    margin-top: .5125rem;
  }

  @media (max-width: 1024px) {
    .info{
      width: 3.5rem;
      font-size: 16PX;
    }
    .title{
      font-size: 36PX;
    }
  }

  @media (max-width: 768px) {

  }

  @media (max-width: 576px) {
    .UP400_Body3 {
      height: 14rem;
      background-size: 29rem;
      background-position: -15.35rem 2.5rem;
      background-color: #000;
    }
    .content{
      width: 70%;
      position: relative;
      top: 25%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
    .title{
      /*font-size: .620833rem;*/
      font-size: 28PX;
      color: white;
    }
    .info{
      width: 80%;
      /*font-size: .247083rem;*/
      font-size: 14PX;
      color: white;
      margin: 0 auto;
      margin-top: .61253rem;
    }
  }
</style>