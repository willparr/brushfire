import React, { useContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, createStyles, FormControl, InputLabel, makeStyles, MenuItem, Paper, Select, Theme, Typography } from '@material-ui/core';
import { EventDetailView } from './EventDetailView';
import { useCache } from '../hooks/EventProvider';
import { EventCard } from './EventCard';
import { keys, values } from 'lodash';
import { useFilter } from '../hooks/useFilter';
const lollaImage = "data:image/png;base64,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"
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      display: 'flex',
      maxWidth: 600
    },
    header: {
     margin: 0
    },
    eventImage: {
      maxWidth: 200,
      maxHeight: 200,
      display: 'flex',
      alignItems: 'center'
    },
    event: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    eventDetails: {
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto'
    },
    cardFooter: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    },
    formControl: {
        margin: 10,
        minWidth: 300,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
  }),
);

export type Job = "Security" | "Ticketing" | "Cleaning" | "Vendor"
type JobFilter = "Security" | "Ticketing" | "Cleaning" | "Vendor" | "All"
interface VolunteerEvent {
  eventTitle: string
  eventDate: Date
  eventLocation: string
  id: string
  pay: number;
  jobType: Job
}


export function EventFeed() {
  const {cache} = useCache()
  const classes = useStyles();
  const [jobFilter, setJobFilter] = useState<JobFilter | undefined>()

  const handleChange = (event: React.ChangeEvent<{ value?: JobFilter | unknown }>) => {
    setJobFilter(event.target.value as JobFilter);
  };
  const events = values(cache)

  return (
    <div>
    <div style={{
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">Job Type</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={jobFilter}
        onChange={handleChange}
      >
        <MenuItem value={"All"}>All</MenuItem>
        <MenuItem value={"Security"}>Security</MenuItem>
        <MenuItem value={"Ticketing"}>Ticketing</MenuItem>
        <MenuItem value={"Cleaning"}>Cleaning</MenuItem>
        <MenuItem value={"Vendor"}>Vendor</MenuItem>
      </Select>
    </FormControl>
    </div>
      <div style={{
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
          {events.map((event) => {
              const convertedEvent = {...event} as any
              if(!event || (convertedEvent.jobType !== jobFilter && !!jobFilter && jobFilter !== "All")){
                // eslint-disable-next-line array-callback-return
                return
              }
              return(
                  <EventCard showSaveButton event={convertedEvent as VolunteerEvent}/>
              )
          })}
      </div>

      </div>
  )
}
