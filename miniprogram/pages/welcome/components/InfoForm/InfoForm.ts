// pages/welcome/components/InfoForm/InfoForm.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    avatar: {
      type: String,
      default:
        "https://7061-pawlog-6gfw9v2a5fcbe657-1252740566.tcb.qcloud.la/assets/emoji/animated/Cat%20Face.png?sign=56c246577c7a3080fc845cbe0922ac9c&t=1710331524",
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    gender: 1,
    meetDate: "2024-03-13",
    name: "",
  },

  observers: {
    "gender,meetDate,name": function () {
      this.emitFormData();
    },
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

    emitFormData() {
      const { gender, meetDate, name } = this.data;
      this.triggerEvent("info-update", {
        gender,
        meetDate,
        name,
      });
    },
  },
});
