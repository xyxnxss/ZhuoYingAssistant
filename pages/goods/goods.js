// pages/goods/goods.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    cardCur: 0,
    active: 0,
    TabCur: 0,
    scor: [{
        name: '图文详情'
      },
      {
        name: '产品参数'
      }
    ],
    index1: 1,
    index2: 0,
    values: 1
  },
  // 弹窗
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  // 跳转
  hide() {
    wx.setStorageSync('pro_id', this.data.pid)
    wx.setStorageSync('num', this.data.values)
    wx.navigateTo({
      url: '../order/order?pro_id=' + wx.getStorageSync('pro_id') + '&num=' + wx.getStorageSync('num')
    })
    this.setData({
      modalName: null
    })
    // 商品id接口
    wx.request({
      url: 'https://exam.qhynice.top/index.php/Api/Shopping/add',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        uid: wx.getStorageSync('id'),
        pid: this.data.pid,
        num: this.data.values
      },
      method: 'POST'
    })
  },
  //标签页
  tabSelect(e) {
    var index = e.currentTarget.dataset.id;
    if (index == 0) {
      this.setData({
        index1: 1
      })
    } else {
      this.setData({
        index1: 0
      })
    }
    if (index == 1) {
      this.setData({
        index2: 1
      })
    } else {
      this.setData({
        index2: 0
      })
    }
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
  // 步进器
  onChange(event) {
    this.setData({
      values: event.detail
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url: 'https://exam.qhynice.top/index.php/Api/Product/index',
      data: {
        pro_id: wx.getStorageSync('pro_id')
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: res => {
        this.setData({
          pro: res.data.pro,
          pid: res.data.pro.id
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