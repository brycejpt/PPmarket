// pages/mine/mine.js
const app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    uid:"000",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') ,
    nickName: " 123",
    avatarUrl:" "
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    console.log(this.data.canIUseGetUserProfile)
    console.log(this.data.nickName)
    console.log('123456')
    this.setData({
      uid: (wx.getStorageSync('uid')||" ")
    })
    // this.setData({
    //   nickName:this.data.userInfo.nickName
    // })
  },

  onShow(){
    
  },

  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res.userInfo.nickName)
        
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
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

  },

  tomylike: function(){
    let id = this.data.uid
    console.log(id)
    wx.navigateTo({
      url: '../mylike/mylike?uid='+id,
    })
  },

  writearticle: function(){
    let id = this.data.uid
    console.log(id)
    wx.navigateTo({
      url: '../uparticle/uparticle?uid='+id,
    })
  }

})