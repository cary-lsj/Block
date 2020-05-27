// index.js
//获取应用实例

const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    url: ""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var self = this;
    wx.login({
      success: function(res) {
        var code = '';
        code = res.code;
        wx.request({
          url: 'https://www.cxagile.cn/jssdk/wxLogin/getCode.php',
          data: {
            code: code
          },
          success: function(res) {
            if (res.statusCode == 200) {
              var data = res.data
              var userinfo = app.globalData.userInfo
              var Url = "https://www.cxagile.cn/blockpk/?openid=" + data.openid + "&nickname=" + userinfo.nickName + "&sex=" + userinfo.gender + "&headimgurl=" + userinfo.avatarUrl;
              self.setData({
                url: Url
              })
            }
          }
        });
      }
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '多彩木块',
      // imageUrl: 'https://www.tianhgame.com/wxMin/wxFirst/img/share.png',
      success: function(res) {
        // 转发成功
      },
      fail: function(res) {
        // 转发失败
      }
    }
  }

})