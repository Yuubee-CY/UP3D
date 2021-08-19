<template>
  <div class="function_guide" ontouchstart="">
    <div class="bigbox" ref="bigbox" v-for="(item,index1) of lang2.Guide" :key="index1"
         @mouseleave="unchose($event,index1)"
         @mouseover="chose($event,index1)"
         @click="clickchose($event, index1)"
    >
      <div class="inbox">
        <p ref="text">{{ item.title }}</p>
      </div>
    </div>
    <div class="guide-back-top" v-if=this.show1 @click="backTop($event)">
      <i class="iconfont icon-xiangshang"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lang2: {},
  },
  // name: 'carrousel',
  data() {
    return {
      guidelang: {},
      text: [1, 2, 3, 4],
      index: -1,
      icon_active_img: require('../../assets/img/PC/Commen/active.png'),
      icon_unactive_img: require('../../assets/img/PC/Commen/iconUnactive.png'),
      show1: true,
      timer: {}
    }
  },
  computed: {
    //   swiper() {
    //   return this.$refs.BolgSwiper.$swiper
    // }
  },
  created() {
    // console.log(this.lang2)
    this.$nextTick(() => {
      this.toLocal()
    })
  },
  destroyed() {
    this.$store.commit("set_look_vide", '');
  },
  mounted() {
    window.addEventListener('scroll', this.anchorScroll, true)
  },

  watch: {
    index: {
      handler: function () {
      },
    }
  },

  methods: {

    toLocal() {
      //查找存储的锚点id
      let Id = this.$store.state.look_vide
      let toElement = document.getElementById(Id);
      // //锚点存在跳转
      if (Id) {
        toElement.scrollIntoView({
          behavior: "auto",  // 平滑过渡
          block: "start"  // 上边框与视窗顶部平齐。默认值
        })
      }
    },

    //getElementToPageTop此方法获取元素距离文档顶端的距离
    getElementToPageTop(el) {
      try {
        if (el.parentElement) {
          //递归
          return this.getElementToPageTop(el.parentElement) + el.offsetTop
        }
        return el.offsetTop
      } catch (e) {
      }
    },
    //循环排除传入index的item，使其他item颜色初始化
    clearBC(temp) {
      for (let i = 0; i < this.text.length; i++) {
        try {
          if (i == temp) {
            this.$refs.bigbox[i].children[0].style.backgroundColor = "#ffb15b"
          } else {
            this.$refs.bigbox[i].children[0].style.backgroundColor = "rgba(5,5,5,0)"
          }
        } catch (e) {
        }
      }
    },
    anchorScroll() {
      //当前屏幕可视区域高度
      let wHeight = window.screen.availHeight
      //当前滚动条距离
      let Top = document.documentElement.scrollTop
      //调用getElementToPageTop()，获取元素离文档顶端的距离
      let guiTop = []
      for (let a = 0; a < this.text.length; a++) {
        guiTop.push(this.getElementToPageTop(document.getElementById(this.lang2.Guide[a].anchor)))
      }
      //结构赋值
      let [guiTop0, guiTop1, guiTop2, guiTop3] = guiTop
      //当前元素距离可视屏幕顶端的距离 = 元素离文档顶端的距离 - 当前滚动条距离
      let wTop0 = guiTop0 - Top
      let wTop1 = guiTop1 - Top
      let wTop2 = guiTop2 - Top
      let wTop3 = guiTop3 - Top
      //获取顶部导航栏高度
      let header = document.getElementsByTagName('header')[0].offsetHeight
      //滚动到该区域，该锚点item高亮的具体实现思路如下
      //判断'当前元素距离可视屏幕顶端的距离'小于'当前屏幕可视区域高度'的一半：
      // 当前元素进入屏幕并且占据屏幕一半多的高度
      //并且'当前滚动条高度'+'导航栏高度'要小于下一个item'距离屏幕顶端的距离'-'当前屏幕可视区域高度'的一半：
      // 避免进入下一个item时，上一个item还显示高亮
      //如果滚动到了不属于所有item的区域，如返回到了顶部，则让所有item的颜色初始化
      if (wTop0 <= wHeight / 2 && Top + header < guiTop1 - wHeight / 2) {
        this.index = 0
        // 调用clearBC方法，“排它”思想使当前的guide高亮
        this.clearBC(this.index)
      } else if (wTop1 <= wHeight / 2 && Top + header < guiTop2 - wHeight / 2) {
        this.index = 1
        this.clearBC(this.index)
      } else if (wTop2 <= wHeight / 2 && Top + header < guiTop3 - wHeight / 2) {
        this.index = 2
        this.clearBC(this.index)
      } else if (wTop3 <= wHeight / 2 && Top >= guiTop3 - wHeight / 2) {
        this.index = 3
        this.clearBC(this.index)
      } else {
        // for (let i = 0; i <= 3; i++) {
        //   try {
        //     this.$refs.bigbox[i].children[0].style.backgroundColor = "rgba(5,5,5,0)"
        //   } catch (e) {
        //   }
        // }
      }
    },
    chose(e, index1) {
      //鼠标停留时让该item高亮
      this.$refs.bigbox[index1].querySelector('.inbox').style.backgroundColor = '#ffb15b'
    },

    unchose(e, index1) {
      //鼠标离开当前 item 若 item 若有被点过则不渲染（遍历所有item排除点击了的那个）
      if (index1 == this.index) {
      } else {
        this.$refs.bigbox[index1].querySelector('.inbox').style.backgroundColor = "rgba(5,5,5,0)"
      }

    },

    clickchose(e, index1) {
      //当正在返回顶部时点击锚点可终止返回顶部操作
      clearInterval(this.timer);
      //用this.index记录当前被点击的item
      this.index = index1
      //让点击的item高亮
      this.$refs.bigbox[this.index].querySelector('.inbox').style.backgroundColor = "#ffb15b"
      //循环让其余没被点击的item颜色初始化
      for (let i = 0; i < this.text.length; i++) {
        if (i != this.index) {
          this.$refs.bigbox[i].querySelector('.inbox').style.backgroundColor = "rgba(5,5,5,0)"
        }
      }
      //item 与锚点关系
      document.getElementById(this.lang2.Guide[index1].anchor).scrollIntoView(
          {
            behavior: "auto",  // 平滑过渡
            block: "start"  // 上边框与视窗顶部平齐。默认值
          }
      );
      let header = document.getElementsByTagName('header')[0].offsetHeight
      document.documentElement.scrollTop -= header
    },
    backTop(e) {

      clearInterval(this.timer);
      let h = document.documentElement.scrollTop;
      let subH = parseInt(h / 120);

      //在返回顶部时监听鼠标滚动事件停止返回顶部操作
      window.addEventListener('mousewheel', () => {
        clearInterval(this.timer);
      })

      //在返回顶部时监听鼠标滚动事件停止返回顶部操作
      window.addEventListener('touchstart', () => {
        clearInterval(this.timer);
      })

      //返回顶部
      this.timer = setInterval(() => {
        let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        //ispeed:返回顶部的速度，数值越大越慢
        let ispeed = Math.floor(-scrolltop / 30);
        if (scrolltop == 0) {
          // 页面返回顶部后，初始化所有item颜色
          for (let i = 0; i < this.text.length; i++) {
            this.$refs.bigbox[i].children[0].style.backgroundColor = "rgba(5,5,5,0)"
            this.index = -1
          }
          clearInterval(this.timer);
        }
        document.documentElement.scrollTop = document.body.scrollTop = scrolltop + ispeed;
      }, 1);

    }

  },


}
</script>


<style scpoe>
.function_guide {
  width: .570833rem;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-40%);
  background-color: rgba(5, 5, 5, 0.5);
  z-index: 12;
  box-sizing: border-box;
  user-select: none;
}


.function_guide .guide-back-top i {
  font-size: 30PX;
  color: white;
}

.function_guide .guide-back-top:hover {
  background-color: #FEBB6F;
}

.function_guide .bigbox, .function_guide .guide-back-top {
  width: .570833rem;
  height: .260417rem;
  cursor: pointer;
  text-align: center;
  transition: all .2s;
  position: relative;
}

.function_guide .bigbox .inbox, .function_guide .guide-back-top i {
  width: 100%;
  height: 100%;
  display: inline-block;
  line-height: 0.260417rem;
  position: absolute;
  left: 0;
  white-space: nowrap;
  /*transition: all .2s;*/
}

.function_guide div p {
  display: inline-block;
  vertical-align: super;
  font-family: Montserrat;
  /*font-size: .072917rem;*/
  font-size: 12PX;
  color: #ffffff;
  height: fit-content;
}

/*返回顶部按钮的动画*/
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.back-top {
  display: none;
}

@media (max-width: 1024px) {
  .function_guide {
    width: .9rem;
  }

  .function_guide .bigbox, .function_guide .guide-back-top {
    width: auto;
    height: .360417rem;
  }

  .function_guide .bigbox .inbox, .function_guide .guide-back-top i {
    line-height: .360417rem;
  }
}

@media (max-width: 767px) {
  .function_guide {
    width: 1.270833rem;
  }

  .function_guide .bigbox, .function_guide .guide-back-top {
    width: auto;
    height: .5390417rem;
  }

  .function_guide .bigbox .inbox, .function_guide .guide-back-top i {
    line-height: .5390417rem;
  }
}

@media (max-width: 576px) {

}

@media (max-width: 425px) {
  .function_guide {
    width: 1.570833rem;
  }

  .function_guide .bigbox, .function_guide .guide-back-top {
    width: auto;
    height: .7390417rem;
  }

  .function_guide .bigbox .inbox, .function_guide .guide-back-top i {
    line-height: .7390417rem;
  }
}

@media (max-width: 375px) {
  .function_guide {
    width: 1.870833rem;
  }

  .function_guide .bigbox, .function_guide .guide-back-top {
    width: auto;
    height: .8390417rem;
  }

  .function_guide .bigbox .inbox, .function_guide .guide-back-top i {
    line-height: .8390417rem;
  }
}
</style>