// pages/integral/integral.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    parts_left: '0',
    datas:0
  },
  // 获取表单数据并存储
  user1: function(e) {
    this.setData({
      userName: e.detail.value,
      userNames: e.detail.cursor
    })
  },
  user2: function(e) {
    this.setData({
      userPhone: e.detail.value
    })
  },
  user3: function(e) {
    this.setData({
      userAccount: e.detail.value,
    })
  },
  user4: function(e) {
    this.setData({
      userQuota: e.detail.value
    })
  },
  user5: function(e) {
    this.setData({
      userBill: e.detail.value
    })
  },
  // 点击事件
  but: function() {
    var userName = this.data.userName;
    var userPhone = this.data.userPhone;
    var userAccount = this.data.userAccount;
    var userQuota = this.data.userQuota;
    var userBill = this.data.userBill;
    if (!(/^[\u4E00-\u9FA5A-Za-z]+$/.test(userName)) || userName == undefined) {
      this.setData({
        color1: "red"
      })
    } else {
      this.setData({
        color1: "black"
      })
    };
    if (!(/^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/.test(userPhone))) {
      this.setData({
        color2: "red"
      })
    } else {
      this.setData({
        color2: "black"
      })
    }
    if (!(/^[0-9]*$/.test(userAccount)) || userAccount == undefined || userAccount == '') {
      this.setData({
        color3: "red"
      })
    } else {
      this.setData({
        color3: "black"
      })
    }
    if (!(/^[0-9]*$/.test(userQuota)) || userQuota == undefined || userQuota == '') {
      this.setData({
        color4: "red"
      })
    } else {
      this.setData({
        color4: "black"
      })
    }
    if (!(/^[0-9]*$/.test(userBill)) || userBill == undefined || userBill == '') {
      this.setData({
        color5: "red"
      })
    } else {
      this.setData({
        color5: "black"
      })
    }
    if (!(!(/^[\u4E00-\u9FA5A-Za-z]+$/.test(userName)) || userName == undefined) && !(!(/^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/.test(userPhone))) && !(!(/^[0-9]*$/.test(userAccount)) || userAccount == undefined || userAccount == '') && !(!(/^[0-9]*$/.test(userQuota)) || userQuota == undefined || userQuota == '') && !(!(/^[0-9]*$/.test(userBill)) || userBill == undefined || userBill == '')) {
      // 返回上级历史记录事件
      wx.navigateBack({
        delta: 1
      })
      // 提现申请接口
      wx.request({
        url: 'https://exam.qhynice.top/index.php/Api/User/withdraw',
        data: {
          uid: wx.getStorageSync('id'),
          name: this.data.userName,
          tel: this.data.userPhone,
          jifen: this.data.userBill,
          num: this.data.userQuota,
          account: this.data.userAccount
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        success:res=>{
          this.onLoad()
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 用户信息接口
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
        wx.setStorageSync('user', res.data.userinfo)
        this.setData({
          jifens: wx.getStorageSync('user').jifen
        })
      }
    })
    
    // 未审核提现接口
    wx.request({
      url: 'https://exam.qhynice.top/index.php/Api/User/pending',
      data: {
        uid	: 50
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: res => {
        if (res.data.status==1){
          this.setData({
            datas: res.data.data
          })
          this.onLoad()
        }
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

  },
})