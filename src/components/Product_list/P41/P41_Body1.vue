<template>
  <div class="P41_Body1">
    <div class="intro">
      <h1>{{ lang2.introTitle }}</h1>
      <p>{{ lang2.introContent }}</p>
    </div>
    <div class="intro-list">
      <div class="intro-card" v-for="(item,index) in lang2.intro_list" :key="index">
        <img v-lazy='item.imgUrl' :key="item.imgUrl">
        <div class="item-intro">
          <h1>{{ item.title }}</h1>
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "P41_Body1",
  props: {
    lang2: {}
  },
}
</script>

<style scoped>
.P41_Body1 {
  width: 10rem;
  position: relative;
  padding: .669271rem 1.84375rem;
  box-sizing: border-box;
}

.intro h1, .item-intro h1 {
  width: fit-content;
  font-size: 40PX;
  font-weight: normal;
  color: #343434;
}

.intro p, .item-intro p{
  color: #343434;
  /*font-size: .104167rem;*/
  font-size: 16PX;
  line-height: 32PX;
  margin-top: .229167rem;
}
.intro p{
  width: 30%;
}

.intro-list{
}

.intro-card{
  display: flex;
  align-items: center;
  margin-top: .697917rem;
}

.intro-card img {
  width: 3.151042rem;
  height: 1.770833rem;
}
.intro-card .item-intro{
  max-width: 2.572917rem;
  margin-left: .697917rem;
}

@media (max-width: 1024px) {
  .intro p{
    width: 55%;
  }
}

@media (max-width: 576px) {
  .P41_Body1 {
    padding: 1.125rem 0;
  }
  .intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 0 auto;
  }
  .intro::after{
    content: '';
    display: block;
    width: 60%;
    border-bottom: 1PX solid #FEBB6F;
    margin-top: .225rem;
  }
  .intro h1, .item-intro h1 {
    width: 100%;
    /*font-size: .4125rem;*/
    font-size: 24PX;
    font-weight: 100;
    line-height: normal;
    margin-bottom: .5125rem;
    color: #343434;
    text-align: center;
  }
  .intro p, .item-intro p{
    /*font-size: .28125rem;*/
    /*line-height: .5125rem;*/
    font-size: 16PX;
    line-height: 24PX;
    font-weight: 100;
    color: #343434;
    text-align: center;
  }
  .intro p{
    width: 100%;
    padding: 0 .6125rem;
    box-sizing: border-box;
  }

  .intro-card{
    flex-direction: column;
  }

  .intro-card img {
    width: 100%;
    height: auto;
  }
  .intro-card .item-intro{
    max-width: none;
    margin: 0;
    margin-top: .697917rem;
    text-align: center;
  }

}

</style>