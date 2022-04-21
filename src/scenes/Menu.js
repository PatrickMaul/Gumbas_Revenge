import Goomba from '../models/Goomba.js';

class Menu extends Phaser.Scene {
    preload() {}
  
    create() {
        this.GOOMBA = new Goomba(this);
    }

    update() {
        this.GOOMBA.cursorsHandler(this);
    }
  }
  
  export default Menu;
  