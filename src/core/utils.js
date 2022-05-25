import Toad from '../models/Toad'

export function spawnEnemies(scene) {
    scene.enemies = scene.physics.add.group()

    new Toad(scene, {SPAWN_X: 300, SPAWN_Y: scene.cameras.main.height / 2})
    new Toad(scene, {SPAWN_X: 460, SPAWN_Y: scene.cameras.main.height / 2})

    // colliders
    scene.physics.add.collider(scene.player, scene.enemies, handlePlayerCollision.bind(scene))
    //scene.physics.add.collider(scene.platforms, scene.enemies, handlePlatformEnemyCollision.bind(scene))
    scene.physics.add.collider(scene.enemies, scene.enemies, handleEnemyCollision.bind(scene))
}

function handleEnemyCollision(enemy1, enemy2) {
    if(enemy1.body.touching.right) {
        enemy1.setVelocityX(-enemy1.CONFIG.SPEED)
        enemy2.setVelocityX(enemy2.CONFIG.SPEED)
    }
    else if(enemy1.body.touching.left) {
        enemy1.setVelocityX(enemy1.CONFIG.SPEED)
        enemy2.setVelocityX(-enemy2.CONFIG.SPEED)
    }
}

function handlePlayerCollision(player, enemy) {
    if(enemy.body.touching.up) {
        player.setVelocityY(enemy.CONFIG.PLAYER_COLLISION_TOP_VELOCITY)
        // TODO kill animation
        enemy.destroy()
    }
    else if(enemy.body.touching.right) {
        console.log('enemy hit')
    }
    else if(enemy.body.touching.left) {
        console.log('enemy hit')
    }
    else if(enemy.body.touching.down) {
        console.log('enemy hit')
    }
}

export function handlePlatformEnemyCollision(enemy) {
    // apparently we need to use body.blocked instead of body.touching on collision with tilemaps or some shit... WTF BRO
    // https://www.html5gamedevs.com/topic/23219-playerbodytouchingdown-not-working/
    if(enemy.body.blocked.right || enemy.body.touching.right) {
        enemy.setVelocityX(-enemy.CONFIG.SPEED)
    }
    else if(enemy.body.blocked.left || enemy.body.touching.left) {
        enemy.setVelocityX(enemy.CONFIG.SPEED)
    }
}