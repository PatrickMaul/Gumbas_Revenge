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
  GAME_OVER = false;

  /**
   * Loading needed data
   * @param {Scene} phaserScene The scene object.
   * @param {Object} config Config Object.
   */
  static preload(phaserScene, config = {}) {
    // Load config
    this.MAP_KEY = config.MAP_KEY || "StartScreen_Map";

    phaserScene.load.tilemapTiledJSON(`${this.MAP_KEY}`, `./src/assets/tiles/${this.MAP_KEY}.json`); // Json-Map (Map, welche in Tiled erstellt wurde.)
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
      phaserScene[layer.name] = phaserScene.levelMap.createLayer(layer.name, phaserScene.tileset);
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
    // Iterate through layers, filtered by prefix "LM_"
    this.MAP_LAYERS.filter((layer) => layer.name.includes("LM_")).forEach((layer) => {
      phaserScene[layer.name].setCollisionByProperty({ collides: true });
    });
    // Iterate through layers, filtered by prefix "C_"
    this.MAP_LAYERS.filter((layer) => layer.name.includes("C_")).forEach((layer) => {
      if (layer.name.includes("Dead")) {
        phaserScene.physics.add.collider(
          phaserScene.player,
          phaserScene[layer.name],
          () => (this.GAME_OVER = true),
          null,
          this
        );
      } else if (layer.name.includes("Finish")) {
        phaserScene.physics.add.collider(
          phaserScene.player,
          phaserScene[layer.name],
          () => (this.FINISH = true),
          null,
          this
        );
      } else phaserScene.physics.add.collider(phaserScene.player, phaserScene[layer.name]);
    });
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
      console.log("Finish");
      console.log(window.timer.time()); // Log Timer
      this.FINISH = false;
      phaserScene.scene.start(this.NEW_MAP_KEY);
    }
    if (this.GAME_OVER) {
      console.log("Game Over");
      console.log(window.timer.time()); // Log Timer
      this.GAME_OVER = false;
      phaserScene.scene.start("GameOver");
    }
  }
}

export default MapCreator;
