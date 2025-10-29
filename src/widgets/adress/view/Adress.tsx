import { Typography } from "@/shared/ui"
import classes from './Adress.module.scss'

const data = [
	{
		adress: 'Кыргызстан, г. Бишкек, улица Фрунзе, 387',
		phone: '+996 555 55 55, +996 555 55 55',
	},
	{
		adress: 'Кыргызстан, г. Ош, улица Курманжан датка, 287',
		phone: '+996 (557) 287 282; +996 (592) 519 951;',
	},
]
const grafic = [
  {week: 'Пн-Пт', time: '9:00 - 18:00'},
  {week: 'Сб', time: 'выходной'},
]
export const Adress = () => {
  return (
    <div className={classes.adress}>
    <div className={classes.container}>
      {data.map((item, index) => (
        <div key={index} className={classes.item}>
          <Typography variant='b2' weight='regular'>
            {item.adress}
          </Typography>
          <Typography variant='b2' weight='regular'>
            {item.phone}
          </Typography>
        </div>
      ))}
    </div>
    <div className={classes.grafic}> 
      <Typography variant='b2' weight='regular'>
        График работы:
      </Typography>
      {grafic.map((item, index) => (
        <div key={index} className={classes.item}>
          <Typography variant='b2' weight='regular'>
            {item.week}
          </Typography>
          <Typography variant='b2' weight='regular'>
            {item.time}
          </Typography>
        </div>
      ))}
    </div>
    </div>
  )
}
