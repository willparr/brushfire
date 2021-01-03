import React, { useContext } from 'react';
import logo from './logo.svg';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, createStyles, makeStyles, Paper, Theme, Typography } from '@material-ui/core';
import { EventDetailView } from './EventDetailView';
import { useCache } from '../hooks/EventProvider';
import { lollaImage } from '../mockData/images';
import { FormattedDate } from 'react-intl';
import { useLocale } from '../hooks/LocalizationProvider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      display: 'flex',
      minWidth: 900,
      maxWidth: 1000,
      margin: 10
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
    }
  }),
);

export type Job = "Security" | "Ticketing" | "Cleaning" | "Vendor"
interface VolunteerEvent {
  eventTitle: string
  eventDate: Date
  eventLocation: string
  id: string
  pay: number;
  jobType: Job
  isFavorite?: boolean
}

interface EventCardProps {
  event: VolunteerEvent
  showSaveButton?: boolean
}

export function EventCard({event, showSaveButton}: EventCardProps) {
  const {eventTitle, eventDate, eventLocation, id, pay, jobType} = event
  const classes = useStyles();
  const {setCache} = useCache()
  const saveEvent = () => {
    event.isFavorite = true; //this isn't the best because it's modifying by reference, would be better to update event by id
    setCache(event)
  }

  return (
    <Card variant="outlined" className={classes.card}>
      <CardContent className={classes.eventDetails}>
      <Typography variant="h4">
        {eventTitle}
      </Typography>
      <Typography variant="h6">
        {eventLocation}
      </Typography>
      <Typography>
        Event Date: <FormattedDate value={eventDate}></FormattedDate>
      </Typography>
      <Typography>
        {"Job Type: " + jobType}
      </Typography>
      <CardActions>
      <EventDetailView event={event}/>
      {showSaveButton && <Button color="primary" onClick={saveEvent} variant="outlined" title="Save">Save</Button>}
      </CardActions>
      </CardContent>
      <CardContent className={classes.eventDetails}>
      <CardMedia
      className={classes.eventImage}
      component="img"
      src={lollaImage}
      />
      </CardContent>
    </Card>
  );
}
