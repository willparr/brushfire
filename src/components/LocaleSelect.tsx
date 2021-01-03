import { createStyles, FormControl, InputLabel, makeStyles, MenuItem, Select, Theme, ThemeProvider, useTheme } from '@material-ui/core';
import React, { useState } from 'react';
import { Locale, locales, useLocale } from '../hooks/LocalizationProvider';
import { useFilter } from '../hooks/useFilter';
import { Job } from './EventCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

interface LocaleSelectProps {
  props: any
}

export function LocaleSelect() {
  const classes = useStyles();
  const {locale, setLocale} = useLocale()

  const handleChange = (event: React.ChangeEvent<{ value?: Locale | unknown }>) => {
    // setJobFilterDisplay(event.target.value as Job);
    setLocale(event.target.value as Locale);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel style={{color: 'white'}} id="demo-simple-select-label">Language</InputLabel>
        <Select
          style={{backgroundColor: '#f0f0f0'}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={locale}
          onChange={handleChange}
        >
          {locales.map((locale) => <MenuItem value={locale}>{locale}</MenuItem>)}
        </Select>
      </FormControl>
      </div>
  )
}