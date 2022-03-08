import EventFileList from "../components/event/Event-list";
import { getFeaturedEvents } from "../dummydata";


function HomPage() {
  const FeaturedEvent = getFeaturedEvents()
   return ( 
    <div>
      <ul>
       <EventFileList items={FeaturedEvent}/>
      </ul>
    </div>
   );
}

export default HomPage;

