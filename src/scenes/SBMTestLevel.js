import Phaser from 'phaser'
import Goomba from '../models/Goomba'
import MapCreator from '../core/MapCreator';

export default class SBMTestLevel extends Phaser.Scene
{


    preload()
    {   
        MapCreator.loadMap(this,'NiceMap');
    }

    create()
    {
        
         MapCreator.createMap(this);
         MapCreator.createEnemies(this);

    }

    update()
    {
        this.Goomba.cursorsHandler(this)

    }
}