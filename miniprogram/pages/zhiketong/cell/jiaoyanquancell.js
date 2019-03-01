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

    memberList: []

  },

  attached() {
    // 在组件实例进入页面节点树时执行
   let array = []

   for(var i = 0 ; i < this.properties.cellData.memberList.length; i++){
     let object = this.properties.cellData.memberList[i];
     if (object.isLeader != 1){
       array.push(object)
     }
   }

   this.setData({
     memberList: array
   })

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
