const bbsNavList = [
  {
    label: '推荐',
    url: '/',
    urlLevel: '0',
    baseUrl: ''
  },
  {
    label: '前端',
    url: '/qianduan',
    urlLevel: '1',
    baseUrl: '/bbs'
  },
  {
    label: 'java',
    url: '/java',
    urlLevel: '1',
    baseUrl: '/bbs'
  },
  {
    label: 'php',
    url: '/php',
    urlLevel: '1',
    baseUrl: '/bbs'
  }, {
    label: '推荐',
    url: '/',
    urlLevel: '0',
    baseUrl: ''
  },
  {
    label: '前端',
    url: '/qianduan',
    urlLevel: '1',
    baseUrl: '/bbs'
  },
  {
    label: 'java',
    url: '/java',
    urlLevel: '1',
    baseUrl: '/bbs'
  },
  {
    label: 'php',
    url: '/php',
    urlLevel: '1',
    baseUrl: '/bbs'
  }, {
    label: '推荐',
    url: '/',
    urlLevel: '0',
    baseUrl: ''
  },
  {
    label: '前端',
    url: '/qianduan',
    urlLevel: '1',
    baseUrl: '/bbs'
  },
  {
    label: 'java',
    url: '/java',
    urlLevel: '1',
    baseUrl: '/bbs'
  },
  {
    label: 'php',
    url: '/php',
    urlLevel: '1',
    baseUrl: '/bbs'
  }, {
    label: '推荐',
    url: '/',
    urlLevel: '0',
    baseUrl: ''
  },
  {
    label: '前端',
    url: '/qianduan',
    urlLevel: '1',
    baseUrl: '/bbs'
  },
  {
    label: 'java',
    url: '/java',
    urlLevel: '1',
    baseUrl: '/bbs'
  },
  {
    label: 'php',
    url: '/php',
    urlLevel: '1',
    baseUrl: '/bbs'
  }]

const bbsListData = [{
  id: 0,
  seq: 1,
  title: '梦想去远方，然而梦想只是梦想，希望不负韶华。',
  authorName: '孟若林',
  authorAvatar: '1556206625518.png',
  showImageTitle: 'http://sqsfxy.cn/public/img/',
  hits: 100,
  status: 1, // 0 -》 关闭 1 -》 进行中 2-》 已采纳答案 3 -》
  createTime: '2019-11-1',
  updataTime: '2018-11-2'
},
{
  id: 0,
  seq: 2,
  title: '梦想去远方，然而梦想只是梦想，希望不负韶华。',
  authorName: '孟若林',
  authorAvatar: '1556206625518.png',
  showImageTitle: 'http://sqsfxy.cn/public/img/',
  hits: 100,
  status: 2, // 0 -》 关闭 1 -》 进行中 2-》 已采纳答案 3 -》
  createTime: '2019-11-1',
  updataTime: '2018-11-2'
},
{
  id: 0,
  seq: 3,
  title: '梦想去远方，然而梦想只是梦想，希望不负韶华。',
  authorName: '孟若林',
  authorAvatar: '1556206625518.png',
  showImageTitle: 'http://sqsfxy.cn/public/img/',
  hits: 100,
  status: 2, // 0 -》 关闭 1 -》 进行中 2-》 已采纳答案 3 -》
  createTime: '2019-11-1',
  updataTime: '2018-11-2'
},
{
  id: 0,
  seq: 4,
  title: '心有猛虎，细嗅蔷薇。',
  authorName: '孟若林',
  authorAvatar: '1556206625518.png',
  showImageTitle: 'http://sqsfxy.cn/public/img/',
  hits: 100,
  status: 2, // 0 -》 关闭 1 -》 进行中 2-》 已采纳答案 3 -》
  createTime: '2019-11-1',
  updataTime: '2018-11-2'
}, {
  id: 0,
  seq: 5,
  title: '梦想去远方，然而梦想只是梦想，希望不负韶华。',
  authorName: '孟若林',
  authorAvatar: '1556206625518.png',
  showImageTitle: 'http://sqsfxy.cn/public/img/',
  hits: 100,
  status: 1, // 0 -》 关闭 1 -》 进行中 2-》 已采纳答案 3 -》
  createTime: '2019-11-1',
  updataTime: '2018-11-2'
},
{
  id: 0,
  seq: 6,
  title: '梦想去远方，然而梦想只是梦想，希望不负韶华。',
  authorName: '孟若林',
  authorAvatar: '1556206625518.png',
  showImageTitle: 'http://sqsfxy.cn/public/img/',
  hits: 100,
  status: 1, // 0 -》 关闭 1 -》 进行中 2-》 已采纳答案 3 -》
  createTime: '2019-11-1',
  updataTime: '2018-11-2'
},
{
  id: 0,
  seq: 7,
  title: '梦想去远方，然而梦想只是梦想，希望不负韶华。梦想去远方，然而梦想只是梦想，希望不负韶华。梦想去远方，然而梦想只是梦想，希望不负韶华。梦想去远方，然而梦想只是梦想，希望不负韶华。',
  authorName: '谁敢横刀立马，唯我胡大将军。。。。。。。。。。。',
  authorAvatar: '1556206625518.png',
  showImageTitle: 'http://sqsfxy.cn/public/img/',
  hits: 100000,
  status: 2, // 0 -》 关闭 1 -》 进行中 2-》 已采纳答案 3 -》
  createTime: '2019-11-1',
  updataTime: '2018-11-2'
},
{
  id: 0,
  seq: 8,
  title: '心有猛虎，细嗅蔷薇。',
  authorName: '孟若林',
  authorAvatar: '1556206625518.png',
  showImageTitle: 'http://sqsfxy.cn/public/img/',
  hits: 100,
  status: 1, // 0 -》 关闭 1 -》 进行中 2-》 已采纳答案 3 -》
  createTime: '2019-11-1',
  updataTime: '2018-11-2'
}, {
  id: 0,
  seq: 9,
  title: '梦想去远方，然而梦想只是梦想，希望不负韶华。',
  authorName: '孟若林',
  authorAvatar: '1556206625518.png',
  showImageTitle: 'http://sqsfxy.cn/public/img/',
  hits: 100,
  status: 2, // 0 -》 关闭 1 -》 进行中 2-》 已采纳答案 3 -》
  createTime: '2019-11-1',
  updataTime: '2018-11-2'
},
{
  id: 0,
  seq: 10,
  title: '梦想去远方，然而梦想只是梦想，希望不负韶华。',
  authorName: '孟若林',
  authorAvatar: '1556206625518.png',
  showImageTitle: 'http://sqsfxy.cn/public/img/',
  hits: 100,
  status: 1, // 0 -》 关闭 1 -》 进行中 2-》 已采纳答案 3 -》
  createTime: '2019-11-1',
  updataTime: '2018-11-2'
},
{
  id: 0,
  seq: 11,
  title: '梦想去远方，然而梦想只是梦想，希望不负韶华。',
  authorName: '孟若林',
  authorAvatar: '1556206625518.png',
  showImageTitle: 'http://sqsfxy.cn/public/img/',
  hits: 100,
  status: 1, // 0 -》 关闭 1 -》 进行中 2-》 已采纳答案 3 -》
  createTime: '2019-11-1',
  updataTime: '2018-11-2'
},
{
  id: 0,
  seq: 12,
  title: '心有猛虎，细嗅蔷薇。',
  authorName: '孟若林',
  authorAvatar: '1556206625518.png',
  showImageTitle: 'http://sqsfxy.cn/public/img/',
  hits: 100,
  status: 1, // 0 -》 关闭 1 -》 进行中 2-》 已采纳答案 3 -》
  createTime: '2019-11-1',
  updataTime: '2018-11-2'
},
{
  id: 0,
  seq: 1,
  title: '梦想去远方，然而梦想只是梦想，希望不负韶华。',
  authorName: '孟若林',
  authorAvatar: '1556206625518.png',
  showImageTitle: 'http://sqsfxy.cn/public/img/',
  hits: 100,
  status: 1, // 0 -》 关闭 1 -》 进行中 2-》 已采纳答案 3 -》
  createTime: '2019-11-1',
  updataTime: '2018-11-2'
},
{
  id: 0,
  seq: 2,
  title: '梦想去远方，然而梦想只是梦想，希望不负韶华。',
  authorName: '孟若林',
  authorAvatar: '1556206625518.png',
  showImageTitle: 'http://sqsfxy.cn/public/img/',
  hits: 100,
  status: 2, // 0 -》 关闭 1 -》 进行中 2-》 已采纳答案 3 -》
  createTime: '2019-11-1',
  updataTime: '2018-11-2'
},
{
  id: 0,
  seq: 3,
  title: '梦想去远方，然而梦想只是梦想，希望不负韶华。',
  authorName: '孟若林',
  authorAvatar: '1556206625518.png',
  showImageTitle: 'http://sqsfxy.cn/public/img/',
  hits: 100,
  status: 2, // 0 -》 关闭 1 -》 进行中 2-》 已采纳答案 3 -》
  createTime: '2019-11-1',
  updataTime: '2018-11-2'
},
{
  id: 0,
  seq: 4,
  title: '心有猛虎，细嗅蔷薇。',
  authorName: '孟若林',
  authorAvatar: '1556206625518.png',
  showImageTitle: 'http://sqsfxy.cn/public/img/',
  hits: 100,
  status: 2, // 0 -》 关闭 1 -》 进行中 2-》 已采纳答案 3 -》
  createTime: '2019-11-1',
  updataTime: '2018-11-2'
}, {
  id: 0,
  seq: 5,
  title: '梦想去远方，然而梦想只是梦想，希望不负韶华。',
  authorName: '孟若林',
  authorAvatar: '1556206625518.png',
  showImageTitle: 'http://sqsfxy.cn/public/img/',
  hits: 100,
  status: 1, // 0 -》 关闭 1 -》 进行中 2-》 已采纳答案 3 -》
  createTime: '2019-11-1',
  updataTime: '2018-11-2'
},
{
  id: 0,
  seq: 6,
  title: '梦想去远方，然而梦想只是梦想，希望不负韶华。',
  authorName: '孟若林',
  authorAvatar: '1556206625518.png',
  showImageTitle: 'http://sqsfxy.cn/public/img/',
  hits: 100,
  status: 1, // 0 -》 关闭 1 -》 进行中 2-》 已采纳答案 3 -》
  createTime: '2019-11-1',
  updataTime: '2018-11-2'
},
{
  id: 0,
  seq: 7,
  title: '梦想去远方，然而梦想只是梦想，希望不负韶华。梦想去远方，然而梦想只是梦想，希望不负韶华。梦想去远方，然而梦想只是梦想，希望不负韶华。梦想去远方，然而梦想只是梦想，希望不负韶华。',
  authorName: '谁敢横刀立马，唯我胡大将军。。。。。。。。。。。',
  authorAvatar: '1556206625518.png',
  showImageTitle: 'http://sqsfxy.cn/public/img/',
  hits: 100000,
  status: 2, // 0 -》 关闭 1 -》 进行中 2-》 已采纳答案 3 -》
  createTime: '2019-11-1',
  updataTime: '2018-11-2'
},
{
  id: 0,
  seq: 8,
  title: '心有猛虎，细嗅蔷薇。',
  authorName: '孟若林',
  authorAvatar: '1556206625518.png',
  showImageTitle: 'http://sqsfxy.cn/public/img/',
  hits: 100,
  status: 1, // 0 -》 关闭 1 -》 进行中 2-》 已采纳答案 3 -》
  createTime: '2019-11-1',
  updataTime: '2018-11-2'
}, {
  id: 0,
  seq: 9,
  title: '梦想去远方，然而梦想只是梦想，希望不负韶华。',
  authorName: '孟若林',
  authorAvatar: '1556206625518.png',
  showImageTitle: 'http://sqsfxy.cn/public/img/',
  hits: 100,
  status: 2, // 0 -》 关闭 1 -》 进行中 2-》 已采纳答案 3 -》
  createTime: '2019-11-1',
  updataTime: '2018-11-2'
},
{
  id: 0,
  seq: 10,
  title: '梦想去远方，然而梦想只是梦想，希望不负韶华。',
  authorName: '孟若林',
  authorAvatar: '1556206625518.png',
  showImageTitle: 'http://sqsfxy.cn/public/img/',
  hits: 100,
  status: 1, // 0 -》 关闭 1 -》 进行中 2-》 已采纳答案 3 -》
  createTime: '2019-11-1',
  updataTime: '2018-11-2'
},
{
  id: 0,
  seq: 11,
  title: '梦想去远方，然而梦想只是梦想，希望不负韶华。',
  authorName: '孟若林',
  authorAvatar: '1556206625518.png',
  showImageTitle: 'http://sqsfxy.cn/public/img/',
  hits: 100,
  status: 1, // 0 -》 关闭 1 -》 进行中 2-》 已采纳答案 3 -》
  createTime: '2019-11-1',
  updataTime: '2018-11-2'
},
{
  id: 0,
  seq: 12,
  title: '心有猛虎，细嗅蔷薇。',
  authorName: '孟若林',
  authorAvatar: '1556206625518.png',
  showImageTitle: 'http://sqsfxy.cn/public/img/',
  hits: 100,
  status: 1, // 0 -》 关闭 1 -》 进行中 2-》 已采纳答案 3 -》
  createTime: '2019-11-1',
  updataTime: '2018-11-2'
}]

const consts = {
  bbsNavList,
  bbsListData
}
export default consts
