'use client'
import { Logo } from '@/shared/assest/icons'
import { MultiContainer, Typography } from '@/shared/ui'
import classes from './Header.module.scss'
import Link from 'next/link'
import { links } from '@/shared/constants/constants'
import { LanguageSelect } from '@/features/languageSelect/view/LanguageSelect'
import { AccessibilityPanel } from '@/features/accessibility'
import { useSafeTranslation } from '@/shared/hooks/useSafeTranslation'

export const Header = () => {
	const { t, isClient } = useSafeTranslation() 
	if (!isClient) return null

	return (
		<header className={classes.header}>
			<MultiContainer>
				<div className={classes.container}>
					<Link href='/' className={classes.icon}>
						<Logo />
					</Link>
					<nav className={classes.nav}>
						{links.slice(1).map(link => (
							<Link
								key={link.name}
								href={link.path}
								className={classes.link}
								suppressHydrationWarning
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
					</nav>
					<LanguageSelect />
					<AccessibilityPanel />
				</div>
			</MultiContainer>
		</header>
	)
}
