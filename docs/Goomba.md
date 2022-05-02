## Goomba
Assets of Goomba should be loaded in preload scene.
GameObject of Goomba can be accessed via *this.player* in each scene.

### Import Goomba from models
```js
import Goomba from "../../models/Goomba";
```

### Create Goomba
```js
create() {
    this.GOOMBA = new Goomba(this, {CONFIG})
    
    ... add platforms

    this.physics.add.collider(this.player, this.platforms)
}
```

### Call cursor handler on update
```js
update() {
    this.GOOMBA.cursorsHandler(this);
}
```