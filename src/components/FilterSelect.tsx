import { createStyles, FormControl, InputLabel, makeStyles, MenuItem, Select, Theme } from '@material-ui/core';
import React, { useState } from 'react';
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
function FilterSelect() {
    const classes = useStyles();
    const [jobFilter, setJobFilter] = useState<Job | undefined>();

  const handleChange = (event: React.ChangeEvent<{ value?: Job | unknown }>) => {
    setJobFilter(event.target.value as Job);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Job Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={jobFilter}
          onChange={handleChange}
        >
          <MenuItem value={"Security"}>Security</MenuItem>
          <MenuItem value={"Ticketing"}>Ticketing</MenuItem>
          <MenuItem value={"Cleaning"}>Cleaning</MenuItem>
          <MenuItem value={"Vendor"}>Vendor</MenuItem>
        </Select>
      </FormControl>
      </div>
  )
}

export default FilterSelect;