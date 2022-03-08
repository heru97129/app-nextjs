import { getAllEvents } from "../../dummydata";
import  EventList from '../../components/event/Event-list'
import EventSearch from "../../components/event/event-search";
import { Router, useRouter } from "next/router";


function AllEvent() {   

    const event = getAllEvents()    
    console.log(event)
    const router = useRouter()
    function FindEventHandler(year,month){
       const fulPath  =`/event/${year}/${month}`
        router.push(fulPath)
        console.log(fulPath)
    }
    return (
        <>
        <EventSearch  onSearch={FindEventHandler} />
        <EventList items={event}/>
        </>
     );
}

export default AllEvent;