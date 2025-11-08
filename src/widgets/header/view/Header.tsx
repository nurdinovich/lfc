'use client'
import { BurgerMenu, Logo, XIcons } from '@/shared/assest/icons'
import { MultiContainer, Typography } from '@/shared/ui'
import classes from './Header.module.scss'
import Link from 'next/link'
import { links } from '@/shared/constants/constants'
import { LanguageSelect } from '@/features/languageSelect/view/LanguageSelect'
import { AccessibilityPanel } from '@/features/accessibility'
import { useSafeTranslation } from '@/shared/hooks/useSafeTranslation'
import { useState } from 'react'

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const { t } = useSafeTranslation() 

	return (
		<header className={classes.header}>
			<MultiContainer>
				<div className={classes.container}>
					<Link href='/' className={classes.icon}>
						<Logo />
					</Link>
					<nav
						className={`${classes.nav} ${
							isMenuOpen ? classes.navigationOpen : ''
						}`}
					>
						{links.slice(1).map(link => (
							<Link
								key={link.name}
								href={link.path}
								className={classes.link}
								suppressHydrationWarning
								onClick={() => setIsMenuOpen(false)}
							>
								<Typography
									variant='b1'
									weight='medium'
									className={classes.text}
								>
									{t(link.name)}
								</Typography>
							</Link>
						))}
						
						<div className={classes.language}>
							<LanguageSelect variant='mobile' />
							<AccessibilityPanel />
						</div>
					</nav>
					<div className={classes.lan}>
					<LanguageSelect />
					<AccessibilityPanel />
					</div>
						<div
							className={classes.burgerButton}
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							{isMenuOpen ? <XIcons /> : <BurgerMenu />}
						</div>
				</div>

			</MultiContainer>
		</header>
	)
}
