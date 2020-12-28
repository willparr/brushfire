import React from 'react';
import logo from './logo.svg';
import { EventCard, Job } from './components/EventCard';

const eventData = {
  eventTitle: "Security Guard",
  eventDate: new Date(),
  eventLocation: "Dallas, TX",
  id: "24323SDFLUO204383XSE98230948",
  pay: 10,
  jobType: "Security" as Job
}

function App() {
  return (
      <EventCard event={eventData}></EventCard>
  );
}

export default App;
