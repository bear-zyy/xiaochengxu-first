// miniprogram/pages/secend/shoppingcart/shoppingcart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [{ 'id': '1', 'name': 'zyy', 'checked': false }, { 'id': '2', 'name': 'wms', 'checked': false }, { 'id': '3', 'name': 'wx', 'checked': false }, { 'id': '4', 'name': 'lq' , 'checked': false}],
    imageUrl: '../../../images/home.png'
  },

  checkboxChange : function (e) {

    var selectArr = e.detail.value;

    var array = [];

    for(var i = 0 ; i < this.data.array.length; ++i) {

      var dict = this.data.array[i];

      for (var j= 0 ; j < selectArr.length; ++j){

        var str = selectArr[j];
        if (dict['id'] == str) {
          dict['checked'] = true;
          break; 
        }
        else {
          dict['checked'] = false;
        }
      }

      array.push(dict);
    }

    this.setData({
      array : array
    })

  },
// 全选
  allSelected : function () {
    
    var array = [];

    for (var i=0 ; i < this.data.array.length ; ++i){
      var data = this.data.array[i];
      data['checked'] = true;

      // 这个就是数组中加入数据
      array.push(data);
      // 具体这个join是干嘛用的还不知道
      // array.join(data);
    }

    this.setData({
      array : array
    })

  },
//取消
  cancelSelected : function () {

    var array = [];

    for (var i = 0; i < this.data.array.length; ++i) {
      var data = this.data.array[i];
      data['checked'] = false;

      array.push(data);
    }

    this.setData({
      array: array
    })

  },
// 购买
  buySelected : function () {

    for (var i = 0 ; i < this.data.array.length ; ++i){

      var dict = this.data.array[i];

      if (dict['checked']){
        console.log(dict);
      }

    }

  },
//删除
  deleteSeleted : function () {

    var array = [];

    for (var i = 0; i < this.data.array.length; ++i) {

      var dict = this.data.array[i];

      if (!dict['checked']) {
        array.push(dict);
      }
    }

    this.setData({
      array: array
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
    wx.setNavigationBarTitle({
      title: '购物车',
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