'use client'
import { MultiContainer, NewCard, Typography } from '@/shared/ui'
import classes from './NewsPages.module.scss'
import { useNewsPages } from '../api/useNewsPages'
import { BASE_URL } from '@/shared/constants/constants'
import { Loader } from '@/shared/ui/loader/view/Loader'
import { BreadCrumbs } from '@/shared/ui/breadCrumbs/view/BreadCrumbs'
import { useSafeTranslation } from '@/shared/hooks/useSafeTranslation'

export const NewsPages = () => {
	const { data, isLoading } = useNewsPages()
	const { t } = useSafeTranslation()
	if (isLoading) {
		return <Loader />
	}
	return (
		<section className={classes.section}>
			<BreadCrumbs breadCrumbKey='news' />
			<MultiContainer>
				<div className={classes.container}>
					<Typography variant='h1' weight='bold'>
						{t('navigation.news')}
					</Typography>
					<div className={classes.content}>
						{data?.map((item, index) => (
							<div key={index} className={classes.item}>
								<NewCard
									variant='pagesCard'
									img={`${BASE_URL}${item.image}`}
									title={item.new_translations[0].title}
									descriptions={item.new_translations[0].description}
									date={item.date}
									path={`newsDetails/${item.id}`}
								/>
							</div>
						))}
					</div>
				</div>
			</MultiContainer>
		</section>
	)
}
