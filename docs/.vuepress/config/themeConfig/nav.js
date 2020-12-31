// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '后端',
    link: '/back_end/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: 'Java基础篇',
      
       
      },
      {
        text: 'Java框架篇',
       
      },
      {
        text: 'CVS版本控制',
        
      },
      {
        text: '数据库和缓存',

        items: [
          {
            text: '关系型数据库',
           
          },
          {
            text: 'NoSQL数据库',
           
          },
          {
            text: '更多数据库',
           
          },
        ]
      },
      {
        text: '设计模式和架构',
       
      },
      {
        text: '容器化和中间件',
       
      },
      {
        text: 'Linux运维和测试',
       
      },
      {
        text: '大数据和云计算',
       
      },
      {
        text: '工具和环境',
       
      },
    ],
  },
  {
    text: '前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '前端基础',
        
      },
      {
        text: '前端框架',
      
      },
      {
        text: '可视化',
       
      },
      {
        text: 'UI设计和产品',
       
      },
    ],
  },
  {
    text: '工作',
    link: '/work/',
    items: [
      { text: '个人', },
      { text: '公司', },
    
    ],
  },
  {
    text: '工具箱',
    link: '/tool/',
    items: [
      {
        text: '在线工具',
  
      },
      {
        text: '后端工具',
       
      },
      {
        text: '前端工具',
      
      },
    ],
  },
  {
    text: '导航',
    link: '/navigation/',
    items: [
      {
        text: '后端学习',
       
      },
      {
        text: '前端学习',
       
      },
      {
        text: '软件资源',
        
      },
      
    ],
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      { text: '友情链接', link: '/friends/' },
    ],
  },
  
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
  { text: '关于', link: '/about/' },
]
