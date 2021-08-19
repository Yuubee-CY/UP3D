<template>
  <div class="CompanyNews" ref="CompanyNews">
    <div class="text">
      <p class="title">{{ lang2.title }}</p>
      <router-link to="/CompanyNewsPage">
        {{ lang2.more.message }}
      </router-link>
    </div>
    <div class="Bigcard">
      <div class="card" v-for="(item,index) in lang3.news_card.slice(0,2)" :key="index">
        <div class="img">
          <img v-lazy='item.imgUrl' :key="item.imgUrl">
        </div>
        <div class="t-content">
          <p class="time" v-html="item.time"></p>
          <a @click="golocation($event,index)" class="name"
             :target="item.LinkTarget ? item.LinkTarget : ''">{{ item.name }}</a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    lang2: {},
    lang3: {}
  },
  data() {
    return {};
  },
  methods: {
    showMore(e) {
      this.$refs.more.classList.toggle("more-active")
      this.$refs.CompanyNews.classList.toggle('cn-active')
    },
    golocation(e, index) {
      if (e.target.target.toString() == '_blank') {
        window.open(this.lang3.news_card[index].url, "_blank");
      } else {
        if (this.lang3.news_card[index].url) {
          this.$router.push({path: this.lang3.news_card[index].url})
        }
      }
    }
  },
  mounted() {
  },
  updated() {
    // if (this.$store.state.lang == '中文'){
    //   console.log('中文！')
    //   this.news_card = []
    //   this.news_card.push(this.$i18n.messages.zh.allinfo.CompanyNews.news_list.news_card[0])
    //   this.news_card.push(this.$i18n.messages.zh.allinfo.CompanyNews.news_list.news_card[1])
    //   console.log(this.news_card)
    // }else if(this.$store.state.lang == 'EN'){
    //   console.log('英语！')
    //   this.news_card = []
    //   this.news_card.push(this.$i18n.messages.en.allinfo.CompanyNews.news_list.news_card[0])
    //   this.news_card.push(this.$i18n.messages.en.allinfo.CompanyNews.news_list.news_card[1])
    //   console.log(this.news_card)
    // }
  }
}
</script>

<style scoped>
.CompanyNews {
  font-family: Montserrat;
  width: 10rem;
  position: relative;
  transition: .2s all;
  margin: 40PX auto;
}

.CompanyNews.cn-active {
  max-height: 100rem;
  overflow: visible;
}

.CompanyNews .text {
  display: flex;
  justify-content: space-between;
  width: 8.25rem;
  font-size: 18PX;
  color: #343434;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 5px;
}

.CompanyNews .text .title {
  float: left;
  width: max-content;
  color: #343434;
}

.CompanyNews .text a {
  color: #707070;
  font-size: 16PX;
}

.CompanyNews .text .more {
  float: right;
  line-height: normal;
  color: #707070;
  cursor: pointer;
  user-select: none;
  display: block;
  font-size: 16PX;
}

.CompanyNews .text .more i {
  width: .104167rem;
  height: .104167rem;
  display: inline-block;
  color: black;
  vertical-align: top;
  transform: rotate(-90deg);
  -webkit-transform-origin: 70% 100%;
  -moz-transform-origin: 70% 100%;
  transform-origin: 70% 100%;
  transition: .2s all;
}

.CompanyNews .text .more.more-active i {
  transform: rotate(0deg);
}

.CompanyNews .Bigcard {
  max-width: 8.25rem;
  height: max-content;
  margin: auto;
  margin-top: .1875rem;
  display: grid;
  grid-template-columns: auto auto;
  grid-row-gap: 18PX;
  grid-column-gap: 18PX;
}


.CompanyNews .Bigcard .card {
  display: inline-block;
  width: 4.015625rem;
  height: auto;
  background-color: #ffffff;
  border-radius: .052083rem;
  overflow: hidden;
  padding-bottom: .234375rem;
}

.CompanyNews .Bigcard .card .img {
  overflow: hidden;
  height: 1.8125rem;
}

.CompanyNews .Bigcard .card .img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.CompanyNews .Bigcard .card .t-content {
  width: 3.645833rem;
  margin: auto;
  margin-top: .234375rem;
}

.CompanyNews .Bigcard .card .t-content .time {
  width: max-content;
  font-size: 16PX;
  padding-top: 0rem;
  color: #707070;
}

.CompanyNews .Bigcard .card .t-content .name {
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

.CompanyNews .text .more i {
  display: none;
}

@media (max-width: 1024px) {
  .CompanyNews .text {
    font-size: 18PX;
  }

  .CompanyNews .text .title {
    font-size: 18PX;
  }
}

@media (max-width: 768px) {
  .CompanyNews .Bigcard .card .t-content .time {
    font-size: 14PX;
  }
  .CompanyNews .text {
    font-size: 16PX;
  }

  .CompanyNews .text .title {
    font-size: 16PX;
  }
}

@media (max-width: 576px) {
  .CompanyNews .text {
    height: auto;
  }

  .CompanyNews .Bigcard {
    grid-template-columns: auto;
  }

  .CompanyNews .Bigcard .card {
    width: 100%;
    height: auto;
  }

  .CompanyNews .Bigcard .card .img {
    height: auto;
  }

  .CompanyNews .Bigcard .card .t-content {
    width: 75%;
    text-align: left;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
  }

  .CompanyNews .Bigcard .card .t-content .time {
    display: inline-block;
    margin: 0;
  }

  .CompanyNews .Bigcard .card .t-content .name {
    display: inline-block;
    margin: 0;
    margin-top: .078125rem;
    font-size: 16PX;
  }

  .CompanyNews .text {
    font-size: 14PX;
  }

  .CompanyNews .text .title {
    font-size: 14PX;
  }

}


</style>