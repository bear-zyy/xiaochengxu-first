// pages/component /newComponent.js

const newBehavior = require('new-behavior')

Component({

  relations: {
    'newsecondComponent': {
      type: 'child',

      linked(target) {
        // 每次有custom-li被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
      },
      linkChanged(target) {
        // 每次有custom-li被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
      },
      unlinked(target) {
        // 每次有custom-li被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
      }
    }
  },
  // 多个节点
  options: {
    multipleSlots: true

  },

  behaviors: [newBehavior],

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
