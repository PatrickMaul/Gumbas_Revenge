import Phaser from 'phaser'
import Goomba from '../models/Goomba'
import MapCreator from '../core/MapCreator';
import Background from "../core/Background.js";

var GameOver = false;
export default class SBMTestLevel extends Phaser.Scene
{

    
    preload()
    {   
        // TestLevel
        MapCreator.loadMap(this,"StartLevel");
        this.load.image("test-tile", "./src/assets/test-tile.png");
        this.background = new Background(this);

    }

    create()
    {
        this.background.create(this);

         // TestLevel
         MapCreator.createMap(this);
         //MapCreator.createEnemies(this);

        // // Um Das Level zu beenden
        this.FinishLevel = this.map.createLayer('FinishLevel',this.tileset)
        this.FinishLevel.setCollisionByProperty({collides: true}) 
        //this.physics.add.collider(this.player,this.FinishLevel)
        this.physics.add.collider(this.player, this.FinishLevel, finishlevel, null, this); 

    }

    update()
    {
         this.Goomba.cursorsHandler(this)
         if(GameOver){
            this.scene.start('ErstesLevel')
         }

    }

}

function finishlevel (player,bomb)
    {
          GameOver = true;
    }