//index.js
const app = getApp()
// 定义了三个字符串
var initData = 'Hello World'
var secendData = 'testData'
var threeData = '第二天的代码'

Page({

  /**
   * 页面的初始数据
   */
  data: {
     name:initData,
     testName:secendData,
     threeName:threeData,
  },

  tapName: function () {

    wx.navigateTo({
      url: 'first',
    })
  },
  styleClick(){
    wx.navigateTo({
      url: 'stylePage/stylePage',
    })

  },

  testClick: function () {
     this.setData({
       testName: 'asdfsfasf'
     })
  
  },

  camera: function () {

    wx.navigateTo({
      url: 'camera/camera',
    })

  },

  scanCode: function () {
    
    wx.navigateTo({
      url: 'scanCode/scanCode',
    })
  },
  
  testPage: function () {
    wx.navigateTo({
      url: '2/test',
    })
  },


  secendClick: function () {
   
   wx.navigateTo({
     url: 'secend',
   })
   
  },

  networkClick: function () {
     wx.navigateTo({
       url: 'network/networkV',
     })
  },

  scrollViewClick: function () {

  wx.navigateTo({
    url: 'scrollView/scrollView',
  })  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
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