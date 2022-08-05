import {
  CssBaseline,
  Grid,
  Typography,
  Box,
  TextField,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
} from "@mui/material";
import HelperText from "../components/Helpertext";
import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MealPlanForm(props) {
    const navigate = useNavigate();
    const [mealPlan, setMealPlan] = useState([]);
    const { recipes } = props;
    const [form, setForm] = useState({
      recipe: "",
      days: "",
      assessment: "",
      date: "",
      food: "",
    });
  const { recipe, days, assessment, date, food } = form;
  
    function handleInputChange(event) {
      const { name, value } = event.target;
      return setForm({ ...form, [name]: value });
    }
  
    function handleFormSubmission(event) {
      event.preventDefault();
  
      fetch(`${process.env.REACT_APP_SERVER_URL}/meal/mealPlanForm` , {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
    })
        .then((data) => data.json())
        .then((meal) => {
          setMealPlan(meal);
          navigate('/mealPlan')
        })
        .catch(console.log);
  
    }

  return (
    <Grid
      sx={{
        margin: 4,
      }}
    >
      <CssBaseline />

      <Box
        sx={{
          marginTop: 8,
        }}
      >
        <Typography component="h1" variant="h3">
          Meal Plan
        </Typography>
      </Box>

      <Grid
        component="form"
        onSubmit={handleFormSubmission} noValidate
        sx={{ mt: 3 }}
      >
        <HelperText  fullWidth value={date} name= 'date'  onChange={handleInputChange}/>

        <Grid spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={2} sm={4} md={4}>
            <TextField
              fullWidth
              id="outlined-textarea"
              label="Name"
              placeholder="Name"
              multiline
              value={recipe}
             name='recipe'
              sx={{
                marginBottom: 2,
              }}
              onChange={handleInputChange}
            />

            <TextField
              fullWidth
              id="outlined-textarea"
              label="Assessment"
              placeholder="Assessment"
              multiline
              value={assessment}
              name='assessment'
              sx={{
                marginBottom: 2,
              }}
              onChange={handleInputChange}
            />

            <FormControl
              fullWidth
              sx={{
                marginBottom: 2,
              }}
            >
              <InputLabel id="demo-select-small">Day</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={days}
                name='days'
                label="day"
                onChange={handleInputChange}
              >
                <MenuItem value={"sunday"}>Sunday</MenuItem>
                <MenuItem value={"monday"}>Monday</MenuItem>
                <MenuItem value={"tuesday"}>Tuesday</MenuItem>
                <MenuItem value={"wednesday"}>Wednesday</MenuItem>
                <MenuItem value={"thursday"}> Thursday</MenuItem>
                <MenuItem value={"friday"}>Friday</MenuItem>
                <MenuItem value={"saturday"}> Saturday</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={2} sm={4} md={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-select-small">Type of food</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={food}
                name="food"
                label="Type of food"
                onChange={handleInputChange}
              >
                <MenuItem value={"breakfast"}>Breakfast</MenuItem>
                <MenuItem value={"dinner"}>Dinner</MenuItem>
                <MenuItem value={"lunch"}> Lunch</MenuItem>
                <MenuItem value={"snack"}>Snack</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
          
        </Grid>
      </Grid>
    </Grid>
  );

}


export default MealPlanForm;