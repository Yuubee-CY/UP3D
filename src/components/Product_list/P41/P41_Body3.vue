<template>
  <div class="P41_Body3">
    <div class="content">
      <h1>{{ lang2.title }}</h1>
      <p>{{ lang2.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "P41_Body3",
  props: {
    lang2: {}
  },
  mounted() {
    document.querySelector('.P41_Body3').style.backgroundImage = 'url("'+this.lang2.imgUrl+'")'
  }
}
</script>

<style scoped>
.P41_Body3 {
  width: 10rem;
  height: 4.6875rem;
  background-repeat: no-repeat;
  background-size: cover;
}
.P41_Body3 .content {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin: 0;
  padding: 0 1.84375rem;
}

.P41_Body3 .content h1 {
  display: block;
  /*font-size: .25rem;*/
  font-size: 22PX;
  /*line-height: .270833rem;*/
  color: #ffffff;
}

.P41_Body3 .content p {
  display: block;
  margin-top: .265625rem;
  font-size: 18PX;
  color: #ffffff;
}

@media (max-width: 768px) {
  .P41_Body3 .content h1 {
    display: block;
    font-size: 22PX;
    color: #ffffff;
  }

  .P41_Body3 .content p {
    display: block;
    margin-top: .265625rem;
    font-size: 14PX;
    color: #ffffff;
  }
}

@media (max-width: 576px) {
  .P41_Body3{
    height: 12rem;
    background-position-x: -9.5rem;
  }
  .P41_Body3 .content{
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    margin: 0;
    padding: 0;
  }
  .P41_Body3 .content h1{
    font-size: 28PX;
    font-weight: 100;
    line-height: normal;
    margin-bottom: .5125rem;
    color: white;
    text-align: center;
  }
  .P41_Body3 .content p{
    /*font-size: .28125rem;*/
    /*line-height: .5125rem;*/
    font-size: 16PX;
    font-weight: 100;
    text-align: center;
  }
}

</style>