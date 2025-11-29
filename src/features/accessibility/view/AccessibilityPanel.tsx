'use client'
import { useState } from 'react'
import classes from './AccessibilityPanel.module.scss'
import { CustomButton, Typography } from '@/shared/ui'
import { LowMode } from '@/shared/assest/icons'
import { useClickOutside } from '@/shared/hooks/useClickOutside'
import { themeOptions } from '../types/types'
import { useAccessibility } from '../model/AccessibilityContext'
import { useSafeTranslation } from '@/shared/hooks/useSafeTranslation'

export const AccessibilityPanel: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { settings, updateSettings, resetSettings } = useAccessibility()
	const increaseFontSize = () => {
		const newSize = Math.min(settings.fontSize + 2, 32)
		updateSettings({ fontSize: newSize })
	}

	const decreaseFontSize = () => {
		const newSize = Math.max(settings.fontSize - 2, 12)
		updateSettings({ fontSize: newSize })
	}

	const toggleImages = () => {
		updateSettings({ imagesDisabled: !settings.imagesDisabled })
	}

	const resetToDefaultTheme = () => {
		resetSettings()
	}
	const {t } = useSafeTranslation()
  const dropdownRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false))
	return (
		<div className={classes.container} ref={dropdownRef}>
			<div
				className={`${classes.accessibilityToggle} ${
					isOpen ? classes.active : ''
				}`}
				onClick={() => setIsOpen(!isOpen)}
				aria-label='Открыть настройки доступности'
			>
				<div className={classes.icon}>
					<LowMode className={classes.icons} />
				</div>
				<Typography variant='buttonText' weight='medium' className={classes.text}>
					{t('buttons.mode')}
				</Typography>
			</div>

			{isOpen && (
				<div
					className={classes.accessibilityPanel}
					role='dialog'
					aria-label='Настройки доступности'
				>
					<div className={classes.fonts}>
						<div className={classes.fontSize}>
							<CustomButton
								actionType='button'
								className={classes.button}
								onClick={decreaseFontSize}
								aria-label='Уменьшить шрифт'
							>
								A-
							</CustomButton>
							<CustomButton
								actionType='button'
								className={classes.button}
								onClick={increaseFontSize}
								aria-label='Увеличить шрифт'
							>
								A+
							</CustomButton>
						</div>
					<div className={classes.themes}>
						<div className={classes.themesContainer}>
							{themeOptions.map(theme => (
								<CustomButton
									actionType='button'
									key={theme.value}
									className={`${classes.themeButton} ${
										classes[`theme-${theme.value}`]
									} ${settings.theme === theme.value ? classes.active : ''}`}
									onClick={() => updateSettings({ theme: theme.value })}
									aria-pressed={settings.theme === theme.value}
									aria-label={`Тема ${theme.value}`}
								>
									{theme.label}
								</CustomButton>
							))}
						</div>
					</div>
					</div>

					<div className={classes.settings}>
						<CustomButton
							actionType='button'
							className={`${classes.button} ${
								settings.theme === 'default' ? classes.active : ''
							}`}
							onClick={resetToDefaultTheme}
						>
							<Typography variant='b2' weight='medium'>
								Тема по умолчанию
							</Typography>
						</CustomButton>
						<CustomButton
							actionType='button'
							className={`${classes.button} ${
								settings.imagesDisabled ? classes.active : ''
							}`}
							onClick={toggleImages}
						>
							<Typography variant='b2' weight='medium'>
								{settings.imagesDisabled ? 'Включить' : 'Отключить'} изображения
							</Typography>
						</CustomButton>
					</div>
				</div>
			)}
		</div>
	)
}
