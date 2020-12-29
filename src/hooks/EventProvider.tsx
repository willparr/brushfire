import React, { Component, createContext, useContext, useState } from 'react';
import { Job } from '../components/EventCard';
import { set } from 'lodash'


interface CacheContextValue {
    cache: Cache
    setCache: (event: VolunteerEvent) => void
}

const eventData = {
    eventTitle: "Security Guard",
    eventDate: new Date(),
    eventLocation: "Dallas, TX",
    id: new Date().getTime().toString(),
    pay: 10,
    jobType: "Security" as Job
}

function generateMockData(){
    const eventId = eventData.id.toString()
    const mockData: Record<string, any> = {}
    mockData[eventId] = {...eventData}
    console.log(mockData)
    return mockData
}

const EventContext = createContext({
    cache: {},
    setCache: (event: VolunteerEvent) => null
} as CacheContextValue);

interface VolunteerEvent {
    eventTitle: string
    eventDate: Date
    eventLocation: string
    id: string
    pay: number;
    jobType: Job
}

interface Cache {
    events?: Record<string, VolunteerEvent>
}

function EventProvider(props: { children: React.ReactNode; }) {

    const [cache, setCache] = useState({})
    generateMockData()


    function getEvents(){
        return cache
    }

    function handleSetEvents(event: VolunteerEvent){
        const nextCache: Cache = set(cache, event.id, event)
        setCache({...nextCache})
    }


    return (
        <EventContext.Provider value={{cache, setCache: handleSetEvents}}>
            {props.children}
        </EventContext.Provider>
    );
}

export default EventProvider;