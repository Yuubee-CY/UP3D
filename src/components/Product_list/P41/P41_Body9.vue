<template>
  <div class="P41_Body9">
    <p class="par-title">产品规格参数</p>
    <div class="parameter">
      <div class="par-item" v-for="(item,index) in this.lang2.parameter" :key="index">
        <p class="title">{{ item.title }}</p>
        <p class="content">{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "P41_Body9",
  props: {
    lang2: {}
  },
}
</script>

<style scoped>
.P41_Body9 {
  width: 10rem;
  height: auto;
  min-height: 4.6875rem;
  padding: .3125rem 0;
  background-image: url("../../../assets/img/PC/Product/product_info/P41/parameter_bg.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: center;
  background-position-x: .3125rem;
  box-sizing: border-box;
  background-color: black;
  position: relative;
  margin-top: .833333rem;
  display: flex;
  justify-content: flex-end;
}

.par-title {
  display: none;
}

.parameter {
  width: 5.380208rem;
  display: inline-grid;
  grid-template-columns: 50% 50%;
  grid-row-gap: 5PX;
  margin-right: .6125rem;
}

.parameter .par-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border-bottom: 1PX solid #fff;
  box-sizing: border-box;
  padding-bottom: 5PX;
}

.parameter .par-item p {
  font-size: 14PX;
  line-height: 1.8;
  color: #ffffff;
  /*white-space: nowrap;*/
}

.parameter .par-item .title {
  width: 1.09375rem;
}

.parameter .par-item .content {
  /*margin-left: 10px;*/
  width: 55%;
}

.parameter .par-item:nth-child(odd) {
  width: 100%;
  float: left;
  margin-right: 15PX;
}

.parameter .par-item:nth-child(odd) .title {
  /*width: .885417rem;*/
  width: 40%;
}

.parameter .par-item:nth-last-child(-n + 2) {
  /*border-bottom: none;*/
}

@media (max-width: 768px) {

  .parameter {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 0;
  }

  .parameter .par-item {
    display: flex;
    width: 100%;
    border-bottom: none;
    box-sizing: border-box;
  }

  .parameter .par-item p {
    font-size: 14PX;
    line-height: .30833rem;
    color: #fff;
  }

  .parameter .par-item .title {
    width: 35%;
  }

  .parameter .par-item .content {
    /*margin-left: 10px;*/
    color: #ffb15b;
  }

  .parameter .par-item:nth-child(odd) .title {
    width: 35%;
  }

  .parameter .par-item:nth-child(odd) {
    width: 100%;
    float: none;
  }
}

@media (max-width: 576px) {
  .P41_Body9 {
    background: none;
  }

  .par-title {
    display: inline-block;
    position: absolute;
    color: #343434;
    top: .07292rem;
    left: 50%;
    transform: translate(-50%);
    width: fit-content;
    max-width: 4.53125rem;
    font-size: .5125rem;
    border-bottom: .05rem solid #FEBB6F;
  }


  .parameter {
    width: 75%;
    position: relative;
    top: 0;
    right: 0;
    transform: translate(0, 0);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    padding-top: .8125rem ;
  }

  .parameter .par-item {
    display: flex;
    width: 100%;
    border-bottom: none;
    box-sizing: border-box;
    /*border-bottom: 1PX solid #343434;*/
    border-bottom: none;
  }

  .parameter .par-item p {
    font-size: 14PX;
    line-height: normal;
    color: #343434;
    white-space: normal;
  }

  .parameter .par-item .title {
    width: 40%;
  }

  .parameter .par-item .content {
    /*margin-left: 10px;*/
    width: 60%;
  }

  .parameter .par-item:nth-child(odd) .title {
    width: 40%;
  }

  .parameter .par-item:nth-child(odd) {
    width: 100%;
    float: none;
  }

}

@media (max-width: 425px) {
  .parameter {
    width: 90%;
  }
}

@media (max-width: 320px) {
}

</style>