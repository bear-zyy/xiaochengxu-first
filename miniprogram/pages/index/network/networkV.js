// miniprogram/pages/index/network/networkV.js

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  networkRequest: function () {
    
    wx.request({
      url: 'http://192.168.12.10:8250/platform-zkt-app/WiClass/rest/appLogin',
      data: {
        username: 'zyy',
        password: '123456'
      },
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },

      success(res) {
        console.log(res.data)

        wx.setStorage({
          key: 'token',
          data: res.data.accessToken,
          success() {/* 这个是存储成功*/
            console.log('token登录信息存储成功')
          },
          fail() {
            console.log('token登录信息存储失败')
          }
        })

        wx.setStorage({
          key: 'userId',
          data: res.data.id,
          success() {/* 这个是存储成功*/
            console.log('id登录信息存储成功')
          },
          fail() {
            console.log('token登录信息存储失败')
          }
        })

      },

      fail(res){
        console.log(res.data)
      }
      

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