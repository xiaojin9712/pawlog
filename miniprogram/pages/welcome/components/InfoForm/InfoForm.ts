// pages/welcome/components/InfoForm/InfoForm.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    gender: 1,
    meetDate: "2024-03-13",
    name: "",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setGender(event: WechatMiniprogram.TouchEvent) {
      const value = Number(event.currentTarget.dataset.value);
      this.setData({
        gender: value,
      });
    },

    setMeetDate(event: WechatMiniprogram.TouchEvent) {
      const { value } = event.detail;
      this.setData({
        meetDate: value,
      });
    },

    setName(event: WechatMiniprogram.TouchEvent) {
      const { value } = event.detail;
      this.setData({
        name: value,
      });
    },
  },
});
