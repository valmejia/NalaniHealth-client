import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';

import { 
  CssBaseline, 
  Typography,
  Container
} from '@mui/material';


function MealPlan() {

  return (
    <Container>
      <CssBaseline />
      <Typography
        variant="h4"
        component="h1"
        sx={{
          marginTop: 4,
          variant: "container",
        }}
      >
        Meal Plan
      </Typography>
      
    </Container>
  );
}
export default MealPlan;


 
  