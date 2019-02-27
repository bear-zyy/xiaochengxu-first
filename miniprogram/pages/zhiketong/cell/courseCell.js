// pages/zhiketong/cell/courseCell.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    courseData:{
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

    cellDidSelect(){

      let model = JSON.stringify(this.properties.courseData)
      this.triggerEvent('cellDidSelect', {
        modelData: model

      }, {

      })

    }

  }
})
