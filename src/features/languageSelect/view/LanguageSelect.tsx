'use client'
import { languages } from '@shared/constants/constants'
import { CustomButton, Typography } from '@shared/ui'
import { useEffect, useState } from 'react'
import styles from './LanguageSelect.module.scss'
import { useQueryClient } from '@tanstack/react-query'
import classNames from 'classnames'
import { ILanguage } from '../types/types'

import { useClickOutside } from '@/shared/hooks/useClickOutside'
import { ChevronDown } from '@/shared/assest/icons'
import i18n from '@/shared/lib/i18next/i18next'

export const LanguageSelect = () => {
	const [selectedLanguage, setSelectedLanguage] = useState<ILanguage>(
		languages[0]
	)
	const [isOpen, setIsOpen] = useState(false)
	const queryClient = useQueryClient()
	const dropdownRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false))

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const storedLang = localStorage.getItem('i18nextLng')
			const initialLanguage =
				languages.find(lang => lang.lang === storedLang) || languages[0]
			setSelectedLanguage(initialLanguage)
			i18n.changeLanguage(initialLanguage.lang)
		}
	}, [])

	const toggleDropdown = () => setIsOpen(prev => !prev)

	const selectLanguage = (language: ILanguage) => {
		setSelectedLanguage(language)
		i18n
			.changeLanguage(language.lang)
			.then(() => queryClient.invalidateQueries())
		if (typeof window !== 'undefined') {
			localStorage.setItem('i18nextLng', language.lang)
		}
		setIsOpen(false)
	}

	return (
		<div className={styles.dropdown} ref={dropdownRef}>
			<CustomButton
				variant='primary'
				actionType='button'
				isTextBtn={false}
				onClick={toggleDropdown}
				className={styles.dropdownButton}
				aria-label='Select language'
			>
				{selectedLanguage.lang.toUpperCase()}
				<div className={styles.dropdownArrow}>
					<ChevronDown
						className={classNames(styles.dropdownIcon, {
							[styles.dropdownIconOpen]: isOpen,
						})}
					/>
				</div>
			</CustomButton>
			{isOpen && (
				<div className={styles.dropdownList}>
					{languages.map(language => (
						<Typography
							variant='bodyText'
							color='black'
							weight='medium'
							key={language.lang}
							onClick={() => selectLanguage(language)}
							className={`${styles.dropdownItem} ${
								selectedLanguage.lang === language.lang
									? styles.dropdownItemActive
									: ''
							}`}
						>
							{language.name}
						</Typography>
					))}
				</div>
			)}
		</div>
	)
}
