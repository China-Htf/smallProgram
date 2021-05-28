// components/test3/test3.js
Component({
  options: {
    // 指定所有 _ 开头的数据字段为纯数据字段
    pureDataPattern: /^_/
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    // 将 rgb 改造为 _ 开头的纯数据字段
    _rgb: {
      r: 0,
      g: 0,
      b: 0
    },
    fullColor:'0, 0, 0'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeR() { //  修改 rgb 对象上 r 属性的值
      this.setData({
        '_rgb.r': this.data._rgb.r + 5 > 255 ? 255 : this.data._rgb.r + 5
      })
    },
    changeG() { //  修改 rgb 对象上 g 属性的值
      this.setData({
        '_rgb.g': this.data._rgb.g + 5 > 255 ? 255 : this.data._rgb.g + 5
      })
    },
    changeB() { //  修改 rgb 对象上 b 属性的值
      this.setData({
        '_rgb.b': this.data._rgb.b + 5 > 255 ? 255 : this.data._rgb.b + 5
      })
    },
    // 生成随机 RGB 颜色的方法。非事件处理函数建议以 _ 开头
    _randomColor() {
      this.setData({
        _rgb: {
          r: Math.floor(Math.random() * 256),
          g: Math.floor(Math.random() * 256),
          b: Math.floor(Math.random() * 256)
        }
      })
    }
  },
  observers: {
    // 监听 rgb 对象上 r, g, b 三个子属性的变化
    // 'rgb.r, rgb.g, rgb.b': function(newR, newG, newB) {
    //   this.setData({
    //     // 为 data 中的 fullColor 重新赋值
    //     fullColor: `${newR}, ${newG}, ${newB}`
    //   })
    // }

    // 使用通配符 ** 监听对象上所有属性的辩护
    '_rgb.**': function(obj) {
      this.setData({
        // 为 data 中的 fullColor 重新赋值
        fullColor: `${obj.r}, ${obj.g}, ${obj.b}`
      })
    }
  },
  // 组件的生命周期
  lifetimes: {
    created(){
      console.log('created');
    },
    attached(){
      console.log('attached');
    }
  },
  // 组件所在页面的生命周期函数
  pageLifetimes: {
    // 页面被显示
    show: function() {
      // 组件所在的页面被展示时，立即调用 _randomColor 生成随机颜色值
      this._randomColor()
    },
    // 页面被隐藏
    hide: function() {},
    // 页面尺寸变化
    resize: function() {}
  }
})
