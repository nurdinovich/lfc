'use client'
import classes from './Loader.module.scss'
export const Loader = () => {
	return (
		<div className={classes.loader}>
			<div className={classes.container}>
				<div className={classes.dot}></div>
				<div className={classes.dot}></div>
				<div className={classes.dot}></div>
				<div className={classes.dot}></div>
			</div>
		</div>
	)
}
