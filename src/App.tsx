import React from 'react';
import logo from './logo.svg';
import { EventCard, Job } from './components/EventCard';
import FilterSelect from './components/FilterSelect';
import EventProvider from './hooks/EventProvider';

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
      <div>
        <EventProvider>
        <FilterSelect></FilterSelect>
        <EventCard event={eventData}></EventCard>
        </EventProvider>
      </div>
  );
}

export default App;
