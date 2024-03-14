import { categories } from "@/utils/data";

// pages/welcome/components/Introduction/Introduction.ts
const introductionConfig = [
  {
    title: "与爱宠共舞, 从PawLog开始",
    subtitle: "在PawLog, 每一个爪印都将化为永恒的记忆!",
  },
  {
    title: "宠爱无止境, PawLog有迹可循",
    subtitle: "用PawLog珍藏他们成长的每个瞬间!",
  },
  {
    title: "把欢乐和喜悦PawLog下",
    subtitle: "把爱放在PawLog里,永久珍藏!",
  },
  {
    title: "足迹在哪里,PawLog就在哪里",
    subtitle: "爱, 从一个PawLog开始!",
  },
];
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    pets: categories.map((item) => item.staticSrc).slice(0, 6),
    currentSloganIndex: 0,
    introductionConfig: introductionConfig,
    timer: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    updateSlogan() {
      this.setData({
        currentSloganIndex: (this.data.currentSloganIndex + 1) % 4,
      });
    },
  },

  lifetimes: {
    attached() {
      const timer = setInterval(() => {
        console.log("timer", this.data.currentSloganIndex);
        this.updateSlogan();
      }, 5000);
      this.setData({
        timer: timer,
      });
    },
    detached() {
      if (this.data.timer) {
        clearInterval(this.data.timer);
      }
    },
  },
});
