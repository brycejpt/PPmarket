// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uid:" ",
    like_status:0,
    shoes_info:[],
    show:false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData:['41','42','42.5','43','44','44.5'],//下拉列表的数据
    index:0,//选择的下拉列表下标
    indexS:0,
    size:["41","42","42.5","43"],
    num: 1,  
    like_size : 41,
        // 使用data数据对象设置样式名  
    minusStatus: 'disabled'  
  },
  
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let item = JSON.parse(options.jasonstr)
    this.setData({
      shoes_info:item,
      uid:wx.getStorageSync('uid')
    })
    console.log(this.data.shoes_info.shoes_id)
    this.getlikestatus().then(this.setindexS,this.indexSerr);
  },

  getlikestatus:function(){
    let promise = new Promise((resolve,reject)=>{
      let that = this
      wx.request({
        url: 'https://www.pkujpt.cn/getlikestatus',
        data:{
          user_id:this.data.uid,
          shoes_id:this.data.shoes_info.shoes_id
        },
        header: {
          'content-type': 'application/json' // 默认值
          },
          success (res) {
          if(res.data[0].like_status!=null){
            console.log("ls是："+res.data[0].like_status)
            that.setData({
              like_status:res.data[0].like_status,
              like_size : res.data[0].like_size
            })
            resolve();
          } else{
            reject();
          }
          console.log(that.data.like_status)
          // console.log("000"+res.data[0].like_size)          
          // console.log("1234是"+that.data.indexS)
          },  
      })
    })
    return promise
  },

  setindexS:function(){
    let sizes = this.data.size
    let index = 0
    let size = this.data.like_size
    while(sizes[index]!=size){
      index++
    }
          // console.log(index)
    this.setData({
      indexS:index
    })
  },

  indexSerr:function(){
    wx.showToast({
      title: '请求超时',
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

  bindSPickerChange: function(e){
    console.log('尺码pickerS选择发生改变, 携带值为', e.detail.value)
    var that = this;
    that.setData({
      indexS: e.detail.value
    }),
    console.log(this.data.size[this.data.indexS])
  },

  bindMinus: function() {  
    var num = this.data.num;  
    // 如果大于1时，才可以减  
    if (num > 1) {  
        num --;  
    }  
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num <= 1 ? 'disabled' : 'normal';  
    // 将数值与状态写回  
    this.setData({  
        num: num,  
        minusStatus: minusStatus  
    });  
},  
/* 点击加号 */  
bindPlus: function() {  
    var num = this.data.num;  
    // 不作过多考虑自增1  
    num ++;  
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num < 1 ? 'disabled' : 'normal';  
    // 将数值与状态写回  
    this.setData({  
        num: num,  
        minusStatus: minusStatus  
    });  
},  
/* 输入框事件 */  
bindManual: function(e) {  
    var num = e.detail.value;  
    // 将数值与状态写回  
    this.setData({  
        num: num  
    });  
} ,

likeit:function(){
  let that = this
  wx.request({
    url: 'https://www.pkujpt.cn/likeit',
    method:'POST',
    data:{
      'shoes_id' : this.data.shoes_info.shoes_id,
      'shoes_size' : this.data.size[this.data.indexS],
      'uid' : this.data.uid
    },
    header:{
      'content-type':'application/json'
    },
    success(res){
      console.log(res.data)
      that.setData({
        like_status:res.data.status
      })
      if(res.data.status==2){
        wx.showToast({
          title: '不喜欢了',
        })
      }else{
        wx.showToast({
          title: '喜欢成功！',
        })
      }
    },
  })
  // console.log("666"+this.data.like_status)
  // let abc = [{
  //   shoes_id : this.data.shoes_info.shoes_id,
  //   shoes_size : this.data.size[this.data.indexS],
  //   shoes_num : this.data.num
  // }]
  // console.log(abc)
  // console.log(wx.getStorageSync('uid'))
}

})


