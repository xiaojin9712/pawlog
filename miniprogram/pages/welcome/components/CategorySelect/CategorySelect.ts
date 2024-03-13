// pages/welcome/components/CategorySelect/CategorySelect.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    categories: {
      type: Array,
      value: [],
    },
    activeCategoryId: {
      type: Number,
      value: 1,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    updateActiveCategoryId(event: WechatMiniprogram.TouchEvent) {
      this.triggerEvent("update-categoryid", {
        categoryId: event.currentTarget.dataset.id,
      });
    },
  },
});
