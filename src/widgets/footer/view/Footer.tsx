'use client'
import { Facebook, Gail, Instagram, Logo } from '@/shared/assest/icons'
import { MultiContainer, Typography } from '@/shared/ui'
import classes from './Footer.module.scss'
import { links } from '@/shared/constants/constants'
import Link from 'next/link'
import { Adress } from '@/widgets/adress/view/Adress'
import { useSafeTranslation } from '@/shared/hooks/useSafeTranslation'
const socialLinks = [
	{
		id: 1,
		icon: <Facebook />,
		path: 'https://www.facebook.com/',
	},
	{
		id: 2,
		icon: <Instagram />,
		path: 'https://twitter.com/',
	},
	{
		id: 3,
		icon: <Gail />,
		path: 'https://www.instagram.com/',
	},
]
export const Footer = () => {
	const { t, isClient } = useSafeTranslation()

	if (!isClient) return null
	return (
		<footer className={classes.footer}>
			<MultiContainer>
				<div className={classes.content}>
					<div>
						<Logo />
					</div>
					<div className={classes.container}>
						<nav className={classes.nav}>
							<div className={classes.links}>
								{links.map(link => (
									<Link
										key={link.name}
										href={link.path}
										className={classes.lin}
									>
										<Typography
											variant='b2'
											weight='medium'
											className={classes.text}
										>
											{t(link.name)}
										</Typography>
									</Link>
								))}
							</div>
							<div className={classes.social}>
								{socialLinks.map(link => (
									<Link key={link.id} href={link.path} className={classes.link}>
										<div className={classes.icon}>{link.icon}</div>
									</Link>
								))}
							</div>
						</nav>
						<Adress />
					</div>
				</div>
				<hr />
				<Typography variant='b2' weight='regular' className={classes.desc}>
					© 2025 LFC. Ваш надёжный партнёр в мире права и финансов.
				</Typography>
			</MultiContainer>
		</footer>
	)
}
