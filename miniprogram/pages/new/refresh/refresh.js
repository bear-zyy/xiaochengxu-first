// miniprogram/pages/new/refresh/refresh.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   array: ['A' , 'B' , 'C' , 'D' , 'E' , 'F' , 'G']
  },

  refresh: function () {
    wx.startPullDownRefresh({
      success() {
        console.log('看看是啥')
      }
    })
  },

  endRefresh(){

    wx.stopPullDownRefresh(
      {
        success() {
          console.log('结束了吗')
        },

        fail(){
          console.log('失败了')
        }

      }
    )

  },

  switchTab(){

    wx.switchTab({
      url: '../../secend/test',
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