<template>
  <div class="Company_Activities_Body1" ref="Company_Activities_Body1">
    <div class="text">
      <p class="title">{{ lang2.title }}</p>
      <span class="more" ref="more" @click="showMore($event)">
        <i class="iconfont icon-xiangxia"></i>
        {{ lang2.more.message }}
      </span>
    </div>
    <div class="Bigcard">
      <div class="PH-title">
        <p class="title">{{ lang2.title }}</p>
      </div>

      <div class="card" v-for="(item,index) in this.loadList" :key="index">
        <div class="img">
          <img v-lazy="item.imgUrl" :key="item.imgUrl">
        </div>
        <div class="t-content">
          <p class="time" v-html="item.time"></p>
          <a @click="golocation($event,index)" class="name"
             :target="item.LinkTarget ? item.LinkTarget : ''" v-html="item.name"></a>
        </div>
      </div>

      <div class="PH-btn-more">
        <span class="more" ref="PHMore" @click="showPHMore($event)">
          <i class="iconfont icon-xiangxia"></i>
          {{PHmoreText}}
        </span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    lang2: {},
  },
  data() {
    return {
      loadList: this.lang2.active_card.slice(0, 4),
      expFlag: false,
      PHmoreText: '点击查看更多'
    };
  },
  methods: {
    showMore(e) {
      this.$refs.more.classList.toggle("more-active")
      this.$refs.PHMore.classList.toggle("more-active")
      if(!this.expFlag){
        this.PHmoreText = '到底了哦~点击收回'
        this.loadList = this.lang2.active_card
        this.expFlag = true
      }else {
        this.PHmoreText = '点击查看更多'
        this.loadList = this.lang2.active_card.slice(0, 4)
        this.expFlag = false
      }
    },
    showPHMore(e) {
      this.$refs.more.classList.toggle("more-active")
      this.$refs.PHMore.classList.toggle("more-active")
      if(!this.expFlag){
        this.loadList = this.lang2.active_card
        this.PHmoreText = '到底了哦~点击收回'
        this.expFlag = true
      }else {
        this.PHmoreText = '点击查看更多'
        this.loadList = this.lang2.active_card.slice(0, 4)
        this.expFlag = false
      }
    },
    golocation(e, index) {
      if (e.target.target.toString() == '_blank') {
        window.open(this.lang2.active_card[index].url, "_blank");
      } else {
        if (this.lang2.active_card[index].url) {
          this.$router.push({path: this.lang2.active_card[index].url})
        }
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.loadList = this.lang2.active_card.slice(0, 4)
    }, 1)
  },
  watch: {
    //监听语言变化
    '$store.state.lang': function () {
      this.loadList = this.lang2.active_card.slice(0, 4)
    },
  }
}
</script>

<style scoped>
.Company_Activities_Body1 {
  font-family: Montserrat;
  width: 10rem;
  position: relative;
  overflow: hidden;
  transition: .2s all;
  margin: .385417rem auto;
}

.Company_Activities_Body1.cn-active {
  overflow: visible;
}

.Company_Activities_Body1 .text {
  display: flex;
  justify-content: space-between;
  width: 8.25rem;
  font-size: 18PX;
  color: #343434;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 5px;
}

.Company_Activities_Body1 .text .title {
  float: left;
  width: max-content;
  color: #343434;
}

.Company_Activities_Body1 .text .more {
  float: right;
  line-height: normal;
  color: #707070;
  cursor: pointer;
  user-select: none;
  display: block;
  font-size: 16PX;
}

.Company_Activities_Body1 .text .more i {
  display: inline-block;
  color: black;
  transform: rotate(-90deg);
  transition: .2s all;
  font-size: 16PX;
}

.Company_Activities_Body1 .text .more.more-active i {
  transform: rotate(0deg);
}

.Company_Activities_Body1 .Bigcard {
  max-width: 8.25rem;
  height: max-content;
  margin: auto;
  margin-top: .1875rem;
  display: grid;
  grid-template-columns: auto auto;
  grid-row-gap: 15PX;
  grid-column-gap: 15PX;
  overflow: hidden;
}

.Company_Activities_Body1 .Bigcard .card {
  display: inline-block;
  width: 4.015625rem;
  height: auto;
  background-color: #ffffff;
  border-radius: .052083rem;
  overflow: hidden;
  padding-bottom: .234375rem;
}

.Company_Activities_Body1 .Bigcard .card .img {
  overflow: hidden;
  height: 1.8125rem;
}

.Company_Activities_Body1 .Bigcard .card .img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.Company_Activities_Body1 .Bigcard .card .t-content {
  width: 3.645833rem;
  margin: auto;
  margin-top: .234375rem;
}

.Company_Activities_Body1 .Bigcard .card .t-content .time {
  width: 100%;
  font-size: 16PX;
  padding-top: 0rem;
  color: #707070;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.Company_Activities_Body1 .Bigcard .card .t-content .name {
  display: block;
  width: 100%;
  font-size: 19PX;
  font-weight: normal;
  color: #1e1e1e;
  margin-top: .078125rem;
  border-bottom: #febb6f solid .015625rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-bottom: 2PX;
  cursor: pointer;
  user-select: none;
}

.Company_Activities_Body1 .Bigcard .card .t-content .name:hover {
  color: #FEBB6F;
}

.PH-title {
  display: none;
}

.PH-btn-more {
  display: none;
}

@media (max-width: 1024px) {
  .Company_Activities_Body1 .text .title,
  .Company_Activities_Body1 .text,
  .Company_Activities_Body1 .text .more i{
    font-size: 18PX;
  }
}

@media (max-width: 768px) {
  .Company_Activities_Body1 .Bigcard .card .t-content .time {
    font-size: 14PX;
  }
  .Company_Activities_Body1 .text .title,
  .Company_Activities_Body1 .text,
  .Company_Activities_Body1 .text .more i{
    font-size: 16PX;
  }
}

@media (max-width: 576px) {
  .Company_Activities_Body1 .text {
    height: auto;
  }

  .Company_Activities_Body1 .Bigcard {
    grid-template-columns: auto;
  }

  .Company_Activities_Body1 .Bigcard .card {
    width: 100%;
    height: auto;
  }

  .Company_Activities_Body1 .Bigcard .card .img {
    height: auto;
  }


  .Company_Activities_Body1 .Bigcard .card .t-content {
    width: 75%;
    text-align: left;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
  }

  .Company_Activities_Body1 .Bigcard .card .t-content .time {
    display: inline-block;
    margin: 0;
  }

  .Company_Activities_Body1 .Bigcard .card .t-content .name {
    display: inline-block;
    margin: 0;
    margin-top: .078125rem;
    font-size: 16PX;
  }

  .Company_Activities_Body1 .text {
    display: none;
  }
  .PH-title {
    display: block;
  }

  .PH-btn-more {
    display: block;
  }
  .PH-title .title{
    width: fit-content;
    margin: 0 auto;
    padding: 0 10PX;
    padding-bottom: 5PX;
    margin-bottom: 10PX;
    font-size: 20PX;
    color: #FEBB6F;
    border-bottom: 1PX solid #FEBB6F;
  }

  .PH-btn-more .more .iconfont{
    transform: rotateX(0deg);
    transition: .35s all;
  }

  .PH-btn-more .more.more-active .iconfont{
    transform: rotateX(180deg);
    transition: .35s all;
  }

  .PH-btn-more .more{
    width: fit-content;
    margin: 0 auto;
    margin-bottom: 10PX;
    font-size: 12PX;
    font-weight: 100;
    color: #959595;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .PH-btn-more .more.more-active i {
    transform: rotate(0deg);
  }
  .PH-btn-more .more .iconfont{
    font-size: 36PX;
  }
}

@media (max-width: 425px) {
}

@media (max-width: 320px) {
}

</style>