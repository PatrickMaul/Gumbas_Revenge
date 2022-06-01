export default class Enemy {
  SPEED = 80;
  PLAYER_COLLISION_TOP_VELOCITY = -200;

  constructor(scene, config) {
    const gameObject = scene.enemies
      .create(config.spawnX, config.spawnY, config.spriteKey)
      .setScale(config.scale || 1.5);

    gameObject.CONFIG = {
      SPEED: config.SPEED || this.SPEED,
      PLAYER_COLLISION_TOP_VELOCITY: config.PLAYER_COLLISION_TOP_VELOCITY || this.PLAYER_COLLISION_TOP_VELOCITY,
    };

    gameObject.setVelocityX(-gameObject.CONFIG.SPEED);
    gameObject.setScale(1);
    gameObject.refreshBody();
  }
}
