'use client'
import { MultiContainer, Typography } from '@shared/ui'
import classNames from 'classnames'
import classes from './BreadCrumbs.module.scss'
import { FC } from 'react'
import { BreadProps } from '../types/types'
import { generateBreadCrumbs } from '@/shared/lib/helpers/helpers'
import Link from 'next/link'
import { IconsBread } from '@/shared/assest/icons'
import { useSafeTranslation } from '@/shared/hooks/useSafeTranslation'

export const BreadCrumbs: FC<BreadProps> = ({
	breadCrumbKey,
	thirdElement,
	fourthElement,
}) => {
	const { t } = useSafeTranslation()

	const breadCrumbs = generateBreadCrumbs(
		breadCrumbKey,
		t,
		thirdElement,
		fourthElement
	)

	return (
		<MultiContainer className={classes.breadCrumbsContainer}>
			<ul className={classes.breadCrumbs}>
				{breadCrumbs.map((breadCrumb, index) => (
					<li
						key={index}
						className={classNames({
							[classes.breadCrumbActive]:
								breadCrumb.class === 'breadCrumbActive',
							[classes.breadCrumb]: breadCrumb.class !== 'breadCrumbActive',
						})}
					>
						{breadCrumb.route ? (
							<Link className={classes.link} href={breadCrumb.route}>
								<Typography variant='bodyText' weight='medium'>
									{breadCrumb.label}
								</Typography>
								{index < breadCrumbs.length - 1 && (
									<IconsBread />
								)}
							</Link>
						) : (
							<Typography variant='bodyText' weight='medium'>
								{breadCrumb.label}
							</Typography>
						)}
					</li>
				))}
			</ul>
		</MultiContainer>
	)
}
