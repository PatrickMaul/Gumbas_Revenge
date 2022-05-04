import Phaser from 'phaser'
import Goomba from '../models/Goomba'
import MapCreator from '../core/MapCreator';

export default class SBMTestLevel extends Phaser.Scene
{


    preload()
    {   
 
        MapCreator.loadMap(this);
        // loadMap()
        // this.load.spritesheet('goomba', './src/assets/goomba.png', { frameWidth: 32, frameHeight: 32 });
        // this.load.image('tilesheet','./src/assets/tiles/SuperMarioBros_TSM.png')
        // this.load.tilemapTiledJSON('ErstellteMap','./src/assets/tiles/NiceMap.json')
    }

    create()
    {
        
        // Probleme:  
        //  -Invisible Wall, kann nicht das ganze Level entlang laufen

        // this.add.image(0,0,'tilesheet')

        // createMap()
        // this.Goomba = new Goomba(this)
        // this.map = this.make.tilemap({key: 'ErstellteMap'})
        // this.tileset = this.map.addTilesetImage('SuperMarioBros_TSM','tilesheet');
        // this.solidBackground = this.map.createLayer('SolidBackground',this.tileset)
        // const Background = this.map.createLayer('Background',this.tileset)
        // this.solidBackground.setCollisionByProperty({collides: true})
        //  this.physics.add.collider(this.player,this.solidBackground)

        // In Goomba Klasse

         //this.cameras.main.setBackgroundColor(this.world.backgroundColor);


         MapCreator.createMap(this);
         MapCreator.createEnemy(this);

         // Enemy Creation
        //  const {windth,height} =this.scale
        //  const objectLayer = this.map.getObjectLayer('object');
        //  objectLayer.objects.forEach(objData => {
        //      const { x,y,name} = objData

        //      switch(name)
        //      {
        //          case 'enemySpawn':
        //              {  
        //                 const enemy =  this.physics.add.sprite(x, y, 'goomba');
        //                 this.physics.add.collider(enemy,this.solidBackground)

        //                 break
        //              }
        //           default: break
                     
        //      }
        //  })




    }

    update()
    {
        this.Goomba.cursorsHandler(this)

    }
}