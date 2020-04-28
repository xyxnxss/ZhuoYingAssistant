// pages/invite/invite.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: 'http://i1.fuimg.com/704644/4e10b72489951de3.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 邀请码接口
    wx.request({
      url: 'https://exam.qhynice.top/index.php/Api/User/getWxcode',
      data: {
        invite_code: wx.getStorageSync('id')
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: res => {
        this.setData({
          imgma: res.data
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