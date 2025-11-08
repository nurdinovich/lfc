'use client'
import { languages } from '@/shared/constants/constants'
import { CustomButton, Typography } from '@/shared/ui'
import { useState, useEffect, FC } from 'react'
import styles from './LanguageSelect.module.scss'
import { useQueryClient } from '@tanstack/react-query'
import classNames from 'classnames'
import { ILanguage, ILanguageSelect } from '../types/types'
import { ChevronDown } from '@/shared/assest/icons'
import i18n from '@/shared/lib/i18next/i18next'
import { useClickOutside } from '@/shared/hooks/useClickOutside'

export const LanguageSelect:FC<ILanguageSelect> = ({
	variant
}) => {
	const queryClient = useQueryClient()
	const [isOpen, setIsOpen] = useState(false)
	const [selectedLanguage, setSelectedLanguage] = useState<ILanguage>(languages[0])
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
		const storedLang = localStorage.getItem('i18nextLng')
		const initialLanguage = 
			languages.find(lang => lang.lang === storedLang) || languages[0]
		setSelectedLanguage(initialLanguage)
		
		if (i18n.language !== initialLanguage.lang) {
			i18n.changeLanguage(initialLanguage.lang)
		}
	}, [])

	const toggleDropdown = () => setIsOpen(prev => !prev)

	const selectLanguage = (language: ILanguage) => {
		setSelectedLanguage(language)
		i18n.changeLanguage(language.lang)
			.then(() => queryClient.invalidateQueries())
		localStorage.setItem('i18nextLng', language.lang)
		setIsOpen(false)
	}

	const dropdownRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false))

	
	if (!isMounted) {
		return (
			<div className={styles.dropdown}>
				<CustomButton
					variant='primary'
					actionType='button'
					isTextBtn={false}
					className={styles.dropdownButton}
					aria-label='Select language'
				>
					<Typography variant='buttonText' weight='semiBold'>
					{languages[0].lang.toUpperCase()}
					</Typography>
					<div className={styles.dropdownArrow}>
						<ChevronDown className={styles.dropdownIcon} />
					</div>
				</CustomButton>
			</div>
		)
	}
	if(variant === 'mobile') {
		return (
			<div className={styles.dropdownLists}>
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
		)
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
				<Typography variant='buttonText' weight='semiBold'>
					{selectedLanguage.lang.toUpperCase()}
				</Typography>
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