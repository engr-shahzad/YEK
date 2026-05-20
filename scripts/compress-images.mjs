import sharp from "sharp";
import { readdir, stat, rename } from "fs/promises";
import { join, extname, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..", "public", "assets", "img");

let totalBefore = 0;
let totalAfter = 0;
let processed = 0;
let skipped = 0;

async function getAllImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getAllImages(full)));
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

async function compressImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  const { size: before } = await stat(filePath);
  const tmp = filePath + ".tmp";

  try {
    if (ext === ".png") {
      await sharp(filePath)
        .png({ quality: 80, compressionLevel: 9, palette: true })
        .toFile(tmp);
    } else {
      await sharp(filePath)
        .jpeg({ quality: 75, progressive: true, mozjpeg: true })
        .toFile(tmp);
    }

    const { size: after } = await stat(tmp);

    if (after < before) {
      await rename(tmp, filePath);
      totalBefore += before;
      totalAfter += after;
      processed++;
      const saved = (((before - after) / before) * 100).toFixed(1);
      const rel = filePath.replace(ROOT, "").replace(/\\/g, "/");
      console.log(
        `✓ ${rel.padEnd(60)} ${(before / 1024).toFixed(0).padStart(7)} KB → ${(after / 1024).toFixed(0).padStart(6)} KB  (-${saved}%)`
      );
    } else {
      // Already small enough, remove tmp
      const { unlink } = await import("fs/promises");
      await unlink(tmp);
      skipped++;
    }
  } catch (err) {
    const { unlink } = await import("fs/promises");
    await unlink(tmp).catch(() => {});
    console.error(`✗ Failed: ${filePath} — ${err.message}`);
  }
}

console.log("Scanning images...\n");
const images = await getAllImages(ROOT);
console.log(`Found ${images.length} images. Compressing...\n`);

for (const img of images) {
  await compressImage(img);
}

const savedMB = ((totalBefore - totalAfter) / 1024 / 1024).toFixed(1);
const savedPct = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1);

console.log("\n" + "=".repeat(80));
console.log(`Done!`);
console.log(`Compressed : ${processed} images`);
console.log(`Skipped    : ${skipped} (already small)`);
console.log(`Before     : ${(totalBefore / 1024 / 1024).toFixed(1)} MB`);
console.log(`After      : ${(totalAfter / 1024 / 1024).toFixed(1)} MB`);
console.log(`Saved      : ${savedMB} MB (${savedPct}%)`);
