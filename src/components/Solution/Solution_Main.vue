<template>
  <div class="solution_main">
    <div class="tab">
      <div class="tab-select">
        <ul>
          <li v-on:click='changeCard(index)' :class=' currentIndex == index ? "active" : "" ' :key='index'
              v-for='(item,index) in lang2.cardList'>
            {{ item.title }}
          </li>
        </ul>
      </div>

      <transition-group name="show">
        <div class="tab-pic current" v-show="currentIndex==index" :key="'my-name'+index"
             v-for='(item,index) in lang2.cardList'>
          <div class="lab-list">
            <img v-lazy="item1" v-for="(item1, index1) in item.info" :key="'index1'+index1">
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "Solution_Main",
  props: {
    lang2: {}
  },
  namespaced: true,
  data() {
    return {
      currentIndex: 0,
    }
  },
  mounted() {
  },
  methods: {
    changeCard(index) {
      // 在这里实现选项卡切换操作：本质就是操作类名
      // 如何操作类名？就是通过currentIndex
      this.currentIndex = index;
      // console.log(this.lang.product);
    },
  }
}
</script>

<style scoped>
.solution_main {
  display: grid;
  grid-template-columns: 1fr min(1265PX, 70%) 1fr;
}

.tab {
  grid-column: 2;
}

.tab-select ul {
  display: flex;
  justify-content: space-around;
  margin-bottom: 32PX;
  font-size: 0.177083rem;
  border-bottom: 1PX solid #d5d5d5;
  line-height: 1.5;
}

li{
  cursor: pointer;
  padding: 0 5PX;
  user-select: none;
}

.tab-select .active{
  border-bottom: 2PX solid #FEBB6F;
}

.lab-list {
  display: grid;
  grid-template-columns: auto auto;
  /*grid-gap: 94PX;*/
  grid-gap: .338542rem;
}

.lab-list img {
  /*width: 2.838542rem;*/
  /*min-width: 545PX;*/
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 576px) {
  .tab-select ul {
    font-size: 14PX;
  }
}
</style>