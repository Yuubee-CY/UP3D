// 路由&组件文件
import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import MainProduct from '../views/MainProduct.vue'
import SalesTeam from '../views/SalesTeam.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Forget from '../views/Forget.vue'
import Member from '../views/Member.vue'
import News from '../views/News.vue'
import CompanyNewsPage from "../views/SecondViews/CompanyNewsPage.vue";
import NewsBlog from "../views/SecondViews/NewsBlog.vue";

import CompanyActivitiesPage from "../views/SecondViews/CompanyActivitiesPage.vue";

import TopGuideNew from '../components/TopGuideNew.vue'
import TopGuide from '../components/TopGuide.vue'


import UP360P from '../views/SecondViews/UP360P.vue'
import UP300P from '../views/SecondViews/UP300P.vue'
import UP300E from '../views/SecondViews/UP300E.vue'
import UPCAD from '../views/SecondViews/UPCAD.vue'
import P4 from '../views/SecondViews/P4.vue'
import P5 from '../views/SecondViews/P5.vue'
import P52 from '../views/SecondViews/P52.vue'
import UPCAM from '../views/SecondViews/UPCAM.vue'
import P41 from "../views/SecondViews/P41.vue";
import P53 from "../views/SecondViews/P53";
import UP560 from '../views/SecondViews/UP560.vue'
import userinfo from '../components/Member/userinfo.vue'
import TopGuideNewPH from '../components/TopGuideNewPH.vue'
import NewsBlog1 from "../views/ThirdViews/NewsBlog1";
import NewsBlog2 from "../views/ThirdViews/NewsBlog2";
import UP400 from "../views/SecondViews/UP400";


Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path: '/',
    name: 'index',
    components: {
      PC: resolve => require(["../views/index.vue"], resolve),
      // PH: indexPH
    }
  },
  {
    path: '/Login',
    name: 'Login',
    components: {
      PC: resolve => require(["../views/Login.vue"], resolve),
      // PH: Login
    }
  },

  {
    path: '/Forget',
    name: 'Forget',
    components: {
      PC: resolve => require(["../views/Forget.vue"], resolve),
      // PH: Login
    }
  },

  {
    path: '/TopGuideNew',
    name: 'TopGuideNew',
    components: {
      PC: resolve => require(["../components/TopGuideNew.vue"], resolve),
      // PH: TopGuideNew
    }
  },
  {
    path: '/Register',
    name: 'Register',
    components: {
      PC: resolve => require(["../views/Register.vue"], resolve),
      // PH: Register
    }
  },
  {
    path: '/Member',
    name: 'Member',
    components: {
      PC: resolve => require(["../views/Member.vue"], resolve),
      // PH: Member
    },
    children: [
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'userinfo',
        component: resolve => require(["../components/Member/userinfo.vue"], resolve),
      }, {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 会被渲染在 User 的 <router-view> 中
        path: 'userinfo2',
        component: resolve => require(["../views/Member.vue"], resolve),
      }
    ]
  },

  {
    path: '/About',
    name: 'About',
    components: {
      PC: resolve => require(["../views/About.vue"], resolve),
      // PH: About
    }
  },


  {
    path: '/Contact',
    name: 'Contact',
    components: {
      PC: resolve => require(["../views/Contact.vue"], resolve),
      // PH: Contact
    }
  },

  {
    path: '/MainProduct',
    name: 'MainProduct',
    components: {
      PC: resolve => require(["../views/MainProduct.vue"], resolve),
      // PH: MainProduct
    }
  },

  {
    path: '/SalesTeam',
    name: 'SalesTeam',
    components: {
      PC: resolve => require(["../views/SalesTeam.vue"], resolve),
      // PH: SalesTeam
    }
  },

  {
    path: '/Solution',
    name: 'Solution',
    components: {
      PC: resolve => require(["../views/Solution.vue"], resolve),
      // PH: Solution
    }
  },

  {
    path: '/News',
    name: 'News',
    components: {
      PC: resolve => require(["../views/News.vue"], resolve),
      // PH: MainBlog
    }
  },

  {
    path: '/CompanyNewsPage',
    name: 'CompanyNews',
    components: {
      PC: resolve => require(["../views/SecondViews/CompanyNewsPage.vue"], resolve),
    }
  },

  {
    path: '/NewsBlog',
    name: 'NewsBlog',
    components: {
      PC: resolve => require(["../views/SecondViews/NewsBlog"], resolve),
    }
  },
  {
    path: '/NewsBlog1',
    name: 'NewsBlog1',
    components: {
      PC: resolve => require(["../views/ThirdViews/NewsBlog1.vue"], resolve),
    }
  },
  {
    path: '/NewsBlog2',
    name: 'NewsBlog2',
    components: {
      PC: resolve => require(["../views/ThirdViews/NewsBlog2.vue"], resolve),
    }
  },
  {
    path: '/P53-article',
    components: {
      PC: resolve => require(["../components/SecondPage/ThirdPage/Article/P53ENBlog"], resolve),
    }
  },
  {
    path: '/labday-article',
    components: {
      PC: resolve => require(["../components/SecondPage/ThirdPage/Article/labday_west"], resolve),
    }
  },
  {
    path: '/ids-article',
    components: {
      PC: resolve => require(["../components/SecondPage/ThirdPage/Article/IDS_article"], resolve),
    }
  },
  {
    path: '/exocad-article',
    components: {
      PC: resolve => require(["../components/SecondPage/ThirdPage/Article/EXOCAD_article"], resolve),
    }
  },
  {
    path: '/UPCAM-article',
    components: {
      PC: resolve => require(["../components/SecondPage/ThirdPage/Article/UPCAM_article"], resolve),
    }
  },
  {
    path: '/CompanyActivitiesPage',
    name: 'CompanyActivities',
    components: {
      PC: resolve => require(["../views/SecondViews/CompanyActivitiesPage.vue"], resolve),
    }
  },
  // {
  //   path: '/MainExhibition',
  //   name: 'MainExhibition',
  //   components:{
  //     PC: MainExhibition,
  //     // PH: MainExhibition
  //    }
  // },

  {
    path: '/UP360P',
    name: 'UP360P',
    components: {
      PC: resolve => require(["../views/SecondViews/UP360P.vue"], resolve),
      // PH: UP360P
    }
  },
  {
    path: '/UP300P',
    name: 'UP300P',
    components: {
      PC: resolve => require(["../views/SecondViews/UP300P.vue"], resolve),
      // PH: UP300P
    }
  },
  {
    path: '/UP300E',
    name: 'UP300E',
    components: {
      PC: resolve => require(["../views/SecondViews/UP300E.vue"], resolve),
      // PH: UP300E
    }
  },
  {
    path: '/UP400',
    name: 'UP400',
    components: {
      PC: resolve => require(["../views/SecondViews/UP400.vue"], resolve),
      // PH: UP400
    }
  },
  {
    path: '/UPCAD',
    name: 'UPCAD',
    components: {
      PC: resolve => require(["../views/SecondViews/UPCAD.vue"], resolve),
      // PH: UPCAD
    }
  },
  {
    path: '/P4',
    name: 'P4',
    components: {
      PC: resolve => require(["../views/SecondViews/P4.vue"], resolve),
      // PH: P4
    }
  },
  {
    path: '/P41',
    name: 'P41',
    //路由别名
    alias: '/C41',
    components: {
      PC: resolve => require(["../views/SecondViews/P41.vue"], resolve),
      // PH: P41
    }
  },
  {
    path: '/P5',
    name: 'P5',
    components: {
      PC: resolve => require(["../views/SecondViews/P5.vue"], resolve),
      // PH: P5
    }
  },
  {
    path: '/P52',
    name: 'P52',
    components: {
      PC: resolve => require(["../views/SecondViews/P52.vue"], resolve),
      // PH: P5
    }
  },
  {
    path: '/UP560',
    name: 'UP560',
    components: {
      PC: resolve => require(["../views/SecondViews/UP560.vue"], resolve),
      // PH: P5
    }
  },

  {
    path: '/UPCAM',
    name: 'UPCAM',
    components: {
      PC: resolve => require(["../views/SecondViews/UPCAM.vue"], resolve),
      // PH: P5
    }
  },

  {
    path: '/P53',
    name: 'P53',
    components: {
      PC: resolve => require(["../views/SecondViews/P53.vue"], resolve),
      // PH: P53
    }
  },

]


const router = new VueRouter({
  mode: "history",
  routes,
})


router.beforeEach((to, from, next) => {
  // {
  let tokenStr = window.sessionStorage.getItem('token');
  //当访问某个页面校验是否登录
  // if(to.path=='/Member'){
  //   if(tokenStr)
  //   {
  //     next()
  //   }
  //   else
  //   {
  //     next('/Login')
  //   }
  // }
  // //任何页面都放行
  // else{
  //   next();
  // }
  if (!tokenStr) {
    if (to.path == '/Member' || to.path == '/Member/userinfo') {
      next('/Login')
      alert('请先登录')
    } else next()
  }
  //任何页面都放行
  else if (to.path == '/Login' || to.path == '/Member') {
    next('/Member/userinfo');
  } else next()
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router
