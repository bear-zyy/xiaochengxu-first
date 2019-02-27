// miniprogram/pages/zhiketong/coursePage.js

const groupId = '';
const tokenData = ''
const userId = ''

Page({

  /**
   * 页面的初始数据
   */
  data: {

    id: groupId,
    tokenData: '',
    userId: ''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log('带过来的参数'+ options)

    const the = this;

    the.setData({
      id: options.groupId
    })

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

    console.log(options.groupId)

    wx.request({
      url: 'http://192.168.12.10:8250/platform-zkt-app/app/teachResearch/get/group/curriculums',
      method: 'POST',
      header: {
        'content-type': 'application/json', // 默认值
        'accessToken': the.data.tokenData,
        'userId': the.data.userId

      },
      data: {
        keywords:{
          groupId: options.groupId,
          type: 2

        },
        page:{
          offset: 1 ,
          limit: 10
        }

      },
      success(res){
        console.log(res.data)

      }

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