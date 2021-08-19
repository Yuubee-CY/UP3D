<template>
  <div class="P41_Body4">
    <div class="content">
      <h1>{{ lang2.title }}</h1>
      <p>{{ lang2.content }}</p>
    </div>
    <img class="img-pc" v-lazy=this.lang2.imgUrl alt="">
    <img class="img-ph" v-lazy=this.lang2.imgUrlPH alt="">
  </div>
</template>

<script>
export default {
  name: "P41_Body4",
  props: {
    lang2: {}
  },
}
</script>

<style scoped>
.P41_Body4 {
  width: 10rem;
  height: 4.6875rem;
  position: relative;
}

.P41_Body4 img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.P41_Body4 .content {
  position: absolute;
  top: .645833rem;
  left: 50%;
  transform: translate(-50%);
  margin: 0 auto;
  width: fit-content;
  text-align: center;
}

.P41_Body4 .content h1 {
  display: block;
  font-size: 22PX;
  color: #000;
}

.P41_Body4 .content p {
  display: block;
  margin-top: .265625rem;
  font-size: 18PX;
  color: #000;
}

.img-ph{
  display: none;
}

@media (max-width: 768px) {

  .P41_Body4 .content p {
    display: block;
    margin-top: .265625rem;
    font-size: 14PX;
  }
}


@media (max-width: 576px) {
  .img-pc{
    display: none;
  }
  .img-ph{
    display: block;
  }
  .P41_Body4 {
    height: 14rem;
  }

  .P41_Body4 .content {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
  }

  .P41_Body4 .content h1 {
    width: 80%;
    margin: 0 auto;
    font-weight: 100;
    line-height: normal;
    margin-bottom: .5125rem;
    color: black;
    text-align: center;
  }

  .P41_Body4 .content p {
    width: 80%;
    margin: 0 auto;
    font-weight: 100;
    text-align: center;
    color: black;;
  }
}

</style>