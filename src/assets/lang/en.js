module.exports = {
  allinfo: {
    //导航栏
    guide: {
      guide_list: [{title: 'Home', list: {}, url: '/'},
        {
          title: 'UP3D',
          list: [
            {name: 'About', url: '/About'},
            {name: 'Contact', url: '/Contact'},
            {name: 'Sales team', url: '/SalesTeam'}
          ], url: ''
        },
        {
          title: 'Product',
          list: [{name: 'Dental Scanner', url: ''}, {name: 'UPCAD', url: ''}, {
            name: 'UPCAM',
            url: ''
          }, {name: 'Milling Machine', url: ''}],
          url: '/MainProduct'
        },
        {title: 'Solution', list: [], url: ''},
        {title: 'News', list: [], url: '/News'},
        {title: 'Support', list: [], url: ''},
        {title: 'Sign up', list: [], url: '/Login'},
        {title: '|', list: [], url: ''},],

      guide_pic: {
        guide_scanner: [
          {imgurl: require('../img/PC/index/productlist/UP560.png'), url: '/UP560', name: 'UP560'},
          {imgurl: require('../img/PC/index/productlist/UP360p_EN.png'), url: '/UP360P', name: 'UP360+'},
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
          {imgurl: require('../img/PC/index/productlist/P52_EN.png'), url: '/P52', name: 'P52'},
          {imgurl: require('../img/PC/index/productlist/P41_EN.png'), url: '/P41', name: 'P41'},
          {imgurl: require('../img/PC/index/productlist/P53_EN.png'), url: '/P53', name: 'P53'},
        ],
      },

      Lang: [
        {id: '0', text: 'EN'},
        {id: '1', text: '中文'}
      ],
      Lang_self: 'MyCenter'


    },

    //新导航栏（正在使用）
    guide2: {
      guide_list: [
        {title: 'Home', list: [], url: '/'},
        {
          title: 'UP3D',
          list: [
            {name: 'About', url: '/About'},
            {name: 'Contact', url: '/Contact'},
            // {name: 'Sales team', url: '/SalesTeam'}
          ],
          url: ''
        },
        {title: 'Product', list: [], url: '/MainProduct'},
        {title: 'Solution', list: [], url: '/Solution'},
        {
          title: 'News',
          list: [
            {name: 'Company News', url: '/CompanyNewsPage'},
            {name: 'Company Activities', url: '/CompanyActivitiesPage'}
          ],
          url: '/News'
        },
        // {title: 'Support', list: [], url: ''},
      ],
      // login_list: [
      //   {title: 'Login', url: '/Login'}
      // ],
      about_login: [
        {
          title: '语言',
          list: [
            {name: 'EN', url: ''},
            {name: '中文', url: ''},
            // {name: 'ES', url: 'http://new.up3d.cn/ES/Index.html'},
            // {name: 'RU', url: 'http://new.up3d.cn/RU/Index.html'},
          ],
          url: ''
        },
      ],

      seconde_guide: [
        {
          id: 'Dental_Scanner', name: 'Dental Scanner', url: '', list: [
            {imgurl: require('../img/PC/index/productlist/UP400_EN.png'), url: '/UP400', name: 'UP400'},
            {imgurl: require('../img/PC/index/productlist/UP560.png'), url: '/UP560', name: 'UP560'},
            {imgurl: require('../img/PC/index/productlist/UP300p.png'), url: '/UP300P', name: 'UP300+'},
            // {imgurl: require('../img/PC/index/productlist/UP360p.png'), url: '/UP360P', name: 'UP360+'},
            // {imgurl: require('../img/PC/index/productlist/UP300e.png'), url: '/UP300E', name: 'UP300e'},
          ],
        },

        {
          id: 'UPCAD', name: 'UPCAD', url: '',
          list: [
            {imgurl: require('../img/PC/index/productlist/UPCAD.png'), url: '/UPCAD', name: 'UPCAD'},
          ],
        },

        {
          id: 'UPCAM', name: 'UPCAM', url: '',
          list: [
            {imgurl: require('../img/PC/index/productlist/UPCAM.png'), url: '/UPCAM', name: 'UPCAM'},
          ],
        },

        {
          id: 'Milling_Machine', name: 'Milling Machine', url: '',
          list: [
            {imgurl: require('../img/PC/index/productlist/P53_EN.png'), url: '/P53', name: 'P53'},
            {imgurl: require('../img/PC/index/productlist/P41_EN.png'), url: '/P41', name: 'P41'},
            {imgurl: require('../img/PC/index/productlist/P52_EN.png'), url: '/P52', name: 'P52'},
            // { imgurl: require('../img/PC/index/productlist/P5.png'), url: '/P5', name: 'P5' },
            // { imgurl: require('../img/PC/index/productlist/P4.png'), url: '/P4', name: 'P4' },
          ],
        },

      ],
      Lang_self: 'MyCenter'
    },

    //移动端菜单栏
    guidePH: {
      guide_list: [
        {title: 'Home', list: [], url: '/', className: ''},
        {
          title: 'UP3D',
          list: [
            {name: 'About', url: '/About'},
            {name: 'Contact', url: '/Contact'},
            // {name: 'Sales team', url: '/SalesTeam'}
          ],
          url: '',
          className: 'cur'
        },
        {title: 'Product', list: [], url: '/MainProduct', className: ''},
        {title: 'Solution', list: [], url: '/Solution', className: ''},
        {
          title: 'News',
          url: '/News',
          className: ''
        },
      ],
      // login_list: [
      //   {title: 'Login', url: '/Login', className: ''}
      // ],
      about_login: [
        {
          title: 'language',
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
        nav_title: 'PRODUCT',
        nav_content: [
          {
            id: 'Dental_Scanner', name: 'Scanner', url: '', list: [
              {imgurl: require('../img/PC/index/productlist/UP400_EN.png'), url: '/UP400', name: 'UP400'},
              {imgurl: require('../img/PC/index/productlist/UP560.png'), url: '/UP560', name: 'UP560'},
              {imgurl: require('../img/PC/index/productlist/UP300p.png'), url: '/UP300P', name: 'UP300+'},
              // {imgurl: require('../img/PC/index/productlist/UP360p.png'), url: '/UP360P', name: 'UP360+'},
              // {imgurl: require('../img/PC/index/productlist/UP300e.png'), url: '/UP300E', name: 'UP300e'},
            ],
          },

          {
            id: 'UPCAD', name: 'UPCAD', url: '',
            list: [
              {imgurl: require('../img/PC/index/productlist/UPCAD.png'), url: '/UPCAD', name: 'UPCAD'},
            ],
          },

          {
            id: 'UPCAM', name: 'UPCAM', url: '',
            list: [
              {imgurl: require('../img/PC/index/productlist/UPCAM.png'), url: '/UPCAM', name: 'UPCAM'},
            ],
          },

          {
            id: 'Milling_Machine', name: 'Milling Machine', url: '',
            list: [
              {imgurl: require('../img/PC/index/productlist/P53_EN.png'), url: '/P53', name: 'P53'},
              {imgurl: require('../img/PC/index/productlist/P41_EN.png'), url: '/P41', name: 'P41'},
              {imgurl: require('../img/PC/index/productlist/P52_EN.png'), url: '/P52', name: 'P52'},
              // { imgurl: require('../img/PC/index/productlist/P5.png'), url: '/P5', name: 'P5' },
              // { imgurl: require('../img/PC/index/productlist/P4.png'), url: '/P4', name: 'P4' },
            ],
          },
        ],
      },
      Lang_self: 'MyCenter'
    },

    //首页
    index: {
      metaInfo:{
        title: 'Full Dental CAD&CAM Solution | UP3D', // set a title
        meta: [
          {                 // set meta
            name: 'description',
            content: 'Digital dental CAD & CAM solution including 3D scanner,design software,nest software,milling machine. Upgrade your lab & workflow.'
          },
          {
            property: 'og:site_name',
            content: 'UP3D'
          },
          {
            property: 'og:locale',
            content: 'en_US'
          },
          {
            property: 'og:title',
            content: 'Home'
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
          },
        ]
      },
      banner: [
        //技工端全套系统
        {
          imgurl: require('../img/PC/index/banner-Full_EN.png'),
          text: 'Full dental CAD/CAM solution',
          more: 'more',
          url: '/MainProduct',
          hightlight: ''
        },
        //P53
        {
          imgurl: require('../img/PC/index/P53-EN.jpg'),
          text: 'Smart dental 5-axis milling machine',
          more: 'more',
          url: '/P53',
          hightlight: 'P53'
        },
        //UP400
        {
          imgurl: require('../img/PC/index/UP400-EN.png'),
          text: 'High-speed model scanner',
          more: 'more',
          url: '/UP400',
          hightlight: 'UP400'
        },
        //P41
        {
          imgurl: require('../img/PC/index/P41-EN.jpg'),
          text: '4-axis Wet Dental Mill',
          more: 'more',
          url: '/P41',
          hightlight: 'P41'
        },
      ],

      mid_title: {
        title: ['SCANNING', 'DESIGNING', 'NESTING', 'MILLING'],
        HTitle: 'FULL DENTAL CAD/CAM SOLUTION'
      },

      //产品list
      products: {
        title: 'Product',
        product:
          [
            {
              type: 'Dental Scanner',
              info: [
                {
                  name: 'UP400',
                  pic: require('../img/PC/index/productlist/UP400_EN.png'),
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
              type: 'Design software',
              info: [
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
              type: 'Milling Machine',
              info: [
                {
                  name: 'P53',
                  pic: require('../img/PC/index/productlist/P53_EN.png'),
                  url: '/P53',
                  video: 'Video'
                },
                {
                  name: 'P41',
                  pic: require('../img/PC/index/productlist/P41_EN.png'),
                  url: '/P41',
                  video: 'Video'
                },
                {
                  name: 'P52',
                  pic: require('../img/PC/index/productlist/P52_EN.png'),
                  url: '/P52',
                  video: 'Video'
                }
              ]
            }
          ],
        more: 'more',
        video: 'video',
      },


      indexblog: {
        title: 'BLOG',
        blog_Card: [
          {
            bigTitle: 'BLOG',
            title: 'About-P53',
            p: 'Are you still worrying about using blocks too quickly?',
            p2: 'Are you still annoyed why others can mill 44 teeth with a zirconium block, while you can only mill 28 teeth?',
            more: 'more',
            url: '/P53-article',
            imgUrl: require('../img/PC/index/blog/EN/P53.jpg'),
          },
          {
            bigTitle: 'BLOG',
            title: 'One-step digital production of partial framework -- exocad',
            p: 'The removable partial framework, denture, and gingiva can be designed synchronously and milled in digital way at the same time.',
            p2: '',
            more: 'more',
            url: '/exocad-article',
            imgUrl: require('../img/PC/News/CompanyNew_Blog/exocad_article/nav_en.jpg'),
          },
          {
            bigTitle: 'BLOG',
            title: 'UP3D Nesting Software Upgrade',
            p: 'UPCAM is a dental nesting software independently researched and developed by UP3D Tech. The core of tool path of UPCAM uses the algorithm of ModuleWorks from Germany.',
            p2: '',
            more: 'more',
            url: '/UPCAM-article',
            imgUrl: require('../img/PC/News/CompanyNew_Blog/UPCAM_article/pic1.jpg'),
          },
        ]
      },
      indexexhibition: {
        title: 'EXHIBITION',
        exh_Card: [
          {
            bigTitle: 'EXHIBITION',
            title: 'IDS',
            p: ' ',
            p2: 'Join us at labday west 2021.',
            more: 'more',
            t: 'JUNE.18',
            t2: '09am-19pm',
            url: '/ids-article',
            imgUrl: require('../img/PC/index/exh/EN/IDS.jpg'),
          },
          {
            bigTitle: 'EXHIBITION',
            title: 'labday',
            p: 'labday west，August 27-28',
            p2: 'Thank you for joining UP3D at labday west 2021.',
            more: 'more',
            t: 'August 27-28',
            t2: '09am-19pm',
            url: '/labday-article',
            imgUrl: require('../img/PC/index/exh/EN/LABDAY.jpg'),
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
          text: 'Full dental CAD/CAM solution',
          more: 'more',
          url: '/MainProduct',
          hightlight: 'P53'
        },
        //P53
        {
          imgurl: require('../img/PC/index/banner-P53-PH.png'),
          text: 'Smart dental 5-axis milling machine',
          more: 'more',
          url: '/P53',
          hightlight: 'P53'
        },
        //UP400
        {
          text: 'High-speed model scanner',
          more: 'more',
          url: '/UP400',
          hightlight: 'UP400'
        },
        //P41
        {
          imgurl: require('../img/PC/index/banner-P41-PH.png'),
          text: '4-axis Wet Dental Mill',
          more: 'more',
          url: '/P41',
          hightlight: 'P41'
        },
      ],
    },
    //关于我们页面
    About: {
      metaInfo:{
        title: 'Full Dental CAD&CAM Solution | UP3D', // set a title
        meta: [
          {                 // set meta
            name: 'description',
            content: 'Digital dental CAD & CAM solution including 3D scanner,design software,nest software,milling machine. Upgrade your lab & workflow.'
          },
          {
            property: 'og:site_name',
            content: 'UP3D'
          },
          {
            property: 'og:locale',
            content: 'en_US'
          },
          {
            property: 'og:title',
            content: 'Home'
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
          },
        ]
      },
      title: ['Welcome', 'UP3D / Digital techology improves life.'],
      body2: {
        card1: {
          title: 'ABOUT UP3D',
          img: require('../img/PC/Commen/aoubt_company.png'),
          message: [
            'UP3D  is a high tech company headquartered in Shenzhen since 2013.',
            'As one of the only few companies in the world that are capable of developing a full dental CAD/CAM solution including software and hardwares.',
            'We are committed to provide our worldwide customers with high quality dental CAD/CAM products to benefit from the digital dental revolution.'
          ],
        },
        card2: {
          title: 'ABOUT UP3D',
          img: require('../img/PC/Commen/aoubt_company.png'),
          message: [
            'UP3D  is a high tech company headquartered in Shenzhen since 2013.',
            'As one of the only few companies in the world that are capable of developing a full dental CAD/CAM solution including software and hardwares.',
            'We are committed to provide our worldwide customers with high quality dental CAD/CAM products to benefit from the digital dental revolution.'],
        }
      },
      body3: {
        cardinfo: [
          {imgurl: require('../img/PC/About/body_scanner_icon.png'), url: '/UP400', name: 'Scanner'},
          {imgurl: require('../img/PC/About/body_design_icon.png'), url: '/UPCAD', name: 'Design'},
          {imgurl: require('../img/PC/About/body_Nesting_icon.png'), url: '/UPCAM', name: 'Nesting'},
          {imgurl: require('../img/PC/About/body_milling_icon.png'), url: '/P53', name: 'Milling'}
        ],
        bgimg: [
          require('../img/PC/About/body_pic2_scanner.jpg'),
          require('../img/PC/About/body_pic2_design_EN.jpg'),
          require('../img/PC/About/body_pic2_nesting_EN.jpg'),
          require('../img/PC/About/body_pic2_milling.jpg'),
        ],
        bgimgPH: [
          require('../img/PC/About/body_pic2_scanner-PH.png'),
          require('../img/PC/About/body_pic2_design-PH.png'),
          require('../img/PC/About/body_pic2_nesting-PH.png'),
          require('../img/PC/About/body_pic2_milling-PH.png')
        ]
      },
      body4: {
        title: 'Team',
        weTeam: [
          // {
          //   info: [
          //     {title: 'name', data: 'YD Liu'},
          //     {title: 'Position', data: 'Marketing director '}
          //   ],
          //   imgUrl: require('../img/PC/About/team_pic/YD.jpg')
          // },
          {
            info: [
              {title: 'Name', data: 'Ryan'},
              {title: 'Position', data: 'Sales Director'}
            ],
            imgUrl: require('../img/PC/About/team_pic/Ryan.jpg')
          },
          {
            info: [
              {title: 'Name', data: 'Men Dalin'},
              {title: 'Position', data: 'Sales Manager'}
            ],
            imgUrl: require('../img/PC/About/team_pic/mendalin.jpg')
          },
          {
            info: [
              {title: 'Name', data: 'Will'},
              {title: 'Position', data: 'Product Manager'}
            ],
            imgUrl: require('../img/PC/About/team_pic/will.jpg')
          },
          {
            info: [
              {title: 'Name', data: 'Yolanda'},
              {title: 'Position', data: 'Sales Manager'}
            ],
            imgUrl: require('../img/PC/About/team_pic/Yolanda.jpg')
          },
          {
            info: [
              {title: 'Name', data: 'Gary'},
              {title: 'Position', data: 'Animator'}
            ],
            imgUrl: require('../img/PC/About/team_pic/Gary.jpg')
          },
          {
            info: [
              {title: 'Name', data: 'Lili'},
              {title: 'Position', data: 'Event Planner'}
            ],
            imgUrl: require('../img/PC/About/team_pic/Lili.jpg')
          },
          {
            info: [
              {title: 'Name', data: 'Niro'},
              {title: 'Position', data: 'Technical Manager'}
            ],
            imgUrl: require('../img/PC/About/team_pic/Niro.jpg')
          },
          {
            info: [
              {title: 'Name', data: 'Zhang Yuxin'},
              {title: 'Position', data: 'Technical Support'}
            ],
            imgUrl: require('../img/PC/About/team_pic/zhangyuxin.jpg')
          },
        ],
      },
      body5: {
        title: 'Our Service',
        list: ['Use our products', 'Country of use', 'We are applying for a patent', 'Our team members'],
      },
      body6: {
        title: 'Future',
        img: require('../img/PC/About/body_pic2.png'),
      },
    },
    //联系我们页面
    Contact: {
      body1: {text: 'Hi', text1: 'Nice to contact you'},
      body2: {
        card1: {
          title: 'Contact Info',
          message: 'UP3D is committed to the development and production of full dental CAD/CAM solution and services. For all questions about UP3D products, please contact us!',
          infor: [
            {
              title: 'Address：',
              informessage: '511 Nanshan Yungu Complex Building,Liuxian Avenue, Nanshan District, Shenzhen',
              iconUrl: require('../img/PC/Contact/address_icon.png'),
              iconClassName: 'long-text-address',
              qrCode: false
            },
            {
              title: 'number：',
              informessage: '+86-755-26983202',
              iconUrl: require('../img/PC/Contact/phone_icon.png'),
              qrCode: false
            },
            {
              title: 'E-mail：',
              informessage: 'info@up3d.cn',
              iconUrl: require('../img/PC/Contact/email_icon.png'),
              qrCode: false
            },
            {
              title: 'Facebook：',
              informessage: 'https://www.facebook.com/up3dscan',
              iconUrl: require('../img/PC/Contact/facebook_icon.png'),
              qrCode: false
            },
          ],
        },
        card2: {
          title: 'Contact Form',
          message: ['Thank you for your interest in UP3D! Please fill in the form and we will contact you in 5-7 business days.'],
        },
        form: {
          Name: '*Name',
          Contant: '*Contant',
          Phone: '*Phone',
          Email: '*Email',
          Company: '*Company',
        },
        submit: 'submit'
      },
      body3: {
        title: 'DIGITAL TECHNOLOGY IMPROVES LIFE'
      }
    },
    //销售团队页面
    SalesTeam: {
      title: 'Sales Team',
      midtext: 'If you have a purchase question to consult, you can contact the sales manager according to your area',
      cardinfo: [
        {
          header: 'East Asia, Southeast Asia, South America',
          name: 'Dragon',
          phone: '+86 13480184747',
          email: 'dragon@up3d.cn'
        },
        {
          header: 'Western Europe, Northern Europe, Mediterranean, Russia, Stan country',
          name: 'Jen',
          phone: '+86 13798433969',
          email: 'Jen@up3d.cn'
        },
        {
          header: 'North America, Eastern Europe, Middle East',
          name: 'Ryan',
          phone: '+86 13423746896',
          email: 'ryan@up3d.cn'
        },
      ]
    },
    //个人页面
    Member: {
      userinfo: {
        form: [
          {name: 'name', alarm: 'please input', type: 'readonly'},
          {name: 'Emali', alarm: 'please input', type: 'readonly'},
          {name: 'Phone', alarm: 'please input', type: 'readonly'},
          {name: 'Company', alarm: 'please input', type: 'readonly'},
          {name: 'Career', alarm: 'please input', type: 'readonly'},
          {name: 'Contry', alarm: 'please input', type: 'readonly'},
          {name: 'City', alarm: 'please input', type: 'readonly'},

        ],
        error: {
          empty: 'please input',
          email_exit: 'email is not exit',
          password_notright: 'passwork is not right',
          type_error: 'type error'
        },
        button: ['EDIT', 'SAVE', 'CANCEL']
      }

    },
    //登陆页面
    Login: {
      title: ['Sign up', 'Register'],
      form: [{name: 'Email', alarm: 'Please input', type: ''},
        {name: 'Password', alarm: 'Please input', type: 'password'}
      ],
      error: {
        empty: 'Please input',
        email_exit: 'email is not exit',
        password_notright: 'passwork is not right',
        type_error: 'type error'
      },
      Forget: 'forget password？',
      buttom: 'Sign up'
    },
    //注册页面
    Register: {
      title: ['Sign up', 'Register'],
      form: [{name: 'Email', alarm: 'Please input'},
        {name: 'Phone', alarm: 'Please input'},
        {name: 'Password', alarm: 'Please input'},
        {name: 'Confirm Passord', alarm: 'Please input'},
      ],
      error: {
        empty: 'Please input',
        email_exit: 'email is not exit',
        password_notright: 'passwork is not right',
        type_error: 'type error'
      },
      buttom: 'Submit'

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
        empty: 'Please input',
        email_exit: 'email is not exit',
        password_notright: 'passwork is not right',
        type_error: 'type error'
      },
      getcode: 'GET CODE',
      buttom: 'Submit'
    },

    //解决方案
    Solution: {
      banner: {
        imgSrc: require('../img/PC/Solution/banner.gif')
      },
      mid_title: {
        HTitle: 'FULL DENTAL CAD/CAM SOLUTION'
      },
      main: {
        cardList: [
          {
            title: 'Zirconia',
            info: [
              require('../img/PC/Solution/UP400.jpg'),
              require('../img/PC/Solution/UPCAD-P53.jpg'),
              require('../img/PC/Solution/UPCAM-P53.jpg'),
              require('../img/PC/Solution/P53.jpg'),
            ]
          },
          {
            title: 'Glass ceramic',
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
        // videoSrc: require('../../assets/video/P53/P53_CN.mp4'),
        videoSrc: 'https://www.youtube.com/embed/ILYSvzDwnN0',
        videoBg: require('../../assets/img/PC/Solution/video_bg.jpg')
      }
    },

    //新闻页面
    News: {
      banner: {
        time: '',
        title: 'The new upgrade dental CAD/CAM solution',
        imgUrl: require('../img/PC/News/banner_PC.png')
      },
      //news_list并没有用到，目前/News页推荐咨询获取到的是CompanyNews中的前两条
      news_list: {
        title: '',
        more: {message: 'more', href: ''},
        news_card: [
          {
            time: '',
            name: '',
            imgUrl: '',
            href: ''
          }
        ]
      },
      //active_list并没有用到，目前/News页推荐活动获取到的是CompanyActivities中的前两条
      active_list: {
        title: '',
        more: {message: 'more', href: ''},
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
        title: 'The new upgrade dental CAD/CAM solution',
        imgUrl: require('../img/PC/News/banner_PC.png')
      },
      news_list: {
        title: 'Company News',
        more: {message: 'more', href: ''},
        news_card: [
          {
            time: '&nbsp',
            name: 'About-P53',
            imgUrl: require('../img/PC/index/blog/EN/P53.jpg'),
            url: '/P53-article',
            LinkTarget: ''
          },
          {
            time: '&nbsp',
            name: 'One-step digital production of partial framework --EXOCAD',
            imgUrl: require('../img/PC/News/CompanyNew_Blog/exocad_article/banner.png'),
            url: '/exocad-article',
            LinkTarget: ''
          },
          {
            time: '&nbsp',
            name: 'UP3D Nesting Software Upgrade',
            imgUrl: require('../img/PC/News/CompanyNew_Blog/UPCAM_article/pic1.jpg'),
            url: '/UPCAM-article',
            LinkTarget: ''
          },
        ]
      },
    },

    //    /NewsBlog1
    NewsBlog1: {
      banner: {
        link1: 'News',
        link2: 'CompanyNews',
        link2Url: '/CompanyNewsPage',
        title: 'About UP3D',
        sort: 'CompanyNews？',
        author: 'UP3D',
        date: '2021-6-9',
        imgUrl: require('../img/PC/Product/banner_PC.png')
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
        link1: 'News',
        link2: 'CompanyNews',
        link2Url: '/CompanyNewsPage',
        title: 'About UP3D',
        sort: 'CompanyNews？',
        author: 'UP3D',
        date: '2021-6-9',
        imgUrl: require('../img/PC/Product/banner_PC.png')
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
        title: 'The new upgrade dental CAD/CAM solution',
        imgUrl: require('../img/PC/News/banner_PC.png')
      },
      active_list: {
        title: 'Company Activities',
        more: {message: 'more', href: ''},
        active_card: [
          {
            time: 'IDS',
            name: 'Join us at IDS 2021 – on-site or online!',
            imgUrl: require('../img/PC/index/exh/EN/IDS.jpg'),
            url: '/ids-article',
            LinkTarget: ''
          },
          {
            time: 'labDay',
            name: 'Join us at labday west 2021.',
            imgUrl: require('../img/PC/index/exh/EN/LABDAY.jpg'),
            url: '/labday-article',
            LinkTarget: ''
          },
        ]
      }
    },
    //产品主页
    Product: {
      banner: {
        title: '----UPCAM',
        content: 'Dental CAM Software',
        imgUrl: require('../img/PC/Product/banner_PC.png'),
        imgUrlPH: require('../img/PC/Product/banner-PH.jpg')
      },
      body1: {
        big_title: 'SCANNER',
        card: [
          {
            small_title: 'UP400',
            content1: 'High-speed model scanner',
            content2: '',
            bt1: 'Learn More',
            url1: '/UP400',
            bt2: 'Buy Now',
            url2: '/SALES',
            img: require('../img/PC/index/productlist/UP400_EN.png')
          },
          {
            small_title: 'UP560',
            content1: 'Ultra-high speed, true color texture',
            content2: '',
            bt1: 'Learn More',
            url1: '/UP560P',
            bt2: 'Buy Now',
            url2: '',
            img: require('../img/PC/index/productlist/UP560.png')
          },],
      },
      body2: {
        big_title: 'DESIGN',
        content1: 'UPCAD',
        content2: 'Let\'s design easily and efficienty',
        bt1: 'Learn More',
        url1: '/UPCAD',
        bt2: 'Buy Now',
        url2: '',
        img: require('../img/PC/Product/body_pic2_2.png')
      },

      body3: {
        big_title: 'NESTING',
        content1: 'UPCAM',
        content2: 'Independent research and development by UP3D\n' +
          'Dental milling solution\n' +
          'Operate with simplicity,streamline,automation',
        bt1: 'Learn More',
        url1: '/UPCAM',
        bt2: 'Buy Now',
        url2: '',
        img: require('../img/PC/Product/body_pic3_1.png')
      },

      body4: {
        big_title: 'MILLING',
        card: [
          {
            small_title: 'P53',
            content1: 'Smart dental 5-axis milling machine',
            content2: '',
            bt1: 'Learn More',
            url1: '/P53',
            bt2: 'Buy Now',
            url2: '',
            img: require('../img/PC/index/productlist/P53_EN.png')
          },
          {
            small_title: 'P41',
            content1: '4-axis Wet Dental Mill',
            content2: '',
            bt1: 'Learn More',
            url1: '/P41',
            bt2: 'Buy Now',
            url2: '',
            img: require('../img/PC/index/productlist/P41_EN.png')
          },],
      },
    },

    //产品详情页面
    //UPCAM
    UPCAM: {
      banner: {title: 'Dental CAM Software', content: '----UPCAM'},
      body1: {
        big_title: 'Nesting | UPCAM',
        big_content: 'UPCAM is a dental CAM software which is developed by UP3D and ModuleWorks from Germany. (ModuleWorks is one of the most advanced CAM core algorithm supplier in the world). UPCAM supports all types of tooth restoration processing, and has a variety of calculation strategies to ensure the calculation quality of each type of restoration. ',
        message: [{title: 'Quality assurance<br>(Germany Core)'}, {title: 'Easy operation'}, {title: 'Fast calculation'}]
      },

      body2: {title: 'UPCAM software', content: 'Compatible with up3d smart milling machine P4, P5, P52, P41.'},
      body3: {
        title: 'Compatibie with all dental prosthesis',
        message: [{content: 'In order to assure the milling quality, UPCAM will set up different straegies for corresponding prosthesis.'},
          {content: '(Coping, crown, long-bridge, inlay/onlay, post and core, veneer, telescopic crown, customized abutment, implant bar, sugical guide, bite splint, partial denture, full month denture base, dental model, etc.)'},
          {content: ''}]
      },
      body4: {
        title: 'Highly efficient use of materials',
        content: 'Minimize the demand for material<br>high while avoiding undercut'
      },
      body5: {
        title: 'Compatibie with all output formats', content: 'Highly compatible with the open STL data from main dental CAD software<br>\
                                                (such as UP3D,3shape, exocad, DENTAL WINGS, EGS, SMART OPTIC, etc.) and mill.<br>\
                                                 UPCAM can customized according to the customers\'requirement.'
      },
    },
    //P52
    P52: {
      banner: {
        title: 'P52',
        content: 'Smart dental 5-axis milling machine',
        imgSrc: require('../img/PC/Product/product_info/P52/banner_EN.png')
      },
      body1: {
        end_text: 'P52',
        big_title: '5 AXIS SMART <br>DENTAL MILLING <br>MACHIINE ',
        message: [{
          title: 'Independent R&D',
          content: 'All hardware and software are<br>developed by Up3d. Intelligent control<br>system perfectly merged with<br>one-piece framework structure.'
        },
          {
            title: 'HTTP/RESUME',
            content: 'Automatically continue mill from the last interrupt step,<br>avoiding repeated work  and<br>improving work efficiency by 80% '
          },
          {
            title: 'Smart initialization',
            content: 'The first milling machine with<br>automatic calibration and smart<br>initialization'
          },
          {title: 'Tools library', content: '11 tools, change the material fast'}]
      },
      body2: {
        title: '5 axis simultaneous milling',
        content: 'Special material-saving processing strategy and nesting method,<br>zirconia disk C-clamp mode'
      },
      body3: {
        title: 'Auto calibration',
        content: 'The most convenient and smart control system among the dental milling machines'
      },
      body4: {title: 'Cast framework in one piece', content: 'Portable, precise and great durability'},
      body5: {
        message: [
          {
            title: 'UPCAM software',
            content: 'Compatible with up3d smart milling machine P4, P5.'
          },
          {
            title: 'UPCNC software ',
            content: 'One interface for multi-mills, easy to operate and one-click milling.'
          },
        ]
      },
      body6: {title: 'Wide application', content: 'Support multiple restoration cases'},
      body7: {
        media: {
          videoSrc: require('../../assets/video/P52/P52_EN.mp4'),
          videoBg: require('../../assets/img/PC/Product/product_info/P52/banner_EN.png')
        }

      },
      body8: {
        title: 'PRODUCT PARAMETERS',
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
          'Model',
          'Dimension',
          'Weight',
          'Input voltage',
          'Max power',
          'S[indle power',
          'Axis',
          'Milling range',
          'Milling mode',
          'Max rotate speed',
          'Max feed rate',
          'Tools library',
          'Tools changing',
          'Spindle cooling',
          'Milling materials',
          'Milling time',
          '<br>',
          'Tools diameter'
        ],
        right_text: [
          'P52',
          '620×430×560(mm)',
          '79Kg',
          'AC 100~235V、50~60Hz ',
          '0.8KW ',
          '0.52KW(max)',
          '5-axis simultaneous motion',
          'X/Y/Z:165/135/70mm  A:±30° B:360°',
          'Dry milling',
          '40,000~60,000rpm',
          '3000mm/min',
          ' 11',
          ' Automatic(Air pressure>0.5MPa)',
          'Air compression(Air pressure 0.25~0.35MPa)',
          'Zirconia,Wax,PMMA,PEEK and soft materials',
          'Coping:Zirconia-10min Wax-4.5min',
          'Crown:Zirconia-13min Wax-5.5min',
          '2 + 1 + 0.6(Φ4)'
        ]
      }
    },
    //P41
    P41: {
      banner: {
        title: 'P41',
        content: '4-axis Wet Dental Mill',
        imgSrc: require('../img/PC/Product/product_info/P41/P41_banner_EN.png')
      },
      body1: {
        introTitle: 'Powerful grinding machine',
        introContent: 'supports grinding of multiple materials and a wide application of restorations.',
        intro_list: [
          {
            imgUrl: require('../img/PC/Product/product_info/P41/P41_body_pic19.png'),
            title: 'Crown',
            content: 'Glass ceramic'
          },
          {
            imgUrl: require('../img/PC/Product/product_info/P41/P41_body_pic16.png'),
            title: 'Bridge',
            content: 'Glass ceramic'
          },
          {
            imgUrl: require('../img/PC/Product/product_info/P41/P41_body_pic17.png'),
            title: 'Veneers',
            content: 'Glass ceramic'
          },
        ]
      },
      body2: {
        imgUrl: require('../img/PC/Product/product_info/P41/P41_body_pic8.png'),
        title: 'Grinding 3 blocks',
        content: 'At the same time'
      },
      body3: {
        imgUrl: require('../img/PC/Product/product_info/P41/P41_body_pic9.png'),
        title: '6 tool magazines for automatic tool change',
        content: 'Two sets of different types of tools can be preset'
      },
      body4: {
        imgUrl: require('../img/PC/Product/product_info/P41/P41_body_pic10.png'),
        imgUrlPH: require('../img/PC/Product/product_info/P41/body4_PH_EN.jpg'),
        title: 'Small in size',
        content: 'space saving, to realize true “desktop” restoration.'
      },
      body5: {
        imgUrl: require('../img/PC/Product/product_info/P41/P41_body_pic5.png'),
        message: [
          {
            title: 'UPCAM software',
            content: 'Compatible with up3d smart milling machine P4, P5.',
            imgUrlPH: require('../img/PC/Product/product_info/P41/body5_pic1.jpg'),
          },
          {
            title: 'UPCNC software',
            content: 'One interface for multi-mills, easy to operate and one-cllick milling.',
            imgUrlPH: require('../img/PC/Product/product_info/P41/body5_pic2.jpg'),
          },
        ]
      },
      body6: {
        imgUrl: require('../img/PC/Product/product_info/P41/P41_body_pic11.png'),
        title: [
          'Veneers', 'Onlay', 'Crown', 'Bridge'
        ]
      },
      body7: [
        {
          left: {
            head_intro: {title: 'Milling/Grinding', product: 'P41'},
            left_img: [
              require('../img/PC/Product/product_info/P41/P41_body_pic18.png'),
              require('../img/PC/Product/product_info/P41/P41_body_pic1.png')
            ]
          },
          right: {
            head_intro: {sort: 'Application', title: 'Veneer glass ceramic'},
            right_list: [
              {
                title: 'Desktop scanner',
                product: 'UP560',
                imgUrl: require('../img/PC/Product/product_info/P41/P41_body_pic13.png')
              },
              {
                title: 'Design software',
                product: 'UPCAD',
                imgUrl: require('../img/PC/Product/product_info/P41/P41_body_pic6.png')
              },
              {
                title: 'Nesting software',
                product: 'UPCAM',
                imgUrl: require('../img/PC/Product/product_info/P41/P41_body_pic7.png')
              }
            ]
          },
          prompt: '(Swipe to see more)'
        },
        {
          left: {
            head_intro: {title: 'Milling/Grinding', product: 'P41'},
            left_img: [
              require('../img/PC/Product/product_info/P41/P41_body_pic2.png'),
              require('../img/PC/Product/product_info/P41/P41_body_pic3.png')
            ]
          },
          right: {
            head_intro: {sort: 'Application', title: 'Abutment+Glass ceramic crown'},
            right_list: [
              {
                title: 'Desktop scanner',
                product: 'UP560',
                imgUrl: require('../img/PC/Product/product_info/P41/P41_body_pic14.png')
              },
              {
                title: 'Design software',
                product: 'UPCAD',
                imgUrl: require('../img/PC/Product/product_info/P41/P41_body_pic4.png')
              },
              {
                title: 'Nesting software',
                product: 'UPCAM',
                imgUrl: require('../img/PC/Product/product_info/P41/P41_body_pic15.png')
              }
            ]
          },
          prompt: '(Swipe to see more)'
        }
      ],
      body8: {
        media: {
          videoSrc: require('../../assets/video/P41/P41_EN.mp4'),
          videoBg: require('../../assets/img/PC/Product/product_info/P41/P41_body_pic10.png')
        }
      },
      body9: {
        parameter: [
          {title: 'Model', content: 'P41'},
          {title: 'Max spindle speed', content: '60,000rpm'},
          {title: 'Dimension', content: '520×420×560（mm）'},
          {title: 'Max feed rate', content: '3000mm/min'},
          {title: 'Weight', content: '70Kg'},
          {title: 'Tool capacity', content: '6'},
          {title: 'Input voltage', content: 'AC 100~235V、50~60Hz'},
          {title: 'Tools changing', content: 'Automatic（air pressure>0.45MPa）'},
          {title: 'Max power', content: '0.9KW'},
          {title: 'Spindle cooling', content: 'air compression（air pressure0.25~0.35MPa）'},
          {title: 'Spindle power', content: '0.8KW'},
          {title: 'Miling', content: 'Glass ceramic、 Pre-milled titanium blank'},
          {title: 'Axis ', content: '4 axis'},
          {title: 'Miling time', content: 'crown：Glass ceramic 20min'},
          {title: 'Milling range', content: 'X/Y/Z：130/75/65.5mm  A：±360°'},
          {title: '', content: 'Veneer：Glass ceramic 18min'},
          {title: 'Milling mode', content: 'Wet milling'},
          {title: 'Tools diameter', content: '2.5+1+0.6（Glass ceramic)3+2+1.5（ Pre-milled titanium blank）'},
        ]
      }
    },
    //P5
    P5: {
      banner: {title: 'P5', content: '5 axis smart dental milling machiine'},
      body1: {
        message: [{
          title: 'Smart initialization',
          content: 'The first milling machine with automatic<br>calibration and smart initialization'
        },
          {
            title: 'Independent R&D', content: 'All hardware and software are developed by Up3d.<br>\
                        Intelligent control system perfectly merged with<br>\one-piece framework structure.'
          },
          {title: 'Tools library', content: '11 tools, change the material fast'},
          {
            title: 'HTTP/RESUME', content: 'Automatically continue mill from the last interrupt step,<br>\
                        avoiding repeated work  and improving work efficiency by 80% '
          }]
      },
      body2: {
        title: '5 axis simultaneous milling',
        content: 'Special material-saving processing strategy and nesting method,<br>zirconia disk C-clamp mode'
      },
      body3: {
        title: 'Auto calibration',
        content: 'The most convenient and smart control system among<br>the dental milling machines'
      },
      body4: {title: 'Cast framework in one piece', content: 'Portable, precise and great durability'},
      body5: {
        imgUrl: require('../img/PC/Product/product_info/P5/P41_body_pic5.png'),
        message: [
          {
            title: 'UPCAM software',
            content: 'Compatible with up3d smart milling machine P4, P5.',
            imgUrlPH: require('../img/PC/Product/product_info/P5/body5_pic1.jpg'),
          },
          {
            title: 'UPCNC software',
            content: 'One interface for multi-mills, easy to operate and one-cllick milling.',
            imgUrlPH: require('../img/PC/Product/product_info/P5/body5_pic2.jpg'),
          },
        ]
      },
      body6: {title: 'Cast framework in one piece', content: 'Portable, precise and great durability'},
      body7: {
        videoSrc: require('../../assets/video/P52/P52_EN.mp4'),
      },
      body8: {
        title: 'PRODUCT PARAMETERS',
        parameter: [
          {title: 'Model', content: 'ToolsP5'},
          {title: 'Dimension', content: '620×430×560（mm）'},
          {title: 'Weight', content: '72Kg'},
          {title: 'Input voltage', content: 'AC 100~235V、50~60Hz'},
          {title: 'Max power', content: '0.8KW'},
          {title: 'Spindle power', content: '0.52KW（max）'},
          {title: 'Axis', content: '5-axis simultaneous'},
          {title: 'Milling range', content: 'X/Y/Z：165/135/70mm  A：±30° B：360°'},
          {title: 'Milling mode', content: 'Dry milling'},
          {title: 'Max rotate speed', content: '40,000~60,000rpm'},
          {title: 'Max feed rate', content: '3000mm/min'},
          {title: 'Tool capacity', content: '11'},
          {title: 'Tools changing ', content: 'Automatic (air pressure>0.5 MPa)'},
          {title: 'Spindle cooling', content: 'Air cooling'},
          {title: 'Milling materials', content: 'Zirconia, wax, PMMA, wood'},
          {title: 'Milling time', content: 'Zirconia(Coping)：13min、wax：4.5min'},
          {title: '', content: 'Zirconia(Crown)：14min、wax：5.5min'},
          {title: 'Tools', content: '2+1+0.6mm,Φ4'},
        ],
        left_text: ['Model', 'Dimension', 'Weight', 'Input voltage', 'Max power',
          'Spindle power', 'Axis', 'Milling range', 'Milling mode', 'Max rotate speed',
          'Max feed rate', 'Tool capacity', 'Tools changing', 'Spindle cooling', 'Milling materials',
          'Milling time', '<br>', 'Tools'],
        right_text: ['ToolsP5', '620×430×560（mm）', '72Kg', 'AC 100~235V、50~60Hz ', '0.8KW ', '0.52KW（max）',
          '5-axis simultaneous', 'X/Y/Z：165/135/70mm  A：±30° B：360°', 'Dry milling', '40,000~60,000rpm',
          '3000mm/min', ' 11', ' Automatic (air pressure>0.5 MPa)', 'Air cooling ', ' Zirconia, wax, PMMA, wood',
          'Zirconia(Coping)：13min、wax：4.5min ', 'Zirconia(Crown)：14min、wax：5.5min', '2+1+0.6mm,Φ4 ']
      }
    },
    //UP300P
    UP300P: {
      banner: {title: 'UP300+', content: 'high speed scanner fully upgrade'},
      body1: {
        title: 'All-in-one model scan',
        content: 'Comparing with traditional scan method，UP300+ will cut off 50% of your work time by scaning a quadrant with two steps only.'
      },
      body2: {
        title: 'Unsectioned model san',
        content: 'Triple tray scan with a single click\n' +
          'With one click,users can finish all the triple tray scan without flipping the impression.\n' +
          'This scan feature, combined with 3D printing technology perfectly improves the work efficiency of triple tray cases.'
      },
      // body3: {
      //   title: 'High definition cameras',
      //   content: 'Scan result comparison:2.0mp VS 1.3mp',
      //   card_content: ['UP360+', 'Traditional scanner']
      // },
      body3: {
        title: '', content: 'problems scanning <br> a narrow interproximal gap？<br> Try UP300+',
        videoSrc: require('../../assets/video/UP560/UP560_EN.mp4'),
        videoBg: require('../../assets/img/PC/Product/product_info/UP300P/banner.png')
      },
      body4: {
        title: 'parameter',
        left_text: [
          'Size',
          'Technology',
          'Weight',
          'Camera',
          'Projector',
          'Interface',
          'Input',
          'Precision',
          'Output'
        ],
        right_text: [
          '300*300*400（mm）',
          'Structure blue light',
          '10kg',
          '2*1.3（MP）High frame rate',
          'Customized blue-light / support multi-color scanning',
          'USB 3.0',
          'AC 110-220V,50HZ',
          '<10μm',
          'STL/PLY/UM/OB',
        ]
      }
    },
    //UP300E
    UP300E: {
      banner: {title: 'UP300e', content: 'The most economical scanner for you'},
      body1: {title: 'High Speed', content: ['29"', '12 unti multi-dies scan']},
      body2: {title: '', content: ['29"', '12 unti multi-dies scan']},
      body3: {title: '', content: 'problems scanning <br> a narrow interproximal gap？<br> Try UP360+'},
      body4: {
        title: 'parameter',
        left_text: [
          'Size',
          'Weight',
          'Scan range',
          'Scanning mode',
          'Camera',
          'Projector',
          'Interface',
          'Power supply',
          'Speed',
          'Precision',
          'automation',
          'Output formats',
        ],
        right_text: [
          '300*330*400（mm）',
          '10kg',
          '100*100*75（mm）',
          'non contact blue light scanner',
          '2*1.3MP',
          'Customized blue-light, support multi-color scanning',
          'USB 3.0',
          'AC110-220V，50HZ',
          'multi-die scan：20s Model scanning：25s',
          '<10μm',
          'Automatic registration and intelligent hole filling\n',
          'STL；UM；PLY；OBJ',
        ]
      }
    },
    //UPCAD
    UPCAD: {
      banner: {title: 'Dental CAD Software', content: 'UPCAD'},
      body1: {title: '', content: ['Coping', 'Crown (Bridge)', 'Veneer', 'lnlay/Onlay']},
      body2: {title: '', content: ''},
      body3: {
        title: 'High efficient order mangement',
        content: 'Effectively using the resources in different computers by real-time order sharing',
        imgSrc: require('../img/PC/Product/product_info/UPCAD/body_pic2.png')
      },
      body4: {
        title: 'Automatic process',
        content: 'auto guidance,easy and intuitive for new users to learn',
        imgSrc: require('../img/PC/Product/product_info/UPCAD/body_pic3.png')
      },
      body5: {
        title: 'Complete background parameter setting',
        content: 'You can set parameters in background and use them in design process to improve the design speed according to different materials and restoration tupes.'
        , imgSrc: require('../img/PC/Product/product_info/UPCAD/body_pic4.png')
      },
      body6: {
        card: [{
          title: 'Various and customized database',
          content: 'containing various tooth shape data and<br>it is free users to create customized<br>database by scanning or sculpting. <br>'
        },
          {
            title: 'Single crown module',
            content: 'Users can create anatomical single crown<br>according to the scanning model shape,<br>either using the original tooth anatomical<br>state, or using the data in tooth.'
          },
          {
            title: 'Bridge module',
            content: 'Users can create anatomical bridge<br>and place the teeth automatically.'
          }],
      },
      body7: {
        title: 'Undercut processing',
        content: 'The software can automatically detect and fill the undercut,\n' +
          'Prevent inaccuracies in manual filling,\n' +
          'Save the time for manual processing of undercuts, and the operation is more intelligent!'
      },
      body8: {title: 'More modules are coming soon...', content: ['Ortho', 'lmplant']},

    },
    //UP560
    UP560: {

      banner: {
        title: 'UP560',
        content: 'Ultra-high speed, true color texture',
        imgSrc: require('../../assets/img/PC/Product/product_info/UP560/UP560_banner_EN.png')

      },

      body1: {
        title: ['about', 'UP560'],
        content: 'UP560 achieves new upgrade based on UP360 series,with dual 3 megapixels cameras (high frame rate), realizes faster and clearer capture image, and provides more efficient and accurate data for the digital dental industry.',
      },

      body2: {
        title: 'High Speed',
        name: ['Triple tray', '12 unti multi-dies scan', 'All-in-one', 'Full arch'],
      },

      body3: {
        title: 'Camera upgrade',
        content: 'Dual 2.0 MP (High frame rate)',
      },

      body4: {
        title: 'Open system',
        content: 'Compatible .ply format file, import true color texture file to 3shape and Exocad system directly',
      },

      body5: {
        title: 'Color texture',
        content: [
          {
            name: 'plaster model',
            bg: '01',
            imgUrl: require('../img/PC/Product/product_info/UP560/body_pic5.png')
          },
          // {
          //   name: 'UP560 scan data',
          //   bg: '02',
          //   // imgUrl: require('../img/PC/Product/product_info/UP560/body_pic6.png')
          //   imgUrl: ''
          // },
          {
            name: 'UP560 scan data',
            bg: '02',
            imgUrl: require('../img/PC/Product/product_info/UP560/body_pic7.png')
          }
        ],
      },

      body6: {
        title: 'Wide Applications',
        content: [
          'Veneer model,',
          ' implant model, uncut model,',
          ' and regular cut model, impressions'],
      },
      body7: {
        media: {
          videoSrc: require('../../assets/video/UP560/UP560_EN.mp4'),
          videoBg: require('../../assets/img/PC/Product/product_info/UP560/UP560_banner_EN.png')
        }
      },
      body8: {
        title: 'parameter',
        left_text: [
          'Model',
          'Size',
          'Weight',
          'Camera',
          'Accuracy',
          'Project',
          'Interface',
          'Output formats',
          'Power supply',
          'Functions',
          'Full arch',
          '12-units die',
          'All-in-one',
          'Triple tray'
        ],
        right_text: [
          'UP560',
          '305*310*550（mm',
          '14kg',
          '2x2.0mp',
          '＜6 microns',
          'Customized Blue-light / Multi-color scanning',
          'USB 3.0',
          'STL ; UM ; PLY ; OBJ ',
          'AC110-240V , 50HZ',
          'All-in-one scan <br>' +
          'One click scanning triple tray <br>' +
          'Detect margin line <br>' +
          'True color texture scan <br>' +
          'Impression scan <br>' +
          'Unsectioned models scan <br>',
          '15s',
          '29s',
          '18s',
          '90s',
        ]
      }
    },
    //UP360P
    UP360P: {
      banner: {title: 'UP360+', content: 'The world\'s first specialized uncut-model scanner'},
      body1: {title: 'Camera', content: '2*2.0（MP）High frame rate'},
      body2: {title: 'High Speed', content: ['Triple tray', '12 unti multi-dies scan', 'All-in-one', 'Model scaning']},
      body3: {
        title: 'Scan without blind angle',
        content: 'Scan result comparison:2.0mp VS 1.3mp',
        card_content: ['UP360+', 'Traditional scanner']
      },
      body4: {
        title: 'Full arch implants scaned in a single step',
        content: 'Scan result comparison:2.0mp VS 1.3mp',
        card_content: ['UP360+', 'Traditional scanner']
      },
      body5: {
        title: '', content: ['problems scanning', 'a narrow interproximal gap？', 'Try UP360+'],
        media: {
          videoSrc: require('../../assets/video/UP560/UP560_EN.mp4'),
          videoBg: require('../../assets/img/PC/Product/product_info/UP360P/banner.png')
        }

      },
      body6: {
        title: 'parameter',
        left_text: [
          'Dental scanner',
          'Size',
          'Technology ',
          'Weight',
          'Camera',
          'Projector',
          'Interface',
          'Input ',
          'Precision ',
          'Output ',
        ],
        right_text: [
          'UP360+',
          '300×300×400（mm）',
          'Structure blue light',
          '14kg',
          '2*2.0 (MP)',
          'Customized blue light',
          'USB 3.0',
          'AC 110-220V,50HZ',
          '6μm',
          'STL/PLY/UM/OB',
        ]
      }
    },
    //UP400
    UP400: {
      banner: {
        title: 'UP400',
        content: 'High-speed model scanner',
        imgSrc: require('../../assets/img/PC/Product/product_info/UP400/UP400_Banner_EN.png')
      },
      body1: {
        tpInfoTitle: 'Full arch',
        infoImg: require('../../assets/img/PC/Product/product_info/UP400/UP400_pic2.svg'),
        infoTitle: 'High Speed',
        infoCard: [
          {
            title: '70\'\'',
            content: 'Triple tray',
            imgUrl: require("../../assets/img/PC/Product/product_info/UP400/info_pic1.svg")
          },
          {
            title: '24\'\'',
            content: '12 unti multi-dies scan',
            imgUrl: require("../../assets/img/PC/Product/product_info/UP400/info_pic2.svg")
          },
          {
            title: '16\'\'',
            content: 'All-in-one',
            imgUrl: require("../../assets/img/PC/Product/product_info/UP400/info_pic3.svg")
          },
          {
            title: '12\'\'',
            content: 'Full arch',
            imgUrl: require("../../assets/img/PC/Product/product_info/UP400/info_pic4.svg")
          },
        ]
      },
      body2: {
        title: 'Camera',
        content: '2*1.3（MP）'
      },
      body3: {
        title: 'All-in-one model scan',
        content: 'Comparing with traditional scan method, UP400 will cut off 50% of your work time by scaning a quadrant with two steps only.'
      },
      body4: {
        media:{
          videoSrc: require('../../assets/video/UP400/UP400_CN.mp4'),
          videoBg: require('../../assets/img/PC/Product/product_info/UP400/UP400_video_EN.jpg')
        }
      },
      body5: {
        title: 'parameter',
        left_text: [
          'Model',
          'Size',
          'Weight',
          'Camera',
          'Accuracy',
          'Project',
          'Interface',
          'Output formats',
          'Power supply',
          'Functions',
          'Full arch',
          '12-units die',
          'All-in-one',
          'Triple tray'
        ],
        right_text: [
          'UP400',
          '355 × 268 × 384 （ m m ）',
          '9.5kg',
          '2*1.3 （ M P ）',
          '＜ 10 microns ',
          'Customized blue light / Multi-color scanning',
          'USB 3.0',
          'STL ; UM ; PLY ; OBJ ',
          'AC110-240V , 50HZ',
          'All-in-one scan <br>' +
          'One click scanning triple tray <br>' +
          'Detect margin line <br>' +
          'True color texture scan <br>' +
          'Impression scan <br>' +
          'Unsectioned models scan <br>',
          '12s',
          '24s',
          '16s',
          '70s',
        ]
      }
    },
    //P53
    P53: {
      banner: {
        title: 'P53',
        content: 'Smart dental 5-axis milling machine',
        imgSrc: require('../../assets/img/PC/Product/product_info/P53/P53_Banner_EN.png'),
        imgSrcPH: require('../../assets/img/PC/Product/product_info/P53/PH-product-P53-EN.jpg')
      },
      body1: {
        message: [
          {
            title: 'Full CAD/CAM hardware and software are developed by UP3D',
            content: 'All software and hardware are independently developed by UP3D with core technology, intelligent control systemgf and a perfect combination of integrated.',
            imgUrl: require("../img/PC/Product/product_info/P53/P53_12.png")
          },
          {
            title: 'Intelligent initialization',
            content: 'The first milling machine with fully automatic calibration and intelligent initialization in China.',
            imgUrl: require("../img/PC/Product/product_info/P53/P53_17.png")
          },
          {
            title: 'RESUME',
            content: 'Avoiding repeated work, increasing 80% of your working efficiency.',
            imgUrl: require("../img/PC/Product/product_info/P53/P53_15.png")
          },
          {
            title: 'Simple installation',
            content: 'DIY installation needs only 10 mins.',
            imgUrl: require("../img/PC/Product/product_info/P53/P53_13.png")
          },
          {
            title: 'Remote connection',
            content: 'One platform controls full process machines, and enables to real-time monitoring the production status of multiple machines.',
            imgUrl: require("../img/PC/Product/product_info/P53/P53_16.png")
          },
          {
            title: 'LED light progress bar',
            content: 'Machine will display the processing progress.   Reduce personnel inspection time.',
            imgUrl: require("../img/PC/Product/product_info/P53/P53_14.png")
          }
        ]
      },
      body2: {
        title: 'Help the mass production',
        content: 'Can control multiples dental milling machines simultaneously'
      },
      body3: {
        title: 'Auto calibration',
        content: 'The most convenient and smart control system among the dental milling machines'
      },
      body4: {
        title: 'Cast framework in one piece',
        content: 'Portable, precise and great durability'
      },
      body6: {
        title: 'Wide application',
        content: 'Support multiple restoration cases'
      },
      body7: [
        {
          left: {
            head_intro: {title: 'Milling/Grinding', product: 'P53'},
            left_img: [
              require('../img/PC/Product/product_info/P53/P53_3.png'),
              require('../img/PC/Product/product_info/P53/P53_18.png')
            ]
          },
          right: {
            head_intro: {sort: 'Application', title: 'Zirconia bridge'},
            right_list: [
              {
                title: 'Desktop scanner',
                product: 'UP400',
                imgUrl: require('../img/PC/Product/product_info/P53/P53_9.png')
              },
              {
                title: 'Design software',
                product: 'UPCAD',
                imgUrl: require('../img/PC/Product/product_info/P53/P53_11.png')
              },
              {
                title: 'Nesting software',
                product: 'UPCAM',
                imgUrl: require('../img/PC/Product/product_info/P53/P53_10.png')
              }
            ]
          },
          prompt: '(Swipe to see more)'
        },
      ],
      body8: {
        media:{
          videoSrc: require('../../assets/video/P53/P53_CN.mp4'),
          videoBg: require('../../assets/img/PC/Product/product_info/P53/P53_video_EN.jpg')
        }
      },
      body9: {
        title: 'PRODUCT PARAMETERS',
        parameter: [
          {title: 'Model', content: 'P53'},
          {title: 'Dimension', content: '620×430×560（mm）'},
          {title: 'Weight', content: '72Kg'},
          {title: 'Input voltage', content: 'AC 100~235V、50~60Hz'},
          {title: 'Max power', content: '0.8KW'},
          {title: 'Spindle power', content: '0.52KW（max）'},
          {title: 'Axis', content: '5-axis simultaneous'},
          {title: 'Milling range', content: 'X/Y/Z：165/135/70mm  A：±30° B：360°'},
          {title: 'Milling mode', content: 'Dry milling'},
          {title: 'Max rotate speed', content: '40,000~60,000rpm'},
          {title: 'Max feed rate', content: '3000mm/min'},
          {title: 'Tool capacity', content: '11'},
          {title: 'Tools changing', content: 'Automatic (air pressure>0.5 MPa)'},
          {title: 'Spindle cooling', content: 'Air cooling'},
          {title: 'Milling materials', content: 'Zirconia, wax, PMMA, wood'},
          {title: 'Milling time', content: 'Zirconia(Coping)：13min、wax：4.5min'},
          {title: '', content: 'Zirconia(Crown)：14min、wax：5.5min'},
          {title: 'Tools', content: '2+1+0.6mm,Φ4'},
        ],
        left_text: [
          'Model',
          'Dimension',
          'Weight',
          'Input voltage',
          'Max power',
          'Spindle power',
          'Axis',
          'Milling range',
          'Milling mode',
          'Max rotate speed',
          'Max feed rate',
          'Tool library',
          'Tools changing',
          'Spindle cooling',
          'Milling materials',
          'Milling time',
          '<br>',
          'Tools diameter'
        ],
        right_text: [
          'P53',
          '443.5×718×628.5 （ m m ）',
          '79Kg',
          'AC 185~235V 、 50~60Hz',
          '0.8KW ',
          '0.52KW（max）',
          '5-axis simultaneous motion',
          'X/Y/Z ： 170/215/105mm A ： ±30° B ： 360°',
          'Dry milling',
          '40,000~60,000rpm',
          '3000mm/min',
          '11',
          'Automatic （ Air pressure >0.5MPa ）',
          'Air compression （ Air pressure 0.25~0.35MPa ）',
          'Zirconia, Wax, PMMA, PEEK and soft materials',
          'Coping ： Zirconia-10min Wax- 4.5min',
          'Crown ： Zirconia-13min Wax-5.5min',
          '2+1+0.6 （ Φ 4 ）'
        ]
      }
    },
    //底部组件
    footer: {
      indexfooter1: [
        {title: 'Home', list: [], url: '/'},
        {
          title: 'UP3D',
          list: [
            {name: 'About', url: '/About'},
            {name: 'Contact', url: '/Contact'},
            // { name: 'Sales team', url: '/SalesTeam'}
          ],
          url: 'javascript:;'
        },
        {title: 'Product', list: [], url: '/MainProduct'},
        {title: 'Solution', list: [], url: 'javascript:;'},
        {title: 'BLOG', list: [], url: '/News'},
        {
          title: 'SUPPORT',
          list: [
            {name: 'Product support', url: 'javascript:;'},
            {name: 'FAQ', url: 'javascript'}
          ],
          url: 'javascript:;'
        },
      ],
      indexfooter2: [
        // {
        //   title: 'Company Address',
        //   list: ['511 Nanshan Yungu Complex Building,', 'Liuxian Avenue, Nanshan District, Shenzhen']
        // },
        {title: 'E-mail', list: ['info@up3d.cn']},
        {title: 'Consumer Hotline', list: ['+86-755-26983202']},
      ],
      icon: [
        {
          ImgSrc: require('../img/PC/Commen/facebook_icon.png'),
          Href: 'https://www.facebook.com/up3dscan'
        },
        {
          ImgSrc: require('../img/PC/Commen/ins_icon.png'),
          Href: 'https://www.instagram.com/up3d_dentalcadcam/'
        },
        {
          ImgSrc: require('../img/PC/Commen/youtube_icon.png'),
          Href: 'https://www.youtube.com/channel/UC_GJizhzh0OvFhklRjgdW5A'
        },
        {
          ImgSrc: require('../img/PC/Commen/linkedin_icon.png'),
          Href: 'https://www.linkedin.com/company/10505164/admin/'
        },
        {
          ImgSrc: require('../img/PC/Commen/whatsapp_icon.png'),
          Href: 'https://www.whatsapp.com/'
        }
      ]
    },
    //临时组件
    Commen_Guide: {
      Guide: [
        {
          title: 'Feature',
          anchor: 'Accuracy'
        },
        {
          title: 'Function',
          anchor: 'Function'
        },
        {
          title: 'Video',
          anchor: 'Video'
        },
        {
          title: 'Specification',
          anchor: 'Parameter'
        }
      ]
    },
    LoopPic: {
      body1: {title: 'Multi-color projector', content: 'bule color'},
      body2: {title: 'New way of occlusion scan', content: ''},
      body3: {title: 'UPSCAN APP', content: 'Easy to operate scanning software, free upgrade.'},
      body4: {title: 'Margin line', content: 'Draw margin line in UPSCAN and export margin data to design software'},
      body5: {title: 'True color texture scaning', content: 'Perfectly restore texture colors'},
      body6: {
        title: 'Support vertual articulation',
        content: 'Aquire accurate jaw motion record in a fast and simple way.'
      },
    },
    Productfooterbutton: [{name: 'Buy', url: '/SalesTeam'}, {name: 'Product support', url: ''}],
    Productbuttombanner: {
      title: 'Wide Applications',
      card: [
        {content1: 'Post and core', content2: 'IMPLANT'},
        {content1: 'Post and core', content2: 'IMPLANT'}
      ]
    },
  },
}
