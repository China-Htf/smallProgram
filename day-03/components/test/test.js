// components/test/test.js
Component({
  // 设置样式是否被外界所影响
  options: {
    // isolated：表示启用样式隔离，在自定义组件外，使用class指定的样式将不会相互影响
    // apply-shared：表示页面 wxss 样式将影响到自定义组件，但自定义组件 wxss 中指定的样式不会影响页面
    // shared：表示页面 wxss 样式将影响到自定义组件，自定义组件 wxss 中指定的样式也会影响页面和其它设置了 apply-shared 或 shared 的自定义组件
    styleIsolation: 'apply-shared'
  },
  /**
   * 组件的属性列表
   * 更倾向于存储外界传递到组件中的数据
   */
  properties: {
    // 第一种：简化定义属性的方式[不需指定属性默认值时，可以使用此方式]
    // max: Number
    // 第二种：完整定义属性的方式[当需要指定属性默认值时，建议使用此方式]
    max: {  
      type: Number, //  属性值的数据类型
      value: 10 // 属性默认值
    }
  },

  /**
   * 组件的初始数据
   * 更倾向于存储组件的私有数据
   */
  data: {
    count: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {  // 组件的方法列表【包含事件处理函数和自定义方法】
    // 点击处理函数
    addCount(){
      if(this.data.count >= this.properties.max) return
      this.setData({
        count: this.data.count + 1,
        max: this.properties.max + 1
      })
      this._showCount()
    },
    // 自定义方法建议以 _ 开头
    _showCount(){
      wx.showToast({
        title: 'count数据是' + this.data.count,
        icon: 'none'
      })
    },
  }
})
