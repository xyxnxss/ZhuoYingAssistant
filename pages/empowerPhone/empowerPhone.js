// pages/empowerPhone/empowerPhone.js
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

  },
  //事件处理函数
  getPhoneNumber(e) {
    // 解密用户敏感信息获取手机号
    wx.request({
      url: 'https://exam.qhynice.top/index.php/Api/User/deciphering',
      method: 'GET',
      data: {
        sessionID: wx.getStorageSync('key'),
        encryptedDataStr: e.detail.encryptedData,
        iv: e.detail.iv
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: res => {
        wx.setStorageSync('phoneNumber', res.data.phoneNumber)
        console.log("用户的手机号:" + wx.getStorageSync('phoneNumber'))
        wx.navigateBack({
          delta: 1
        })
        // 修改信息添加手机号
        wx.request({
          url: 'https://exam.qhynice.top/index.php/Api/User/user_edit',
          method: 'POST',
          data: {
            uid: wx.getStorageSync('id'),
            tel: wx.getStorageSync('phoneNumber')
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: res => {
            if (res.data.status == 1) {
              wx.showToast({
                title: '操作成功！', // 标题
                icon: 'success', // 图标类型，默认success
                duration: 1500 // 提示窗停留时间，默认1500ms
              })
            }
          }
        })
      }
    })
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