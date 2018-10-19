// miniprogram/pages/index/secend.js

var richtext = [{
  name: 'div',
    attrs: {
    class: 'div_class',
      style: 'line-height: 30px; color: #4A4A4A;'
    },
    children: [{
    type: 'text',
    text: 'abc申请认证为xxx中学教师'}]
    }]

var richSecend = [
  {
    name: 'div',
    attrs: {
      class: 'div_class',
      style: 'line-height: 30px; color: #F62A29; '
    },
    children: [
      {
        type: 'text',
        text: '已拒绝'
      }
    ]
  }
]


Page({

  /**
   * 页面的初始数据
   */
  data: {
      richData : richtext,
      secendData: richSecend,
  },

  backClick: function () {

   wx.navigateBack({
     delta: 1,
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