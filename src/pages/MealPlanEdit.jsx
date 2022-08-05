import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  InputLabel,
  Select,
  Typography,
  MenuItem,
  FormControl,
  Box,
  Container,
  TextField,
  CssBaseline,
  Button,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import HelperText from "../components/Helpertext";

function MealPlanEdit() {
  const { id } = useParams();
  const [mealPlan, setMealPlan] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/meal/${id}`)
      .then((data) => data.json())
      .then((Data) => {
        console.log(Data);
       setMealPlan(Data);
      })
      .catch(console.log);
  }, []);

  function handleInputChange(event) {
    const { name, value } = event.target;

    return setMealPlan({ ...mealPlan, [name]: value });
  }

  const [recipeList, setRecipeList] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/recipe/recipeIdeasList`)
      .then((data) => data.json())
      .then((recipeList) => {
        setRecipeList(recipeList);
      })
      .catch(console.log);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_SERVER_URL}/meal/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mealPlan),
    })
      .then((data) => data.json())
      .then((Data) => {
        setMealPlan(Data);
        navigate("/mealPlan");
      })
      .catch(console.log);
  };
  return (
    <Grid sx={{margin: 4}}>
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
        onSubmit={handleSubmit} noValidate
        sx={{ mt: 3 }}
      >
        <HelperText  fullWidth value={mealPlan.date} name='date'  onChange={((newValue) => setMealPlan({...mealPlan, date: newValue}))}/>

        <Grid spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={2} sm={4} md={4}>
          <FormControl
              fullWidth
              sx={{
                marginBottom: 2,
              }}
            >
              <InputLabel id="demo-select-small">Recipe</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={mealPlan.recipe}
                name='recipe'
                label="recipe"
                onChange={handleInputChange}
              >
                {recipeList.map((r)=> {
                  return <MenuItem value={r._id}>{r.name}</MenuItem>
                })}
                
              </Select>
            </FormControl>

            <TextField
              fullWidth
              id="outlined-textarea"
              label="Assessment"
              placeholder="Assessment"
              multiline
              value={mealPlan.assessment}
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
                value={mealPlan.days}
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
                value={mealPlan.food}
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

export default MealPlanEdit;
