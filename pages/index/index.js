//获取应用实例
const app = getApp()
Page({
  data: {

  },
  onLoad: function() {
    // 判断是否有id，否跳转到手机号授权页
    if (!(wx.getStorageSync('id'))) {
      wx.navigateTo({
        url: '../empower/empower'
      })
    } else {
      // 判断是否有手机号，否跳转到手机号授权页
      if (!(wx.getStorageSync('phoneNumber'))) {
        wx.navigateTo({
          url: '../empowerPhone/empowerPhone'
        })
      }
    }
    //轮播接口
    wx.request({
      url: 'https://exam.qhynice.top/index.php/Api/Index/index',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: res => {
        this.setData({
          // 获取轮播数组存储到data
          ggtop: res.data.ggtop,
          // 获取商品数组存储到data
          prolist: res.data.prolist,
        })
      }
    })
  },
  // 点击按钮跳转商品详情
  urls(event) {
    wx.setStorageSync('pro_id', event.currentTarget.dataset.index)
    wx.navigateTo({
      url: '../goods/goods'
    })
  },
  ss() {
    wx.showToast({  
      title: '该功能未上线！',
        icon: 'none',
        duration: 1500
    })
  }
})