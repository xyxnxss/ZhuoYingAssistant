// pages/auth/auth.js
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
    //地址列表
    wx.request({
      url: 'https://exam.qhynice.top/index.php/Api/Address/index',
      data: {
        user_id: wx.getStorageSync('id')
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: res => {
        wx.setStorageSync('adds', res.data.adds)
        this.setData({
          adds: res.data.adds
        })
      }
    })
  },
  //删除地址
  but(e) {
    wx.request({
      url: 'https://exam.qhynice.top/index.php/Api/Address/del_adds',
      data: {
        user_id: wx.getStorageSync('id'),
        id_arr: e.currentTarget.dataset.id
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: res => {
        this.onLoad()
        wx.showToast({
          title: '操作成功！', // 标题
          icon: 'success', // 图标类型，默认success
          duration: 1500 // 提示窗停留时间，默认1500ms
        })
      }
    })
  },
  //默认地址
  buts(e) {
    wx.request({
      url: 'https://exam.qhynice.top/index.php/Api/Address/set_default',
      data: {
        uid: wx.getStorageSync('id'),
        addr_id: e.currentTarget.dataset.id
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: res => {
        wx.setStorageSync('addr_id', e.currentTarget.dataset.id)
        this.onLoad()
        wx.showToast({
          title: '操作成功！', // 标题
          icon: 'success', // 图标类型，默认success
          duration: 1500 // 提示窗停留时间，默认1500ms
        })
      }
    })
  },
  butt() {
    wx.redirectTo({
      url: '../address/address'
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