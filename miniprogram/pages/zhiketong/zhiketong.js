// miniprogram/pages/zhiketong/zhiketong.js

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

    wx.getStorage({
      key: 'token',
      success: function (res) {
        the.setData({
          tokenData: res.data
        })
      },
    })

    wx.getStorage({
      key: 'userId',
      success: function (res) {
        the.setData({
          userId: res.data
        })
      },
    })

    wx.request({
      url: 'http://192.168.12.10:8250/platform-zkt-app/app/teachResearch/query/groups',
      header: {
        'content-type': 'application/json', // 默认值
        'accessToken': the.data.tokenData,
        'userId': the.data.userId
      },
      method: "POST",
      data: {
        page : {
          offset: 1,
          limit: 10
        },
        keywords : {
          type : 'my'
        }
      },
      success(res) {
        console.log(res.data)

        if (res.data.code == 0){
          the.setData({
            dataList: res.data.data.data
          })
        }
      }
    })

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