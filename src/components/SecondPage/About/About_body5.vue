<template>
  <div class="About_body5" ref="startcount">
    <div class="card">
      <div><h1>{{ user }}+</h1>
        <p>{{ lang2.list[0] }}</p></div>
    </div>
    <div class="card">
      <div><h1>{{ country_num }}+</h1>
        <p>{{ lang2.list[1] }}</p></div>
    </div>
    <div class="card">
      <div><h1>{{ apply }}+</h1>
        <p>{{ lang2.list[2] }}</p></div>
    </div>
    <div class="card">
      <div><h1>{{ member }}+</h1>
        <p>{{ lang2.list[3] }}</p></div>
    </div>
    <h1 class='title'>{{ lang2.title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    lang2: {},
  },
  data() {
    return {
      start_add: 0,
      user: 0,
      country_num: 0,
      apply: 0,
      member: 0,
    }
  },
  computed: {},
  created() {
  },

  watch: {},

  mounted() {
    this.timer2 = setInterval(this.start_count, 20);
  },

  destroyed: function () {
    //页面消失清理定时器
    clearInterval(this.timer2);
  },

  methods: {
    start_count() {
      var arrive = this.$refs.startcount.getBoundingClientRect().top;
      if (arrive < 250) {
        this.start_add = 1
      }
      if (this.start_add == 1) {
        this.user = this.user + 33
        if (this.user >= 3000) {
          this.user = 3000
        }
        if (this.user % 2 == 0) {
          this.member = this.member + 2
          if (this.member >= 200) {
            this.member = 200
          }
        }
        if (this.user % 3 == 0) {
          this.country_num = this.country_num + 1
          if (this.country_num >= 60) {
            this.country_num = 60
          }
        }
        if (this.user % 4 == 0) {
          this.apply = this.apply + 1
          if (this.apply >= 20) {
            this.apply = 20
          }

          if (this.apply == 20 && this.country_num == 60 && this.member == 200 && this.user == 3000) {
            clearInterval(this.timer2);
          }

        }
      }

    },
  }
}
</script>


<style>

.About_body5 {
  position: relative;;
  height: 4.135417rem;
  width: 8.27rem;
  margin: auto;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  /* border: blue solid .005208rem;; */
}

.About_body5 .title {
  position: absolute;
  top: .682292rem;
  left: 0.55rem;
  display: block;
  font-weight: normal;
  /*font-size: 0.208333rem;*/
  font-size: 30PX;
  width: fit-content;
  width: -moz-fit-content;
  height: auto;
  padding-bottom: .026042rem;
  padding-right: 0.07246rem;
  border-bottom: #febb6f solid 0.020833rem;
}

.About_body5 .card {
  float: left;
  width: 1.953125rem;
  height: 4.135417rem;
  /* border: green solid .005208rem;; */
  background-color: white;
  margin-left: 0.18rem;
}

.About_body5 .card:nth-child(1) {
  margin-left: 0.104167rem;
}

.About_body5 .card div {
  width: 1.515625rem;
  margin: auto;
  margin-top: 1.880208rem;
  text-align: center;
}

.About_body5 .card div h1 {
  font-size: 0.3125rem;
  color: #ffb15b;
}

.About_body5 .card div p {
  /*font-size: 0.104167rem;*/
  font-size: 14PX;
  margin-top: 0.119792rem;
  color: #707070;
}

</style>