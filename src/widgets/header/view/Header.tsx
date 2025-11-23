'use client'
import { BurgerMenu,  XIcons } from '@/shared/assest/icons'
import { MultiContainer, Typography } from '@/shared/ui'
import classes from './Header.module.scss'
import Link from 'next/link'
import { BASE_URL, links } from '@/shared/constants/constants'
import { LanguageSelect } from '@/features/languageSelect/view/LanguageSelect'
import { AccessibilityPanel } from '@/features/accessibility'
import { useSafeTranslation } from '@/shared/hooks/useSafeTranslation'
import { useState } from 'react'
import { useBaseSetting } from '@/shared/api/useBaseSetting'
import Image from 'next/image'
export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const { t } = useSafeTranslation() 
const {data} = useBaseSetting()

console.log(data);

	return (
		<header className={classes.header}>
			<MultiContainer>
				<div className={classes.container}>
					<Link href='/' className={classes.icon}>
						<Image
							src={`${BASE_URL}${data?.[0]?.logo || ''}`}
							alt='logo'
							width={100}
							height={100}
							loading='eager'
						/>
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
