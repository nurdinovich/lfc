'use client'
import { CustomButton, MultiContainer, ServicesCard, Typography } from '@/shared/ui'
import classes from './SevicesPages.module.scss'
import { useServicesPages } from '../api/useServicesPages'
import { BreadCrumbs } from '@/shared/ui/breadCrumbs/view/BreadCrumbs'
import { useSafeTranslation } from '@/shared/hooks/useSafeTranslation'

export const SevicesPages = () => {
	const { data } = useServicesPages()
const { t } = useSafeTranslation()
  return (
		<section className={classes.section}>
			<BreadCrumbs breadCrumbKey='services' />
			<MultiContainer>
				<div className={classes.container}>
					<Typography variant='h1' weight='bold'>
						{t('navigation.services')}
					</Typography>
					<Typography variant='b1' weight='medium'>
						{t('services.desc')}
					</Typography>
					<Typography variant='h2' weight='bold'>
						{t('services.subtitle')}
					</Typography>
					<div className={classes.cards}>
						{data?.map(item => (
							<div key={item.id}>
								<ServicesCard
									variant='pagesCard'
									title={item.title}
									descriptions={item.descriptions.map(desc => desc.description)}
								/>
							</div>
						))}
					</div>
					<CustomButton
						variant={'primary'}
						actionType={'link'}
						to={'employees'}
						className={classes.btn}
					>
						{t('buttons.book')}
					</CustomButton>
					<Typography variant='b1' weight='medium'>
						{t('services.text')}
					</Typography>
				</div>
			</MultiContainer>
		</section>
	)
}

