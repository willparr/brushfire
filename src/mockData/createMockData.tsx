import { Job } from "../components/EventCard"


const eventDataSecurity = {
    eventTitle: "Security Guard",
    eventDate: new Date(),
    eventLocation: "Fort Worth, TX",
    id: new Date().getTime().toString(),
    pay: 12,
    jobType: "Security" as Job
}
const eventDataTicketBooth = {
    eventTitle: "Ticket Checker",
    eventDate: new Date(),
    eventLocation: "McKinney, TX",
    id: new Date().getTime().toString(),
    pay: 34,
    jobType: "Security" as Job
}
const eventDataCleaning = {
    eventTitle: "Security Guard",
    eventDate: new Date(),
    eventLocation: "Prosper, TX",
    id: new Date().getTime().toString(),
    pay: 23,
    jobType: "Security" as Job
}
const eventDataVendor = {
    eventTitle: "Booth Vendor",
    eventDate: new Date(),
    eventLocation: "Deep Ellum, TX",
    id: new Date().getTime().toString(),
    pay: 50,
    jobType: "Security" as Job
}

const jobArray = [eventDataSecurity, eventDataTicketBooth, eventDataCleaning, eventDataVendor];

export function createMockEvents(numOfEvents?: number){
    const numEvents = numOfEvents || 5
    let mockJobEvents = []
    for(let i = 0; i < numEvents; i++){
        mockJobEvents.push(jobArray[Math.floor(Math.random() * Math.floor(4))])
    }
    console.debug(mockJobEvents)
    return mockJobEvents
}