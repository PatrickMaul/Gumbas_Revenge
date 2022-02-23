export function setPlatform(self, offsetY, i) {
  const defaultScale = 1;
  const offset_X = 64 * defaultScale;
  const offset_Y = window.innerHeight - offsetY;

  self.platforms.create(offset_X * i, offset_Y, 'platform_center_top').setScale(defaultScale);
}

export function spawnPlatform({ x, y, scale, platformId, t }) {
  t.platforms.create(x, y, platformId).setScale(scale);
}

function spawnPlatformGrass({ x, y, scale, t }) {
  spawnPlatform({ x, y, scale, platformId: 'platform_center_top', t });
}

export function spawnPlatformRow({ x, y, scale, amount, t }) {
  for (let i = 0; i < amount; i++) {
    spawnPlatformGrass({ x: x + 64 * i, y, scale, t });
  }
}
