const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const webpack = require('webpack');
const path = require('path');

module.exports = {
  runtimeCompiler: true,
  publicPath: './',  //输出的根路径  默认是/ 如果你的网站是app.com/vue 这更改此配置项
  devServer: {
    open: true,
    port: 8888,
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({ // 把px单位换算成rem单位
            rootValue: 41.4, // 换算的基数(设计图750的根字体为32)
            // rootValuePH: 41, // 换算的基数(设计图750的根字体为32)
            selectorBlackList: [], // 忽略转换正则匹配项
            propList: ['*']
          })
        ]
      }
    }
  },
  //prerender-spa-plugin：为了配合SEO优化
  //打包后会在dist文件夹中，将routes的路径生成出index.html
  // configureWebpack: config => {
  //   if (process.env.NODE_ENV !== 'production') return;
  //   return {
  //     plugins: [
  //       new PrerenderSPAPlugin({
  //         // 生成文件的路径，也可以与webpakc打包的一致。
  //         // 下面这句话非常重要！！！
  //         // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
  //         staticDir: path.join(__dirname, 'dist'),
  //         // 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
  //         //
  //         routes: ['/','/About','/Contact','/MainProduct','/UP400','/UP560','/UP360P','/UP300P','/UPCAD','/UPCAM','/P53','/P52','/Solution','/News','/CompanyNewsPage','/CompanyActivitiesPage'],
  //         // 这个很重要，如果没有配置这段，也不会进行预编译
  //         renderer: new Renderer({
  //           inject: {
  //             foo: 'bar'
  //           },
  //           headless: false,
  //           // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
  //           renderAfterDocumentEvent: 'render-event'
  //         })
  //       })
  //     ],
  //   };
  // },
}

