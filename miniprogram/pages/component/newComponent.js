// pages/component /newComponent.js
Component({

  // 多个节点
  options: {
    multipleSlots: true

  },

  /**
   * 组件的属性列表
   */
  properties: {

    textString: {
      type: String,
      value: '默认值'
    },

    textNum: {
      type: Number,
      value: 5
    }

  },

  /**
   * 组件的初始数据
   */
  data: {

    dataStr : 'aaa',
    dataNum: 3

  },

  /**
   * 组件的方法列表
   */
  methods: {

    changeData: function (){
      this.setData({
        dataStr: 'bbbb'

      })
    },

    valueTransmit() {

      this.triggerEvent('eventName')

    }

  }

})
