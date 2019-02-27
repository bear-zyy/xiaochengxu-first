// pages/zhiketong/cell/jiaoyanquancell.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cellData: {
      type: Object
    }

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

    cellDidSelect() {
      console.log('这里有事件吗')
      let id = this.properties.cellData.id;

      this.triggerEvent('cellDidSelect',{

        groupId: id

      },{

      })
    }

  }
})
