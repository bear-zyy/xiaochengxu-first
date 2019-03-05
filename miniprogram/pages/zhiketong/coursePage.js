// miniprogram/pages/zhiketong/coursePage.js

var requestClass = require('../../request.js')

const groupId = '';
const tokenData = ''
const userId = ''
const list = []

const onelist = []

Page({

  /**
   * 页面的初始数据
   */
  data: {

    id: groupId,
    tokenData: '',
    userId: '',
    twoDataList : list,
    oneDataList: onelist

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log('带过来的参数'+ options)

    const the = this;

    the.setData({
      id: options.groupId,

      twoDataList: [{}],

      oneDataList: [{},{},{}]
    })



// 这个是已经结束的课程
  // requestClass.postRequest(
  //   'http://192.168.12.10:8250/platform-zkt-app/app/teachResearch/get/group/curriculums' 
  //   , {
  //   keywords: {
  //     groupId: options.groupId,
  //     type: 2

  //   },
  //   page: {
  //     offset: 1,
  //     limit: 10
  //   }} 
  //   , the.doSuccesstwo
  //   , the.doFail
  //   );
// 这个是正在进行时的课程
    // requestClass.postRequest(
    //   'http://192.168.12.10:8250/platform-zkt-app/app/teachResearch/get/group/curriculums'
    //   , {
    //     keywords: {
    //       groupId: options.groupId,
    //       type: 1

    //     },
    //     page: {
    //       offset: 1,
    //       limit: 10
    //     }
    //   }
    //   , the.doSuccessOne
    //   , the.doFailOne
    // );

  },
  // 网络请求成功
  doSuccesstwo(data){

    this.setData({
      twoDataList: data.data.data
    })

  },
  doSuccessOne(data){
    this.setData({
      oneDataList: data.data.data
    })

  },
  //网络请求失败
  doFail(){
    console.log('失败')

  },
  doFailOne(){
    console.log('one失败')
  },

  cellDidSelect(e){

    console.log('cell点击了')
    console.log(e)

    wx.navigateTo({
      url: 'courseinfopage?model=' + e.detail.modelData
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