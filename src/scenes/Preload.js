class Preload extends Phaser.Scene {
  PROGRESS_BAR_WIDTH = 200
  PROGRESS_BAR_HEIGHT = 30
  PROGRESS_BAR_COLOR = 0x333333
  PROGRESS_BAR_ALPHA = 0.8

  PROGRESS_BAR_BORDER_WIDTH = 3
  PROGRESS_BAR_BORDER_COLOR = 0x777777

  PROGRESS_BAR_TEXT = 'Loading...'
  PROGRESS_BAR_FONT = '20px monospace'
  PROGRESS_BAR_FONT_COLOR = '#ffffff'

  TITLE_TEXT = 'Goombas Revenge'
  TITLE_COLOR = '#ffffff'
  TITLE_FONT = '48px monospace'
    
  preload() {
    this.initProgressBar()

    // LOAD STUFF
  }

  initProgressBar() {
    const borderWidth = this.PROGRESS_BAR_BORDER_WIDTH
    const progressBorder = this.add.graphics()
    const progressBar = this.add.graphics()
    progressBorder.fillStyle(this.PROGRESS_BAR_BORDER_COLOR, 0.8)
    progressBorder.fillRect(wCenter - borderWidth, hCenter - borderWidth, this.PROGRESS_BAR_WIDTH + borderWidth * 2, this.PROGRESS_BAR_HEIGHT + borderWidth * 2)

    const w = this.cameras.main.width
    const h = this.cameras.main.height
    const wCenter = w / 2  - this.PROGRESS_BAR_WIDTH / 2
    const hCenter = h / 2 - this.PROGRESS_BAR_HEIGHT / 2
    
    const loadingText = this.make.text({
      x: w / 2,
      y: hCenter - 20,
      text: this.PROGRESS_BAR_TEXT,
      style: {
        font: this.PROGRESS_BAR_FONT,
        fill: this.PROGRESS_BAR_FONT_COLOR
      }
    })


    loadingText.setOrigin(0.5, 0.5)

    const titleText = this.make.text({
      x: w / 2,
      y: hCenter / 3,
      text: this.TITLE_TEXT,
      style: {
        font: this.TITLE_FONT,
        fill: this.TITLE_COLOR
      }
    })

    titleText.setOrigin(0.5, 0.5)

    this.load.on('progress', (val) => {
      progressBar.clear()
      progressBorder.fillRect(wCenter - 5, hCenter - 5, this.PROGRESS_BAR_WIDTH + 10, this.PROGRESS_BAR_HEIGHT + 10)
      progressBar.fillStyle(this.PROGRESS_BAR_COLOR, this.PROGRESS_BAR_ALPHA)
      progressBar.fillRect(wCenter, hCenter, this.PROGRESS_BAR_WIDTH * val, this.PROGRESS_BAR_HEIGHT)

    })

    this.load.on('complete', () => {
      progressBar.destroy()
      progressBorder.destroy()
      loadingText.destroy()
      this.scene.start('Menu')
    })
  }
}

export default Preload;
