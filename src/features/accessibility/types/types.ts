export interface AccessibilitySettings {
	fontSize: number
	theme: 'default' | 'light' | 'dark' | 'high-contrast'
	imagesDisabled: boolean
	colorScheme: 'default' | 'blue' | 'yellow' | 'contrast' | 'reduced-motion'
}

export interface AccessibilityContextType {
	settings: AccessibilitySettings
	updateSettings: (newSettings: Partial<AccessibilitySettings>) => void
	resetSettings: () => void
}

export const themeOptions = [
	{ value: 'light' as const, label: 'Ц', colors: ['#ffffff', '#000000'] },
	{ value: 'dark' as const, label: 'Ц', colors: ['#1C1C1C', '#ffffff'] },
	{
		value: 'high-contrast' as const,
		label: 'Ц',
		colors: ['#9BE4FF', '#3A7BD5'],
	},
]