<template>
  <div class="P53_Body2">
    <div class="content">
      <h1>{{ lang2.title }}</h1>
      <p>{{ lang2.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "P53_Body2",
  props: {
    lang2: {}
  }
}
</script>

<style scoped>
  .P53_Body2{
    width: 100%;
    height: 4.6875rem;
    background-image: url("../../../assets/img/PC/Product/product_info/P53/P53_7.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .content{
    position: relative;
    height: 100%;
  }
  .content h1{
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    margin-top: .5125rem;
    color: white;
    font-size: .28125rem;
    font-weight: 100;
  }
  .content p{
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    bottom: .5125rem;
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
    .P53_Body2{
      height: 11.5rem;
      background-image: url("../../../assets/img/PH/Product/product_info/P53/P53_PH-08.png");
      background-size: 100%;
      background-position: center top;
      position: relative;
    }
    .content{
      position: absolute;
      bottom: 15%;
      width: 100%;
      height: auto;
      text-align: center;
    }
    .content h1{
      position: relative;
      left: auto;
      transform: translate(0);
      color: #343434;
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
      color: #959595;
      font-size: .28125rem;
      font-weight: 100;
      line-height: normal;
      width: 80%;
      margin: 0 auto;
    }
  }

</style>