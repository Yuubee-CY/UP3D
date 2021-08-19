module.exports = {
  allinfo: {
    //导航栏
    guide: {
      guide_list: [{title: '首页', list: {}, url: '/'},
        {
          title: '云甲科技',
          list: [
            {name: '关于我们', url: '/About'},
            {name: '联系我们', url: '/Contact'},
            {name: '销售团队', url: '/SalesTeam'}
          ], url: ''
        },
        {
          title: '产品',
          list: [{name: '齿科扫描仪', url: ''}, {name: '义齿设计软件', url: ''}, {name: '排版软件', url: ''}, {
            name: '智能雕刻机',
            url: ''
          }],
          url: '/MainProduct'
        },
        {title: '解决方案', list: [], url: ''},
        {title: '资讯', list: [], url: '/News'},
        {title: '技术支持', list: [], url: ''},
        {title: '登录', list: [], url: '/Login'},
        {title: '|', list: [], url: ''},
        // { title: '中文', list: [], url: '' },
      ],

      guide_pic: {
        guide_scanner: [
          {imgurl: require('../img/PC/index/productlist/UP560.png'), url: '/UP560', name: 'UP560'},
          {imgurl: require('../img/PC/index/productlist/UP360p_CN.png'), url: '/UP360P', name: 'UP360+'},
          {imgurl: require('../img/PC/index/productlist/UP300p.png'), url: '/UP300P', name: 'UP300+'},
          {imgurl: require('../img/PC/index/productlist/UP300e.png'), url: '/UP300E', name: 'UP300e'},
        ],
        guide_UPCAD: [
          {imgurl: require('../img/PC/index/productlist/UPCAD.png'), url: '/UPCAD', name: 'UPCAD'},
        ],

        guide_UPCAM: [
          {imgurl: require('../img/PC/index/productlist/UPCAM.png'), url: '/UPCAM', name: 'UPCAM'},
        ],

        guide_Milling_machine: [
          {imgurl: require('../img/PC/index/productlist/P52_CN.png'), url: '/P52', name: 'P52'},
          // { imgurl: require('../img/PC/index/productlist/P5.png'), url: '/P5', name: 'P5' },
          // { imgurl: require('../img/PC/index/productlist/P4.png'), url: '/P4', name: 'P4' },
        ],
      },

      Lang: [
        {id: '0', text: 'EN'},
        {id: '1', text: '中文'}
      ],
      Lang_self: '个人中心'
    },
    //新导航栏(正在使用)
    guide2: {
      guide_list: [
        {title: '首页', list: [], url: '/'},
        {
          title: '云甲科技',
          list:
            [
              {name: '关于我们', url: '/About'},
              {name: '联系我们', url: '/Contact'}
            ],
          url: ''
        },
        {title: '产品', list: [], url: '/MainProduct'},
        {title: '解决方案', list: [], url: '/Solution'},
        {
          title: '资讯',
          list: [
            {name: '最新资讯', url: '/CompanyNewsPage'},
            {name: '最新活动', url: '/CompanyActivitiesPage'}
          ],
          url: '/News'
        },
        // {title: '技术支持', list: [], url: ''},
        // {title: '登陆', list: [], url: '/Login'},
        // {title: '|', list: [], url: ''},
      ],
      // login_list: [
      //   {title: '登录', url: '/Login'}
      // ],
      about_login: [
        {
          title: '语言',
          list: [
            {name: 'EN', url: ''},
            {name: '中文', url: ''},
            {name: 'ES', url: 'http://new.up3d.cn/ES/Index.html'},
            {name: 'RU', url: 'http://new.up3d.cn/RU/Index.html'},
          ],
          url: ''
        },
      ],

      seconde_guide: [
        {
          id: 'Dental_Scanner', name: '齿科扫描仪', url: '', list: [
            {imgurl: require('../img/PC/index/productlist/UP400_CN.png'), url: '/UP400', name: 'UP400'},
            {imgurl: require('../img/PC/index/productlist/UP560.png'), url: '/UP560', name: 'UP560'},
            {imgurl: require('../img/PC/index/productlist/UP360p_CN.png'), url: '/UP360P', name: 'UP360+'},
            {imgurl: require('../img/PC/index/productlist/UP300p.png'), url: '/UP300P', name: 'UP300+'},

          ],
        },

        {
          id: 'UPCAD', name: '义齿设计软件', url: '',
          list: [
            {imgurl: require('../img/PC/index/productlist/UPCAD.png'), url: '/UPCAD', name: 'UPCAD'},
          ],
        },

        {
          id: 'UPCAM', name: '排版软件', url: '',
          list: [
            {imgurl: require('../img/PC/index/productlist/UPCAM.png'), url: '/UPCAM', name: 'UPCAM'},
          ],
        },

        {
          id: 'Milling_Machine', name: '智能雕刻机', url: '',
          list: [
            {imgurl: require('../img/PC/index/productlist/P53_CN.png'), url: '/P53', name: 'P53'},
            {imgurl: require('../img/PC/index/productlist/P41_CN.png'), url: '/C41', name: 'C41'},
            {imgurl: require('../img/PC/index/productlist/P52_CN.png'), url: '/P52', name: 'P52'},
            // { imgurl: require('../img/PC/index/productlist/P5.png'), url: '/P5', name: 'P5' },
            // { imgurl: require('../img/PC/index/productlist/P4.png'), url: '/P4', name: 'P4' },
          ],
        },

      ],
      Lang_self: '个人中心'
    },

    //移动端菜单栏
    guidePH: {
      guide_list: [
        {title: '首页', list: {}, url: '/', className: ''},
        {
          title: '云甲科技',
          list:
            [
              {name: '关于我们', url: '/About'},
              {name: '联系我们', url: '/Contact'}
            ],
          url: '',
          className: 'cur'
        },
        {title: '产品', list: [], url: '/MainProduct', className: ''},
        {title: '解决方案', list: [], url: '/Solution', className: ''},
        {
          title: '资讯',
          list: [
            // {name: '最新资讯',url: '/CompanyNewsPage'},
            // {name: '最新资讯',url: '/NewsBlog'}
          ],
          url: '/News',
          // className: 'cur'
        },
      ],
      // login_list: [
      //   {title: '登录', url: '/Login', className: ''}
      // ],
      about_login: [
        {
          title: '语言',
          list: [
            {name: 'EN', url: ''},
            {name: '中文', url: ''},
            {name: 'ES', url: 'http://new.up3d.cn/ES/Index.html'},
            {name: 'RU', url: 'http://new.up3d.cn/RU/Index.html'},
          ],
          url: '',
          className: 'cur'
        },
      ],

      seconde_guide: {
        nav_title: '产品',
        nav_content: [
          {
            id: 'Dental_Scanner', name: '齿科扫描仪', url: '', list: [
              {imgurl: require('../img/PC/index/productlist/UP400_CN.png'), url: '/UP400', name: 'UP400'},
              {imgurl: require('../img/PC/index/productlist/UP560.png'), url: '/UP560', name: 'UP560'},
              {imgurl: require('../img/PC/index/productlist/UP360p_CN.png'), url: '/UP360P', name: 'UP360+'},
              {imgurl: require('../img/PC/index/productlist/UP300p.png'), url: '/UP300P', name: 'UP300+'},
            ],
          },

          {
            id: 'UPCAD', name: '义齿设计软件', url: '',
            list: [
              {imgurl: require('../img/PC/index/productlist/UPCAD.png'), url: '/UPCAD', name: 'UPCAD'},
            ],
          },

          {
            id: 'UPCAM', name: '排版软件', url: '',
            list: [
              {imgurl: require('../img/PC/index/productlist/UPCAM.png'), url: '/UPCAM', name: 'UPCAM'},
            ],
          },

          {
            id: 'Milling_Machine', name: '智能雕刻机', url: '',
            list: [
              {imgurl: require('../img/PC/index/productlist/P53_CN.png'), url: '/P53', name: 'P53'},
              {imgurl: require('../img/PC/index/productlist/P41_CN.png'), url: '/C41', name: 'C41'},
              {imgurl: require('../img/PC/index/productlist/P52_CN.png'), url: '/P52', name: 'P52'},
              // { imgurl: require('../img/PC/index/productlist/P5.png'), url: '/P5', name: 'P5' },
              // { imgurl: require('../img/PC/index/productlist/P4.png'), url: '/P4', name: 'P4' },
            ],
          },
        ],
      },
      Lang_self: '个人中心'
    },

    //首页
    index: {
      metaInfo:{
        title: '齿科3D扫描仪_义齿设计软件_义齿排版软件_智能义齿雕刻机_口内扫描仪 - 云甲科技', // set a title
        meta: [
          {                 // set meta
            name: 'keywords',
            content: '齿科扫描仪,口内扫描仪,智能义齿雕刻机,义齿设计软件,义齿排版软件,齿科数字化管理,齿科数字化,云甲科技'
          },
          {
            name: 'description',
            content: '云甲科技首家独立自主研发义齿科技公司，自2012年专注齿科行业利用数字化科技研发出齿科全套的CAD，CAM齿科设计软件及齿科硬件设备；从研发，生产，销售。主要产品为齿科3D扫描仪、桌面3D齿科扫描仪、口内扫描仪、义齿设计软件、义齿排版软件、齿科雕刻机，智能义齿雕刻机等；'
          },
          {
            property: 'og:title',
            content: '云甲'
          },
          {
            property: 'og:type',
            content: 'website'
          },
          {
            property: 'og:url',
            content: 'https://www.up3d.cn/'
          },
          {
            property: 'og:image',
            content: 'http://up3d.cn/favicon.ico'
          }
        ]
      },
      banner: [
        //技工端全套系统
        {
          imgurl: require('../../assets/img/PC/index/banner-Full_CN.jpg'),
          text: '技工端全套系统',
          more: '更多',
          url: '/MainProduct',
          hightlight: ''
        },
        //P53
        {
          imgurl: require('../img/PC/index/P53-CN.jpg'),
          text: '五轴智能义齿雕刻机',
          more: '更多',
          url: '/P53',
          hightlight: 'P53'
        },
        //UP400
        {
          imgurl: require('../img/PC/index/UP400-CN.png'),
          text: '高速模型扫描仪 新一代“清货神器”',
          more: '更多',
          url: '/UP400',
          hightlight: 'UP400'
        },
        //P41
        {
          imgurl: require('../img/PC/index/P41-CN.jpg'),
          text: '四轴湿切智能磨削机',
          more: '更多',
          url: '/C41',
          hightlight: 'C41'
        },
      ],

      // mid_title: ['扫描', '设计', '排版', '切削'],
      mid_title: {
        title: ['扫描', '设计', '排版', '加工'],
        HTitle: '技工间规模化智能生产系统'
      },

      //产品list
      products: {
        title: '产品',
        product:
          [
            {
              type: '齿科扫描仪 ',
              info: [
                {
                  name: 'UP400',
                  pic: require('../img/PC/index/productlist/UP400_CN.png'),
                  url: '/UP400',
                  video: 'Video'
                },
                {
                  name: 'UP560',
                  pic: require('../img/PC/index/productlist/UP560.png'),
                  url: '/UP560',
                  video: 'Video'
                },
                {
                  name: 'UP300+',
                  pic: require('../img/PC/index/productlist/UP300p.png'),
                  url: '/UP300P',
                  video: 'Video'
                }
              ]
            },
            {
              type: '义齿软件', info: [
                {
                  name: 'UPCAD',
                  pic: require('../img/PC/index/productlist/UPCAD.png'),
                  url: '/UPCAD',
                  video: 'Video'
                },
                {
                  name: 'UPCAM',
                  pic: require('../img/PC/index/productlist/UPCAM.png'),
                  url: '/UPCAM',
                  video: 'Video'
                }
              ]
            },
            {
              type: '智能切削机',
              info: [
                {
                  name: 'P53',
                  pic: require('../img/PC/index/productlist/P53_CN.png'),
                  url: '/P53',
                  video: 'Video'
                },
                {
                  name: 'C41',
                  pic: require('../img/PC/index/productlist/P41_CN.png'),
                  url: '/C41',
                  video: 'Video'
                },
                {
                  name: 'P52',
                  pic: require('../img/PC/index/productlist/P52_CN.png'),
                  url: '/P52',
                  video: 'Video'
                }
              ]
            }
          ],
        more: '更多',
        video: '视频',
      },


      indexblog: {
        title: '博客',
        blog_Card: [
          {
            bigTitle: '博客',
            title: '云甲干货 | exocad智能排牙',
            p: 'exocad AI实时解剖形态变形，每次移动时，牙齿的解剖形态都会实时根据对颌调整，从而彻底改变您的设计过程，节省更多排牙的时间。',
            p2: '助力修复设计到达全新高度，显著提高您的生产效率。',
            more: '更多',
            url: 'https://mp.weixin.qq.com/s/uCHK_nxy5d0uorCtdbGh9w',
            imgUrl: require('../img/PC/index/blog/CN/blog_pic1.png'),
            LinkTarget: '_blank'
          },
          {
            bigTitle: '博客',
            title: '云甲干货 | 支架一步到位',
            p: '可摘局部义齿数字化一步制作是数字化活动支架的衍生方式。通过数字化，将活动支架、义齿、牙龈同步设计，并同时加工，一次完成。',
            p2: '无需按照传统的复杂制作流程步骤，可以有效的提高设备资源的利用率和生产效率，加快数字化的转型。',
            more: '更多',
            url: 'https://mp.weixin.qq.com/s/ToVZ8_mb0XRt-fTJ02pZow',
            imgUrl: require('../img/PC/News/CompanyNew_Blog/exocad_article/nav_cn.jpg'),
            LinkTarget: '_blank'
          },
        ]
      },
      indexexhibition: {
        title: '展会活动',
        exh_Card: [
          {
            bigTitle: '展会活动',
            title: '德国IDS国际牙科展', p: '德国科隆展，我们不见不散~',
            p2: '', more: '更多', t: '9.22-25', t2: '9:00-17:00',
            url: '',
            imgUrl: require('../img/PC/index/exh/CN/IDS.jpg')
          },
          {
            bigTitle: '云甲线下培训会',
            title: '云甲2021齿科数字化实操培训会', p: '',
            p2: '', more: '更多', t: '7月-9月', t2: '9:00-17:00',
            url: 'https://mp.weixin.qq.com/s/zDq3r8DZ3CSM4lD3W9Kd0g',
            imgUrl: require('../img/PC/index/exh/CN/exh_pic2.png'),
            LinkTarget: '_blank'
          },
          {
            bigTitle: '展会活动',
            title: '北京口腔展', p: '全新产品发布',
            p2: '', more: '更多', t: '6.9-6.11', t2: '9:00-17:00',
            url: 'https://mp.weixin.qq.com/s/5G3V3SX0qWQWuKZfhB3psg',
            imgUrl: require('../img/PC/index/exh/CN/exh_pic3.png'),
            LinkTarget: '_blank'
          },
        ]
      },
    },
    //移动端index
    indexPH: {
      banner: [
        //技工端全套系统
        {
          imgurl: require('../img/PC/index/banner-full-PH.png'),
          text: '技工端全套系统',
          more: '更多',
          url: '/MainProduct',
          hightlight: ''
        },
        //P53
        {
          imgurl: require('../img/PC/index/banner-P53-PH.png'),
          text: '五轴智能义齿雕刻机',
          more: '更多',
          url: '/P53',
          hightlight: 'P53'
        },
        //UP400
        {
          imgurl: require('../img/PC/index/banner-UP400-PH.png'),
          text: '高速模型扫描仪 新一代“清货神器”',
          more: '更多',
          url: '/UP400',
          hightlight: 'UP400'
        },
        //P41
        {
          imgurl: require('../img/PC/index/banner-P41-PH.png'),
          text: '四轴湿切智能磨削机',
          more: '更多',
          url: '/C41',
          hightlight: 'C41'
        },
      ],
    },
    //关于我们页面
    About: {
      metaInfo:{
        title: '关于云甲科技', // set a title
        meta: [
          {                 // set meta
            name: 'keywords',
            content: '云甲科技,云甲,UP3D'
          },
          {                 // set meta
            name: 'description',
            content: '云甲科技中国首家独立自主研发义齿设计软件公司，目前是中国最为优秀的义齿设备开发商；云甲科技总部坐落在深圳西丽，研发中心位于杭州，云甲团队初建于2012年至今专注齿科软件，硬件设备。\n' +
              '云甲致力于为全球齿科市场提供最优性价比的数字化解决方案！主要产品为齿科3D扫描仪，齿科雕刻机，CAD设计软件和CAM排版软件研发和生产，在国内获得多项发明专利和软件著作权。'
          }
        ]
      },
      title: ['欢迎 - 进入云甲科技的世界', '数字技术改善生活'],
      body2: {
        card1: {
          title: '公司简介', img: require('../img/PC/Commen/aoubt_company.png'),
          message: [
            // '愿景/初衷：数字改善生活',
            '云甲科技是中国首家独立自主研发义齿计算机辅助设计软件的公司' +
            '作为目前中国最优秀的义齿设计软件开发商，云甲专注于齿科扫描仪和CAD/CAM齿科修复软件的研发和制造，' +
            '并已获得多项发明专利和软件著作权。云甲科技总部位于深圳西丽，研发中心位于杭州。',

            '云甲团队自2012年起对齿科CAD/CAM设计技术进行研发，' +
            '多年来的潜心研究让云甲在齿科CAD/CAM技术研发上有了飞速进展与突破。' +
            '云甲科技致力于为全球齿科市场提供最优性价比的数字化解决方案！'
          ],
        },
        card2: {
          title: '关于云甲', img: require('../img/PC/Commen/aoubt_company.png'), message: ['深圳云甲科技，成立于2014年',
            '中国首家自主研发设计软件，专注于三维成像产品，扫描仪的研发和销售。目前市场占有率全国第二。',
            '有自主研发和生产的实力，整合全套齿科数字化系统的生产和销售，致力于研发数字化解决方案。'],
        }
      },
      body3: {
        cardinfo: [
          {imgurl: require('../img/PC/About/body_scanner_icon.png'), url: '/UP400', name: '扫描'},
          {imgurl: require('../img/PC/About/body_design_icon.png'), url: '/UPCAD', name: '义齿设计'},
          {imgurl: require('../img/PC/About/body_Nesting_icon.png'), url: '/UPCAM', name: '排版'},
          {imgurl: require('../img/PC/About/body_milling_icon.png'), url: '/P53', name: '切削'}
        ],
        bgimg: [
          require('../img/PC/About/body_pic2_scanner.jpg'),
          require('../img/PC/About/body_pic2_design.jpg'),
          require('../img/PC/About/body_pic2_nesting.jpg'),
          require('../img/PC/About/body_pic2_milling.jpg')
        ],
        bgimgPH: [
          require('../img/PC/About/body_pic2_scanner-PH.png'),
          require('../img/PC/About/body_pic2_design-PH.png'),
          require('../img/PC/About/body_pic2_nesting-PH.png'),
          require('../img/PC/About/body_pic2_milling-PH.png')
        ]
      },
      body4: {
        title: '团队',
        weTeam: [
          // {
          //   info: [
          //     {title: '姓名', data: 'YD Liu'},
          //     {title: '职位', data: '营销中心总监'}
          //   ],
          //   imgUrl: require('../img/PC/About/team_pic/YD.jpg')
          // },
          {
            info: [
              {title: '姓名', data: 'Ryan'},
              {title: '职位', data: '外销总监'}
            ],
            imgUrl: require('../img/PC/About/team_pic/Ryan.jpg')
          },
          {
            info: [
              {title: '姓名', data: '门大淋'},
              {title: '职位', data: '国内大区销售经理'}
            ],
            imgUrl: require('../img/PC/About/team_pic/mendalin.jpg')
          },
          {
            info: [
              {title: '姓名', data: 'Will'},
              {title: '职位', data: '产品经理'}
            ],
            imgUrl: require('../img/PC/About/team_pic/will.jpg')
          },
          {
            info: [
              {title: '姓名', data: '邓玥玥'},
              {title: '职位', data: '国内销售经理'}
            ],
            imgUrl: require('../img/PC/About/team_pic/Yolanda.jpg')
          },
          {
            info: [
              {title: '姓名', data: 'Gary'},
              {title: '职位', data: '动画设计师'}
            ],
            imgUrl: require('../img/PC/About/team_pic/Gary.jpg')
          },
          {
            info: [
              {title: '姓名', data: 'Lili'},
              {title: '职位', data: '活动策划师'}
            ],
            imgUrl: require('../img/PC/About/team_pic/Lili.jpg')
          },
          {
            info: [
              {title: '姓名', data: 'Niro'},
              {title: '职位', data: '技术经理'}
            ],
            imgUrl: require('../img/PC/About/team_pic/Niro.jpg')
          },
          {
            info: [
              {title: '姓名', data: '张玉鑫'},
              {title: '职位', data: '技术支持'}
            ],
            imgUrl: require('../img/PC/About/team_pic/zhangyuxin.jpg')
          }
        ],
      },
      body5: {
        title: '我们的实力',
        list: ['全球使用量', '销售国家及地区', '全球经销商', '团队人数'],
      },
      body6: {
        title: '展望未来，我们相信<br>数字技术改善生活',
        img: require('../img/PC/About/body_pic2.png'),
      },
    },
    //联系我们页面
    Contact: {
      body1: {text: 'Hi', text1: '联系我们'},
      body2: {
        card1: {
          title: '咨询联系',
          message: '深圳云甲科技致力于研发和生产数字化齿科一站式的产品及服务，关于云甲产品的所有问题，都可联系我们！',
          infor: [
            {
              title: '地址：',
              informessage: '深圳留仙大道',
              iconUrl: require('../img/PC/Contact/address_icon.png'),
              qrCode: false
            },
            {
              title: '电话：',
              informessage: '+86-755-26983202',
              iconUrl: require('../img/PC/Contact/phone_icon.png'),
              qrCode: false
            },
            {
              title: '邮箱：',
              informessage: 'info@up3d.cn',
              iconUrl: require('../img/PC/Contact/email_icon.png'),
              qrCode: false
            },
            {
              title: '微信公众号：',
              informessage: '深圳云甲科技',
              iconUrl: require('../img/PC/Contact/wx_icon.png'),
              iconClassName: 'wx-query',
              qrCode: true
            },
          ],
        },
        card2: {
          title: '购买联系',
          message: ['如果您想要购买我们的产品，请留下您的联系方式在以下表格，我们会根据您所在的区域，有专人联系您。'],
        },
        form: {
          Name: '*姓名',
          Contant: '*留言信息',
          Phone: '*电话',
          Email: '*邮箱',
          Company: '*公司名称',
        },
        submit: '提交'
      },
      body3: {
        title: '数字技术改善生活'
      }
    },
    //销售团队页面
    SalesTeam: {
      title: '销售团队',
      midtext: '如果你有购买意愿请联系以下区域的销售经理',
      cardinfo: [
        {header: '东南亚', name: '龙', phone: '+86 13480184747', email: 'dragon@up3d.cn'},
        {header: '北美啥的', name: '珍', phone: '+86 13798433969', email: 'Jen@up3d.cn'},
        {header: '中东', name: '梦', phone: '+86 13423746896', email: 'ryan@up3d.cn'},
      ]
    },
    //个人页面
    Member: {
      userinfo: {
        form: [
          {name: '姓名', alarm: '请输入邮箱', type: 'readonly'},
          {name: '邮箱', alarm: '请输入邮箱', type: 'readonly'},
          {name: '电话', alarm: '请输入', type: 'readonly'},
          {name: '公司', alarm: '请输入', type: 'readonly'},
          {name: '职位', alarm: '请输入', type: 'readonly'},
          {name: '国家', alarm: '请输入密码', type: 'readonly'},
          {name: '城市', alarm: '请输入密码', type: 'readonly'},
        ],
        error: {empty: '请输入', email_exit: '该邮箱没有注册', password_notright: '密码不正确', type_error: '格式有误'},
        button: ['编辑', '保存', '取消']
      }

    },
    //登陆页面
    Login: {
      title: ['登陆', '注册'],
      form: [{name: '邮箱', alarm: '请输入邮箱', type: ''},
        {name: '密码', alarm: '请输入密码', type: 'password'}
      ],
      error: {empty: '请输入', email_exit: '该邮箱没有注册', password_notright: '密码不正确', type_error: '格式有误'},
      Forget: '忘记密码？',
      buttom: '登录'
    },
    //注册页面
    Register: {
      title: ['登陆', '注册'],
      form: [{name: '邮箱', alarm: '请输入邮箱'},
        {name: '手机', alarm: '请输入手机号'},
        {name: '密码', alarm: '请输入密码'},
        {name: '确认密码', alarm: '请再次输入密码'},
      ],
      error: {empty: '请输入', email_exit: '邮箱已被注册', repassword_notright: '密码不正确', type_error: '格式有误'},
      buttom: '提交'

    },
    //忘记密码页面
    Forget: {
      title: ['重置密码'],
      form: [{name: '邮箱', alarm: '请输入邮箱'},
        {name: '邮箱验证码', alarm: '请输入验证码'},
        {name: '密码', alarm: '请输入密码'},
        {name: '确认密码', alarm: '请再次输入密码'},
      ],
      error: {
        empty: '请输入',
        email_not_exit: '邮箱不存在',
        type_error: 'type_error',
        repassword_notright: '密码不正确',
        code_error: 'code error'
      },
      getcode: '获取验证码',
      buttom: '提交'
    },

    //解决方案
    Solution: {
      banner: {
        imgSrc: require('../img/PC/Solution/banner.gif')
      },
      mid_title: {
        HTitle: '技工间规模化智能生产系统'
      },
      main: {
        cardList: [
          {
            title: '氧化锆',
            info: [
              require('../img/PC/Solution/UP400.jpg'),
              require('../img/PC/Solution/UPCAD-P53.jpg'),
              require('../img/PC/Solution/UPCAM-P53.jpg'),
              require('../img/PC/Solution/P53.jpg'),
            ]
          },
          {
            title: '玻璃陶瓷',
            info: [
              require('../img/PC/Solution/UP400_2.jpg'),
              require('../img/PC/Solution/UPCAD-P41.jpg'),
              require('../img/PC/Solution/UPCAM-P41.jpg'),
              require('../img/PC/Solution/P41.jpg'),
            ]
          },
        ]
      },
      media: {
        videoSrc: require('../../assets/video/P53/P53_CN.mp4'),
        videoBg: require('../../assets/img/PC/Solution/video_bg.jpg')
      }
    },

    //新闻页面
    News: {
      banner: {
        time: '',
        title: '云甲科技最新资讯',
        imgUrl: require('../img/PC/News/banner_PC.png')
      },
      //news_list并没有用到，目前/News页推荐咨询获取到的是CompanyNews中的前两条
      news_list: {
        title: '',
        more: {message: '更多内容', href: ''},
        news_card: [
          {
            time: '',
            name: '',
            imgUrl: '',
            href: '',
            LinkTarget: ''
          },
        ]
      },
      //active_list并没有用到，目前/News页推荐活动获取到的是CompanyActivities中的前两条
      active_list: {
        title: '',
        more: {message: '更多内容', href: ''},
        active_card: [
          {
            time: '',
            name: '',
            imgUrl: '',
            href: ''
          }
        ]
      }
    },
    //最新资讯（CompanyNews）
    CompanyNews: {
      banner: {
        time: '',
        title: '云甲科技最新资讯',
        imgUrl: require('../img/PC/News/banner_PC.png')
      },
      news_list: {
        title: '最新资讯',
        more: {message: '更多内容', href: ''},
        news_card: [
          {
            time: '\&nbsp',
            name: '云甲干货 | exocad智能排牙',
            imgUrl: require('../img/PC/index/blog/CN/blog_pic1.png'),
            url: 'https://mp.weixin.qq.com/s/uCHK_nxy5d0uorCtdbGh9w',
            LinkTarget: '_blank'
          },
          {
            time: '\&nbsp',
            name: '云甲干货 | 支架一步到位',
            imgUrl: require('../img/PC/News/CompanyNew_Blog/exocad_article/nav_cn.jpg'),
            url: 'https://mp.weixin.qq.com/s/ToVZ8_mb0XRt-fTJ02pZow',
            LinkTarget: '_blank'
          },
        ]
      },
    },
    //   /NewsBlog
    NewsBlog: {
      banner: {
        link1: '资讯',
        link2: '最新资讯',
        link2Url: '/CompanyNewsPage',
        title: '云甲科技新品发布C41四轴湿切磨削机',
        sort: '分类？',
        author: '云甲科技',
        date: '2021年6月9日',
        imgUrl: require('../img/PC/Product/banner_PC.png'),
        imgUrlPH: require('../img/PC/Product/banner-PH.jpg')
      },
      body2: {
        news_card: [
          {
            time: '',
            name: '',
            imgUrl: '',
            href: ''
          }
        ]
      }
    },
    //   /NewsBlog1
    NewsBlog1: {
      banner: {
        link1: '资讯',
        link2: '最新资讯',
        link2Url: '/CompanyNewsPage',
        title: '云甲科技新品发布C41四轴湿切磨削机',
        sort: '分类？',
        author: '云甲科技',
        date: '2021年6月9日',
        imgUrl: require('../img/PC/Product/banner_PC.png'),
        imgUrlPH: require('../img/PC/Product/banner-PH.jpg')
      },
      body2: {
        news_card: [
          {
            time: '',
            name: '',
            imgUrl: '',
            href: ''
          }
        ]
      }
    },

    //    /NewsBlog2
    NewsBlog2: {
      banner: {
        link1: '活动',
        link2: '最新活动',
        link2Url: '/CompanyActivitiesPage',
        title: 'About UP3D',
        sort: 'CompanyNews？',
        author: 'UP3D',
        date: '2021-6-9',
        imgUrl: require('../img/PC/Product/banner_PC.png'),
        imgUrlPH: require('../img/PC/Product/banner-PH.jpg')
      },
      body2: {
        news_card: [
          {
            time: '',
            name: '',
            imgUrl: '',
            href: ''
          }
        ]
      }
    },

    //    /P53ENBlog
    P53ENBlog: {
      banner: {
        link1: 'News',
        link2: 'CompanyNews',
        link2Url: '/CompanyNewsPage',
        title: 'Saving 35% utilization rate of materials-P53',
        sort: 'News',
        author: 'UP3D',
        date: '2021-6-9',
        imgUrl: require('../img/PC/News/CompanyNew_Blog/P53ENBlog/banner.jpg'),
        imgUrlPH: require('../img/PC/News/CompanyNew_Blog/P53ENBlog/banner.jpg')
      },
      body: {
        userImg: require('../../assets/img/PC/News/user_img1.png'),
        msgName: 'UP3D',
        msgRef: '',
        msgDate: '2021-08-09'
      },
      body2: {}
    },
    //    /labday
    labday: {
      banner: {
        link1: 'News',
        link2: 'CompanyNews',
        link2Url: '/CompanyNewsPage',
        title: 'labday west',
        sort: 'News',
        author: 'UP3D',
        date: 'August 27-28',
        imgUrl: require('../img/PC/News/CompanyNew_Blog/labday/banner.png'),
        imgUrlPH: require('../img/PC/News/CompanyNew_Blog/labday/banner.png')
      },
      body: {
        userImg: require('../../assets/img/PC/News/user_img1.png'),
        msgName: 'UP3D',
        msgRef: '',
        msgDate: '2021-08-09'
      },
      body2: {}
    },
    //    /ids_article
    ids_article: {
      banner: {
        link1: 'News',
        link2: 'CompanyNews',
        link2Url: '/CompanyNewsPage',
        title: 'Join us at IDS 2021 – on-site or online!',
        sort: 'News',
        author: 'UP3D',
        date: '22-25.09.2021',
        imgUrl: require('../img/PC/News/CompanyNew_Blog/ids_article/banner.jpg'),
        imgUrlPH: require('../img/PC/News/CompanyNew_Blog/ids_article/banner.jpg')
      },
      body: {
        userImg: require('../../assets/img/PC/News/user_img1.png'),
        msgName: 'UP3D',
        msgRef: '',
        msgDate: '2021-08-09'
      },
      body2: {}
    },
    //    /exocad_article
    exocad_article: {
      banner: {
        link1: 'News',
        link2: 'CompanyNews',
        link2Url: '/CompanyNewsPage',
        title: 'One-step digital production of partial framework -- exocad',
        sort: 'News',
        author: 'UP3D',
        date: 'July 1st',
        imgUrl: require('../img/PC/News/CompanyNew_Blog/exocad_article/banner.png'),
        imgUrlPH: require('../img/PC/News/CompanyNew_Blog/exocad_article/banner.png')
      },
      body: {
        userImg: require('../../assets/img/PC/News/user_img1.png'),
        msgName: 'UP3D',
        msgRef: '',
        msgDate: '2021-08-09'
      },
      body2: {}
    },
    //    /UPCAM_article
    UPCAM_article: {
      banner: {
        link1: 'News',
        link2: 'CompanyNews',
        link2Url: '/CompanyNewsPage',
        title: 'UP3D Nesting Software Upgrade',
        sort: 'News',
        author: 'UP3D',
        date: '18.08.2021',
        imgUrl: require('../img/PC/News/CompanyNew_Blog/UPCAM_article/banner.jpg'),
        imgUrlPH: require('../img/PC/News/CompanyNew_Blog/UPCAM_article/banner.jpg')
      },
      body: {
        userImg: require('../../assets/img/PC/News/user_img1.png'),
        msgName: 'UP3D',
        msgRef: '',
        msgDate: '2021-08-09'
      },
      body2: {}
    },
    //最新活动(CompanyActivities)
    CompanyActivities: {
      banner: {
        time: '',
        title: '云甲科技最新资讯',
        imgUrl: require('../img/PC/News/banner_PC.png')
      },
      active_list: {
        title: '云甲最新活动',
        more: {message: '更多内容', href: ''},
        active_card: [
          {
            time: '德国IDS国际牙科展',
            name: '德国科隆展，我们不见不散~',
            imgUrl: require('../img/PC/index/exh/CN/IDS.jpg'),
            url: '',
            LinkTarget: ''
          },
          {
            time: '云甲线下培训会',
            name: '云甲2021齿科数字化实操培训会',
            imgUrl: require('../img/PC/index/exh/CN/exh_pic2.png'),
            url: 'https://mp.weixin.qq.com/s/zDq3r8DZ3CSM4lD3W9Kd0g',
            LinkTarget: '_blank'
          },
          {
            time: '北京口腔展',
            name: '全新产品发布',
            url: 'https://mp.weixin.qq.com/s/5G3V3SX0qWQWuKZfhB3psg',
            imgUrl: require('../img/PC/index/exh/CN/exh_pic3.png'),
            LinkTarget: '_blank'
          },
        ]
      }
    },
    //产品主页
    MainProduct: {
      banner: {
        title: '----UPCAM',
        content: 'Dental CAM Software',
        imgUrl: require('../img/PC/Product/banner_PC.png'),
        imgUrlPH: require('../img/PC/Product/banner-PH.jpg')
      },
      body1: {
        big_title: '齿科扫描仪',
        card: [
          {
            small_title: 'UP400',
            content1: '高速模型扫描仪',
            content2: '',
            bt1: '了解更多',
            url1: '/UP400',
            bt2: '现在购买',
            url2: '/Contact',
            img: require('../img/PC/index/productlist/UP400_CN.png')
          },
          {
            small_title: 'UP560',
            content1: '国际首款未分模扫描仪',
            content2: '360°全面扫描',
            bt1: '了解更多',
            url1: '/UP560',
            bt2: '现在购买',
            url2: '/Contact',
            img: require('../img/PC/index/productlist/UP560.png')
          },

        ],
      },
      body2: {
        big_title: '设计软件',
        content1: 'UPCAD',
        content2: '中国首款专为牙科技师定制的义齿设计软件，操作简单，易上手。',
        bt1: '了解更多',
        url1: '/UPCAD',
        bt2: '',
        url2: '/Contact',
        img: require('../img/PC/Product/body_pic2.png')
      },

      body3: {
        big_title: '排版软件',
        content1: 'UPCAM',
        content2: '云甲科技自主研发的义齿排版软件，简单易用。',
        bt1: '了解更多',
        url1: '/UPCAM',
        bt2: '',
        url2: '/Contact',
        img: require('../img/PC/Product/body_pic3_1.png')
      },

      body4: {
        big_title: '切削',
        card: [
          {
            small_title: 'P53',
            content1: '五轴智能雕刻机',
            content2: '干切',
            bt1: '了解更多',
            url1: '/P53',
            bt2: '现在购买',
            url2: '/Contact',
            img: require('../img/PC/index/productlist/P53_CN.png')
          },
          {
            small_title: 'C41',
            content1: '四轴智能磨削机',
            content2: '湿切',
            bt1: '了解更多',
            url1: '/C41',
            bt2: '现在购买',
            url2: '/Contact',
            img: require('../img/PC/index/productlist/P41_CN.png')
          },],
      },
    },
    //产品详情页面
    //UPCAM
    UPCAM: {
      banner: {title: '齿科排版软件', content: '----UPCAM'},
      body1: {
        big_title: '排版软件 | UPCAM',
        big_content: 'UPCAM是由云甲科技和来自德国的ModuleWorks共同开发的牙科CAM软件。 （ModuleWorks是世界上最先进的CAM核心算法供应商之一）。 UPCAM支持所有类型的牙齿修复处理，并具有多种计算策略确保每个修复类型的计算质量。',
        message: [{title: '品质保证<br>(德国内核)'}, {title: '操作简单'}, {title: '快速计算'}]
      },

      body2: {title: 'UPCAM 齿科排版软件', content: '与云甲科技所有智能雕刻机全方位兼容。'},
      body3: {
        title: '适用于所有义齿修复体类型',
        message: [
          {content: '软件根据不同的修复类型'},
          {content: '（内冠，全冠，长桥，嵌体，桩核，贴面，套筒冠，精密附件，个性化基台，种植杆卡，种植导板，咬合夹板，活动支架，全口基托，牙模等）'},
          {content: '配置不同加工策略，确保切削质量。'}
        ]
      },
      body4: {
        title: '材料高效利用', content: '根据用户所需加工的修复体三维图形，</br>\n' +
          '自动检测插入方向，</br>' +
          '保证修复体在无倒凹的前提下所需材料高度最低。'
      },
      body5: {
        title: '开放式格式',
        content: '高度兼容主流牙科设计软件（如：UP3D、3shape、exocad、dentalwings、egs等）所输出的开放式STL数据并加工；UPCAM还可以根据客户需求进行定制。'
      },
    },
    //P52
    P52: {
      banner: {
        title: 'P52',
        content: '五轴智能义齿雕刻机',
        imgSrc: require('../img/PC/Product/product_info/P52/banner_CN.png')
      },
      body1: {
        end_text: 'P52',
        big_title: '五轴智能义齿雕刻机',
        message: [
          {title: '独立自主研发', content: '软件及硬件都由深圳云甲科技独立自主研发和生产的。<br>整个硬件采用一体式铸造，更加稳定耐用。'},
          {
            title: '断点续传', content: '当遇到突发情况突然终止加工时，<br>可以从上次加工的地方，继续加工。<br>无需重新切削，节省时间，保护您的数据安全。'
          },
          {title: '软硬件智能化', content: '中国首款智能义齿智雕机，<br>可实现一键自动校准，<br>自动吸尘集成。'},
          {title: '大容量刀库', content: '11个刀库，实现多套刀具预设。'}]
      },
      body2: {title: '五轴智能切削系统', content: '自主研发，配置省材料策略，使切削更加节省您的材料,<br>五轴角度灵活性高，选用厚度更小的锆块可以切削更多。'},
      body3: {title: '自动校准功能', content: '快捷方便，智能操作，无需人为切校准块进行校准，仅需一键即可完成自动校准'},
      body4: {title: '一体式铸造', content: '一体式铸造，在使用过程中不会因机器震动而造成零件松散而形成误差，<br>确保设备可以长时间稳定输出高精度的切削结果。'},
      body5: {
        message: [
          {
            title: 'UPCAM 排版软件',
            content: '适用于云甲科技所有的智雕机，磨削机。<br>由云甲科技自主研发的正版排版软件。'
          },
          {
            title: 'UPCNC 控制软件 ',
            content: '自主研发的控制软件，操作简单，一学就会，一键导入文件便可开始切削。'
          },
        ]
      },
      body6: {title: '应用广泛', content: '支持多种材料切削：如氧化锆瓷块、蜡块、PMMA 树脂块、PEEK材料 <br>支持多种义齿修复体切削：全冠、内冠、种植开孔冠、长桥、活动支架和全口义齿等等'},
      body7: {
        media: {
          videoSrc: require('../../assets/video/P52/P52_CN.mp4'),
          videoBg: require('../../assets/img/PC/Product/product_info/P52/banner_CN.png')
        }
      },
      body8: {
        title: '产品规格参数',
        parameter: [
          {title: '型号', content: 'P52'},
          {title: '尺寸', content: '620×430×560（mm）'},
          {title: '重量', content: '72Kg'},
          {title: '输入电压', content: '0.8KW'},
          {title: '最大功率', content: '0.52KW（最大）'},
          {title: '主轴功率', content: '0.52KW（max）'},
          {title: '加工轴数', content: '五轴联动'},
          {title: '行程范围', content: 'X/Y/Z：165/135/70mm  A：±30° B：360°'},
          {title: '加工方式', content: '干湿切削'},
          {title: '最大转数', content: '40,000~60,000rpm'},
          {title: '最大进给率', content: '3000mm/min'},
          {title: '刀库容量 ', content: '11'},
          {title: '换刀方式', content: '自动 (气压 > 0.5 MPa)'},
          {title: '主轴冷却', content: '气冷'},
          {title: '切削材料', content: '氧化锆，PMMA树脂，PEEK，蜡块'},
          {title: '切削时间', content: '氧化锆（内冠）：13分钟、蜡块（内冠）4.5分钟'},
          {title: '', content: '氧化锆（全冠）：14分钟、蜡块（内冠）5.5分钟'},
          {title: '刀具', content: '2 + 1 + 0.6 mm ，Φ4'},
        ],
        left_text: [
          '名称',
          '长宽高',
          '重量',
          '输入电压',
          '最大功率',
          '主轴功率',
          '加工轴数',
          '行程范围',
          '加工方式',
          '最大转数',
          '最大进给率',
          '刀库容量',
          '换刀方式',
          '主轴冷却',
          '加工材料',
          '加工时间（磨牙）',
          '<br>',
          '车针直径'
        ],
        right_text: [
          'P52',
          '620×430×560（mm）',
          '79Kg',
          'AC 100~235V、50~60Hz ',
          '0.8KW ',
          '0.52KW（最大）',
          '五轴联动',
          'X/Y/Z：165/135/70mm  A：±30° B：360°',
          '干式铣削',
          '40,000~60,000rpm',
          '3000mm/min',
          '11',
          '自动 (气压 > 0.5 MPa)',
          '压缩空气 (气压0.25~0.35MPa)',
          '氧化锆，蜡，PMMA，PEE',
          '内冠：氧化锆10分钟、蜡块4.5分钟 ',
          '全冠：氧化锆13分钟、蜡块5.5分钟',
          '2 + 1 + 0.6 （3把车针、Φ4校准棒） ']
      }
    },
    //P41
    P41: {
      banner: {
        title: 'C41',
        content: '四轴湿切智能磨削机',
        imgSrc: require('../img/PC/Product/product_info/P41/P41_banner_CN.png')
      },
      body1: {
        introTitle: '功能强大',
        introContent: '支持多种材料切削，修复应用广泛 \n' +
          '可加工玻璃陶瓷、等材料，支持 \n' +
          '牙冠、嵌体、贴面、等多种 \n' +
          '修复类型的加工\n',
        intro_list: [
          {
            imgUrl: require('../img/PC/Product/product_info/P41/P41_body_pic19.png'),
            title: '牙 冠',
            content: '玻璃陶瓷材料'
          },
          {
            imgUrl: require('../img/PC/Product/product_info/P41/P41_body_pic16.png'),
            title: '三连桥',
            content: '玻璃陶瓷材料'
          },
          {
            imgUrl: require('../img/PC/Product/product_info/P41/P41_body_pic17.png'),
            title: '贴 面',
            content: '玻璃陶瓷材料'
          },
        ]
      },
      body2: {
        imgUrl: require('../img/PC/Product/product_info/P41/P41_body_pic8.png'),
        title: '3个瓷块',
        content: '同时加工'
      },
      body3: {
        imgUrl: require('../img/PC/Product/product_info/P41/P41_body_pic9.png'),
        title: '6个刀库自动换刀',
        content: '可预设两套不同类型刀具'
      },
      body4: {
        imgUrl: require('../img/PC/Product/product_info/P41/P41_body_pic10_CN.png'),
        imgUrlPH: require('../img/PC/Product/product_info/P41/body4_PH_CN.jpg'),
        title: '体积小',
        content: '节省空间，实现真正的桌面修复'
      },
      body5: {
        imgUrl: require('../img/PC/Product/product_info/P41/P41_body_pic5.png'),
        message: [
          {
            title: 'UPCAM 排版软件',
            content: '适用于云甲科技所有的智雕机，磨削机。</br>由云甲科技自主研发的正版排版软件。',
            imgUrlPH: require('../img/PC/Product/product_info/P41/body5_pic1.jpg'),
          },
          {
            title: 'UPCNC 控制软件',
            content: '自主研发的控制软件，操作简单，一学就会，一键导入文件便可开始切削。',
            imgUrlPH: require('../img/PC/Product/product_info/P41/body5_pic2.jpg'),
          },
        ]
      },
      body6: {
        imgUrl: require('../img/PC/Product/product_info/P41/P41_body_pic11_CN.png'),
        title: [
          '贴面', '嵌体', '全冠', '三连桥'
        ]
      },
      body7: [
        {
          left: {
            head_intro: {title: '研磨/铣削', product: 'C41'},
            left_img: [
              require('../img/PC/Product/product_info/P41/P41_body_pic18.png'),
              require('../img/PC/Product/product_info/P41/P41_body_pic1.png')
            ]
          },
          right: {
            head_intro: {sort: '产品应用方案', title: '玻璃陶瓷贴面'},
            right_list: [
              {
                title: '模扫',
                product: 'UP560',
                imgUrl: require('../img/PC/Product/product_info/P41/P41_body_pic13.png')
              },
              {
                title: '设计',
                product: 'UPCAD',
                imgUrl: require('../img/PC/Product/product_info/P41/P41_body_pic6.png')
              },
              {
                title: '排版',
                product: 'UPCAM',
                imgUrl: require('../img/PC/Product/product_info/P41/P41_body_pic7.png')
              }
            ]
          },
          prompt: '(滑动查看更多)'
        }
      ],
      body8: {
        media: {
          videoSrc: require('../../assets/video/P41/P41_CN.mp4'),
          videoBg: require('../../assets/img/PC/Product/product_info/P41/P41_body_pic10.png')
        }
      },
      body9: {
        parameter: [
          {title: '名称', content: 'C41'},
          {title: '换刀方式', content: '自动（气压＞0.45MPa）'},
          {title: '长宽高', content: '520×420×560（mm）'},
          {title: '输入电压', content: 'AC 100~235V、50~60Hz'},
          {title: '重量', content: '70Kg'},
          {title: '行程范围', content: 'X/Y/Z：165/135/70mm  A：±360°'},
          {title: '最大功率', content: '0.9KW'},
          {title: '主轴冷却', content: '压缩空气（气压0.25~0.35MPa）'},
          {title: '主轴功率', content: '0.8KW'},
          {title: '加工时间', content: '全冠：玻璃陶瓷20min'},
          {title: '刀库容量', content: '6'},
          {title: '', content: '贴面：玻璃陶瓷18min'},
          {title: '加工轴数', content: '4轴'},
          {title: '车针直径', content: '2.5+1+0.6（玻璃陶瓷）3+2+1.5（钛柱）'},
          {title: '加工方式', content: '湿式铣削'},
          {title: '最大转速', content: '60,000rpm'},
          {title: '加工材料', content: '玻璃陶瓷、钛柱'},
          {title: '最大进给率', content: '3000mm/min'},
        ]
      }
    },
    //P5
    P5: {
      banner: {title: 'P5', content: '五轴智能义齿雕刻机'},
      body1: {
        message: [{title: '五轴智能切削系统', content: '中国首款智能义齿智雕机<br>仅需一键即可完成自动校准'},
          {
            title: '独立自主研发', content: '软件及硬件都由深圳云甲科技独立自主研发和生产。'
          },
          {title: '大容量刀库', content: '11个刀库，实现多套刀具预设'},
          {
            title: '节省材料', content: '自主研发，配置省材料策略，使切削更加节省您的材料'
          }]
      },
      body2: {title: '五轴智能切削系统', content: '五轴角度灵活性高，选用厚度更小的锆块可以切削更多'},
      body3: {title: '自动校准', content: '快捷方便，智能操作，仅需一键即可完成自动校准'},
      body4: {title: '一体式铸造', content: '一体式铸造，在使用过程中不会因机器震动而造成零件松散而形成误差，<br>确保设备可以长时间稳定输出高精度的切削结果。'},
      body5: {
        imgUrl: require('../img/PC/Product/product_info/P5/P41_body_pic5.png'),
        message: [
          {
            title: 'UPCAM 排版软件',
            content: '适用于云甲科技所有的智雕机，磨削机。</br>由云甲科技自主研发的正版排版软件。',
            imgUrlPH: require('../img/PC/Product/product_info/P5/body5_pic1.jpg'),
          },
          {
            title: 'UPCNC 控制软件',
            content: '自主研发的控制软件，操作简单，一学就会，一键导入文件便可开始切削。',
            imgUrlPH: require('../img/PC/Product/product_info/P5/body5_pic2.jpg'),
          },
        ]
      },
      body6: {title: '应用广泛', content: '支持多种材料切削：如氧化锆瓷块、蜡块、PMMA 树脂块、PEEK材料 <br>支持多种义齿修复体切削：全冠、内冠、种植开孔冠、长桥、活动支架和全口义齿等等'},
      body7: {
        videoSrc: require('../../assets/video/P52/P52_CN.mp4'),
      },
      body8: {
        title: '产品规格参数',
        parameter: [
          {title: '型号', content: 'P52'},
          {title: '尺寸', content: '620×430×560（mm）'},
          {title: '重量', content: '72Kg'},
          {title: '输入电压', content: '0.8KW'},
          {title: '最大功率', content: '0.52KW（最大）'},
          {title: '主轴功率', content: '0.52KW（max）'},
          {title: '加工轴数', content: '五轴联动'},
          {title: '行程范围', content: 'X/Y/Z：165/135/70mm  A：±30° B：360°'},
          {title: '加工方式', content: '干湿切削'},
          {title: '最大转数', content: '40,000~60,000rpm'},
          {title: '最大进给率', content: '3000mm/min'},
          {title: '刀库容量 ', content: '11'},
          {title: '换刀方式', content: '自动 (气压 > 0.5 MPa)'},
          {title: '主轴冷却', content: '气冷'},
          {title: '切削材料', content: '氧化锆，PMMA树脂，PEEK，蜡块'},
          {title: '切削时间', content: '氧化锆（内冠）：13分钟、蜡块（内冠）4.5分钟'},
          {title: '', content: '氧化锆（全冠）：14分钟、蜡块（内冠）5.5分钟'},
          {title: '刀具', content: '2 + 1 + 0.6 mm ，Φ4'},
        ],
        left_text: ['型号', '尺寸', '重量', '输入电压', '最大功率', '主轴功率',
          '加工轴数', '行程范围', '加工方式', '最大转数', '最大进给率', '刀库容量',
          '换刀方式', '主轴冷却', '切削材料', '切削时间', '<br>', '刀具'],
        right_text: ['P52', '620×430×560（mm）', '72Kg', 'AC 100~235V、50~60Hz ',
          '0.8KW ', '0.52KW（最大）', '五轴联动', 'X/Y/Z：165/135/70mm  A：±30° B：360°',
          '干湿切削', '40,000~60,000rpm', '3000mm/min', ' 11', ' 自动 (气压 > 0.5 MPa)',
          '气冷 ', ' 氧化锆，PMMA树脂，PEEK，蜡块',
          '氧化锆（内冠）：13分钟、蜡块（内冠）4.5分钟 ',
          '氧化锆（全冠）：14分钟、蜡块（内冠）5.5分钟', '2 + 1 + 0.6 mm ，Φ4 ']
      }
    },
    //UP300+
    UP300P: {
      banner: {title: 'UP300+', s_title: '三维扫描仪', content: '效率翻倍，技工朋友口中的', s_content: '清货神器'},
      body1: {title: '三合一', content: '对比传统的扫描方式，三合一扫描功能可以同时扫描上下颌，代型，比传统扫描方式节省50%的时间。'},
      body2: {
        title: '双面印模，一键扫描',
        content: '双面印模无需手动翻转，即可一键扫描完整。'
      },
      // body3: {
      //   title: 'High definition cameras',
      //   content: 'Scan result comparison:2.0mp VS 1.3mp',
      //   card_content: ['UP360+', 'Traditional scanner']
      // },
      body3: {
        title: '',
        content: 'problems scanning <br> a narrow interproximal gap？<br> Try UP360+',
        videoSrc: require('../../assets/video/UP560/UP560_CN.mp4'),
        videoBg: require('../../assets/img/PC/Product/product_info/UP300P/banner.png')
      },
      body4: {
        title: '产品规格参数',
        left_text:
          [
            '尺寸',
            '重量',
            '扫描范围',
            '扫描方式',
            '相机',
            '投影',
            '接口',
            '电源',
            '速度',
            '精度',
            '输出格式',
            '自动化',
            '适应范围',
          ],
        right_text:
          [
            '300*300*400（mm）',
            '10kg',
            '100*100*75（mm）',
            '非接触式蓝光扫描',
            '2*1.3（MP）高帧率',
            '定制蓝光，支持多彩扫描',
            'USB 3.0',
            'AC220V，50HZ',
            '牙弓20s，代型26s',
            '10微米',
            'STL；PLY；OBJ',
            '自动配准、智能补洞',
            '石膏、印模、咬蜡、扫描杆、彩色纹理 正畸、多代型、大咬合架',
          ]
      }
    },
    //UP300E
    UP300E: {
      banner: {title: 'UP300e', content: 'The most economical scanner for you'},
      body1: {title: '高速度', content: ['29"', '12颗代型扫描']},
      body2: {title: '', content: ['29"', '12颗代型扫描']},
      body3: {title: '', content: 'problems scanning <br> a narrow interproximal gap？<br> Try UP360+'},
      body4: {
        title: '产品规格参数',
        left_text: [
          'Size', '重量', 'Camera', 'Precision', 'Project', 'Lnterface', 'Output formats', 'Power supply'
        ],
        right_text: [
          '305*310*550（mm）', '14kg', '2*2.0（MP）High frame rate', '＜ 6 microns', 'Customized blue-light /multi-color scaning', 'USB 3.0', 'STL; UM; PLY; OBJ', '非接触式蓝光扫描'
        ]
      }
    },
    //UPCAD
    UPCAD: {
      banner: {title: '中国首款义齿设计软件', content: '----UPCAD'},
      body1: {title: '', content: ['  内冠', '  全冠（桥体）', '   贴面', '   嵌体/高嵌体']},
      body2: {title: '', content: ''},
      body3: {
        title: '订单管理器',
        content: '清晰看到每一个订单，实现高效协同管理订单工作',
        imgSrc: require('../img/PC/Product/product_info/UPCAD/body_pic2_CN.png')
      },
      body4: {
        title: '自动识别颈缘线',
        content: '全自动是识别颈缘线，对于新用户和初学者来书，操作简单，极易上手。',
        imgSrc: require('../img/PC/Product/product_info/UPCAD/body_pic3_CN.png')
      },
      body5: {
        title: '完整的后台参数设置',
        content: '根据不同材料及修复体， <br>可以将设定的参数应用到设计软件中，<br>使设计变得更加快速简洁。',
        imgSrc: require('../img/PC/Product/product_info/UPCAD/body_pic4_CN.png')
      },
      body6: {
        card: [
          {title: '丰富的牙齿数据库', content: '包含多种牙齿形状<br>可以免费使用，也可以自行添加'},
          {title: '单冠可快速设计', content: '用镜像模式，可以快速复制同名牙 <br>实现快速设计单颗牙齿'},
          {title: '链条模式', content: '使用链条模式，可以快速设计全口长桥案例'}],
      },
      body7: {title: '倒凹处理', content: '软件可以自动检测并填补倒凹，<br>防止手动填补的不准确，<br>节约手工处理倒凹时间，操作更加智能化！'},
      body8: {title: '其他设计模块正在开发中，<br> 即将面世，敬请期待......', content: ['正畸设计', '种植模块']},

    },
    //UP560
    UP560: {

      banner: {
        title: 'UP560 ',
        content: '纹理扫描，支架专家',
        imgSrc: require('../../assets/img/PC/Product/product_info/UP560/UP560_banner_CN.png')
      },

      body1: {
        title: ['关于', 'UP560 国际首款未分模扫描仪'],
        content: '高精度、高速度迅 速捕捉石膏模型在扫描时的每一个像素，还原最真实的扫描数据，极大减少后期设计误差',
        content: 'UP560，基于UP360（全球首款未分模专用扫描仪）的全新升级，采用双200万高帧摄像头，实现更快速、更清晰的取像技术，为数字化口腔提供更高效、更精确的数据。',
      },

      body2: {
        title: '高速度',
        name: ['双面印膜', '12颗代型', '三合一模型', '全牙弓'],
      },

      body3: {
        title: '全面升级相机',
        content: '200万像素，高分辨率',
      },

      body4: {
        title: '输出STL文件',
        // content: '开放系统，扫描后的文件可以导入3shape，exocad等设计软件进行设计。',
        content: '开放式系统，扫描后输出的文件格式可以支持exocad、3shape等多款设计软件使用。',
      },

      body5: {
        title: '真彩纹理案例展示',
        content: [
          {
            name: '原始石膏模型',
            bg: '01',
            imgUrl: require('../img/PC/Product/product_info/UP560/body_pic5.png')
          },
          // {
          //   name: '真彩扫描',
          //   bg: '02',
          //   // imgUrl: require('../img/PC/Product/product_info/UP560/body_pic6.png')
          // },
          {
            name: '纹理扫描数据',
            bg: '02',
            imgUrl: require('../img/PC/Product/product_info/UP560/body_pic7.png')
          }
        ],
      },

      body6: {
        title: '应用广泛',
        content: [
          '支持多种修复类型扫描，如贴面、桩核、种植模型等；',
          '适用于未分割模型、印模等类型模型扫描'
        ],
      },
      body7: {
        media: {
          videoSrc: require('../../assets/video/UP560/UP560_CN.mp4'),
          videoBg: require('../../assets/img/PC/Product/product_info/UP560/UP560_banner_CN.png')
        }
      },
      body8: {
        title: '产品参数',
        left_text: [
          '大小',
          '重量',
          '相机',
          '精度', '投影', '接口', '输出格式', '扫描方式', '功能'],
        right_text: [
          '305*310*550（mm）', '14kg', '200 万像素', '8 微米',
          '定制蓝光，支持多彩扫描', 'USB 3.0', 'STL; UM; PLY; OBJ',
          '非接触式蓝光扫描',
          '纹理扫描，支架专家 <br>' +
          '未分模专用扫描仪 <br>' +
          '一次性扫描全口种植 <br>' +
          '全方位解决桩核问题'
        ]
      }
    },
    //UP360P
    UP360P: {
      banner: {title: 'UP360+', content: '国际首款未分模扫描仪'},
      body1: {title: '相机', content: '2*2.0（MP）200万像素，高精度扫描仪'},
      body2: {title: '扫描速度', content: ['双面印模', '12颗代型扫描', '三合一扫描', '全牙弓扫描']},
      body3: {title: '扫描清晰', content: '扫描效果: 200万像素 VS 130万像素', card_content: ['UP360+', '传统扫描仪']},
      body4: {title: '未分模，强势扫描种植基台', content: '扫描效果: 200万像素 VS 130万像素', card_content: ['UP360+', '传统扫描仪']},
      body5: {
        title: '',
        content: ['UP360+', '国际首款未分模扫描仪', '高精度扫描'],
        media: {
          videoSrc: require('../../assets/video/UP560/UP560_CN.mp4'),
          videoBg: require('../../assets/img/PC/Product/product_info/UP360P/banner.png')
        }
      },
      body6: {
        title: '产品规格参数',
        left_text: [
          '尺寸',
          '重量',
          '扫描范围',
          '扫描方式',
          '相机',
          '投影',
          '接口',
          '电源',
          '速度',
          '精度',
          '输出格式',
          '自动化',
        ],
        right_text: [
          '305×310×550（mm）',
          '14kg',
          '100*100*75（mm）',
          '非接触式蓝光扫描',
          '2*2.0（MP）高帧率',
          '定制蓝光，支持多彩扫描',
          'USB 3.0',
          'AC110-220V，50HZ',
          '牙弓20s，代型26s',
          '8微米',
          'STL；PLY；OBJ',
          '自动配准、智能补洞',
        ]
      }
    },
    //UP400
    UP400: {
      banner: {
        title: 'UP400',
        content: '高速模型扫描仪',
        imgSrc: require('../../assets/img/PC/Product/product_info/UP400/UP400_Banner_CN.png')
      },
      body1: {
        tpInfoTitle: '全牙弓',
        infoImg: require('../../assets/img/PC/Product/product_info/UP400/UP400_pic2.svg'),
        infoTitle: '高速度',
        infoCard: [
          {
            title: '70秒',
            content: '双面印模',
            imgUrl: require("../../assets/img/PC/Product/product_info/UP400/info_pic1.svg")
          },
          {
            title: '24秒',
            content: '十二代型',
            imgUrl: require("../../assets/img/PC/Product/product_info/UP400/info_pic2.svg")
          },
          {
            title: '16秒',
            content: '三合一',
            imgUrl: require("../../assets/img/PC/Product/product_info/UP400/info_pic3.svg")
          },
          {
            title: '12秒',
            content: '全牙弓',
            imgUrl: require("../../assets/img/PC/Product/product_info/UP400/info_pic4.svg")
          },
        ]
      },
      body2: {
        title: '相机',
        content: '130万像素'
      },
      body3: {
        title: '三合一',
        content: '对比传统的扫描方式，三合一扫描功能可以同时扫描上下颌，代型，比传统扫描方式节省50%的时间。'
      },
      body4: {
        media:{
          videoSrc: require('../../assets/video/UP400/UP400_CN.mp4'),
          videoBg: require('../../assets/img/PC/Product/product_info/UP400/UP400_video_CN.jpg')
        }
      },
      body5: {
        title: '产品参数',
        left_text: [
          '大小', '重量', '相机', '精度', '投影',
          '接口', '输出格式', '扫描方式', '功能'],
        right_text: [
          '305*310*550（mm）', '14kg', '200 万像素',
          '8 微米', '定制蓝光，支持多彩扫描', 'USB 3.0',
          'STL; UM; PLY; OBJ', '非接触式蓝光扫描',
          '纹理扫描，支架专家 <br>' +
          '未分模专用扫描仪 <br>' +
          '一次性扫描全口种植 <br>' +
          '全方位解决桩核问题'
        ]
      }
    },
    //P53
    P53: {
      banner: {
        title: 'P53',
        content: '五轴智能义齿雕刻机</br>助力规模化智能化生产',
        imgSrc: require('../../assets/img/PC/Product/product_info/P53/P53_Banner_CN.png'),
        imgSrcPH: require('../../assets/img/PC/Product/product_info/P53/PH-product-P53-EN.jpg')
      },
      body1: {
        message: [
          {
            title: '全系统软硬件</br>自主研发',
            content: '云甲科技自主研发，拥有核心技术，</br>智能控制系统与一体结构完美组合。',
            imgUrl: require("../img/PC/Product/product_info/P53/P53_12.png")
          },
          {
            title: '智能初始化',
            content: '中国首款带有全自动校准、智能初始化的智能义齿雕刻机。',
            imgUrl: require("../img/PC/Product/product_info/P53/P53_17.png")
          },
          {
            title: '断点续传',
            content: '自动从上一次中断的步骤继续切削，</br>避免重复切削，提高80%的工作效率。',
            imgUrl: require("../img/PC/Product/product_info/P53/P53_15.png")
          },
          {
            title: '简易的装机流程',
            content: '自主装机仅需10分钟。提供上门协助装机及培训服务。',
            imgUrl: require("../img/PC/Product/product_info/P53/P53_13.png")
          },
          {
            title: '远程连接',
            content: '一个平台系统控制全套流程机器，实时监测多台机器生产情况',
            imgUrl: require("../img/PC/Product/product_info/P53/P53_16.png")
          },
          {
            title: '灯条进度显示',
            content: '设备显示加工进度，减少人员检查时间，提高效率',
            imgUrl: require("../img/PC/Product/product_info/P53/P53_14.png")
          },
        ]
      },
      body2: {
        title: '助力规模化',
        content: '可以同时查看多台设备的工作状态和加工情况，实时监控，实现智能化生产。'
      },
      body3: {
        title: '自动校准',
        content: '自动校准功能快捷方便，智能操作，无需人为切校准块进行校准，仅需一键即可完成自动校准。'
      },
      body4: {
        title: '一体式铸造',
        content: '一体式铸造，在使用过程中不会因机器震动而造成零件松散而形成误差，确保设备可以长时间稳定输出高精度的切削结果。'
      },
      body6: {
        title: '应用广泛',
        content: '支持多种材料切削：如氧化锆瓷块、蜡块、PMMA 树脂块、PEEK材料 ' +
          '</br>支持多种义齿修复体切削：全冠、内冠、种植开孔冠、长桥、活动支架和全口义齿等等'
      },
      body7: [
        {
          left: {
            head_intro: {title: '研磨/铣削', product: 'P53'},
            left_img: [
              require('../img/PC/Product/product_info/P53/P53_3.png'),
              require('../img/PC/Product/product_info/P53/P53_18.png')
            ]
          },
          right: {
            head_intro: {sort: '产品应用方案', title: '氧化锆长桥'},
            right_list: [
              {
                title: '模扫',
                product: 'UP400',
                imgUrl: require('../img/PC/Product/product_info/P53/P53_9.png')
              },
              {
                title: '设计',
                product: 'UPCAD',
                imgUrl: require('../img/PC/Product/product_info/P53/P53_11.png')
              },
              {
                title: '排版',
                product: 'UPCAM',
                imgUrl: require('../img/PC/Product/product_info/P53/P53_10.png')
              }
            ]
          },
          prompt: '（滑动查看更多）'
        },
      ],
      body8: {
        media:{
          videoSrc: require('../../assets/video/P53/P53_CN.mp4'),
          videoBg: require('../../assets/img/PC/Product/product_info/P53/P53_video_CN.jpg')
        }
      },
      body9: {
        title: '产品规格参数',
        parameter: [
          {title: '型号', content: 'P53'},
          {title: '尺寸', content: '620×430×560（mm）'},
          {title: '重量', content: '72Kg'},
          {title: '输入电压', content: 'AC 100~235V、50~60Hz'},
          {title: '最大功率', content: '0.8KW'},

          {title: '主轴功率', content: '0.52KW（最大）'},
          {title: '加工轴数', content: '五轴联动'},
          {title: '行程范围', content: 'X/Y/Z：165/135/70mm  A：±30° B：360°'},
          {title: '加工方式', content: '干湿切削'},
          {title: '最大转数', content: '40,000~60,000rpm'},
          {title: '最大进给率', content: '3000mm/min'},
          {title: '刀库容量', content: '11'},
          {title: '换刀方式', content: '自动 (气压 > 0.5 MPa)'},
          {title: '主轴冷却', content: '气冷'},
          {title: '切削材料', content: '氧化锆，PMMA树脂，PEEK，蜡块'},
          {title: '切削时间', content: '氧化锆（内冠）：13分钟、蜡块（内冠）4.5分钟 '},
          {title: '', content: '氧化锆（全冠）：14分钟、蜡块（内冠）5.5分钟'},
          {title: '刀具', content: '2 + 1 + 0.6 mm ，Φ4'},
        ],
        left_text: ['名称', '长宽高', '重量', '输入电压', '最大功率', '主轴功率', '加工轴数',
          '行程范围',
          '加工方式',
          '最大转数',
          '最大进给率',
          '刀库容量',
          '换刀方式',
          '主轴冷却',
          '加工材料', '加工时间', '<br>', '车针直径'],
        right_text: ['P53', '443.5×718×628.5（mm）', '79Kg', 'AC 183~235V、50~60Hz ',
          '0.8KW ',
          '0.52KW（最大）',
          '五轴联动',
          'X/Y/Z：170/215/105  A：±30° B：±360°',
          '干式铣削', '40,000~60,000rpm',
          '3000mm/min',
          ' 11',
          ' 自动 (气压 > 0.5 MPa)',
          '气冷 ',
          ' 氧化锆，蜡，代木，PMMA',
          '内冠：氧化锆10分钟，蜡4.5分钟',
          '全冠：氧化锆13分钟，蜡5.5分钟',
          '2 + 1 + 0.6（3把车针，Φ4校准盘） ']
      }
    },
    //底部组件
    footer: {
      indexfooter1: [
        {title: '首页', list: [], url: '/'},
        {
          title: '云甲科技',
          list: [
            {name: '关于我们', url: '/About'},
            {name: '联系我们', url: '/Contact'},
            // {name: '销售团队', url: '/SalesTeam'}
          ],
          url: 'javascript:;'
        },
        {title: '产品', list: [], url: '/MainProduct'},
        {
          title: '解决方案',
          list: [],
          url: 'javascript:;'
        },
        {
          title: '资讯',
          list: [
            {name: '博客', url: '/CompanyNewsPage'},
            {name: '新闻', url: '/CompanyActivitiesPage'}
          ],
          url: '/News'
        },
        {
          title: '技术支持',
          list: [
            {name: '产品培训', url: 'javascript:;'},
            {name: '常见问题', url: 'javascript:;'},
            {name: '软件下载', url: 'javascript:;'}
          ],
          url: 'javascript:;'
        },
      ],
      indexfooter2: [
        {title: '公司地址', list: ['深圳市南山区桃源街道南山云谷创新产业园', '综合服务楼511-521']},
        {title: '邮箱', list: ['info@up3d.cn']},
        {title: '电话客服', list: ['+86-755-26983202']},
      ],
      icon: [
        // {
        //   ImgSrc: require('../img/PC/Commen/linkedin_icon.png'),
        //   Href: 'https://www.linkedin.com/company/10505164/admin/'
        // },
        {
          ImgSrc: require('../img/PC/Commen/WX_icon.png'),
          Href: 'javascript:;',
          WxClass: 'wx-class'
        }
      ]
    },
    //临时组件
    Commen_Guide: {
      Guide: [
        {
          title: '特点',
          anchor: 'Accuracy'
        },
        {
          title: '功能',
          anchor: 'Function'
        },
        {
          title: '视频',
          anchor: 'Video'
        },
        {
          title: '产品规格',
          anchor: 'Parameter'
        }
      ]
    },
    LoopPic: {
      body1: {title: '多色光扫描', content: '蓝光为主要扫描方式，一键切换红光、白光。'},
      body2: {title: '新扫描方式', content: '手捏咬合方式扫描，可快速确认咬合关系，捕捉咬合数据。'},
      body3: {title: 'UPSCAN 软件', content: '软件界面简单，使用智能化，易上手'},
      body4: {title: '编辑颈缘线', content: '完成扫描后可直接在扫描软件内编辑颈缘线，实现医技高效沟通'},
      body5: {title: '真彩扫描', content: '可实现真彩扫描，使活动支架模型上的线条清晰可见，完美辅助CAD设计'},
      body6: {title: '自动配准', content: '扫描上下颌后，软件会实现自动配准，无需人为手动配准，快捷方便。'},
    },
    Productfooterbutton: [{name: '购买', url: '/Contact'}, {name: '产品培训', url: ''}],
    Productbuttombanner: {
      title: '在线应用',
      card: [
        {content1: '桩核', content2: '种植'},
        {content1: '桩核', content2: '种植'}
      ]
    },
  },
}