import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: '/demo/',
  lang: 'zh-CN', //语言，可选 en-US
  title: "VitePress",
  description: "我的vitepress",
  //appearance:true, //默认浅色且开启切换
  //启用深色模式
  // appearance:'dark', 
  // appearance:false, // 关闭
  appearance: "force-dark", // 强制深色主题 
  ignoreDeadLinks: false, //关闭忽略死链，不配置即可，非常不建议设置为true
  //fav图标
  head: [
    // ['link',{ rel: 'icon', href: '/logo.jpg'}],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }
    ]
  ],
  themeConfig: {
    //返回顶部文字修改
    returnToTopLabel:'返回顶部', 
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/notes' }
    ],
    //本地搜索
    search: { 
      provider: 'local'
    }, 
    sidebar: [
      {
        text: 'js基础',
        collapsed: false,
        items: [
          { text: '111', link: '/111' },
          { text: '222', link: '/222' }
        ]
      }
    ],
    //自定义上下页名
    docFooter: { 
      prev: '上一页', 
      next: '下一页', 
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    //页脚
    footer: { 
      message: 'Released under the MIT License.', 
      copyright: 'Copyright © 2019-2023 present Evan You', 
      // 自动更新时间
      //copyright: `Copyright © 2019-${new Date().getFullYear()} present Evan You`, 
    }
  }
})
