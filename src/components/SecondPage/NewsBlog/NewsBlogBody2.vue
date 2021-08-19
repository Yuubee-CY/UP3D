<template>
  <div class="news_blog_body2">
    <div class="article">
      <h1>Other articles</h1>
      <div class="article-list">
        <div class="card" v-for="(item,index) in lang2.news_card" :key="index">
          <div class="img">
            <img v-lazy="item.imgUrl" >
          </div>
          <div class="t-content">
            <p class="time">{{item.time}}</p>
            <router-link :to=item.href class="name" tag="a">{{item.name}}</router-link>
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
}
</script>

<style scoped>
.news_blog_body2{
  position: relative;
  width: 10rem;
  height: auto;
  box-sizing: border-box;
  padding: .380208rem 1.40625rem;
  background-color: #F2F2F2;
  display: flex;
  justify-content: flex-end;
}

.news_blog_body2 .article{
  width: 80%;
}

.news_blog_body2 .article-list {
  max-width: 8.25rem;
  height: max-content;
  margin-top: .1875rem;
}


.news_blog_body2 .article-list .card {
  display: inline-block;
  width: 2.604167rem;
  height: 1.822917rem;
  background-color: #ffffff;
  border-radius: .052083rem;
}

.news_blog_body2 .article-list .card:nth-child(odd) {
  margin-right: .411458rem;
}

.news_blog_body2 .article-list .card .img{
  overflow: hidden;
  width: 4.015625rem;
  height: 1.8125rem;
}
.news_blog_body2 .article-list .card .img img{
  width: 4.015625rem;
  height: auto;
}

.news_blog_body2 .article-list .card .t-content {
  margin: .0625rem .203125rem;
}

.news_blog_body2 .article-list .card .t-content .time {
  width: max-content;
  font-size: .041667rem;
  padding-top: 0rem;
  color: #707070;
}

.news_blog_body2 .article-list .card .t-content .name {
  display: block;
  width: max-content;
  font-size: .114583rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: .234375rem;
  color: #1e1e1e;
  margin-top: .07246rem;
  border-bottom: #febb6f solid .015625rem;
}
</style>