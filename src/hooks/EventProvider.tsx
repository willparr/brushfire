import React, { Component, createContext, useContext, useState } from 'react';
import { Job } from '../components/EventCard';
import { set } from 'lodash'
import { createMockEvents } from '../mockData/createMockData';



const eventData = {
    eventTitle: "Security Guard",
    eventDate: new Date(),
    eventLocation: "Dallas, TX",
    id: new Date().getTime().toString() + "1",
    pay: 10,
    jobType: "Security" as Job
}

const eventDataSecurity = {
    eventTitle: "Security Guard",
    eventDate: new Date(),
    eventLocation: "Fort Worth, TX",
    id: new Date().getTime().toString() + "2",
    pay: 12,
    jobType: "Security" as Job
}
const eventDataTicketBooth = {
    eventTitle: "Ticket Checker",
    eventDate: new Date(),
    eventLocation: "McKinney, TX",
    id: new Date().getTime().toString() + "3",
    pay: 34,
    jobType: "Ticketing" as Job
}
const eventDataCleaning = {
    eventTitle: "Cleanup Crew",
    eventDate: new Date(),
    eventLocation: "Prosper, TX",
    id: new Date().getTime().toString() + "4",
    pay: 23,
    jobType: "Cleaning" as Job
}
const eventDataVendor = {
    eventTitle: "Booth Vendor",
    eventDate: new Date(),
    eventLocation: "Deep Ellum, TX",
    id: new Date().getTime().toString() + "5",
    pay: 50,
    jobType: "Vendor" as Job
}

const jobArray = [eventData, eventDataSecurity, eventDataTicketBooth, eventDataCleaning, eventDataVendor];

function generateMockData(){
    const mockData: Record<string, any> = {}
    for(let i = 0; i < 6; i++){
        const randomNum = Math.floor(Math.random() * Math.floor(5))
        const eventData = jobArray[randomNum]
        mockData[eventData.id] = {...eventData}
    }
    console.log(mockData)
    return mockData
}

type SetCache = (event: VolunteerEvent) => void
interface CacheContextValue {
    cache: Cache
    setCache: SetCache
}
const EventContext = createContext({
    cache: {},
    setCache: () => null
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

export function useCache(){
    const {cache, setCache} = useContext(EventContext)

    return {
        cache, 
        setCache
    }
}

function EventProvider(props: { children: React.ReactNode; }) {
    const [cache, setCache] = useState(generateMockData())

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