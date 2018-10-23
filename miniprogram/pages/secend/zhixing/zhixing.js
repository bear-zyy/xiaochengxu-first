// miniprogram/pages/secend/zhixing/zhixing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    perc : '50',
    scrollVHeight : '210px',
    items: [
      { name: '张源远', headUrl: 'red', num: 5, best: true },
      { name: '马伟', headUrl: 'blue', num: 5, best: true },
      { name: '王淼森', headUrl: 'black', num: 2, best: false },
      { name: '王旭', headUrl: 'yellow', num: 2, best: false },
      { name: '李谦', headUrl: 'green', num: 2, best: false},
      { name: '宁总', headUrl: 'green', num: 2, best: false },
      { name: '夏恒', headUrl: 'green', num: 2, best: false }
      ],
    tatol : 0,
    activityArray: [
      '1、每位用户可邀请的好友数量无上限。',
      '2、每位用户每天最多可以帮组5位好友加速。',
      '3、进入页面后，会自动帮助您的好友抽取加速包，加速包数量随机，2、5、10或者20个不等。',
      '4、赠人玫瑰，手有余香，帮助好友加速后，您将获得赠礼一份，内含2个加速包；当您分享加速页面后，可升级赠礼为4个加速包，新用户更有机会领取10个加速包的超值好礼。',
      '5、您在本页面上获得的加速包和机票国内优惠券均可在小程序内使用，其余优惠券请至APP内使用。',
      '6、如果出现违规行为（如作弊领取、恶意套现等），将取消用户的活动资格；同事有权撤销违规交易，收回相关优惠券或者加速包（包括已使用和未使用的）；必要时将追究归为用户的法律责任。',
      '7、我们将根据本活动的实际举办情况对活动规则进行变动或者调整，相关变动或者调整将公布在活动页面上，并于公布时即时生效。'
    ]
  },

  scrollViewHeightChange: function () {
   
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


    var tatol = 0;

    for (var i = 0; i < this.data.items.length; ++i) {
      tatol = this.data.items[i].num + tatol;
    }

    this.setData({
      tatol: tatol
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
    wx.setNavigationBarTitle({
      title: '智行火车票',
    })
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