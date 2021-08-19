<template>
  <header>
    <div class="logo">
      <h1>
        <a href="http://localhost:8080" title="UP3D-云甲科技有限公司">UP3D-云甲科技有限公司</a>
      </h1>
    </div>

    <div class="guide">
      <div class="item" v-for="(item,index1) in lang.guide_list" :key="index1">
        <ul @mouseover="activeIndex = index1" @mouseleave="activeIndex=-1" @click.stop="activeshow(index1)">
          <router-link :to="item.url" :class="{'active':activetag==index1,'active2':activetag!=index1}">
            {{ item.title }}
          </router-link>
          <transition-group>
            <div class="sublist-menu" v-show="activeIndex==index1 && index1!=2" key="index1">
              <li v-for='(sublist ,index2) in item.list' :key="index2" @click.stop="activeshow2(index1,index2)">
                <router-link :to="sublist.url"
                             :class="{'active':activetag2==index1*10+index2,'active2':activetag2!=index1*10+index2}">
                  {{ sublist.name }}
                </router-link>
                <div class="line"></div>
              </li>
            </div>

            <div class="product-menu" v-show="activeIndex==index1 && index1==2" key="index2">
              <div class="ptext">
                <div class="plist" v-for='(sublist ,index2) in item.list' :key="index2"
                     @click="activeshow3(index1,index2)" @mouseover="activeshow4(index1,index2)">
                  <li class="product-list">
                    <router-link :to="sublist.url"
                                 :class="{'active':activetag2==index1*10+index2,'active3':activetag2!=index1*10+index2}">
                      {{ sublist.name }}
                    </router-link>
                  </li>
                  <span class="el-icon-arrow-right"
                        :class="{'active':activetag2==index1*10+index2,'active3':activetag2!=index1*10+index2}"></span>
                </div>
              </div>

              <transition-group name="slowshow">
                <div class="ppic" v-show="activetag3==20" key="box1">
                  <div class="pic" v-for='(sublist ,index2) in lang.guide_pic.guide_scanner' :key="index2"
                       @mouseover="cc=index2" @mouseleave="cc=-1">
                    <router-link :to="sublist.url"><img v-lazy="sublist.imgurl" :key="sublist.imgurl"></router-link>
                    <p :class="{'active':cc==index2,'active3':cc!=index2}">{{ sublist.name }}</p>
                  </div>
                </div>

                <div class="ppic" v-show="activetag3==21" key="box2">
                  <div class="pic" v-for='(sublist ,index2) in lang.guide_pic.guide_UPCAD' :key="index2"
                       @mouseover="cc=index2" @mouseleave="cc=-1">
                    <router-link :to="sublist.url"><img v-lazy="sublist.imgurl" :key="sublist.imgurl"></router-link>
                    <p :class="{'active':cc==index2,'active3':cc!=index2}">{{ sublist.name }}</p>
                  </div>
                </div>

                <div class="ppic" v-show="activetag3==22" key="box3">
                  <div class="pic" v-for='(sublist ,index2) in lang.guide_pic.guide_UPCAM' :key="index2"
                       @mouseover="cc=index2" @mouseleave="cc=-1">
                    <router-link :to="sublist.url"><img v-lazy="sublist.imgurl" :key="sublist.imgurl"></router-link>
                    <p :class="{'active':cc==index2,'active3':cc!=index2}">{{ sublist.name }}</p>
                  </div>
                </div>

                <div class="ppic" v-show="activetag3==23" key="box4">
                  <div class="pic" v-for='(sublist ,index2) in lang.guide_pic.guide_Milling_machine' :key="index2"
                       @mouseover="cc=index2" @mouseleave="cc=-1">
                    <router-link :to="sublist.url"><img v-lazy="sublist.imgurl" :key="sublist.imgurl"></router-link>
                    <p :class="{'active':cc==index2,'active3':cc!=index2}">{{ sublist.name }}</p>
                  </div>
                </div>
              </transition-group>
            </div>
          </transition-group>
        </ul>
      </div>

      <div class="item" @mouseover=" cl=1 " @mouseleave="cl=0">
        <ul class="changlang-ul">{{ this.$store.getters.send_lang }} <span class="el-icon-caret-bottom"></span>
          <transition>
            <div v-show="cl==1" class="changlang-div">
              <li v-for='(sublist ,index2) of lang.Lang' :key="index2" @click="changlang(sublist.id)">
                <span>{{ sublist.text }}</span>
                <div class="line"></div>
              </li>
            </div>
          </transition>
        </ul>
      </div>
    </div>

    <div class="personal-page" v-show="login==1" @click="activeshow5()">
      <router-link to="/Member" :class="{'active':activetag==99,'active2':activetag!=99}">{{ lang.Lang_self }}
      </router-link>
    </div>
  </header>
</template>


<script>
export default {

  props: {
    lang: {},
  },


  data() {
    return {
      login: 0,
      guidelang: {},
      cl: -1,
      cc: -1,
      activeIndex: -1,
      activetag: 0,
      activetag2: -1,
      activetag3: 20,
    };
  },

  created() {
    sessionStorage.toId = 0
    this.activetag = sessionStorage.activetag
    this.activetag2 = sessionStorage.activetag2
    this.activetag3 = sessionStorage.activetag3
  },

  mounted() {
    this.timerwatch = setInterval(this.watch_login, 500);
  },

  methods: {
    watch_login() {
      if (!window.sessionStorage.getItem('token')) {
        this.login = 0
      } else this.login = 1
    },


    changlang(id) {
      console.log('当前被点击的id=' + this.lang.Lang[id].text);
      this.$store.commit("re_set_lang", this.lang.Lang[id].text)
      // this.$store.state.lang=this.Lang[id].text ;
    },

    activeshow(index1) {
      this.activetag = index1;
      sessionStorage.activetag = index1;
      if (index1 != parseInt(this.activetag2 / 10)) {
        this.activetag2 = -1;
        sessionStorage.activetag2 = -1;
        this.$store.commit("set_product_posistion", null)
        this.activetag3 = 20;
        sessionStorage.activetag3 = 20;
      }
    },
    activeshow2(index1, index2) {
      this.activetag = index1;
      sessionStorage.activetag = index1;
      this.activetag2 = index1 * 10 + index2;
      sessionStorage.activetag2 = index1 * 10 + index2;
      if (index1 == 2) {
        this.activetag3 = index1 * 10 + index2;
        sessionStorage.activetag2 = index1 * 10 + index2;
      }
    },

    activeshow3(index1, index2) {
      if (this.$route.path != '/MainProduct') {
        this.$router.push({path: '/MainProduct'});
      }
      this.$store.commit("set_product_posistion", index1 * 10 + index2 + '')
      this.activetag = index1;
      sessionStorage.activetag = index1;
      this.activetag2 = index1 * 10 + index2;
      sessionStorage.activetag2 = index1 * 10 + index2;
      if (index1 == 2) {
        this.activetag3 = index1 * 10 + index2;
        sessionStorage.activetag2 = index1 * 10 + index2;
      }
    },

    activeshow4(index1, index2) {
      this.activetag = index1;
      sessionStorage.activetag = index1;
      this.activetag2 = index1 * 10 + index2;
      sessionStorage.activetag2 = index1 * 10 + index2;
      if (index1 == 2) {
        this.activetag3 = index1 * 10 + index2;
        sessionStorage.activetag2 = index1 * 10 + index2;
      }
    },


    activeshow5() {
      this.activetag = 99;
      sessionStorage.activetag = 99;
      console.log(this.activetag)
    }
  }


}
</script>
<style scoped>

header {
  position: sticky;
  /* font-family: Montserrat; */
  letter-spacing: 0px;
  color: #ffffff;
  top: 0px;
  width: 10rem;
  height: 0.5rem;
  background-color: black;
  z-index: 999;
  /* overflow: hidden; */
}

header .logo {
  position: absolute;
  top: 0.130208rem;
  left: 1.2rem;
  width: 0.833333rem;
  height: 0.25rem;
  background-color: black;
  z-index: 10;
}

header .logo h1 a {
  display: block;
  font-size: 0;
  width: 0.833333rem;
  height: 0.25rem;
  background: url(../assets/img/PC/Commen/logo.png) no-repeat center;
  background-size: 0.833333rem 0.25rem;
}

header .guide {
  position: relative;;
  width: 10rem;
  /* overflow: hidden; */
  /* margin: auto; */
  /* padding-left: 2.75rem;  */
  background-color: black;
  /* top:0.2rem; */
  z-index: 1;
}

header .guide .item {
  float: left;
  width: 0.45rem;
  text-align: center;
  font-size: 0.104167rem;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  padding-left: 0.15rem;
  padding-right: 0.15rem;
  background-color: black;
  z-index: 1;
}

.active {
  color: orange;
}

.active2 {
  color: white;
}

.active3 {
  color: #1e1e1e;
}

header .guide .item:nth-child(1) {
  padding-left: 2.75rem;
}

header .guide .item:nth-last-child(2) {

  display: inline-block;
  width: auto;
  padding-left: 0rem;
  padding-right: 0rem;
}

header .guide .item:nth-last-child(3) {
  /* width:auto; */
  width: 0.41rem;
  padding-left: 0.9rem;
}

header .guide .item:nth-last-child(1) {
  width: 0.41rem;
  padding-right: 0.85rem;
}

header .guide .item ul {
  text-align: center;
  line-height: 0.5rem;
  height: 0.5rem;
  font-size: .083333rem;
  background-color: black;
  z-index: 1;
}

header .guide .item ul a {
  display: block;
  height: 100%;
}

header .guide .item:nth-child(1) a:hover,
header .guide .item:nth-child(4) a:hover,
header .guide .item:nth-child(5) a:hover,
header .guide .item:nth-child(6) a:hover,
header .guide .item:nth-child(7) a:hover {
  color: orange;
}

header .guide .item li, .changlang-ul li {
  font-size: .0625rem;
  width: 0.41rem;
  background-color: black;
  line-height: .0625rem;
  opacity: 0.79;
  text-align: center;
  /* border: red solid 0.005208rem; */
}

header .guide .item li a, .changlang-ul li span {
  display: inline-block;
  padding-top: 0.084167rem;
  opacity: 0.79;
  padding-bottom: 0.026042rem;
}

header .guide .item .sublist-menu {
  position: relative;
  /* BUG */
  z-index: 1;
}

header .guide .item .sublist-menu li .line, .changlang-ul li .line {
  height: 0.005208rem;
  background: white;
  width: 70%;
  margin: auto;
}

header .guide .item ul .sublist-menu li:nth-last-child(1) .line, .changlang-ul li:nth-last-child(1) .line {
  display: none;
}

header .guide .item .product-menu {
  position: absolute;
  left: 0rem;
  width: 10rem;
  height: 1.645833rem;
  overflow: hidden;
  background-color: #f7f7f7;
  z-index: -1;
}

header .guide .item .product-menu .ptext {
  width: 1rem;
  margin-left: 2.8rem;
  float: left;
  /* border:rebeccapurple .005208rem solid; */
}

header .guide .item .product-menu .plist {
  width: 1rem;
  margin-top: 0.1875rem;
  text-align: left;
  line-height: 0rem;
  background-color: #f7f7f7;
  /* overflow: hidden; */
  /* border:rebeccapurple .005208rem solid; */
}

header .guide .item .product-menu .plist a {
  display: inline-block;
  /* color: #1e1e1e; */
  line-height: 0.104167rem;
  /* border:rebeccapurple .005208rem solid; */
  padding: 0px;
}

header .guide .item .product-menu .plist .product-list {
  width: 0.8rem;
  font-size: .083333rem;
  line-height: 0.098958rem;
  border: none;
  background-color: #f7f7f7;
  display: inline-block;
  text-align: left;
}

header .guide .item .product-menu .plist span {
  display: inline;
  font-size: .0625rem;
  line-height: .0625rem;
  text-align: right;
}

header .guide .item .product-menu .ppic {
  float: left;
  margin-top: 0.1875rem;
  margin-left: 0.3125rem;
  /* overflow: hidden; */
  width: 5.427083rem;
  height: .989583rem;
  /* border:rebeccapurple .005208rem solid; */
}

header .guide .item .product-menu .ppic .pic {
  float: left;
  width: 0.802083rem;
  height: 0.989583rem;
  margin-right: 0.390625rem;
  /* border: red 0.005208rem solid; */
}

header .guide .item .product-menu .ppic .pic img {
  width: 0.802083rem;
  height: 0.989583rem;
  transition: all 0.6s;
  -ms-transition: all 0.8s;
}

header .guide .item .product-menu .ppic .pic img:hover {
  transform: scale(1.2);
  -ms-transform: scale(1.2);
}

header .guide .item .product-menu .ppic .pic p {
  padding: 0px;
  margin: 0px;
  font-size: 0.052083rem;
  line-height: 0.104167rem;
  /* color: #343434; */
}

header .guide .item:nth-child(2) li:hover,
header .guide .item:nth-child(5) li:hover,
header .guide .item:nth-child(9) li:hover {
  color: orange;
}

.personal-page a {
  display: block;
  position: absolute;
  top: .195rem;
  left: 7.85rem;
  width: max-content;
  height: .234375rem;
  text-align: center;
  font-size: .083333rem;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  padding-left: 0.15rem;
  padding-right: 0.15rem;
  background-color: black;
  z-index: 11;
}

.personal-page a:hover {
  color: orange;
}


.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(-300px);
}

.v-enter-active,
.v-leave-active {
  opacity: 1;
  transition: all 0.6s ease;
}

.slowshow-enter,
.slowshow-leave-to {
  opacity: 0;
}

.slowshow-enter-active {
  transition: all 0.8s ease;
}

.slowshow-leave-active {
  opacity: 1;
}


.changlang-ul {
  background: black;
}

.changlang-li:hover {
  color: orange;
}

.changlang-div {
  position: relative;
  z-index: -1;
}

</style>