// miniprogram/pages/secend/zhixing/zhixing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    perc : '25',
    scrollVHeight : '100px',
    items: [{ name: '张源远', headUrl: 'red', num: '5', best: true },
     { name: '马伟', headUrl: 'blue', num: '5', best: true },
      { name: '王淼森', headUrl: 'black', num: '2', best: false },
       { name: '王旭', headUrl: 'yellow', num: '2', best: false },
        { name: '李谦', headUrl: 'green', num: '2', best: false}]
  },

  scrollViewHeightChange: function () {
   
   this.setData({
     scrollVHeight : '150px'
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
    wx.setNavigationBarTitle({
      title: '智行火车票',
    })
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