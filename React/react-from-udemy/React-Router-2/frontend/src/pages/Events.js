import EventsList from "../components/EventsList";
import { Await, defer, json, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{textAlign : "center"}}>Loading...</p>}>
      <Await resolve={events}>
        {(events) => <EventsList events={events} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Could not find Events" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

export const loader = () => {
  return defer({
    events: loadEvents()
  });
};
