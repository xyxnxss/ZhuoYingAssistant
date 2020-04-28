// pages/empower/empower.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 查看是否授权
    wx.getSetting({
      success: function(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.showToast({
            title: '',
            icon: 'loading',
            duration: 1500
          })
          wx.getUserInfo({
            success: function(res) {
              // 保存全局对象
              wx.setStorageSync('nickName', res.userInfo.nickName)
              wx.setStorageSync('avatarUrl', res.userInfo.avatarUrl)
              wx.setStorageSync('gender', res.userInfo.gender)
              // 获取code
              wx.login({
                success: res => {
                  // 发送 res.code 到后台换取 openId, sessionKey, unionId
                  wx.request({
                    url: 'https://exam.qhynice.top/index.php/Api/Login/getsessionkey',
                    method: 'POST',
                    data: {
                      code: res.code,
                    },
                    header: {
                      'content-type': 'application/x-www-form-urlencoded'
                    },
                    success: res => {
                      wx.setStorageSync('openid', res.data.openid) //用户唯一标识
                      wx.setStorageSync('key', res.data.session_key) //会话密钥
                      // 授权接口
                      wx.request({
                        url: 'https://exam.qhynice.top/index.php/Api/Login/authlogin',
                        method: 'POST',
                        data: {
                          openid: wx.getStorageSync('openid'),
                          NickName: wx.getStorageSync('nickName'),
                          HeadUrl: wx.getStorageSync('avatarUrl'),
                          gender: wx.getStorageSync('gender')
                        },
                        header: {
                          'content-type': 'application/x-www-form-urlencoded'
                        },
                        success: res => {
                          wx.setStorageSync('id', res.data.arr.ID)
                          wx.setStorageSync('HeadUrl', res.data.arr.HeadUrl)
                          wx.setStorageSync('NickName', res.data.arr.NickName)
                          wx.setStorageSync('openid', res.data.arr.openid)
                          wx.redirectTo({
                            url: '../empowerPhone/empowerPhone'
                          })
                        }
                      })
                    }
                  })
                }
              })
            }
          })
        }
      }
    })
  },
  bindGetUserInfo: function(e) {
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      var that = this;
      // 获取到用户的信息了，打印到控制台上看下
      console.log("用户的信息如下：");
      console.log(e.detail.userInfo);
      this.onLoad()
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function(res) {
          if (res.confirm) {
            console.log('用户点击了“返回授权”');
          }
        }
      })
    }
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
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})