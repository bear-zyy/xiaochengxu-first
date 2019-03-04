
var app = getApp()

function postRequest(url , postData , doSuccess , doFail){

  wx.request({
    url: url,
    header: {
      'content-type': 'application/json',
      'accessToken': app.token,
      'userId': app.userId
    },
    data: postData,
    method: 'POST',
    success(res){
      
      console.log(res.data)

      doSuccess(res.data)
      
    },
    fail: function() {
      doFail()
    }
  })

}

function getRequest(url, getData, doSuccess, doFail) {

  wx.request({
    url: url,
    header: {
      'content-type': 'application/json',
      'accessToken': app.token,
      'userId': app.userId
    },
    data: getData,
    method: 'GET',
    success(res) {
      doSuccess(res.data)
    },
    fail: function () {
      doFail()
    }
  })

}

module.exports.getRequest = getRequest;
module.exports.postRequest = postRequest;