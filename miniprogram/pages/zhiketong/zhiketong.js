// miniprogram/pages/zhiketong/zhiketong.js

var requestClass = require('../../request.js')

const list = []

const tokenData = ''
const userId = ''


Page({

  /**
   * 页面的初始数据
   */
  data: {

    dataList: list,
    tokenData: '',
    userId: ''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    const the = this;

    requestClass.postRequest('http://192.168.12.10:8250/platform-zkt-app/app/teachResearch/query/groups' 
      , {
        page: {
          offset: 1,
          limit: 10
        },
        keywords: {
          type: 'my'
        }} 
      , the.doSuccess
      , the.doFail );

  },

  doSuccess: function (data) {
    // console.log(data)
    if (data.code == 0) {
      this.setData({
        dataList: data.data.data
      })
    }

  },
  doFail(){
    console.log('请求失败了')

  },

  // 这里是cell的点击事件
  cellDidSelect(behavior) {

    const groupId = behavior.detail.groupId

    console.log('cell的点击事件')
    console.log(groupId)

    wx.navigateTo({
      url: 'coursePage?groupId=' + groupId,
    })

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

    console.log('onShow')//这个是每次页面显示都执行

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