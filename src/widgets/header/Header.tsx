'use client'
import { Logo } from '@/shared/assest/icons'
import { CustomButton, MultiContainer, Typography } from '@/shared/ui'
import classes from './Header.module.scss'
import Link from 'next/link'
import { links } from '@/shared/constants/constants'
// import { LanguageSelect } from '@/features/languageSelect/view/LanguageSelect'
import { useTranslation } from 'react-i18next'
import { AccessibilityPanel } from '@/features/accessibility'

export const Header = () => {
	const { t } = useTranslation()
	return (
		<header className={classes.header}>
			<MultiContainer>
				<div className={classes.container}>
					<Link href={'/'} className={classes.icon}>
						<Logo />
					</Link>
					<nav className={classes.nav}>
						{links.slice(1).map(link => (
							<Link key={link.name} href={link.path} className={classes.link}>
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
					{/* <LanguageSelect /> */}
					<CustomButton
						variant={'primary'}
						actionType={'button'}
						className={classes.buttons}
					>
						Рu
					</CustomButton>
					<AccessibilityPanel />
				</div>
			</MultiContainer>
		</header>
	)
}
