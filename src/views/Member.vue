<template>
  <div class="member">
    <div class="left-guide">
      <p>Personal center</p>
      <div class="second-view">
        <div class="guide-list">
          <div class="list">
            <router-link to='/Member/userinfo'> Account information </router-link>
          </div>
          <div class="list">
            <router-link to='/Member/userinfo'> Account management </router-link>
          </div>
          <div class="list">
            <router-link to='/Member/userinfo'> Repair application </router-link>
          </div>
          <div class="list">
            <router-link to='/Member/userinfo'> Help </router-link>
          </div>
          <div class="list">
            <router-link to='/Member/userinfo'> Favorites </router-link>
          </div>
        </div>
        <router-view class="card"></router-view>
      </div>
      <div class="end"></div>
    </div>

    <!-- <input type="file" ref="clearFile" @change="getFile($event)" multiple="multiplt" class="add-file-right-input" style="margin-left:70px;" accept=".docx,.doc,.pdf"> -->
  </div>
</template>

<script>
export default {
  props: {
    lang: {},
  },
  data() {
    return {
      labelPosition: 'right',
    };
  },
  created() {
  },
  methods: {}
}
</script>

<style>
.member {
  width: 10rem;
  padding-top: .494792rem;
  height: auto;
  /* height: 2.541667rem; */
  background-color: #ffffff;
  font-family: Montserrat;
}

.member .left-guide {
  /* float: left; */
  margin-left: 1.458333rem;
  /* border: red solid .005208rem; */
}

.member .second-view {
  width: 10rem;
}

.member .left-guide p {
  font-size: .25rem;
  color: #1e1e1e;
  margin-bottom: .338542rem;
  /* margin-left: 1.458333rem; */
  /* border: red solid .005208rem; */
}

.member .left-guide .guide-list {
  float: left;
  width: 1.364583rem;
  /* border: red solid .005208rem; */

}

.member .left-guide .guide-list .list{
  position: relative;
  box-sizing: border-box;
  transition: .2s all;
}

.member .left-guide .guide-list .list a {
  display: inline-block;
  width: .989583rem;
  height: auto;
  font-size: .083333rem;
  color: #707070;
  border-top: solid .005208rem #959595;
  padding: .1119795rem 0 .1119795rem 0.02415rem;
  transition: .2s all
}

.member .left-guide .guide-list .list a:hover{
  color: #FEBB6F;
}

.member .left-guide .guide-list .list:last-child {
  border-bottom: solid .005208rem #959595;
  width: .989583rem;

}

.member .card {
  float: left;
}

.member .end {
  clear: both;
}
</style>