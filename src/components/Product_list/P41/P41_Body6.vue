<template>
  <div class="P41_Body6">
    <div class="content">
      <p v-for="(item, index) in lang2.title" :key="index">{{ item }}</p>
    </div>
    <img v-lazy=this.lang2.imgUrl alt="">
  </div>
</template>

<script>
export default {
  name: "P41_Body6",
  props: {
    lang2: {}
  },
  mounted() {
    // document.querySelector('.P41_Body6').style.backgroundImage = 'url("' + this.lang2.imgUrl + '")'
  }
}
</script>

<style scoped>
.P41_Body6 {
  width: 10rem;
  height: 4.6875rem;
  position: relative;
}
.P41_Body6 img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.P41_Body6 .content {
  width: 7.5rem;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  left: 52%;
  top: 60%;
  transform: translate(-50%);
}

.P41_Body6 .content p {
  display: inline-block;
  margin-top: .265625rem;
  font-size: 14PX;
  color: #ffffff;
}

@media (max-width: 768px) {
  .P41_Body6 .content p {
    font-size: 12PX;
  }
}

@media (max-width: 576px) {
  .P41_Body6 {
    height: 15.5rem;
    background-image: url("../../../assets/img/PH/Product/product_info/P41/P41_body_pic8.png");
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: .005rem;
    box-sizing: border-box;
  }
  .P41_Body6 img{
    display: none;
  }

  .P41_Body6 .content {
    width: 50%;
    height: 100%;
    top: auto;
    margin: 0;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: flex-end;
  }
  .P41_Body6 .content p {
    font-size: 14PX;
  }
}

</style>