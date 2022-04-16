class Platform {
  constructor(phaser) {
    this.platforms = phaser.physics.add.staticGroup();
  }

  addPlatfrom() {
    this.platforms.create(64, 64, 'platform_center_top').setScale(1);
  }
}

export default Platform;
