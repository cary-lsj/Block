// index.js
//获取应用实例
const app = getApp();
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    var userinfo = app.globalData.userInfo;
    var openid = app.globalData.userid;
    var Url = options.url+"?openid=" + openid + "&nickname=" + userinfo.nickName + "&sex=" + userinfo.gender + "&headimgurl=" + userinfo.avatarUrl;
    self.setData({
      url: Url
    })
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
  }
})