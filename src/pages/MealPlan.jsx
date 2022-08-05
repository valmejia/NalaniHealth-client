import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";

import {
  CssBaseline,
  Typography,
  Container,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import HelperText from "../components/Helpertext";

function MealPlan() {
  return (
    <Grid sx={{ margin: 5,}}>
      <CssBaseline />
      <Typography
        variant="h4"
        component="h1"
        sx={{
          mb: 4,
          variant: "container",
        }}
      >
        Meal Plan
      </Typography>

      <Button href="/mealPlanForm" variant="contained" sx={{ my: 1, mx: 2 }}>
        Add Plan
      </Button>
    </Grid>
  );
}
export default MealPlan;
