import Enemy from "./Enemy";

export default class Toad extends Enemy {
  constructor(scene, config) {
    // TODO replace with toad sprite
    super(scene, { ...config, spriteKey: "toad" });
  }
}
