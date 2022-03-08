

import EventItem from "./Event-item";
import classes from "./event-list.module.css"

function EventFileList(props) {
    const { items } = props
    console.log(items)
    return ( 
        <ul className={classes.list}>
        {items.map(event => ( 
        <EventItem 
        key={event.id}
        id={event.id} 
        title={event.title}  
        location={event.location} 
        date={event.date} 
        image={event.image} />
        )
        )}
        </ul>
     );
}

export default EventFileList;