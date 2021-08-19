<template>
  <div id="SalesTeam">
    <div class="banner">
      <img src='../assets/img/PC/SalesTeam/banner.png'>
      <p>{{ lang.SalesTeam.title }}</p>
    </div>
    <p class="text">{{ lang.SalesTeam.midtext }}</p>
    <div class="card">
      <div class="info" v-for="(item,index1) in lang.SalesTeam.cardinfo" :key="index1">
        <p class="head">{{ item.header }}</p>
        <p class="name">{{ item.name }}</p>
        <div class="list">
          <div class="el-icon-phone-outline"></div>
          <div><span>{{ item.phone }}</span></div>
        </div>
        <div class="list">
          <div class="el-icon-message"></div>
          <div><span>{{ item.email }}</span></div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  props: {
    lang: {},
  },
  data() {
    return {}
  },
  computed: {},
  created() {
  },

  watch: {},
  mounted() {
  }
}
</script>


<style>
#SalesTeam {
  /* position:relative; */
  font-family: Montserrat;
  /* height: 5rem; */
  /* border: red solid .005208rem; */
  z-index: 0;
}

#SalesTeam .banner {
  position: relative;
  width: 10rem;
  height: 5.09375rem;
  margin-bottom: 0.630208rem;
}

#SalesTeam .banner p {
  position: absolute;
  top: 1.770833rem;
  left: 4.114583rem;
  font-size: 0.3125rem;
  line-height: 0.375rem;
  color: #1e1e1e;
}

#SalesTeam .banner img {
  width: 10rem;
  height: 5.09375rem;
}

#SalesTeam .text {
  width: 6.114583rem;
  margin: auto;
  margin-bottom: 0.529167rem;
  text-align: center;
  font-size: 0.177083rem;
  color: #707070;
  /*line-height: 0.291667rem;*/
  line-height: normal;
  /* margin-bottom: 0.21875rem; */
}

#SalesTeam .card {
  width: 8.854167rem;;
  height: 1.776042rem;
  margin: auto;
  /* overflow: hidden; */
  /* border: green solid .005208rem;; */
  margin-bottom: 0.96875rem;
}

#SalesTeam .card .info {
  float: left;
  width: 2.65625rem;
  /*height: 1.776042rem;*/
  height: auto;
  background-color: #ffffff;
  /* border: solid   #707070 .005208rem; */
  padding-bottom: .125rem;
  box-sizing: border-box;
  box-shadow: 0px 0.005208rem 0.119792rem 0px rgba(0, 0, 0, 0.16);
  margin-left: 0.25rem;
}

#SalesTeam .card .info .head {
  /* height: 0.473958rem; */
  width: 2.395833rem;
  margin: auto;
  text-align: center;
  font-size: 0.104167rem;
  /*line-height: 0.125rem;*/
  line-height: normal;
  color: #1e1e1e;
  padding-bottom: .082083rem;
  border-bottom: #febb6f solid 0.010417rem;
}

#SalesTeam .card .info:nth-child(1) .head, #SalesTeam .card .info:nth-child(3) .head {
  margin-top: 0.296875rem;
}

#SalesTeam .card .info:nth-child(2) .head {
  margin-top: 0.171875rem;
}

#SalesTeam .card .info .name {
  /* height: 0.473958rem; */
  width: 2.395833rem;
  margin: auto;
  text-align: center;
  font-size: 0.197917rem;
  line-height: 0.234375rem;
  color: #1e1e1e;
  margin-top: 0.1875rem;
  margin-bottom: 0.21875rem;
}


#SalesTeam .card .info .list {
  width: fit-content;
  height: auto;
  display: grid;
  grid-template-columns: auto auto;
  padding: .083333rem 0;
  margin: auto;
  /* overflow: hidden; */
}


#SalesTeam .card .info .list div {
  float: left;
  margin-bottom: .09375rem;;
  /*height: 0.15625rem;*/
  height: auto;
}

#SalesTeam .card .info .list div:nth-child(1) {
  color: #febb6f;
  font-size: 0.182292rem;
}

#SalesTeam .card .info .list div:nth-child(2) {
  font-size: 0.104167rem;
  line-height: 0.182292rem;
  color: #1e1e1e;
  margin-left: 0.1rem;
}

@media (max-width: 576px) {
  #SalesTeam .banner{
    height: 11rem;
    background-image: url("../assets/img/PC/SalesTeam/banner.png");
    background-repeat: no-repeat;
    background-size: 24rem;
    background-position: -5.81rem -0.4rem;
  }

  #SalesTeam .banner p{
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: .6125rem;
  }

  #SalesTeam .banner img{
    display: none;
  }
  #SalesTeam .text{
    font-size: 0.247083rem;
  }
  #SalesTeam .card .info .list{
    display: grid;
  }

  #SalesTeam .card{
    display: flex;
    height: auto;
    flex-direction: column;
    align-items: center;
  }

  #SalesTeam .card .info{
    margin: 0;
    width: 75%;
    height: auto;
    padding: .5rem;
    margin-top: .6875rem;
  }
  #SalesTeam .card .info :nth-child(3){
    margin-top: .7rem;
  }
  #SalesTeam .card .info .head{
    width: 80%;
    height: auto;
    margin: 0 auto;
    line-height: normal;
    font-size: .2325rem;
    color: #1E1E1E;
    padding-bottom: .225rem;
  }
  #SalesTeam .card .info .name {
    width: fit-content;
    margin: 0 auto;
    text-align: center;
    font-size: 0.57917rem;
    line-height: normal;
    color: #1e1e1e;
    margin-top: 0.5875rem;
    margin-bottom: 0.1875rem;
  }
  #SalesTeam .card .info .list div:nth-child(2){
    line-height: 0.582292rem;
    margin-left: .125rem;
  }

  #SalesTeam .card .info .list div:nth-child(1){
    font-size: 0.582292rem;
  }

}

</style>