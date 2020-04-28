// pages/team/team.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    active: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (wx.getStorageSync('scene')) {
      // 获取上下级关系
      wx.request({
        url: 'https://exam.qhynice.top/index.php/Api/User/tree',
        data: {
          uid: wx.getStorageSync('scene'),
          level: this.data.active
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        success: res => {
          if (res.data.data) {
            this.setData({
              data: res.data.data
            })
          } else {
            this.setData({
              data: ''
            })
          }
        }
      })
    }
  },
  onChange(event) {
    this.setData({
      active: event.detail.index
    })
    this.onLoad()
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