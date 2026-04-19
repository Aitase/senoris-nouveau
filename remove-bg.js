const sharp = require('sharp');

async function removeBg() {
  const { data, info } = await sharp('public/logo.png')
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height } = info;
  const buf = Buffer.from(data);

  for (let i = 0; i < width * height; i++) {
    const r = buf[i * 4];
    const g = buf[i * 4 + 1];
    const b = buf[i * 4 + 2];
    // Cream/beige/white background: high R, high G, moderate-high B
    if (r > 220 && g > 205 && b > 185) {
      buf[i * 4 + 3] = 0; // make transparent
    }
  }

  await sharp(buf, { raw: { width, height, channels: 4 } })
    .png()
    .toFile('public/logo-transparent.png');

  console.log('Done! Saved public/logo-transparent.png');
}

removeBg().catch(console.error);
