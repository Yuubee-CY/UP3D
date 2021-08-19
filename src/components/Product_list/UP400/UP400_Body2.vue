<template>
  <div class="UP400_Body2">
    <div class="content">
      <h1 class="title">{{lang2.title}}</h1>
      <p class="info">{{lang2.content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UP400_Body2",
  props: {
    lang2: {}
  }
}
</script>

<style scoped>
  .UP400_Body2{
    width: 100%;
    height: 4.6875rem;
    background: url("../../../assets/img/PC/Product/product_info/UP400/UP400_pic3.png") no-repeat;
    background-size: cover;
    position: relative;
  }
  .content{
    width: fit-content;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
  }
  .title{
    /*font-size: .104167rem;*/
    font-size: 20PX;
    font-weight: 100;
    color: #1E1E1E;
  }
  .content{
    /*font-size: .28125rem;*/
    font-size: 48PX;
    font-weight: 100;
    color: #1E1E1E;
  }

  @media (max-width: 768px) {
    .content{
      font-size: 44PX;
    }
  }

  @media (max-width: 576px) {
    .UP400_Body2 {
      height: 14rem;
      background-size: 29rem;
      background-position: -2.35rem bottom;
    }
    .content{
      width: auto;
      position: relative;
      top: 17%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
    .title{
      /*font-size: .620833rem;*/
      font-size: 28PX;
      color: #343434;
    }
    .info{
      /*font-size: .247083rem;*/
      font-size: 14PX;
      color: #959595;
      margin-top: .61253rem;
    }
  }
</style>