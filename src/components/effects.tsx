import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* ---------- interactive particle constellation ---------- */
export function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const cv = ref.current
    const ctx = cv?.getContext('2d')
    if (!cv || !ctx) return
    const still = reduced()
    let w = 0, h = 0, raf = 0, visible = true
    const mouse = { x: -9999, y: -9999 }
    type P = { x: number; y: number; vx: number; vy: number; r: number; h: number }
    let ps: P[] = []

    const resize = () => {
      const r = cv.getBoundingClientRect()
      const dpr = Math.min(2, window.devicePixelRatio || 1)
      w = r.width
      h = r.height
      cv.width = w * dpr
      cv.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const n = Math.min(120, Math.floor((w * h) / 10000))
      ps = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.7, h: Math.random(),
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const light = document.documentElement.dataset.theme === 'light'
      const line = light ? '10,111,214' : '90,190,255'
      for (const p of ps) {
        if (!still) {
          const dx = p.x - mouse.x, dy = p.y - mouse.y
          const d = Math.hypot(dx, dy)
          if (d < 170 && d > 0.1) {
            const f = (1 - d / 170) * 0.9
            p.vx += (dx / d) * f * 0.35
            p.vy += (dy / d) * f * 0.35
          }
          p.vx *= 0.985
          p.vy *= 0.985
          const sp = Math.hypot(p.vx, p.vy)
          if (sp > 2.2) { p.vx *= 2.2 / sp; p.vy *= 2.2 / sp }
          p.x += p.vx
          p.y += p.vy
          if (p.x < -10) p.x = w + 10
          if (p.x > w + 10) p.x = -10
          if (p.y < -10) p.y = h + 10
          if (p.y > h + 10) p.y = -10
        }
      }
      for (let i = 0; i < ps.length; i++) {
        const a = ps[i]
        for (let j = i + 1; j < ps.length; j++) {
          const b = ps[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 125) {
            ctx.strokeStyle = `rgba(${line},${(1 - d / 125) * (light ? 0.28 : 0.32)})`
            ctx.lineWidth = 1
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
          }
        }
        const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y)
        if (dm < 190) {
          ctx.strokeStyle = `rgba(31,209,193,${(1 - dm / 190) * 0.55})`
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke()
        }
      }
      for (const p of ps) {
        ctx.fillStyle = `hsla(${170 + p.h * 95},90%,${light ? 50 : 68}%,0.9)`
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill()
      }
    }

    const loop = () => {
      if (visible && !document.hidden) draw()
      raf = requestAnimationFrame(loop)
    }
    const move = (e: PointerEvent) => {
      const r = cv.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
    }
    const leave = () => { mouse.x = mouse.y = -9999 }

    resize()
    draw()
    if (!still) raf = requestAnimationFrame(loop)
    const ro = new ResizeObserver(() => { resize(); draw() })
    ro.observe(cv)
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting })
    io.observe(cv)
    window.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('pointerleave', leave)
    return () => {
      cancelAnimationFrame(raf); ro.disconnect(); io.disconnect()
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerleave', leave)
    }
  }, [])
  return <canvas ref={ref} className="particles" aria-hidden="true" />
}

/* ---------- headline word reveal ---------- */
export function Words({ text, start = 0 }: { text: string; start?: number }) {
  return (
    <>
      {text.split(' ').map((w, i) => (
        <span className="w" key={i} style={{ animationDelay: `${start + i * 110}ms` }}>
          {w}
        </span>
      ))}
    </>
  )
}

/* ---------- soft glow that follows the cursor ---------- */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || !window.matchMedia('(pointer: fine)').matches || reduced()) return
    let tx = innerWidth / 2, ty = innerHeight / 3, x = tx, y = ty, raf = 0
    const move = (e: PointerEvent) => { tx = e.clientX; ty = e.clientY; el.style.opacity = '1' }
    const loop = () => {
      x += (tx - x) * 0.1
      y += (ty - y) * 0.1
      el.style.transform = `translate(${x - 300}px, ${y - 300}px)`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('pointermove', move, { passive: true })
    raf = requestAnimationFrame(loop)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('pointermove', move) }
  }, [])
  return <div ref={ref} className="cursor-glow" aria-hidden="true" />
}

/* ---------- delegated pointer effects: spotlight, magnetic, tilt + scroll vars ---------- */
export function useGlobalEffects() {
  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches && !reduced()
    let last: HTMLElement | null = null
    const reset = (el: HTMLElement | null) => { if (el) el.style.transform = '' }

    const move = (e: PointerEvent) => {
      const t = e.target as HTMLElement
      const spot = t.closest<HTMLElement>('.spot')
      if (spot) {
        const r = spot.getBoundingClientRect()
        spot.style.setProperty('--mx', `${e.clientX - r.left}px`)
        spot.style.setProperty('--my', `${e.clientY - r.top}px`)
      }
      const el = t.closest<HTMLElement>('.magnetic, .tiltable')
      if (el !== last) { reset(last); last = el }
      if (!el) return
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      if (el.classList.contains('magnetic')) el.style.transform = `translate(${x * 14}px, ${y * 10}px)`
      else el.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`
    }
    const out = (e: PointerEvent) => { if (!e.relatedTarget) { reset(last); last = null } }

    let raf = 0
    const root = document.documentElement
    const scroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => root.style.setProperty('--hp', String(Math.min(1, window.scrollY / (window.innerHeight * 0.9)))))
    }
    scroll()
    window.addEventListener('scroll', scroll, { passive: true })
    if (fine) {
      window.addEventListener('pointermove', move, { passive: true })
      document.addEventListener('pointerout', out)
    }
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', scroll)
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerout', out)
    }
  }, [])
}

/* ---------- glowing scroll timeline ---------- */
export function Timeline({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const fill = el.querySelector<HTMLElement>('.tl-fill')
    let raf = 0
    const upd = () => {
      const r = el.getBoundingClientRect()
      const line = window.innerHeight * 0.62
      const px = Math.min(r.height, Math.max(0, line - r.top))
      if (fill) fill.style.transform = `scaleY(${r.height ? px / r.height : 0})`
      el.querySelectorAll<HTMLElement>('.tl-item').forEach((i) => { if (i.getBoundingClientRect().top + 46 < line) i.dataset.lit = '1'; else delete i.dataset.lit })
    }
    const on = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(upd) }
    upd()
    window.addEventListener('scroll', on, { passive: true })
    window.addEventListener('resize', on)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('scroll', on); window.removeEventListener('resize', on) }
  }, [])
  return (
    <div className={`timeline ${className}`} ref={ref}>
      <div className="tl-line"><i className="tl-fill" /></div>
      {children}
    </div>
  )
}
