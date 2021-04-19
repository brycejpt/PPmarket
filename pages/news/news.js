// pages/news/news.js
Page({
  toNewsdetail:function(e){
    console.log("传入的值",e)
    let item = e.currentTarget.dataset.item;
    console.log("传入的item",item)
    let str = JSON.stringify(item)
    wx.navigateTo({
      url: '../newsdetail/newsdetail?jasonstr='+str
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    news:[
      
      {
        title:"明星上脚 | 肖战签约李宁！难道黑色球鞋的风潮又要开始了？",
        content:"2021年3月26日李宁品牌宣布签约青年演员、歌手肖战成为李宁运动潮流产品全球代言人，用运动点燃热情，共同携手探索和创造运动潮流领域的更多可能。凭借多年来在专业运动领域的丰厚积淀和对当下年轻人生活方式的深入洞察，李宁品牌在运动潮流领域的影响力日益凸显，对潮流的运动表达以及对中国文化元素的独特诠释已经成为李宁的独特标签。品牌期待通过携手优质代言人，以更丰富的视角和更多元的方式，点燃消费者对运动潮流的热情。",
        image:"http://39.105.60.142/images/641.png"
      },
      {
        title:"夏天的球场  得来瓶冰镇饮料",
        content:"毋庸置疑，361度品牌于篮球产品领域的进取有目共睹。其中AG1更是备受好评，亦成为了品牌的里程碑之作。而这一系列鞋款也在本周进入了发售周期。值得一提的是，伴随着天气逐渐转暖，大家对于夏日战靴的需求也逐渐增大，那么今年夏天你会穿哪双鞋款征战球场呢？",
        image:"http://39.105.60.142/images/640.png"
      },
      {
        title:"一双国产跑鞋，让广大跑友不必再当「柠檬精」",
        content:"如果要问当前最前沿的顶级跑鞋科技是什么，想必那非「超临界发泡」技术打造的缓震材料莫属。不论是基普乔格完成人类极限挑战——2小时内完成马拉松，还是国人马拉松运动员不断地提升个人最好成绩、挑战纪录，都有着「超临界发泡」技术的助力，它赋予跑鞋的轻量与劲弹，成为了人人向往的美妙感受。然而如此惊艳的顶级科技，却成为了大众跑者眼中的「酸柠檬」。由于其强劲的回弹特性及高昂的成本，诸多品牌仅将超临界发泡材料运用于精英跑者才能驾驭的竞速跑鞋上。可竞速跑鞋对于跑者能力设下的高门槛，令大量的日常健身跑者「被劝退」，只能羡慕地看着精英跑者享受着前沿科技的顶级快感，自己却「无福消受」。不过，这一切随着一款跑鞋的面世而彻底改变——它就是乔丹体育运用顶级科技巭PRO，为大众跑者专属打造的日常健身慢跑鞋「风行十代」。",
        image:"http://39.105.60.142/images/642.png"
      },
      
      {
        title:"Supreme x Nike SB Dunk Low「Stars」",
        content:"Supreme与Nike继续开展合作，即将发布四款联名版本的Dunk Low 。鞋身分别采用白色与蓝色、绿色、黑色和棕色皮革组合而成、点缀金色星星和鳄鱼皮纹路，鞋身上的吊牌、鞋带扣及鞋垫彰显联名身份。这四款Supreme x Nike SB Dunk Low「Stars」将于3月4日发售，售价每款110美元。",
        image:"http://39.105.60.142/images/news01.png"
      },
      {
        title:" Air Jordan 1 Mid 「To My First Coach」",
        content:"Jordan Brand将在2021年推出「To My First Coach」系列，以此向教练们致敬。鞋身采用白色及红黄蓝三色，辅以特制吊牌。这款Air Jordan 1 Mid「To My First Coach」将于夏季发售，售价170美元。",
        image:"http://39.105.60.142/images/news02.png"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})