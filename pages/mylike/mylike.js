// pages/mylike/mylike.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userid:" ",
    shoesinfo:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.uid)
    this.setData({
      userid:options.uid
    })
    console.log(this.data.userid)
    
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
    let that = this;
    wx.request({
      url: 'https://www.pkujpt.cn/getmylike?user_id='+this.data.userid,
      
      data: {
      },
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

  },
  
  intoPage:function(e){
    console.log("我要传入的值",e)
    let item = e.currentTarget.dataset.item;
    console.log("我传入的item",item)
    let str = JSON.stringify(item)
    wx.navigateTo({
      url: '../product/product?jasonstr='+str
    })
  },
})