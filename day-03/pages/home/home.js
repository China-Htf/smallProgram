// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0
  },
  syncCount(e) {
    this.setData({
      count: e.detail.value
    })
    // console.log('syncCount', e.detail.value);
  },
  // 按钮的 tap 事件处理函数
  getChild() {
    // 切记下面参数不能传递标签选择器，不然返回的是 null
    // 也可以传递 id 选择器
    const child = this.selectComponent('.customA')
    console.log(child);
    // 调用子组件的 setData 方法
    // child.setData({
    //   count: child.properties.count + 1
    // })

    // 调用子组件的 addCount 方法
    child.addCount()
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