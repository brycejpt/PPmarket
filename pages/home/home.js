// pages/home/home.js
Page({
  intoPage:function(e){
    console.log("我要传入的值",e)
    let item = e.currentTarget.dataset.item;
    console.log("我传入的item",item)
    let str = JSON.stringify(item)
    wx.navigateTo({
      url: '../product/product?jasonstr='+str
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    shoesinfo:[]
  },
  // {
  //   shoesname:'Nike SB Dunk Low "Street Hawker"',
  //   shoesimage:"http://39.105.60.142/images/image00.jpeg",
  //   shoesprice:'4999¥'
  // },
  // {
  //   shoesname:'Nike Air Foamposite One "Beijing"',
  //   shoesimage:"http://39.105.60.142/images/image01.jpeg",
  //   shoesprice:'2999¥'
  // },
  // {
  //   shoesname:'Adidas Yeezy boost 350 v2 "Ash Stone"',
  //   shoesimage:"http://39.105.60.142/images/image02.jpeg",
  //   shoesprice:'2399¥'
  // },
  // {
  //   shoesname:'Air Jordan 1 Retro High OG "Volt Gold"',
  //   shoesimage:"http://39.105.60.142/images/image03.jpeg",
  //   shoesprice:'1799¥'
  // },
  // {
  //   shoesname:'Air Jordan 1 Retro High OG "Dark Mocha""',
  //   shoesimage:"http://39.105.60.142/images/image04.jpeg",
  //   shoesprice:'3299¥'
  // },
  // {
  //   shoesname:'Nike Dunk Low Retro "Black"',
  //   shoesimage:"http://39.105.60.142/images/image05.jpeg",
  //   shoesprice:'2399¥'
  // },
  // {
  //   shoesname:'Nike Dunk Low Retro "Medium Grey"',
  //   shoesimage:"http://39.105.60.142/images/image06.jpeg",
  //   shoesprice:'1999¥'
  // },
  // {
  //   shoesname:'Air Jordan 1 Zoom Air CMFT "Easter"',
  //   shoesimage:"http://39.105.60.142/images/image07.jpeg",
  //   shoesprice:'1899¥'
  // },
  // {
  //   shoesname:'Adidas Yeezy boost 700 v2 "cream"',
  //   shoesimage:"http://39.105.60.142/images/image08.jpeg",
  //   shoesprice:'3599¥'
  // },
  // {
  //   shoesname:'Sacai x Nike VaporWaffle "Tour Yellow"',
  //   shoesimage:"http://39.105.60.142/images/image09.jpeg",
  //   shoesprice:'3999¥'
  // },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.request({
      url: 'https://www.pkujpt.cn/shoesinfo',
      method:'GET',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log(res.data)
        that.setData({
          shoesinfo:res.data
        })
      }
    })
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

