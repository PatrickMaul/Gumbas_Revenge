import Goomba from "../../models/Goomba";
// TODO delete file after project finished:
// /scenes/levels/test.js
// config.js                    loadTestLevel
// /scenes/Preload.js           loadTestLevel
// /assets/test-tile.png
// index.js                     TestLevel
class TestLevel extends Phaser.Scene {
    preload() {
        this.load.image('test-tile', './src/assets/test-tile.png')
    }
    create() {
        this.platforms = this.physics.add.staticGroup()
        this.GOOMBA = new Goomba(this, {SPAWN_X: 100, SPAWN_Y: this.cameras.main.height / 2});

        for(let i = 0; i < 10; i++) {
            this.platforms.create(100 * i, this.cameras.main.height - 64, 'test-tile')
        }


        this.physics.add.collider(this.player, this.platforms)
    }

    update() {
        this.GOOMBA.cursorsHandler(this);
    }
}

export default TestLevel