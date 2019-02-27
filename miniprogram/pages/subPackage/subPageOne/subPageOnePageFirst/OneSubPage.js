// miniprogram/pages/subPackage/subPageOne/subPageOnePageFirst/OneSubPage.js

const initData = 'this is     first line \n this is second line'
const extraLine = []

const num = 1

const delayNum = 1

Page({

  /**
   * 页面的初始数据
   */
  data: {

    textData: initData,

    nodeData: [{
      name: 'zyy'
    }]

  },
  addLine(){
    extraLine.push('other line')

    this.setData({
      textData: initData + '\n' + extraLine.join('\n')
    })

  },
  moveLine(){

    if(extraLine.length> 0 ){

      extraLine.pop()

      this.setData({
        textData: initData + '\n' + extraLine.join('\n')
      })

    }

  },

  //// 数组在微信小程序中  push  pop  join 是什么意思？
  //// 就目前来看  push 应该是add  pop 应该是remove lastobject  join是什么鬼？感觉像是数组转成了String
  tap(){

  },

  timer(){
    this.name = setInterval(
      function(){

        console.log('2秒到了  执行了')

      }, 
      2000)
  },
  endTimer(){

    clearInterval(this.name)

  },

  delayOpreation(){

    var that = this;

    that.delayNum = setTimeout(
      function(){
        console.log('执行了延后操作')

      } , 3000)

  },
  clearTimeout(){
    clearTimeout(this.delayNum)

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