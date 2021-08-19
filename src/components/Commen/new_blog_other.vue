<template>
  <div class="news_blog_body2">
    <div class="article">
      <h1>Other articles</h1>
      <div class="article-list">
        <div class="card" v-for="(item,index) in lang2" :key="index">
          <div class="img">
            <img v-lazy='item.imgUrl' :key="item.imgUrl" >
          </div>
          <div class="t-content">
            <p class="time" v-html="item.time"></p>
            <a @click="golocation($event,index)" class="name"
               :target="item.LinkTarget ? item.LinkTarget : ''" v-html="item.name"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsBlogBody2",
  props: {
    lang2: {},
  },
  mounted() {
  },
  methods:{
    golocation(e, index) {
      if (e.target.target.toString() == '_blank') {
        window.open(this.lang2[index].url, "_blank");
      } else {
        if (this.lang2[index].url) {
          this.$router.push({path: this.lang2[index].url})
        }
      }
    }
  }
}
</script>

<style scoped>
.news_blog_body2{
  position: relative;
  width: auto;
  height: auto;
  box-sizing: border-box;
  padding: .380208rem 0.70625rem;
  background-color: #F2F2F2;
  display: flex;
  justify-content: center;
}

h1{
  font-size: 24PX;
}
.news_blog_body2 .article{
  width: 100%;
}

.news_blog_body2 .article-list {
  width: 100%;
  margin-top: .1875rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10PX;
}

.news_blog_body2 .article-list .card {
  display: inline-block;
  width: 100%;
  height: auto;
  background-color: #ffffff;
  border-radius: .052083rem;
  overflow: hidden;
  padding-bottom: .234375rem;
}
.news_blog_body2 .article-list .card .img{
  overflow: hidden;
  height: 1.8125rem;
}
.news_blog_body2 .article-list .card .img img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news_blog_body2 .article-list .card .t-content {
  width: 80%;
  margin: auto;
  margin-top: .234375rem;
}

.news_blog_body2 .article-list .card .t-content .time {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16PX;
  padding-top: 0rem;
  color: #707070;
}

.news_blog_body2 .article-list .card .t-content .name {
  display: block;
  width: 100%;
  font-size: 18PX;
  font-weight: normal;
  color: #1e1e1e;
  margin-top: .078125rem;
  border-bottom: #febb6f solid 1PX;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-bottom: 2PX;
  cursor: pointer;
  user-select: none;
}

@media (max-width: 576px) {
  .news_blog_body2 .article-list {
    width: 100%;
    margin-top: .1875rem;
    display: inline-grid;
    grid-template-columns: auto;
    grid-column-gap: 18PX;
    grid-row-gap: 18PX;
  }
  .news_blog_body2 .article-list .card .img{
    overflow: hidden;
    height: auto;
  }
}
</style>