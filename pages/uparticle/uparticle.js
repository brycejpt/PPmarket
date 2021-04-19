// pages/uparticle/uparticle.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userid:" ",
    tempFilePaths:" "
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

  chooseimg: function(){
    let that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType:  ['album', 'camera'],
      success(res){
        let tempFilePaths = res.tempFilePaths
        that.setData({
          tempFilePaths: res.tempFilePaths
        })
        console.log(res.tempFilePaths)
        wx.setStorageSync('card', tempFilePaths[0])
      }
    })
  },

  formSubmit: function(e){
    console.log(e.detail)
  }

})