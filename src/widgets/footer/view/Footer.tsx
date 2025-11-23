'use client'
import { Facebook, Gail, Instagram, Logo } from '@/shared/assest/icons'
import { MultiContainer, Typography } from '@/shared/ui'
import classes from './Footer.module.scss'
import { BASE_URL, links } from '@/shared/constants/constants'
import Link from 'next/link'
import { Adress } from '@/widgets/adress/view/Adress'
import { useSafeTranslation } from '@/shared/hooks/useSafeTranslation'
import { useBaseSetting } from '@/shared/api/useBaseSetting'
import Image from 'next/image'

export const Footer = () => {
const { t } = useSafeTranslation()
const {data} = useBaseSetting()
const socialLinks = [
	{
		id: 1,
		icon: <Facebook />,
		url: data?.[0]?.facebook || '#',
	},
	{
		id: 2,
		icon: <Instagram />,
		url: data?.[0]?.instagram || '#',
	},
	{
		id: 3,
		icon: <Gail />,
		url: `mailto:${data?.[0]?.email || ''}`,
	},
]
	return (
		<footer className={classes.footer}>
			<MultiContainer>
				<div className={classes.content}>
					<Link href='/' className={classes.logo}>
						<Image
							src={`${BASE_URL}${data?.[0]?.logo || ''}`}
							alt='logo'
							width={100}
							height={100}
							loading='eager'
						/>
					</Link>
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
								{socialLinks.map(link => {
									return (
										<a
											key={link.id}
											href={link.url}
											className={classes.link}
											target='_blank'
											rel='noopener noreferrer'
										>
											<div className={classes.icon}>{link.icon}</div>
										</a>
									)
								})}
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
