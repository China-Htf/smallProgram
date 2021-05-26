// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 发起get请求
  getInfo() {
    wx.request({
      url: 'https://www.escook.cn/api/get', //请求的接口地址，必须基于 https 协议
      method: 'GET',  //  请求的方式
      data: {         //  发送到服务器的数据
        name: 'zs',
        age: 20
      },
      success: (res) => { // 请求成功之后的回调函数
        console.log(res.data);
      }
    })
  },
  // 发起post请求
  postInfo() {
    wx.request({
      url: 'https://www.escook.cn/api/post', //请求的接口地址，必须基于 https 协议
      method: 'POST',  //  请求的方式
      data: {         //  发送到服务器的数据
        name: 'zs',
        gender: '男'
      },
      success: (res) => { // 请求成功之后的回调函数
        console.log(res.data);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   * 页面刚加载时 自动请求一些初始化的数据
   */
  onLoad: function (options) {
    this.getInfo()
    this.postInfo()
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