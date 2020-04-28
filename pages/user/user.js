// pages/user/user.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  addphone() {
    wx.addPhoneContact({
      firstName: '联系人', //名字（必填）
      photoFilePath: '', //头像本地文件路径
      mobilePhoneNumber: '', //昵称
      lastName: '', //姓氏
      middleName: '', //中间名
      remark: '', //备注
      mobilePhoneNumber: '1340000', //手机号
      weChatNumber: '', //微信号
      addressCountry: '', //联系地址国家
      addressState: '', //联系地址省份
      addressCity: '', //联系地址城市
      addressStreet: '', //联系地址街道
      addressPostalCode: '', //联系地址邮政编码
      organization: '', //公司
      title: '', //职位
      workFaxNumber: '', //工作传真
      workPhoneNumber: '', //工作电话
      hostNumber: '', //公司电话
      email: '', //电子邮件
      url: '', //	网站
      workAddressCountry: '', //工作地址国家
      workAddressState: '', //工作地址省份
      workAddressCity: '', //工作地址城市
      workAddressStreet: '', //工作地址街道
      workAddressPostalCode: '', //工作地址邮政编码
      homeFaxNumber: '', //	住宅传真
      homePhoneNumber: '', //	住宅电话
      homeAddressCountry: '', //	住宅地址国家
      homeAddressState: '', //	住宅地址省份
      homeAddressCity: '', //	住宅地址城市
      homeAddressStreet: '', //	住宅地址街道
      homeAddressPostalCode: '', //	住宅地址邮政编码
      // success() {
      //   console.log('接口调用成功的回调函数')
      // },
      // fail() {
      //   console.log('接口调用失败的回调函数')
      // },
      // complete() {
      //   console.log('接口调用结束的回调函数（调用成功、失败都会执行）')
      // }
    })
  },
  phone() {
    wx.makePhoneCall({
      phoneNumber: '1340000', //仅为示例，并非真实的电话号码
      // success() {
      //   console.log('接口调用成功的回调函数')
      // },
      // fail() {
      //   console.log('接口调用失败的回调函数')
      // },
      // complete() {
      //   console.log('接口调用结束的回调函数（调用成功、失败都会执行）')
      // }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})