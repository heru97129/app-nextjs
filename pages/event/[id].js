import { useRouter } from "next/router";
import { Fragment } from "react/cjs/react.production.min";

import { getEventById } from '../../dummydata'

import { EventSummary } from '../../components/event-detail/event-summary'
import { EventLogistics } from '../../components/event-detail/event-logistics'
import { EventContent } from '../../components/event-detail/event-content'



function EventDetailPage() {
    
    const router = useRouter()

    const eventId = router.query
    const event = getEventById(eventId.id)
    //     return <p>No event planed yet on this subject</p>
    // }

    if(event == undefined){
       return <h1>No fuckyn content in it king</h1>
    }

    return ( 
        <Fragment >
            <EventSummary title ={event.title} />
            <EventLogistics 
             date = {event.date}
             address = {event.location}
             image = {event.image}
   
            />
            <EventContent>
                {event.description}
            </EventContent>
        </Fragment>
     );
}

export default EventDetailPage;