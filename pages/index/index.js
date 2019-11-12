Page({
  data: {
    isPlayingMusic: false
  },
  bgm: null,
  music_url: 'http://localhost:3000/1.mp3',
  music_coverImgUrl: 'http://localhost:3000/cover.jpg',
  onReady: function() {
    this.bgm = wx.getBackgroundAudioManager()
    this.bgm.title = 'merry me'
    this.bgm.epname = 'wedding'
    this.bgm.singer = 'singer'
    this.bgm.coverImgUrl = this.music_coverImgUrl
    this.bgm.onCanplay(() => {
      this.bgm.pause()
    })
    this.bgm.src = this.music_url
  },
  play: function() {
    if (this.data.isPlayingMusic) {
      this.bgm.pause()
    } else {
      this.bgm.play()
    }
    this.setData({
      isPlayingMusic: !this.data.isPlayingMusic
    })
  },
  callGroom: function() {
    wx.makePhoneCall({
      phoneNumber: '13700000000'
    })
  },
  callBride: function() {
    wx.makePhoneCall({
      phoneNumber: '15600000000'
    })
  }

  
})