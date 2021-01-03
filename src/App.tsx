import React from 'react';
import logo from './logo.svg';
import { EventCard, Job } from './components/EventCard';
import FilterSelect from './components/FilterSelect';
import EventProvider from './hooks/EventProvider';
import { EventFeed } from './components/EventFeed';
import classes from '*.module.css';
import { AppBar, Toolbar, IconButton, Typography, Button, makeStyles } from '@material-ui/core';
import { UserFavorites } from './components/UserFavorites';
import { Link, Route, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { LocaleSelect } from './components/LocaleSelect';
import { LocalizationProvider, useLocale } from './hooks/LocalizationProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolBar: {
    justifyContent: "space-between",
  },
}));




function App() {
  const classes = useStyles()
  const {locale} = useLocale()
  return (
    <IntlProvider locale={locale}>
      <div>
        <AppBar position="static">
          <Toolbar className={classes.toolBar}>
            <Button to={"/EventFeed"} color="inherit" component={Link}>Events</Button>
            <Button to={"/UserFavorites"} color="inherit" component={Link}>Favorites</Button>
            <LocaleSelect/>
          </Toolbar>
        </AppBar>
        <EventProvider>
        <Switch>
          <Route exact path="/EventFeed">
            <EventFeed/>
          </Route> 
          <Route exact path="/UserFavorites">
            <UserFavorites/>
          </Route> 
        </Switch>
        </EventProvider>
      </div>
    </IntlProvider>
  );
}

export default App;
