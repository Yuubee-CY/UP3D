<template>
  <div class="P53_Body3">
    <div class="content">
      <h1>{{ lang2.title }}</h1>
      <p>{{ lang2.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "P53_Body3",
  props: {
    lang2: {}
  }
}
</script>

<style scoped>
  .P53_Body3{
    width: 100%;
    height: 4.6875rem;
    background-image: url("../../../assets/img/PC/Product/product_info/P53/P53_8.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
  .content{
    position: absolute;
    left: 68%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 2.6825rem;
  }
  .content h1{
    color: white;
    font-size: .28125rem;
    font-weight: 100;
    margin-bottom: .125rem;
  }
  .content p{
    color: white;
    font-size: 20PX;
    text-align: center;
  }

  @media (max-width: 1024px) {
    .content p{
      font-size: 16PX;
    }
  }

  @media (max-width: 768px) {
    .content p{
      font-size: 14PX;
    }
  }

  @media (max-width: 576px) {
    .P53_Body3{
      height: 15rem;
      background-image: url("../../../assets/img/PH/Product/product_info/P53/P53_PH-09.png");
      background-size: 100%;
      background-position: center top;
      position: relative;
      background-color: #1E1E1E;
    }
    .content{
      width: 60%;
      position: absolute;
      top: auto;
      left: 50%;
      bottom: 7.5%;
      transform: translate(-50%);
      height: auto;
      text-align: center;
    }
    .content h1{
      position: relative;
      left: auto;
      transform: translate(0);
      color: white;
      font-size: .5125rem;
      font-weight: 100;
      margin-bottom: .4375rem;
      line-height: normal;
    }
    .content p{
      position: relative;
      left: auto;
      bottom: auto;
      transform: translate(0);
      color: white;
      font-size: .28125rem;
      font-weight: 100;
      line-height: normal;
    }
  }


</style>