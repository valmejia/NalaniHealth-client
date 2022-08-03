import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';

import { 
  Grid, 
  CssBaseline, 
  TableBody, 
  TableCell, 
  TableContainer, 
  Table, 
  Box, 
  TableHead, 
  TablePagination, 
  TableRow, 
  TableSortLabel, 
  Toolbar,
  Typography,
  Paper,
  Checkbox,
  IconButton,
  Tooltip,
  FormControlLabel,
  Switch,
  Container
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';

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


 
  