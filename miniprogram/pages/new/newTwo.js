// miniprogram/pages/new/newTwo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  showActionSheet () {
   wx.showActionSheet({
     itemList: ['A' , 'B'],

     success (res) {
       console.log(res.tapIndex)
     }

   })
  },

  showModal () {
 
   wx.showModal({
     title: '提示',
     content: '这个就是iOS开发中的alertVC',
     success(result) {
       if (result.confirm) {
         console.log('点击确定')
       }
       else if (result.cancel){
         console.log('点击取消')
       }
     }
   })

  },

  hideLoading () {
     wx.hideLoading()
  },
  showLoading () {
    wx.showLoading({
      title: 'hahah',
      // mask: true,   这个是否显示蒙版，防止点击
    })
  },
  showToast () {
      wx.showToast({
      title: '这是一个提示',
      icon: 'success',
      duration: 3000,
    })
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