// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: 'http://i2.tiimg.com/704644/9ca9e28c364f123d.jpg',
    name: '合伙人',
    money: '913.00',
    number: '1',
    numbers: '913.00',
    addr_id: ''
  },
  // 返回
  fan: function() {
    wx.redirectTo({
      url: '../goods/goods',
    })
  },
  // 支付
  pay() {
    var hes = +this.data.he
    wx.request({
      url: 'https://exam.qhynice.top/index.php/Api/Payment/pay_now',
      data: {
        uid: wx.getStorageSync('id'),
        pid: this.data.pro_id,
        type: '1',
        price: hes,
        aid: this.data.adds_s.id,
        num: this.data.num
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: res => {
        if (res.data.status == 1) {
          wx.switchTab({
            url: '../index/index'
          })
          wx.showToast({
            title: '订单id为' + res.data.arr.order_id + '订单编号为' + res.data.arr.order_sn,
            icon: 'none', // 图标类型，默认success
            duration: 3000 // 提示窗停留时间，默认1500ms
          })
        } else {
          wx.showToast({
            title: '提交失败',
            icon: 'none',
            duration: 1500
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var pro_id = options.pro_id;
    this.setData({
      pro_id: options.pro_id,
      num: options.num
    })
    wx.request({
      url: 'https://exam.qhynice.top/index.php/Api/Product/index',
      data: {
        pro_id: pro_id
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: res => {
        this.setData({
          pro: res.data.pro
        })
        var num = this.data.num
        var yh = res.data.pro.price_yh
        this.setData({
          he: +yh * num + ".00"
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
        if (!(res.data.adds == '')) {
          this.setData({
            adds_s: res.data.adds[0]
          })
        } else {
          this.setData({
            adds_s: {
              name: '',
              tel: '',
              address: ''
            }
          })
        }
      }
    })
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