// miniprogram/pages/secend/newPage/canvasPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x: 0 ,
    y: 0 ,
    hidden: true
  },

  start(e){

    this.setData({
      hidden: false,
      x: e.touches[0].x,
      y: e.touches[0].y
    })

  },

  move(e){
    this.setData({
      hidden: false,
      x: e.touches[0].x,
      y: e.touches[0].y
    })

  },

  end(e){
    this.setData({
      hidden: true,
    })

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    const ctx = wx.createCanvasContext('myCanvas')

    // const grd = ctx.createLinearGradient(0 , 0 ,200 , 0)

    const grd = ctx.createCircularGradient(105 , 80 , 75)
    grd.addColorStop(0, 'red')

    grd.addColorStop(1,'white')

    ctx.setFillStyle(grd)
    ctx.fillRect(10 , 10 , 200 , 150)
    ctx.draw()

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