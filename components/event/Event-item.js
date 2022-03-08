import classes from './event-item.module.css'

import Button from "../UI/Button";
import DateIcon from "../icon/date-icon";
import AddressIcon from '../icon/address-icon';
import ArrowRightIcon from '../icon/arrow-right-icon';


function EventItem(props) {
    const {title, image, date, location, id } = props
    const humanReadableDate = new Date(date).toLocaleDateString('en-US',{
        day:'numeric',
        month:'long',
        year:"numeric",
    })
    
    const formattedAdress = location.replace(',','\n')
    

    const exploreLink = `/event/${id}`

    return ( 
        <li className={classes.item}>
        <img src={'/'+ image} alt="" />
        <div className={classes.content}>
            <div className={classes.summary}>
                <h2>{title}</h2>
                <div className={classes.date}> 
                <DateIcon />
                 <time>{humanReadableDate}</time>
                </div>  
                <div className={classes.address}>
                    <AddressIcon />
                    <address>{formattedAdress}</address>
              </div>
            </div>
        <div className={classes.actions}>
          <Button link ={exploreLink}>
              <span> Explore link</span>
              <span className={classes.icon}><ArrowRightIcon /></span>
             </Button>
        </div>
        </div>
            
        </li>
     );
}

export default EventItem;