import Goomba from '../models/Goomba'
import Background from "../core/Background.js";
class  MapCreator {
/* Die Klasse MapCreator enthält statische Funktionen um die Maps/Backgrounds zu erstellen und die Gegner und Goomba zu spawnen.
   Sie greift auf die Klasse Goomba zu um den Goomba zu spawnen und auf die Klasse Background um den Parallax-Hintergrund einzubinden.
*/

    /**
     * lädt die Maps/Spritesheet in den preload-Scope.
     * @param {Scene} Scene Der this-Parameter wird später bei den Scenen als Argument eingefügt.
     * @param {string} filename Der Dateiname der Json-Map.
     */
    static loadMap (Scene,filename)
    {  
        Scene.load.spritesheet('goomba', './src/assets/goomba.png', { frameWidth: 32, frameHeight: 32 }); 
        Scene.load.image('tilesheet','./src/assets/tiles/SuperMarioWorld_TSM.png') // Tilesmap
        Scene.load.tilemapTiledJSON('ErstellteMap',`./src/assets/tiles/${filename}.json`) // Json-Map (Map, welche in Tiled erstellt wurde.)
        Scene.background = new Background(Scene);  // Parallax-Hintergrund

    }
    
    /**
     * Erstellt die Maps/Backgrounds und die Arcade-Physic mit Goomba und seiner Spiel-Umwelt.
     * Außerdem wird die Kamera-Eigenschaften festgelegt.
     * Dies passiert im create-Scope.
     * @param {Scene} Scene Der this-Parameter wird später bei den Scenen als Argument eingefügt.
     */
    static createMap(Scene)
    { 
        // Verknüpfung zwischen der Tilesmap und der erstellten Json-Map in Tiled.
        Scene.map = Scene.make.tilemap({key: 'ErstellteMap'})
        Scene.tileset = Scene.map.addTilesetImage('SuperMarioWorld_TSM','tilesheet');
               
        // Das Erstellen der Layer des Hintergrung und Goomba
        //(Die Reihenfolge ergibt die Überlappung, man legt jeweils den nächsten Background/Layer auf die vorherigen Layer).
        Scene.InvisibleWall = Scene.map.createLayer('InvisibleWall',Scene.tileset) // Soll nicht gesehen werden
        Scene.background.create(Scene);  // Parallax-Hintergrund
        Scene.LowerBackground = Scene.map.createLayer('LowerBackground',Scene.tileset)
        Scene.UpperBackground = Scene.map.createLayer('UpperBackground',Scene.tileset)        
        Scene.FinishScene = Scene.map.createLayer('FinishScene',Scene.tileset)
        Scene.Dead = Scene.map.createLayer('Dead',Scene.tileset)
        Scene.Goomba = new Goomba(Scene)

        // Hinzufügen der Kollision-Eigenschaft zu den einzelnen Layers
        Scene.InvisibleWall.setCollisionByProperty({collides: true}) 
        Scene.LowerBackground.setCollisionByProperty({collides: true})                 
        Scene.UpperBackground.setCollisionByProperty({collides: true})
        Scene.FinishScene.setCollisionByProperty({collides: true})
        Scene.Dead.setCollisionByProperty({collides: true})

        // Wie soll die Kollision zwischen Goomba und einem Tile eines Layer (mit collides = true) ausgeführt werden.
        Scene.physics.add.collider(Scene.player,Scene.InvisibleWall) // normale Arcade-Physik
        Scene.physics.add.collider(Scene.player,Scene.LowerBackground) 
        Scene.physics.add.collider(Scene.player,Scene.UpperBackground) 
        Scene.SuccessfulFinished = false;
        Scene.physics.add.collider(Scene.player, Scene.FinishScene, () => Scene.SuccessfulFinished = true, null, this); // Wenn man kollidiert, dann wird SuccessfulFinished=true gesetzt.
        Scene.PlayerDead = false;
        Scene.physics.add.collider(Scene.player, Scene.Dead, () => Scene.PlayerDead = true, null, this); // Wenn man kollidiert, dann wird SuccessfulFinished=true gesetzt.
        
        // Kamera-Settings 
        Scene.cameras.main.startFollow(Scene.player,false,0.1,0.1,-750,+32)  
        Scene.cameras.main.zoomTo(2.5);

    }

    /**
     * Beendet die Szene und führt die Standard-Funktionen für den update-Scope aus.
     * @param {Scene} Scene Der this-Parameter wird später bei den Scenen als Argument eingefügt.
     * @param {String} SceneName Der Szenenname der nächsten Szene. (Klassenname oder falls über super(...) diesen Namen verwenden.)
     */
    static RunMap(Scene,SceneName)
    {
        Scene.Goomba.cursorsHandler(Scene)

        if(Scene.SuccessfulFinished){   // Was soll passieren, wenn man auf ein GameOver Tile kommt
            Scene.scene.start('Preload')
            window.setTimeout(() => Scene.scene.start(SceneName),3000)
        }
        if(Scene.PlayerDead){   // Was soll passieren, wenn man auf ein GameOver Tile kommt
            Scene.scene.start('Preload')
            window.setTimeout(() => Scene.scene.start('StartScreen'),3000)
        }
    } 


    /**
     * Erstellt die Objekte (z.B. Mit den Namen enemySpawn) aus dem angegeben Layer bject
    object ist der Object - LayerName  und enemySpawn die Objektnamen
     * @param {Scene} Scene Der this-Parameter wird später bei den Scenen als Argument eingefügt.
     */
    static createEnemies(Scene) // Hier Namensgebung noch anpassen!
    {   
  
        const objectLayer = Scene.map.getObjectLayer('object');
        objectLayer.objects.forEach(objData => {
            const { x,y,name} = objData

            switch(name)
            {
                case 'enemySpawn':
                    {  
                       const enemy =  Scene.physics.add.sprite(x, y, 'goomba');
                       Scene.physics.add.collider(enemy,Scene.UpperBackground)
                       Scene.physics.add.collider(enemy,Scene.LowerBackground)
                       break
                    }
                 default: break
                    
            }
        })
    }
}


export default MapCreator;
  