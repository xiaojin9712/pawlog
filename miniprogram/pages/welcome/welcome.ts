// pages/welcome/welcome.ts

import { preloadImages } from "@/utils/util";

enum WelcomeSteps {
  Welcome,
  SelectCategory,
  FillInfo,
}

const categories = [
  {
    id: 1,
    src:
      "https://7061-pawlog-6gfw9v2a5fcbe657-1252740566.tcb.qcloud.la/assets/emoji/animated/Cat%20Face.png?sign=56c246577c7a3080fc845cbe0922ac9c&t=1710331524",
    staticSrc:
      "https://7061-pawlog-6gfw9v2a5fcbe657-1252740566.tcb.qcloud.la/assets/emoji/static/cat_face_3d.png?sign=1fa9f86bd95fe02859b26a6234ae99a1&t=1710331365",
    name: "猫咪",
  },
  {
    id: 2,
    src:
      "https://7061-pawlog-6gfw9v2a5fcbe657-1252740566.tcb.qcloud.la/assets/emoji/animated/Dog%20Face.png?sign=093b52b9bd6250740fe027fc1ee3f8b1&t=1710331549",
    staticSrc:
      "https://7061-pawlog-6gfw9v2a5fcbe657-1252740566.tcb.qcloud.la/assets/emoji/static/dog_face_3d.png?sign=ee7835a815276780c66bc2e6189efe16&t=1710331459",
    name: "狗",
  },
  {
    id: 3,
    src:
      "https://7061-pawlog-6gfw9v2a5fcbe657-1252740566.tcb.qcloud.la/assets/emoji/animated/Pig%20Face.png?sign=510cd333ad1f07999c9345fe8ea9ce90&t=1710331557",
    staticSrc:
      "https://7061-pawlog-6gfw9v2a5fcbe657-1252740566.tcb.qcloud.la/assets/emoji/static/pig_face_3d.png?sign=0523b379acbad14944c0bd4c12fabf62&t=1710331475",
    name: "猪",
  },
  {
    id: 4,
    src:
      "https://7061-pawlog-6gfw9v2a5fcbe657-1252740566.tcb.qcloud.la/assets/emoji/animated/Cow%20Face.png?sign=47e2ea9e8f17b5e2e6d14c32b0c40d95&t=1710331541",
    staticSrc:
      "https://7061-pawlog-6gfw9v2a5fcbe657-1252740566.tcb.qcloud.la/assets/emoji/static/cow_face_3d.png?sign=12e1801e6a90aed192b58854697aa2d2&t=1710331439",
    name: "牛",
  },
  {
    id: 5,
    src:
      "https://7061-pawlog-6gfw9v2a5fcbe657-1252740566.tcb.qcloud.la/assets/emoji/animated/Coral.png?sign=09a947fbff88105698cdcfdb6458eb82&t=1710331532",
    staticSrc:
      "https://7061-pawlog-6gfw9v2a5fcbe657-1252740566.tcb.qcloud.la/assets/emoji/static/coral_3d.png?sign=56b202b2d6fca7b4019b28ac0159e563&t=1710331382",
    name: "水里游的",
  },
  {
    id: 6,
    src:
      "https://7061-pawlog-6gfw9v2a5fcbe657-1252740566.tcb.qcloud.la/assets/emoji/animated/Potted%20Plant.png?sign=ce02e00fcbc581bed0b2598cb03cad16&t=1710331566",
    staticSrc:
      "https://7061-pawlog-6gfw9v2a5fcbe657-1252740566.tcb.qcloud.la/assets/emoji/static/potted_plant_3d.png?sign=e985706ed2b113727204c56bee98bdb8&t=1710331490",
    name: "植物",
  },
  {
    id: 7,
    src:
      "https://7061-pawlog-6gfw9v2a5fcbe657-1252740566.tcb.qcloud.la/assets/emoji/animated/Sparkling%20Heart.png?sign=1223eb8104eecbed714940a72db23a2c&t=1710331574",
    staticSrc:
      "https://7061-pawlog-6gfw9v2a5fcbe657-1252740566.tcb.qcloud.la/assets/emoji/static/sparkling_heart_3d.png?sign=1137f7cf830b06917dd36d3c42e3ae50&t=1710331503",
    name: "其他",
  },
];

Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentStep: 0, // current step
    fullStep: 3, // all step
    categories: categories, // pet's categories
    activeCategoryId: 1,
    bottomButtonTextArray: ["开启PawLog", "下一步", "完成"],
    petAvatar: categories[0].src,
    petInfo: {
      gender: 1,
      name: "",
      meetDate: "2024-01-01",
    },
  },

  updateActiveCategoryId(e: WechatMiniprogram.TouchEvent) {
    this.setData({
      activeCategoryId: e.detail.categoryId,
    });
    this.updatePetAvatar();
  },

  updatePetAvatar() {
    const { categories, activeCategoryId } = this.data;
    this.setData({
      petAvatar: categories.find((item) => item.id === activeCategoryId)?.src,
    });
  },

  updatePetInfo(e: WechatMiniprogram.TouchEvent) {
    this.setData({
      petInfo: {
        ...this.data.petInfo,
        ...e.detail,
      },
    });
  },

  nextStep() {
    this.setData({
      currentStep: (this.data.currentStep + 1) % 3,
    });
    if (this.data.currentStep == 0) {
      const { petInfo, activeCategoryId } = this.data;
      console.log("submit", petInfo, activeCategoryId);
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    preloadImages(
      this.data.categories
        .map((item) => {
          return [item.staticSrc, item.src];
        })
        .flat()
    );
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
