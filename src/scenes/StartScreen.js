import Phaser from 'phaser'
import MapCreator from '../core/MapCreator';



export default class StartScreen extends Phaser.Scene
{
    preload()
    {   
        MapCreator.loadMap(this,"StartScreen_Map");
    }
    create()
    {
         MapCreator.createMap(this);
    }
    update()
    {
        MapCreator.RunMap(this,"StartScreen")
    }
}

