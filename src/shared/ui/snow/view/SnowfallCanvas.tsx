'use client'

import { useEffect, useRef } from 'react'
import { isSnowSeason } from '@/shared/lib/snow/isSnowSeason'
import { prefersReducedMotion } from '@/shared/lib/snow/prefersReducedMotion'
import { getSnowflakeCount } from '@/shared/lib/snow/getSnowflakeCount'
import styles from './SnowfallCanvas.module.scss'

interface Snowflake {
	x: number
	y: number
	radius: number
	speed: number
}

export const SnowfallCanvas = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)

	useEffect(() => {
		if (!isSnowSeason()) return
		if (prefersReducedMotion()) return

		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext('2d')
		if (!ctx) return

		const createSnowflakes = (count: number): Snowflake[] =>
			Array.from({ length: count }, () => ({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				radius: Math.random() * 2 + 2.5, // ❄️ чуть больше
				speed: Math.random() * 1.2 + 0.6, // ❄️ плавнее
			}))

		let snowflakes: Snowflake[] = []

		const initSnow = () => {
			snowflakes = createSnowflakes(getSnowflakeCount())
		}

		const resize = () => {
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight
			initSnow()
		}

		resize()
		window.addEventListener('resize', resize)

		let animationId: number

		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height)

			ctx.fillStyle = 'rgba(220, 235, 255, 0.85)' // 🔵 холодный оттенок
			ctx.shadowColor = 'rgba(200, 220, 255, 0.6)'
			ctx.shadowBlur = 6

			for (const flake of snowflakes) {
				ctx.beginPath()
				ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2)
				ctx.fill()

				flake.y += flake.speed

				if (flake.y > canvas.height) {
					flake.y = -flake.radius
					flake.x = Math.random() * canvas.width
				}
			}

			animationId = requestAnimationFrame(animate)
		}

		animate()

		return () => {
			cancelAnimationFrame(animationId)
			window.removeEventListener('resize', resize)
		}
	}, [])

	return <canvas ref={canvasRef} className={styles.canvas} />
}
