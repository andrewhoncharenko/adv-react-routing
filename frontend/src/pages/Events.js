import { useLoaderData } from "react-router-dom";
import EventsList from '../components/EventsList';

function EventsPage() {
    const data = useLoaderData();
    const events = data.events;

    if(data.isError) {
        return <p>{data.message}</p>;
    }
    
    return <EventsList events={events} />;
}

export async function loader() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        throw { message: "Could not fetch events." };
    } else {
        return response;
    }
}

export default EventsPage;