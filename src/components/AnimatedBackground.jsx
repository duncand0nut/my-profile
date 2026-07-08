import { useEffect, useRef } from 'react'

const CHARS = [
  '{', '}', '<', '>', '/', '*', '=', '(', ')', '[', ']', ';',
  '&', '|', '!', '=>', '//', '&&', '||', '()', '[]', '{}',
]

function randomBetween(min, max) {
  return min + Math.random() * (max - min)
}

function makeParticle(canvasWidth, canvasHeight, randomY = false) {
  return {
    x: randomBetween(0, canvasWidth),
    y: randomY ? randomBetween(0, canvasHeight) : canvasHeight + 30,
    char: CHARS[Math.floor(Math.random() * CHARS.length)],
    speedY: randomBetween(0.25, 0.6),
    speedX: randomBetween(-0.12, 0.12),
    opacity: randomBetween(0.12, 0.28),
    size: Math.floor(randomBetween(13, 22)),
  }
}

export default function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const getAccent = () =>
      getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()

    const init = () => {
      particles = Array.from({ length: 40 }, () =>
        makeParticle(canvas.width, canvas.height, true)
      )
    }

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const accent = getAccent()

      for (const p of particles) {
        ctx.font = `500 ${p.size}px 'IBM Plex Mono', monospace`
        ctx.fillStyle = accent
        ctx.globalAlpha = p.opacity
        ctx.fillText(p.char, p.x, p.y)

        p.y -= p.speedY
        p.x += p.speedX

        if (p.x < -40) p.speedX = Math.abs(p.speedX)
        if (p.x > canvas.width + 40) p.speedX = -Math.abs(p.speedX)

        if (p.y < -30) {
          Object.assign(p, makeParticle(canvas.width, canvas.height, false))
        }
      }

      ctx.globalAlpha = 1
      animId = requestAnimationFrame(tick)
    }

    resize()
    init()
    tick()

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
