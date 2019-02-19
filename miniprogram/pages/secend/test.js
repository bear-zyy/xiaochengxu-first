// miniprogram/pages/secend/test.js

const common = require('common.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  
  jumpToImageVC: function () {

  //  wx.navigateTo({
  //    url: 'image/imageV',
  //  })

    common.sayHello('zyy')
    common.sayGoodbye('zyy')

  },
  cellClick: function () {
    wx.navigateTo({
      url: 'cell/cell',
    })
  },

  videoClick: function (){
   wx.navigateTo({
     url: 'video/video',
   })
  },
  cameraClick : function () {
    wx.navigateTo({
      url: 'camera/camera',
    })
  },

  customCell: function () {
   
   wx.navigateTo({
     url: 'cell/customCell',
   })
  },

  storage () {
    wx.navigateTo({
      url: 'storage/storage',
    })
  },
  
  zhixing: function () {
    wx.navigateTo({
      url: 'zhixing/zhixing',
    })
  
  },
// 获取授权设置，查看授权状态
  settingClick: function () {
    wx.getSetting({

      success(res) {
        console.log(res.authSetting)
      }
    }
    )
  },

//打开权限设置页面，这个有点像iOS系统的感觉，没有首次发起权限请求，是不会在权限设置页面显示的
  openSettingPage: function () {
wx.openSetting({
  success(res){
    console.log(res.authSetting)
  }
})
  },

//获取用户信息
  getUserInfoData: function () {
wx.getUserInfo({
  success(res){
    console.log(res.userInfo)

  }
})
  },

  templateClick: function () {
wx.navigateTo({
  url: 'templatePage',
})
},
  shoppingcart: function () {
     wx.navigateTo({
       url: 'shoppingcart/shoppingcart',
     })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '第二页',
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