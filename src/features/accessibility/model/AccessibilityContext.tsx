'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { AccessibilitySettings, AccessibilityContextType } from '../types/types'

const defaultSettings: AccessibilitySettings = {
	fontSize: 16,
	theme: 'default',
	imagesDisabled: false,
	colorScheme: 'default',
}

const AccessibilityContext = createContext<
	AccessibilityContextType | undefined
>(undefined)

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [settings, setSettings] =
		useState<AccessibilitySettings>(defaultSettings)
	const [isInitialized, setIsInitialized] = useState(false)

	useEffect(() => {
		const savedSettings = localStorage.getItem('accessibility-settings')
		if (savedSettings) {
			try {
				const parsedSettings = {
					...defaultSettings,
					...JSON.parse(savedSettings),
				}
				setSettings(parsedSettings)
				applyAccessibilitySettings(parsedSettings)
			} catch (error) {
				console.error('Error loading accessibility settings:', error)
				applyAccessibilitySettings(defaultSettings)
			}
		} else {
			applyAccessibilitySettings(defaultSettings)
		}
		setIsInitialized(true)
	}, [])

	useEffect(() => {
		if (isInitialized) {
			localStorage.setItem('accessibility-settings', JSON.stringify(settings))
			applyAccessibilitySettings(settings)
		}
	}, [settings, isInitialized])

	const updateSettings = (newSettings: Partial<AccessibilitySettings>) => {
		setSettings(prev => ({ ...prev, ...newSettings }))
	}

	const resetSettings = () => {
		setSettings({ ...defaultSettings })
	}

	const applyAccessibilitySettings = (settings: AccessibilitySettings) => {
		const root = document.documentElement

		// ==== Применяем размер шрифта ====
		const increase = settings.fontSize - 16
		root.style.setProperty('--font-increase', `${increase}px`)

		// ==== Применяем тему ====
		root.classList.remove(
			'theme-dark',
			'theme-light',
			'theme-high-contrast',
			'theme-default'
		)
		root.classList.add(`theme-${settings.theme}`)

		// ==== Цветовая схема ====
		root.setAttribute('data-color-scheme', settings.colorScheme)

		// ==== Настройки изображений ====
		applyImageSettings(settings.imagesDisabled)
	}

	const applyImageSettings = (imagesDisabled: boolean) => {
		const styleId = 'accessibility-images-disabled'
		const existingStyle = document.getElementById(styleId)

		if (imagesDisabled) {
			if (!existingStyle) {
				const style = document.createElement('style')
				style.id = styleId
				style.textContent = `
          img, picture, video, canvas, svg, [role="img"] {
            opacity: 0.1 !important;
            filter: grayscale(100%) !important;
          }
          [class*="image"], [class*="img"], [class*="photo"] {
            background-color: #f0f0f0 !important;
          }
        `
				document.head.appendChild(style)
			}
		} else {
			if (existingStyle) {
				existingStyle.remove()
			}
		}
	}

	return (
		<AccessibilityContext.Provider
			value={{ settings, updateSettings, resetSettings }}
		>
			{children}
		</AccessibilityContext.Provider>
	)
}

export const useAccessibility = (): AccessibilityContextType => {
	const context = useContext(AccessibilityContext)
	if (!context) {
		throw new Error(
			'useAccessibility must be used within an AccessibilityProvider'
		)
	}
	return context
}
