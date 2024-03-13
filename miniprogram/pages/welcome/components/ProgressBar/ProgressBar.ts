// pages/welcome/components/ProgressBar/ProgressBar.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    percent: {
      type: Number,
      value: 10,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeBarStyle: {},
  },

  /**
   * 组件的数据监听器
   */
  observers: {
    percent: function (percent) {
      this.updateActiveBarStyle();
    },
  },

  lifetimes: {
    attached() {
      this.updateActiveBarStyle();
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    updateActiveBarStyle() {
      this.setData({
        activeBarStyle: `
          width: ${Math.min(100, this.data.percent)}%;
        `,
      });
    },
  },
});
