// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: null
  },

  // 地址选择
  RegionChange: function(e) {
    this.setData({
      region: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 获取省接口
    wx.request({
      url: 'https://exam.qhynice.top/index.php/Api/Address/get_province',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: res => {
        // 数组分解存储data
        var sheng = res.data.list
        var se = []
        for (let i in sheng) {
          se.push(sheng[i].name)
        }
        this.setData({
          se: se,
          sheng: res.data.list
        })
      }
    })
  },
  // 获取市接口
  PickerChange1(e) {
    this.setData({
      index1: e.detail.value
    })
    var as = this.data.sheng
    var bs = this.data.index1
    var sf = as[bs].id
    this.setData({
      // 选中的省份id
      sf: sf,
      // 选中省份名字
      sheng_name: as[bs].name
    })
    wx.request({
      url: 'https://exam.qhynice.top/index.php/Api/Address/get_city',
      data: {
        sheng: sf
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: res => {
        var city = res.data.city_list
        var sec = []
        for (let i in city) {
          sec.push(city[i].name)
        }
        this.setData({
          sec: sec,
          shengc: res.data.city_list
        })
      }
    })
  },
  //  获取区接口
  PickerChange2(e) {
    this.setData({
      index2: e.detail.value
    })
    var asc = this.data.shengc
    var bsc = this.data.index2
    var sfc = asc[bsc].id
    this.setData({
      // 选中的市id
      sfc: sfc,
      // 选择市名字
      sfc_name: asc[bsc].name
    })
    wx.request({
      url: 'https://exam.qhynice.top/index.php/Api/Address/get_area',
      data: {
        sheng: this.data.sf,
        city: this.data.sfc
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: res => {
        var area = res.data.area_list
        var seca = []
        for (let i in area) {
          seca.push(area[i].name)
        }
        this.setData({
          seca: seca,
          shengca: res.data.area_list
        })
      }
    })
  },
  // 获取邮政编码接口
  PickerChange3(e) {
    this.setData({
      index3: e.detail.value
    })
    var asq = this.data.shengca
    var bsq = this.data.index3
    var sfq = asq[bsq].id
    this.setData({
      // 选中区的id
      sfq: sfq,
      // 选中区的名字
      sfq_name: asq[bsq].name
    })
    wx.request({
      url: 'https://exam.qhynice.top/index.php/Api/Address/get_code',
      data: {
        quyu: this.data.sfq,
        city: this.data.sfc
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
    })
  },
  // 提交信息保存
  formSubmit: function(e) {
    wx.request({
      url: 'https://exam.qhynice.top/index.php/Api/Address/add_adds',
      data: {
        user_id: wx.getStorageSync('id'),
        receiver: e.detail.value.xingming,
        tel: e.detail.value.dianhua,
        code: e.detail.value.beizu,
        sheng: this.data.sf,
        city: this.data.sfc,
        quyu: this.data.sfq,
        adds: this.data.sheng_name + this.data.sfc_name + this.data.sfq_name
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: res => {
        if (res.data.status == 0) {
          wx.showToast({
            title: '请先完善信息后再提交',
            icon: 'none',
            duration: 1500
          })
        } else {
          if (res.statusCode==404){
            wx.showToast({
              title: '暂无网络请重试',
              icon: 'none',
              duration: 1500
            })
            wx.redirectTo({
              url:'address'
            })
          }else{
            wx.redirectTo({
              url: '../auth/auth'
            })
          }
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

  }
})