import { MultiContainer, Typography } from '@/shared/ui'
import classes from './AboutPages.module.scss'

export const AboutPages = () => {
	return (
		<section className={classes.section}>
			<MultiContainer>
				<div className={classes.container}>
					<Typography variant='h1' weight='bold'>
						О нас
					</Typography>
					<div className={classes.img}>
						<div className={classes.imgs}>
							<img
								src='https://navro.org/wp-content/uploads/2022/02/kvalificirovannye-juridicheskie-uslugi-dlja-organizacij.jpg'
								alt=''
							/>
						</div>
						<div className={classes.imgs}>
							<img
								src='https://navro.org/wp-content/uploads/2022/02/kvalificirovannye-juridicheskie-uslugi-dlja-organizacij.jpg'
								alt=''
							/>
						</div>
					</div>
					<Typography variant='b1' weight='regular' className={classes.text}>
						Lorem ipsum dolor sit amet consectetur. Amet nunc est scelerisque
						sed nunc lectus scelerisque nisl. In laoreet orci in felis. Sagittis
						feugiat nunc leo gravida auctor pulvinar imperdiet pellentesque at.
						Pharetra dolor id ornare duis nulla. Iaculis nisi tristique amet
						elementum feugiat elit amet. Consectetur congue imperdiet odio duis.
						Sed congue fusce libero tortor. Et neque porta feugiat sed a neque
						donec sed. Montes ut curabitur ornare faucibus. Facilisi orci
						sagittis semper in. Cras eget dictum facilisis at odio varius.
						Consequat quis mattis cursus pellentesque. Fringilla hendrerit
						ullamcorper augue lobortis. Non interdum mauris massa tincidunt
						rhoncus eleifend semper sed. Convallis massa accumsan lectus auctor
						ut diam. Neque egestas mi lacus morbi molestie. Vitae amet vivamus
						ut proin. Turpis id nibh enim dictumst velit eu ligula dignissim
						nibh. Venenatis fames lobortis eget arcu. Fusce pharetra dignissim
						id feugiat nulla netus. Dignissim adipiscing eget habitant suscipit
						turpis faucibus viverra. Elementum proin ultrices odio in aliquam
						viverra nibh at.
					</Typography>
				</div>
				<div className={classes.content}>
					<Typography variant='h2' weight='bold'>
						История компании
					</Typography>
					<Typography variant='b1' weight='regular' className={classes.text}>
						Lorem ipsum dolor sit amet consectetur. Amet nunc est scelerisque
						sed nunc lectus scelerisque nisl. In laoreet orci in felis. Sagittis
						feugiat nunc leo gravida auctor pulvinar imperdiet pellentesque at.
						Pharetra dolor id ornare duis nulla. Iaculis nisi tristique amet
						elementum feugiat elit amet. Consectetur congue imperdiet odio duis.
						Sed congue fusce libero tortor. Et neque porta feugiat sed a neque
						donec sed. Montes ut curabitur ornare faucibus. Facilisi orci
						sagittis semper in. Cras eget dictum facilisis at odio varius.
						Consequat quis mattis cursus pellentesque. Fringilla hendrerit
						ullamcorper augue lobortis. Non interdum mauris massa tincidunt
						rhoncus eleifend semper sed. Convallis massa accumsan lectus auctor
						ut diam. Neque egestas mi lacus morbi molestie. Vitae amet vivamus
						ut proin. Turpis id nibh enim dictumst velit eu ligula dignissim
						nibh. Venenatis fames lobortis eget arcu. Fusce pharetra dignissim
						id feugiat nulla netus. Dignissim adipiscing eget habitant suscipit
						turpis faucibus viverra. Elementum proin ultrices odio in aliquam
						viverra nibh at.
					</Typography>
				</div>
			</MultiContainer>
		</section>
	)
}
