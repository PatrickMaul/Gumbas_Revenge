import Goomba from '../models/Goomba'

class MapCreator {

    
    static loadMap (scene)
    { // lädt die Maps und und den Goomba ins Preload.         
        scene.load.spritesheet('goomba', './src/assets/goomba.png', { frameWidth: 32, frameHeight: 32 });
        scene.load.image('tilesheet','./src/assets/tiles/SuperMarioBros_TSM.png')
        scene.load.tilemapTiledJSON('ErstellteMap','./src/assets/tiles/NiceMap.json')
    }
    static createMap(scene)
    { // Erstellt die Map und die Backgrounds.
        
        // Maps
        scene.map = scene.make.tilemap({key: 'ErstellteMap'})
        scene.tileset = scene.map.addTilesetImage('SuperMarioBros_TSM','tilesheet');

        // Backgrounds
        scene.solidBackground = scene.map.createLayer('SolidBackground',scene.tileset)
        scene.Background = scene.map.createLayer('Background',scene.tileset)

        // Interaktion mit Goomba
        scene.Goomba = new Goomba(scene)
        scene.solidBackground.setCollisionByProperty({collides: true})
        scene.physics.add.collider(scene.player,scene.solidBackground) 
            
        // Kamera-Settings erstmal hierhin 
        scene.cameras.main.startFollow(scene.player)
        scene.cameras.main.zoomTo(2); 
    }

    static createEnemies(scene)
    { 
        const {windth,height} = scene.scale
        const objectLayer = scene.map.getObjectLayer('object');
        objectLayer.objects.forEach(objData => {
            const { x,y,name} = objData

            switch(name)
            {
                case 'enemySpawn':
                    {  
                       const enemy =  scene.physics.add.sprite(x, y, 'goomba');
                       scene.physics.add.collider(enemy,scene.solidBackground)

                       break
                    }
                 default: break
                    
            }
        })
    }
}

export default MapCreator;
  