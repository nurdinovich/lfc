'use client'
import { Facebook, Gail, Instagram} from '@/shared/assest/icons'
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
		url: data?.[0]?.facebook,
		label: 'LFC в Facebook',
	},
	{
		id: 2,
		icon: <Instagram />,
		url: data?.[0]?.instagram,
		label: 'LFC в Instagram',
	},
	{
		id: 3,
		icon: <Gail />,
		url: data?.[0]?.email ? `mailto:${data[0].email}` : undefined,
		label: 'Написать на email LFC',
	},
].filter(l => l.url)
const logoSrc = data?.[0]?.logo
	? `${BASE_URL}${data[0].logo}`
	: '/logo-fallback.png'
	return (
		<footer className={classes.footer}>
			<MultiContainer>
				<div className={classes.content}>
					<Link href='/' className={classes.logo}>
						<Image
							src={logoSrc}
							alt='logo'
							width={100}
							height={100}
							loading='eager'
							priority
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
								{socialLinks.map(link => (
									<a
										key={link.id}
										href={link.url!}
										className={classes.link}
										target={link.id === 3 ? undefined : '_blank'}
										rel={link.id === 3 ? undefined : 'noopener noreferrer'}
										aria-label={link.label}
									>
										<div className={classes.icon}>{link.icon}</div>
									</a>
								))}
							</div>
						</nav>
						<Adress />
					</div>
				</div>
				<hr />
				<Typography variant='b2' weight='regular' className={classes.desc}>
					{t('services.textfooter')}
				</Typography>
			</MultiContainer>
		</footer>
	)
}
