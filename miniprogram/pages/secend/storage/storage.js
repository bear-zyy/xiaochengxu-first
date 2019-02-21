// miniprogram/pages/secend/storage/storage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
// 异步  都是有成功、失败、完成的回调
  cun () {
    wx.setStorage({
      key: 'name',
      data: 'zyy',
      success(){/* 这个是存储成功*/
         console.log('看看吧')
      },
      fail(){
        console.log('失败')
      },
      complete(){
         console.log('完成')
      }
    })
    
  },

  qu () {
    wx.getStorage({
      key: 'name',
      success: function(res) {
        console.log(res.data)
      },
    })
  },

  remove(){
     wx.removeStorage({
       key: 'name',
       success: function(res) {
         console.log(res)
       },
     })
  },

  clear () {
    wx.clearStorage()
  },
// 同步的方法
  chunSync() {
    var key = 'name'
    var data = 'lxx'
    wx.setStorageSync(key, data)

  },

  quSync() {

    var data = wx.getStorageSync('name')

    console.log(data)
  },

  removeSync(){
   wx.removeStorageSync('name')
  },

  clearSync() {
    wx.clearStorageSync()
  },


// 这里是文件的操作了
  fileWrite(){

    const fs = wx.getFileSystemManager()

    fs.writeFileSync(`${wx.env.USER_DATA_PATH}/hello.txt`, 'hello, world', 'utf8')

  },
  fileRead() {

    const fs = wx.getFileSystemManager()

    const string = fs.readFileSync(`${wx.env.USER_DATA_PATH}/hello.txt`, 'utf8')

    console.log(string)


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