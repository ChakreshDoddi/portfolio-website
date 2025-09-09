const fs = require('fs');
const path = require('path');

const src = path.resolve(process.cwd(), 'attached_assets', 'Chakri_Resume_1756850710172.pdf');
const dstDir = path.resolve(process.cwd(), 'client', 'public');
const dst = path.join(dstDir, 'resume.pdf');

try {
  if (!fs.existsSync(src)) {
    console.warn(`[copy-resume] Source file not found: ${src}`);
    process.exit(0);
  }

  fs.mkdirSync(dstDir, { recursive: true });
  fs.copyFileSync(src, dst);
  console.log(`[copy-resume] Copied resume to ${dst}`);
} catch (e) {
  console.error('[copy-resume] Failed to copy resume:', e);
  process.exit(1);
}

