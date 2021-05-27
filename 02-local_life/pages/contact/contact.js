// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorList: [],
    isLoading: false
  },
  // 随机获取颜色的方法
  getColorList(){
    this.data.isLoading = true
    // 展示 loading 效果
    wx.showLoading({
      title: '数据正在加载中...',
    })
    wx.request({
      url: 'https://www.escook.cn/api/color',
      method:'GET',
      success: ({data: res}) => {
        this.setData({
          // 旧数组与新数组拼接
          colorList: [...this.data.colorList, ...res.data]
        })
      },
      // 隐藏 loading 效果
      complete: () => {
        wx.hideLoading()
        this.setData({
          isLoading: false
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getColorList()
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
    if(this.data.isLoading) return
    // 调用随机获取颜色的方法
    this.getColorList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})