import { spawnEnemies, handlePlatformEnemyCollision } from "./utils";
import Coin from "../models/Coin";

/**
 * This class is loading evrything we need for our Level
 * - Loading levelmap
 * - Building the Level
 * - Add physics (colliders etc.)
 * - Creating the camera
 */
class MapCreator {
  MAP_KEY = null;
  NEW_MAP_KEY = null;
  MAP_LAYERS = null;
  FINISH = false;

  /**
   * Loading needed data
   * @param {Scene} phaserScene The scene object.
   * @param {Object} config Config Object.
   */
  static preload(phaserScene, config = {}) {
    // Load config
    this.MAP_KEY = config.MAP_KEY || "Start_Screen_Map";

    phaserScene.load.tilemapTiledJSON(`${this.MAP_KEY}`, `./src/assets/tiled_maps/${this.MAP_KEY}.json`); // Json-Map (Map, welche in Tiled erstellt wurde.)
  }

  /**
   * Building the level
   * @param {Scene} phaserScene The scene object.
   */
  static loadLevel(phaserScene) {
    // Create scene propertys
    phaserScene.levelMap = phaserScene.make.tilemap({ key: `${this.MAP_KEY}` });
    phaserScene.tileset = phaserScene.levelMap.addTilesetImage("SuperMarioWorld_TSM", "tilesheet");

    // Fill 'MAP_LAYERS' list
    this.MAP_LAYERS = phaserScene.levelMap.layers.map((layer) => {
      return {
        id: phaserScene.levelMap.layers.indexOf(layer),
        name: layer.name,
      };
    });

    // Create the map layers and the background
    // ATENTION: You have to take care of the order
    this.MAP_LAYERS.forEach((layer) => {
      phaserScene[layer.name] = phaserScene.levelMap.createLayer(layer.name, phaserScene.tileset, 0, 0);
    });

    // Invisible layers made invisible
    // Iterate through layers, filtered by prefix "I_"
    this.MAP_LAYERS.filter((layer) => layer.name.includes("I_")).forEach((layer) => {
      phaserScene[layer.name].alpha = 0;
    });
  }

  /**
   * Creates the map physics.
   * @param {Scene} phaserScene The scene object.
   */
  static addPhysics(phaserScene) {
    spawnEnemies(phaserScene);

    for (let i = 0; i < this.MAP_LAYERS.length; i++) {
      const layerName = this.MAP_LAYERS[i].name;
      const layer = phaserScene[this.MAP_LAYERS[i].name];

      if (layerName.includes("LM_")) {
        layer.setCollisionByProperty({ collides: true });
      }

      if (layerName.includes("C_")) {
        if (layerName.includes("Dead")) {
          phaserScene.physics.add.collider(
            phaserScene.player,
            layer,
            () => (phaserScene.gameOver = true),
            (goomba, tile) => {
              if (
                tile.index != -1 &&
                phaserScene.tileset.tileProperties !== undefined &&
                phaserScene.tileset.tileProperties[tile.index - 1] !== undefined
              ) {
                // does not check the collision at every moment...
                // setCollision(left [, right] [, up] [, down])  --> set the tileproperty of FaceLeft,FaceRight...
                let propertyArray = phaserScene.tileset.tileProperties[tile.index - 1];
                tile.setCollision(
                  propertyArray.collideLeft === undefined ? true : propertyArray.collideLeft,
                  propertyArray.collideRight === undefined ? true : propertyArray.collideRight,
                  propertyArray.collideUp === undefined ? true : propertyArray.collideUp,
                  propertyArray.collideDown === undefined ? true : propertyArray.collideDown
                );
              }
              return true;
            },
            this
          );
        } else if (layerName.includes("Finish")) {
          phaserScene.physics.add.collider(
            phaserScene.player,
            layer,
            () => (this.FINISH = true),
            (goomba, tile) => {
              if (
                tile.index != -1 &&
                phaserScene.tileset.tileProperties !== undefined &&
                phaserScene.tileset.tileProperties[tile.index - 1] !== undefined
              ) {
                // does not check the collision at every moment...
                // setCollision(left [, right] [, up] [, down])  --> set the tileproperty of FaceLeft,FaceRight...
                let propertyArray = phaserScene.tileset.tileProperties[tile.index - 1];
                tile.setCollision(
                  propertyArray.collideLeft === undefined ? true : propertyArray.collideLeft,
                  propertyArray.collideRight === undefined ? true : propertyArray.collideRight,
                  propertyArray.collideUp === undefined ? true : propertyArray.collideUp,
                  propertyArray.collideDown === undefined ? true : propertyArray.collideDown
                );
              }
              return true;
            },
            this
          );
        } else {
          phaserScene.physics.add.collider(
            phaserScene.player,
            layer,
            () => {
              return true;
            },
            (goomba, tile) => {
              if (
                tile.index != -1 &&
                phaserScene.tileset.tileProperties !== undefined &&
                phaserScene.tileset.tileProperties[tile.index - 1] !== undefined
              ) {
                // does not check the collision at every moment...
                // setCollision(left [, right] [, up] [, down])  --> set the tileproperty of FaceLeft,FaceRight...
                let propertyArray = phaserScene.tileset.tileProperties[tile.index - 1];
                tile.setCollision(
                  propertyArray.collideLeft === undefined ? true : propertyArray.collideLeft,
                  propertyArray.collideRight === undefined ? true : propertyArray.collideRight,
                  propertyArray.collideUp === undefined ? true : propertyArray.collideUp,
                  propertyArray.collideDown === undefined ? true : propertyArray.collideDown
                );
              }
              return true;
            },
            this
          );
        }
      }

      phaserScene.physics.add.collider(layer, phaserScene.enemies, handlePlatformEnemyCollision.bind(phaserScene));
    }
  }

  static loadObjects(phaserScene) {
    phaserScene.coinManager = new Coin();
    phaserScene.coinManager = phaserScene.coinManager.create(phaserScene);
  }

  /**
   * Creating the camera that follows the player.
   * @param {Scene} phaserScene The scene object.
   */
  static createCamera(phaserScene) {
    // Camera settings
    phaserScene.cameras.main.startFollow(phaserScene.player, false, 0.1, 0.1, -750, +32);
    phaserScene.cameras.main.zoomTo(2);
  }

  /**
   * Updating the scene.
   * @param {Scene} phaserScene The scene object.
   */
  static update(phaserScene, config = {}) {
    // Load config
    this.NEW_MAP_KEY = config.MAP_KEY || "Preload";

    if (this.FINISH) {
      if (this.NEW_MAP_KEY === "Level_1_1") localStorage.setItem("tutorialPlayed", "true");

      console.log("Finish");
      console.log(Timer.time()); // Log Timer
      this.FINISH = false;

      if (this.NEW_MAP_KEY === "Tutorial" && localStorage.getItem("tutorialPlayed") === "true") {
        return phaserScene.scene.start("Level_1_1");
      }

      phaserScene.scene.start(this.NEW_MAP_KEY);
    }
    if (phaserScene.gameOver) {
      const deathCounter = localStorage.getItem('Deaths')
      if(deathCounter) {
        localStorage.setItem('Deaths', parseInt(deathCounter) + 1)
      } 

      console.log("Game Over");
      console.log(Timer.time()); // Log Timer
      phaserScene.gameOver = false;
      phaserScene.scene.start("GameOver");

      window.updateDeathCounter()
    }
  }
}

export default MapCreator;
