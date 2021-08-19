<template>
  <div class="P41_Body5">
    <div class="message_info">
      <div class="content-pc" v-for="(item,index) in lang2.message" :key="index">
        <h1>{{ item.title }}</h1>
        <p v-html="item.content"></p>
      </div>
      <img v-lazy=this.lang2.imgUrl alt="">
    </div>

    <div class="message_info_PH" v-for="(item,index1) in lang2.message" :key="'index1'+index1">
      <div class="content">
        <h1>{{ item.title }}</h1>
        <p v-html="item.content"></p>
      </div>
      <img v-lazy=item.imgUrlPH alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "P41_Body5",
  props: {
    lang2: {}
  },
  mounted() {
  }
}
</script>

<style scoped>

.P41_Body5 {
  width: 10rem;
  height: 5rem;
  box-sizing: border-box;
  position: relative;
}

.P41_Body5 img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.P41_Body5 .content-pc{
  position: absolute;
  width: 3.5rem;
}

.P41_Body5 .content-pc:first-child{
  top: 75%;
  left: 60%;
}

.P41_Body5 .content-pc:nth-child(2){
  top: 75%;
  left: 15%;
}

.P41_Body5 h1 {
  font-size: 0.25rem;
  color: #fff;
}

.P41_Body5 p {
  font-size: 20PX;
  margin-top: 0.104167rem;
  color: #fff;
}

.message_info_PH {
  display: none;
}

@media (max-width: 1024px) {
  .P41_Body5 p {
    font-size: 16PX;
  }
}

@media (max-width: 768px) {
  .P41_Body5 p {
    font-size: 14PX;
  }
}

@media (max-width: 576px) {

  .P41_Body5{
    height: auto;
  }

  .message_info {
    display: none;
  }

  .message_info_PH {
    display: block;
    position: relative;
    height: 14rem;
    margin-bottom: 1PX;
  }

  .P41_Body5 .message_info_PH .content {
    width: 70%;
    position: absolute;
    bottom: 15%;
    left: 50%;
    transform: translate(-50%);
    padding: 0;
    margin: 0;
    text-align: center;
  }

  .content h1 {
    font-size: .5125rem;
    font-weight: 100;
    line-height: normal;
    margin-bottom: .6125rem;
  }

  .content p {
    font-size: .28125rem;
    line-height: .5125rem;
    font-weight: 100;
  }
}
</style>