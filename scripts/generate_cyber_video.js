import { spawn } from 'child_process';
import { mkdirSync } from 'fs';

mkdirSync('public/videos', { recursive: true });

const width = 1280;
const height = 720;
const fps = 24;
const durationSec = 6;
const totalFrames = fps * durationSec;

console.log(`Generating cybersecurity video: ${width}x${height}, ${totalFrames} frames...`);

const ffmpeg = spawn('ffmpeg', [
  '-y',
  '-f', 'rawvideo',
  '-pixel_format', 'rgb24',
  '-video_size', `${width}x${height}`,
  '-framerate', `${fps}`,
  '-i', '-',
  '-c:v', 'libx264',
  '-preset', 'fast',
  '-crf', '22',
  '-pix_fmt', 'yuv420p',
  '-movflags', '+faststart',
  'public/videos/cyber-security-bg.mp4'
]);

ffmpeg.stderr.on('data', (d) => {
  // Silent or log progress
});

// Seedable pseudo-random
let seed = 42;
function random() {
  seed = (seed * 9301 + 49297) % 233280;
  return seed / 233280;
}

// Generate cyber nodes
const numNodes = 40;
const nodes = [];
for (let i = 0; i < numNodes; i++) {
  nodes.push({
    x: random() * width,
    y: random() * height,
    vx: (random() - 0.5) * 1.5,
    vy: (random() - 0.5) * 1.5,
    size: 2 + Math.floor(random() * 3),
    brightness: 0.5 + random() * 0.5
  });
}

// Frame buffer (width * height * 3 bytes)
const frameBuffer = Buffer.alloc(width * height * 3);

function setPixel(x, y, r, g, b) {
  if (x < 0 || x >= width || y < 0 || y >= height) return;
  const idx = (y * width + x) * 3;
  frameBuffer[idx] = Math.min(255, frameBuffer[idx] + r);
  frameBuffer[idx + 1] = Math.min(255, frameBuffer[idx + 1] + g);
  frameBuffer[idx + 2] = Math.min(255, frameBuffer[idx + 2] + b);
}

function drawCircle(cx, cy, radius, r, g, b, alpha = 1) {
  const rad2 = radius * radius;
  const x0 = Math.max(0, Math.floor(cx - radius * 2));
  const x1 = Math.min(width - 1, Math.ceil(cx + radius * 2));
  const y0 = Math.max(0, Math.floor(cy - radius * 2));
  const y1 = Math.min(height - 1, Math.ceil(cy + radius * 2));

  for (let y = y0; y <= y1; y++) {
    for (let x = x0; x <= x1; x++) {
      const dist2 = (x - cx) * (x - cx) + (y - cy) * (y - cy);
      if (dist2 <= rad2 * 4) {
        const factor = Math.exp(-dist2 / (rad2 + 1)) * alpha;
        setPixel(x, y, Math.floor(r * factor), Math.floor(g * factor), Math.floor(b * factor));
      }
    }
  }
}

function drawLine(x0, y0, x1, y1, r, g, b, alpha = 0.5) {
  const dx = Math.abs(x1 - x0);
  const dy = Math.abs(y1 - y0);
  const sx = x0 < x1 ? 1 : -1;
  const sy = y0 < y1 ? 1 : -1;
  let err = dx - dy;

  let cx = x0;
  let cy = y0;
  while (true) {
    setPixel(cx, cy, Math.floor(r * alpha), Math.floor(g * alpha), Math.floor(b * alpha));
    if (cx === x1 && cy === y1) break;
    const e2 = 2 * err;
    if (e2 > -dy) {
      err -= dy;
      cx += sx;
    }
    if (e2 < dx) {
      err += dx;
      cy += sy;
    }
  }
}

async function render() {
  for (let frame = 0; frame < totalFrames; frame++) {
    const progress = frame / totalFrames;
    const time = frame / fps;

    // 1. Dark ambient background (#050508 with faint red radial glow)
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = (y * width + x) * 3;
        const dx = (x - width / 2) / (width / 2);
        const dy = (y - height / 2) / (height / 2);
        const radial = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy));

        frameBuffer[idx] = Math.floor(5 + radial * 18);     // subtle red glow
        frameBuffer[idx + 1] = Math.floor(5 + radial * 4);  // green
        frameBuffer[idx + 2] = Math.floor(8 + radial * 4);  // blue
      }
    }

    // 2. Cyber horizontal scan line & digital grid
    const scanY = Math.floor((time * 120) % height);
    for (let x = 0; x < width; x++) {
      setPixel(x, scanY, 180, 25, 40);
      if (scanY > 1) setPixel(x, scanY - 1, 90, 12, 20);
      if (scanY < height - 1) setPixel(x, scanY + 1, 90, 12, 20);
    }

    // 3. Grid lines
    for (let gx = 0; gx < width; gx += 80) {
      for (let gy = 0; gy < height; gy += 4) {
        setPixel(gx, gy, 20, 4, 8);
      }
    }
    for (let gy = 0; gy < height; gy += 80) {
      for (let gx = 0; gx < width; gx += 4) {
        setPixel(gx, gy, 20, 4, 8);
      }
    }

    // 4. Update and connect cyber nodes
    for (let i = 0; i < numNodes; i++) {
      const node = nodes[i];
      const nx = (node.x + node.vx * time * 20 + width) % width;
      const ny = (node.y + node.vy * time * 20 + height) % height;

      // Draw node circle
      const pulse = 0.8 + 0.4 * Math.sin(time * 3 + i);
      drawCircle(Math.floor(nx), Math.floor(ny), node.size, 255, 36, 61, pulse);

      // Connect nearby nodes
      for (let j = i + 1; j < numNodes; j++) {
        const other = nodes[j];
        const ox = (other.x + other.vx * time * 20 + width) % width;
        const oy = (other.y + other.vy * time * 20 + height) % height;

        const dist = Math.hypot(nx - ox, ny - oy);
        if (dist < 130) {
          const alpha = (1 - dist / 130) * 0.45;
          drawLine(Math.floor(nx), Math.floor(ny), Math.floor(ox), Math.floor(oy), 255, 36, 61, alpha);

          // Moving packet along line
          const packetT = (time * 1.2 + (i + j) * 0.1) % 1;
          const px = nx + (ox - nx) * packetT;
          const py = ny + (oy - ny) * packetT;
          drawCircle(Math.floor(px), Math.floor(py), 1.5, 255, 255, 255, alpha * 1.5);
        }
      }
    }

    // 5. Radar sweep beam
    const angle = time * Math.PI * 0.7;
    const rLen = 320;
    const rX = Math.floor(width / 2 + Math.cos(angle) * rLen);
    const rY = Math.floor(height / 2 + Math.sin(angle) * rLen);
    drawLine(width / 2, height / 2, rX, rY, 255, 45, 65, 0.4);

    // Write frame
    await new Promise((resolve) => {
      if (!ffmpeg.stdin.write(frameBuffer)) {
        ffmpeg.stdin.once('drain', resolve);
      } else {
        process.nextTick(resolve);
      }
    });
  }

  ffmpeg.stdin.end();
}

render().catch(console.error);

ffmpeg.on('close', (code) => {
  console.log(`Video generation finished with code ${code}`);
  process.exit(code);
});
