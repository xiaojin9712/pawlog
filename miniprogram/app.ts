// app.ts
App<IAppOption>({
  globalData: {},
  onLaunch() {
    if (!wx.cloud) {
      console.error("Not support wx.cloud")
    } else {
      wx.cloud.init({
        env: 'pawlog-6gfw9v2a5fcbe657',
        traceUser: true
      })
    }
  },
})