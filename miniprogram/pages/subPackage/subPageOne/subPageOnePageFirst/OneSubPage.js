// miniprogram/pages/subPackage/subPageOne/subPageOnePageFirst/OneSubPage.js

const initData = 'this is     first line \n this is second line'
const extraLine = []

Page({

  /**
   * 页面的初始数据
   */
  data: {

    textData: initData,

    nodeData: [{
      name: 'zyy'
      // attrs: {
      //   class: 'div_class',
      //   style: 'line-height: 60px; color: red;'
      // },
      // children: [
      //   {
      //     type: 'text',
      //     text: 'hello world'
      //   }
      // ]
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