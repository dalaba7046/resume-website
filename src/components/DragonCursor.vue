<template>
  <canvas
    v-show="props.enabled"
    ref="canvasRef"
    class="dragon-cursor"
    :class="{ dark: props.isDarkTheme }"
    aria-hidden="true"
  ></canvas>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import dragonHeadUrl from '../assets/dragon-cursor/dragon-head.png'
import boneUrl from '../assets/dragon-cursor/bone-01.png'
import smokeUrl from '../assets/dragon-cursor/smoke-01.png'
import brushArcUrl from '../assets/dragon-cursor/brush-arc.png'

const props = defineProps({
  enabled: {
    type: Boolean,
    default: true,
  },
  isDarkTheme: {
    type: Boolean,
    default: false,
  },
})

const canvasRef = ref(null)
let cleanup = () => {}

onMounted(() => {
  const canvas = canvasRef.value
  const ctx = canvas?.getContext('2d', { alpha: true })
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!canvas || !ctx || window.innerWidth <= 768) return

  let width = 0
  let height = 0
  let dpr = 1
  let animationId = 0
  let disposed = false

  const pointer = {
    x: 0,
    y: 0,
    px: 0,
    py: 0,
    speed: 0,
    angle: 0,
    active: false,
  }

  const joints = []
  const particles = []

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value))
  }

  function resize() {
    dpr = Math.min(2, window.devicePixelRatio || 1)
    width = window.innerWidth
    height = window.innerHeight
    canvas.width = Math.round(width * dpr)
    canvas.height = Math.round(height * dpr)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    if (!joints.length) {
      pointer.x = width * 0.72
      pointer.y = height * 0.28
      pointer.px = pointer.x
      pointer.py = pointer.y

      for (let i = 0; i < 42; i += 1) {
        joints.push({
          x: pointer.x - i * 8.4,
          y: pointer.y + Math.sin(i * 0.45) * 4,
          angle: 0,
        })
      }

      for (let i = 0; i < 54; i += 1) {
        particles.push({ x: 0, y: 0, vx: 0, vy: 0, r: 0, life: 0, max: 1 })
      }
    }
  }

  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const image = new Image()
      image.onload = () => resolve(image)
      image.onerror = () => reject(new Error(`Unable to load ${src}`))
      image.src = src
    })
  }

  function drawImageCentered(image, x, y, size, angle, alpha, sx = 1, sy = 1) {
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(angle)
    ctx.globalAlpha = alpha
    ctx.globalCompositeOperation = 'screen'
    ctx.drawImage(image, -size * sx * 0.5, -size * sy * 0.5, size * sx, size * sy)
    ctx.restore()
  }

  function updatePointer(now) {
    if (!pointer.active) {
      pointer.x = width * 0.72 + Math.cos(now * 0.00058) * width * 0.08
      pointer.y = height * 0.28 + Math.sin(now * 0.0009) * height * 0.08
    }

    const dx = pointer.x - pointer.px
    const dy = pointer.y - pointer.py
    pointer.speed = Math.hypot(dx, dy)
    if (pointer.speed > 0.04) pointer.angle = Math.atan2(dy, dx)
    pointer.px = pointer.x
    pointer.py = pointer.y
  }

  function followChain(now) {
    joints[0].x += (pointer.x - joints[0].x) * 0.22
    joints[0].y += (pointer.y - joints[0].y) * 0.22

    for (let i = 1; i < joints.length; i += 1) {
      const prev = joints[i - 1]
      const curr = joints[i]
      const target = 7.6 + i * 0.12
      const dx = prev.x - curr.x
      const dy = prev.y - curr.y
      const dist = Math.hypot(dx, dy) || 1
      const pull = (dist - target) / dist
      curr.x += dx * pull * 0.86
      curr.y += dy * pull * 0.86
      curr.angle = Math.atan2(dy, dx)

      const wave = Math.sin(now * 0.0034 + i * 0.34) * clamp(i * 0.08, 0, 4.4)
      curr.x += Math.cos(curr.angle + Math.PI / 2) * wave * 0.07
      curr.y += Math.sin(curr.angle + Math.PI / 2) * wave * 0.07
    }
  }

  function curveThrough(points, start = 0, end = points.length - 1) {
    ctx.beginPath()
    ctx.moveTo(points[start].x, points[start].y)
    for (let i = start + 1; i < end; i += 1) {
      const p = points[i]
      const next = points[i + 1]
      ctx.quadraticCurveTo(p.x, p.y, (p.x + next.x) * 0.5, (p.y + next.y) * 0.5)
    }
    ctx.lineTo(points[end].x, points[end].y)
  }

  function drawBody(assets, now) {
    ctx.save()
    ctx.globalCompositeOperation = 'screen'

    for (let i = joints.length - 8; i > 8; i -= 8) {
      const p = joints[i]
      const t = i / (joints.length - 1)
      const fade = Math.pow(1 - t, 0.86)
      const side = i % 2 === 0 ? 1 : -1
      const normal = p.angle + Math.PI / 2
      drawImageCentered(
        assets.smoke,
        p.x + Math.cos(normal) * side * (6 + fade * 10),
        p.y + Math.sin(normal) * side * (6 + fade * 10),
        70 + fade * 92 + pointer.speed * 0.16,
        p.angle + Math.PI + Math.sin(now * 0.0017 + i) * 0.14,
        0.05 + fade * 0.1,
        1.45,
        0.76,
      )
    }

    curveThrough(joints, 2, joints.length - 1)
    ctx.strokeStyle = 'rgba(100, 255, 218, 0.12)'
    ctx.lineWidth = 1.2
    ctx.lineCap = 'round'
    ctx.stroke()
    ctx.restore()
  }

  function drawBones(assets, now) {
    for (let i = 5; i < joints.length - 5; i += 3) {
      const p = joints[i]
      const fade = Math.pow(1 - i / (joints.length - 1), 1.35)
      const sideLean = Math.sin(now * 0.004 + i * 0.9) * 0.16
      drawImageCentered(
        assets.bone,
        p.x,
        p.y,
        24 + fade * 34,
        p.angle + Math.PI / 2 + sideLean,
        clamp(0.04 + fade * 0.22, 0, 0.25),
      )
    }
  }

  function drawBrushVortex(assets, now) {
    const head = joints[0]
    const energy = clamp(pointer.speed / 34, 0.18, 1)

    for (let i = 0; i < 3; i += 1) {
      drawImageCentered(
        assets.arc,
        head.x,
        head.y,
        82 + i * 28 + energy * 42,
        pointer.angle + now * 0.0016 + i * 0.72,
        0.055 + energy * 0.06 - i * 0.01,
      )
    }
  }

  function drawHead(assets) {
    const head = joints[0]
    const neck = joints[3]
    const angle = Math.atan2(head.y - neck.y, head.x - neck.x)
    const energy = clamp(pointer.speed / 36, 0, 1)
    const size = 72 + energy * 18

    drawImageCentered(
      assets.head,
      head.x + Math.cos(angle) * 11,
      head.y + Math.sin(angle) * 11,
      size,
      angle - 1.12,
      0.82,
    )
  }

  function spawnInk(x, y, angle, speed, burst = 1) {
    const count = Math.min(8, Math.max(0, Math.floor(speed / 7) + burst))
    for (let i = 0; i < count; i += 1) {
      const particle = particles.find((dot) => dot.life <= 0)
      if (!particle) return
      const spray = angle + Math.PI + (Math.random() - 0.5) * 1.75
      const force = 0.45 + Math.random() * Math.min(7, speed * 0.26 + burst * 1.5)
      particle.x = x + Math.cos(spray) * (8 + Math.random() * 14)
      particle.y = y + Math.sin(spray) * (8 + Math.random() * 14)
      particle.vx = Math.cos(spray) * force + (Math.random() - 0.5) * 1.2
      particle.vy = Math.sin(spray) * force + (Math.random() - 0.5) * 1.2
      particle.r = 0.35 + Math.random() * 3
      particle.max = 30 + Math.random() * 54
      particle.life = particle.max
    }
  }

  function drawParticles() {
    ctx.save()
    ctx.globalCompositeOperation = 'screen'
    for (const particle of particles) {
      if (particle.life <= 0) continue
      particle.life -= 1
      particle.vx *= 0.965
      particle.vy = particle.vy * 0.965 + 0.018
      particle.x += particle.vx
      particle.y += particle.vy

      const t = particle.life / particle.max
      ctx.globalAlpha = t * 0.28
      ctx.fillStyle = '#64ffda'
      ctx.beginPath()
      ctx.ellipse(
        particle.x,
        particle.y,
        particle.r * (0.5 + t),
        particle.r * (0.24 + t * 0.55),
        Math.atan2(particle.vy, particle.vx),
        0,
        Math.PI * 2,
      )
      ctx.fill()
    }
    ctx.restore()
  }

  function render(assets, now) {
    if (disposed) return

    updatePointer(now)
    followChain(now)
    ctx.clearRect(0, 0, width, height)
    drawBrushVortex(assets, now)
    drawBody(assets, now)
    drawBones(assets, now)
    drawHead(assets)

    if (pointer.active && pointer.speed > 4.5) {
      spawnInk(joints[0].x, joints[0].y, pointer.angle, pointer.speed, 0)
    }
    drawParticles()
    animationId = requestAnimationFrame((next) => render(assets, next))
  }

  function handlePointerMove(event) {
    pointer.active = true
    pointer.x = event.clientX
    pointer.y = event.clientY
  }

  function handlePointerDown() {
    pointer.active = true
    spawnInk(joints[0].x, joints[0].y, Math.random() * Math.PI * 2, 30, 8)
  }

  resize()
  window.addEventListener('resize', resize)
  window.addEventListener('pointermove', handlePointerMove)
  window.addEventListener('pointerdown', handlePointerDown)

  cleanup = () => {
    disposed = true
    cancelAnimationFrame(animationId)
    window.removeEventListener('resize', resize)
    window.removeEventListener('pointermove', handlePointerMove)
    window.removeEventListener('pointerdown', handlePointerDown)
  }

  Promise.all([
    loadImage(dragonHeadUrl),
    loadImage(boneUrl),
    loadImage(smokeUrl),
    loadImage(brushArcUrl),
  ]).then(([head, bone, smoke, arc]) => {
    if (!disposed) render({ head, bone, smoke, arc }, performance.now())
  })
})

onBeforeUnmount(() => cleanup())
</script>

<style scoped>
.dragon-cursor {
  position: fixed;
  inset: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  opacity: 0.82;
  mix-blend-mode: multiply;
}

.dragon-cursor.dark {
  opacity: 0.68;
  filter: invert(86%) sepia(53%) saturate(456%) hue-rotate(111deg) brightness(103%);
  mix-blend-mode: screen;
}

@media (max-width: 768px) {
  .dragon-cursor {
    display: none;
  }
}
</style>
