// miniprogram/pages/new/new.js

let serviceList = []

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  newTwo () {
    wx.navigateTo({
      url: 'newTwo',
    })
  },

  refresh () {
    wx.navigateTo({
      url: 'refresh/refresh',
    })

  },

  coverView () {
    wx.navigateTo({
      url: 'cover/cover',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   wx.setNavigationBarTitle({
     title: '第三页',
   })
  },
// 这里的路径是以当前的路径为基准， 往上一个目录路径就多一个点.  ，
  componentClick: function () {

    wx.navigateTo({
      url: '../component/newComponentPage',
    })

  },
///开始
  networkRequest(){

    // let that = this

    // wx.startLocalServiceDiscovery({
    //   serviceType: '_http._tcp.',
    //   success: function (res) {
    //     that.onLocalService()

    //   },
    //   fail: function (err) {
    //     console.log('开始失败'+ err)
    //   },
    //   complete: function () {
    //     console.log('complete')
    //   }
    // })


    wx.request({
      url: 'http://192.168.101.174:56398',//不在合法域名列表中，怎么才能在同一个WiFi下呢？
      method: 'POST',
      data: {
        username: 'zyy',
        password: '123456'
      },
      success(res) {
        console.log(res.data)
      }
    })

  },
// 结束
  networkStop (){
    let that = this
    wx.stopLocalServiceDiscovery({
      success: function () {
        console.log('搜索成功'),

        that.offLocalService()

      },
      fail: function () {
        that.showTips('停止搜索失败，请重试！')
      },
      complete: function () {
        console.log('stopDiscovery complete')
      },

    })

  },
//开始的回调
  onLocalService: function () {
    let that = this
    // 监听服务发现事件
    wx.onLocalServiceFound(function (obj) {
      console.log('onLocalServiceFoundObj' + obj),

        console.log('serviceType' +  obj.serviceType),
        console.log('serviceName' + obj.serviceName),
        console.log('ip' + obj.ip),
        console.log('port' + obj.port),

      serviceList.push(obj),

      console.log(serviceList)


    })

    // 监听服务解析失败事件
    wx.onLocalServiceResolveFail(function (obj) {
      console.log('onLocalServiceResolveFail')

    })

    // 监听服务离开
    wx.onLocalServiceLost(function (obj) {
      that.showTips('有服务离开啦');
      console.log(obj)
    })

    // 监听搜索停止
    wx.onLocalServiceDiscoveryStop(function (obj) {
      console.log('监听到搜索停止事件')
    })

  },
  offLocalService: function () {

    console.log('是否执行此部分数据')
    // 取消监听服务发现事件
    wx.offLocalServiceFound(function () {
      console.log('取消监听服务发现事件 成功')
    })

    // 取消监听服务解析失败事件
    wx.offLocalServiceResolveFail(function () {
      console.log('取消监听 mDNS 服务解析失败的事件 成功')
    })

    // 取消监听服务离开
    wx.offLocalServiceLost(function () {
      console.log('取消监听服务离开事件 成功')
    })

    // 取消监听搜索停止
    wx.offLocalServiceDiscoveryStop(function () {
      console.log('取消监听 mDNS 服务停止搜索的事件 成功')
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