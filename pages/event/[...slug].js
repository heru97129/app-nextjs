import { useRouter } from "next/router";
import {getFilteredEvents} from '../../dummydata'
import  EventList from '../../components/event/Event-list'
import { Fragment } from 'react/cjs/react.production.min';
import ResultsTitle from "../../components/event/results-title";



function FilteredEventsPage() {
    const router = useRouter()

    const filterData = router.query.slug
    console.log(filterData)  
    if(!filterData){
        return <p className="center">Loading...</p>
    }
      
    const filteredYear = filterData[0]
    const filteredMonth = filterData[1]
    
    const numYear = +filteredYear
    const numMonth = +filteredMonth

    if(isNaN(numYear) || isNaN(numMonth) || numYear > 20230  || numYear < 2021 || numMonth  < 1 || numMonth > 12){
       return <h1>Please adjust your values ! </h1>
    }
     
    const filteredEvents = getFilteredEvents({
        year : numYear,
        month :numMonth
    })
     
    if(!filteredEvents || filteredEvents.length == 0){
        return <h1>Please adjust your values ! </h1>

    }

    const date =  new Date(numYear,numMonth -1)

    return ( 
        <Fragment>
                   <ResultsTitle date={date} />
                   <EventList  items={filteredEvents}/>
        </Fragment>   
 
     );
}

export default FilteredEventsPage;