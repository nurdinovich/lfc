'use client'
import {
	AnimatedBlock,
	CustomButton,
	MultiContainer,
	Typography,
} from '@/shared/ui'
import classes from './HeroBlock.module.scss'
import Image from 'next/image'
import { useHeroBlock } from '../api/useHeroBlock'
import { BASE_URL } from '@/shared/constants/constants'
import { useSafeTranslation } from '@/shared/hooks/useSafeTranslation'

export const HeroBlock = () => {
	const { data } = useHeroBlock('ru')
	const { t } = useSafeTranslation()
	return (
		<section className={classes.section}>
			<MultiContainer>
				<div className={classes.container}>
					<AnimatedBlock animationType='slideUp' delay={0.2}>
						<Typography variant='h1' weight='bold'>
							{data?.[0]?.title}
						</Typography>
						<div className={classes.content}>
							<div className={classes.leftcontent}>
								<Typography
									variant='b1'
									weight='regular'
									className={classes.text}
								>
									{data?.[0]?.description}
								</Typography>

								<CustomButton
									variant='primary'
									actionType='link'
									to='/employees'
									className={classes.btn}
								>
									{t('buttons.book')}
								</CustomButton>
							</div>

							<div className={classes.img}>
								<Image
									width={500}
									height={500}
									src={`${BASE_URL}${data?.[0]?.banner?.image}`}
									alt={
										(data && data[0] && data[0].title) || 'Юридическая услуга'
									}
								/>
							</div>
						</div>
					</AnimatedBlock>
				</div>
			</MultiContainer>
		</section>
	)
}
