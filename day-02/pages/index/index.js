// index.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    info: 'Hello World',
    imageUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.chinazzb.com%2Fuploads%2Fallimg%2F20190822%2F1566422541776_0.jpg&refer=http%3A%2F%2Fwww.chinazzb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624611390&t=5c83cdd943c5c77b5ebad41e99749217',
    randomNum1: Math.random() * 10,  // 生成十以内的随机数
    randomNum2: Math.random().toFixed(2), //  随机生成一个带两位小数的随机数
    count: 0
    
  },
  /**
   * 定义按钮的事件处理函数
   */
  btnTapHandler(e) {  // 按钮的 tap 事件触发函数 与 data 同级
    console.log(e);   // 事件参数对象 e
  },
  /**
   * +1按钮的处理函数
   * setData 函数用于将数据从逻辑层发送到视图层（异步），同时改变对应的 this.data 的值（同步）
   */
  countChange() {
    this.setData({
      count: this.data.count + 1
    })
  },
  /**
   * 事件传参
   */
  btnHander(e) {
    // dataset 是一个对象，包含了所有通过 data-* 传递过来的参数
    console.log(e.target.dataset);
    // 通过 dataset 可以访问到具体参数的值
    console.log(e.target.dataset.info);
    this.setData({
      count: this.data.count + e.target.dataset.info
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  /**
   * input 的事件处理函数
   */
  inputHandler(e) {
    // e.detail.value 是变化之后，文本框最新的值
    console.log(e.detail.value);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
})