## Parallax Background
### Import Background.js from core folder
```js
import Background from "../../core/Background.js";
```

### Create new Background in preload
```js
preload() {
    this.background = new Background(this);
}
```

### Call create method of Background in create
```js
create() {
    this.background.create(this);
}
```