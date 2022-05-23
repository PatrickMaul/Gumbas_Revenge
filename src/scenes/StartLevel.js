import Phaser from 'phaser'
import Goomba from '../models/Goomba'
import MapCreator from '../core/MapCreator';
import Background from "../core/Background.js";


export default class SBMTestLevel extends Phaser.Scene
{

    
    preload()
    {   
        // TestLevel
        MapCreator.loadMap(this,"StartLevel");
        this.load.image("test-tile", "./src/assets/test-tile.png");


    }

    create()
    {


         // TestLevel
         MapCreator.createMap(this);
         //MapCreator.createEnemies(this);

        // // Um Das Level zu beenden

    }

    update()
    {
         this.Goomba.cursorsHandler(this)

         if(this.GameOver){   // Was soll passieren, wenn man auf ein GameOver Tile kommt
            this.scene.start('ErstesLevel')
         }

    }

}

