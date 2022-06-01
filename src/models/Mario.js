import Enemy from "./Enemy";

export default class Mario extends Enemy {
    constructor(scene, config) {
        // TODO replace with mario sprite
        super(scene, {...config, SPRITE_KEY: 'mario'})
    }
}