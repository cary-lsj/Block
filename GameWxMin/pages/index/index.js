// index.js
//获取应用实例

const app = getApp();
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    wx.login({
      success: function (res) {
        var code = '';
        code = res.code;
        wx.request({
          url: app.serverip,
          method: "POST",
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          data: {
            code: JSON.stringify(code)
          },
          success: function (res) {
            if (res.statusCode == 200) {
              var data = res.data
              app.globalData.userid = data.openid;
            }
          }
        });
      }
    });
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '多彩木块',
      // imageUrl: 'https://www.tianhgame.com/wxMin/wxFirst/img/share.png',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  getUserInfo: function (e) {
    // console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    var url = "https://www.cxagile.cn/blockpk/";
    // var url = "https://www.cxagile.cn";
    wx.redirectTo({
      url: "/pages/main/main?url="+url
    })
  }
})