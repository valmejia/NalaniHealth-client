import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export default function HelperText(props) {

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} >
      <DatePicker
        label="Week"
        renderInput={(params) => (
          <TextField {...params} helperText={params?.inputProps?.placeholder} />
        )}
        {...props} 
      />
    </LocalizationProvider>
  );
}
