import { useParams } from "react-router-dom";

function EditEventPage() {
    const params = useParams();

    return <>
        <h1>Edit event</h1>
        <p>{params.eventId}</p>
    </>;
}

export default EditEventPage;