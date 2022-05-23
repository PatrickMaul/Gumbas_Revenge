import Phaser from 'phaser'
import Goomba from '../models/Goomba'
import MapCreator from '../core/MapCreator';
import Background from "../core/Background.js";


var GameOver = false;
export default class SBMTestLevel extends Phaser.Scene
{
 constructor(){
     super('ErstesLevel')
 }
    
    preload()
    {   
        MapCreator.loadMap(this,"StartLevel");
    }

    create()
    {
         MapCreator.createMap(this);
    }

    update()
    {
         this.Goomba.cursorsHandler(this)
         
         if(this.GameOver){
            this.player.setTint(0xff0000);
         }

    }

}

function finishlevel (player,bomb)
    {
          GameOver = true;
    }