// pages/bindleader/bindleader.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  but() {
    wx.request({
      url: 'https://exam.qhynice.top/index.php/Api/User/userinfo',
      data: {
        uid: wx.getStorageSync('id')
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: res => {
        if (res.data.userinfo.type == 1) {
          wx.showToast({
            title: '您当前为初始人',
            icon: 'none',
            duration: 1500
          })
          wx.switchTab({
            url: '../index/index'
          })
        } else {
          // 获取邀请人是否为初始人
          if (this.data.userinfo.type == 1) {
            wx.request({
              url: 'https://exam.qhynice.top/index.php/Api/User/user_edit',
              data: {
                uid: wx.getStorageSync('id'),
                tel: wx.getStorageSync('phoneNumber'),
                spread_id: this.data.userinfo.spread_id,
                secondary_id: this.data.userinfo.secondary_id,
                third_id: this.data.userinfo.third_id,
                initial_id: this.data.userinfo.spread_id
              },
              header: {
                'content-type': 'application/x-www-form-urlencoded'
              },
              method: 'POST',
              success: res => {
                wx.switchTab({
                  url: '../index/index'
                })
                wx.showToast({
                  title: '绑定成功',
                  icon: 'none',
                  duration: 1500
                })
              }
            })
          } else {
            wx.request({
              url: 'https://exam.qhynice.top/index.php/Api/User/user_edit',
              data: {
                uid: wx.getStorageSync('id'),
                tel: wx.getStorageSync('phoneNumber'),
                spread_id: this.data.userinfo.id,
                secondary_id: this.data.userinfo.secondary_id,
                third_id: this.data.userinfo.third_id,
                initial_id: this.data.userinfo.initial_id
              },
              header: {
                'content-type': 'application/x-www-form-urlencoded'
              },
              method: 'POST',
              success: res => {
                wx.switchTab({
                  url: '../index/index'
                })
                wx.showToast({
                  title: '绑定成功',
                  icon: 'none',
                  duration: 1500
                })
              }
            })
          }
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 获取邀请人id
    wx.setStorageSync('scene', options.scene)
    wx.request({
      url: 'https://exam.qhynice.top/index.php/Api/User/userinfo',
      data: {
        uid: wx.getStorageSync('scene')
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: res => {
        this.setData({
          userinfo: res.data.userinfo
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
    if (!(wx.getStorageSync('id'))) {
      wx.navigateTo({
        url: '../empower/empower'
      })
    } else {
      if (!(wx.getStorageSync('phoneNumber'))) {
        wx.navigateTo({
          url: '../empowerPhone/empowerPhone'
        })
      }
    }
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