export default class Enemy {
    SPEED = 100
    PLAYER_COLLISION_TOP_VELOCITY = -200

    constructor(scene, config) {
        const gameObject = scene.enemies.create(config.SPAWN_X, config.SPAWN_Y, config.SPRITE_KEY).setScale(config.SCALE || 1.5)

        gameObject.CONFIG = {
            SPEED: config.SPEED || this.SPEED,
            PLAYER_COLLISION_TOP_VELOCITY: config.PLAYER_COLLISION_TOP_VELOCITY || this.PLAYER_COLLISION_TOP_VELOCITY
        }

        gameObject.setVelocityX(-gameObject.CONFIG.SPEED)
        gameObject.setScale(0.5)
        gameObject.refreshBody()
    }
}