import Goomba from '../models/Goomba'

class  MapCreator {


    static loadMap (scene,filename)
    { // lädt die Maps und und den Goomba ins Preload.         
        scene.load.spritesheet('goomba', './src/assets/goomba.png', { frameWidth: 32, frameHeight: 32 });
        scene.load.image('tilesheet','./src/assets/tiles/SuperMarioBros_TSM.png')
        scene.load.tilemapTiledJSON('ErstellteMap',`./src/assets/tiles/${filename}.json`)
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
            
        // Kamera-Settings 
        scene.cameras.main.startFollow(scene.player)  
        scene.cameras.main.zoomTo(2.5);
        scene.cameras.main.x -= 1900;

    }

    static createEnemies(scene)
    {   // Erstellt die Objekte (z.B. Mit den Namen enemySpawn) aus dem angegeben Layer bject
        // object ist der Object - LayerName  und enemySpawn die Objektnamen
  
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
  