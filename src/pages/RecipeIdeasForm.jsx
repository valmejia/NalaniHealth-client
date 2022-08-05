import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

function RecipeIdeasForm(props) {
  const navigate = useNavigate();
  const [recipesIdeas, setRecipesIdeas] = useState([]);
  const { recipes } = props;
  const [form, setForm] = useState({
    name: "",
    food: "",
    description: "",
    ingredients: "",
    steps: "",
  });
const {  name, food,description, ingredients, steps } = form;

  function handleInputChange(event) {
    const { name, value } = event.target;
    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();

    fetch(`${process.env.REACT_APP_SERVER_URL}/recipe/recipeIdeasForm` , {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
  })
      .then((data) => data.json())
      .then((recipe) => {
        setRecipesIdeas(recipe);
        navigate('/recipeIdeasList')
      })
      .catch(console.log);

  }

  

  return (
    <Container>
      <CssBaseline />

      <Box
        sx={{
          marginTop: 8,
        }}
      >
        <Typography component="h1" variant="h3">
          Recipes
        </Typography>
      </Box>

      <Box component="form" onSubmit={handleFormSubmission} noValidate sx={{ mt: 3 }}>
        <Grid spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={2} sm={4} md={4}>
            <TextField
              fullWidth
              id="outlined-textarea"
              label="Name"
              placeholder="Name"
              multiline
              value={name}
              name='name'
              sx={{
                marginBottom: 2,
              }}
              onChange={handleInputChange}
            />

            <FormControl fullWidth>
              <InputLabel id="demo-select-small">Type of food</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={food}
                name='food'
                label="Type of food"
                onChange={handleInputChange}
              >
                <MenuItem value={"breakfast"}>Breakfast</MenuItem>
                <MenuItem value={"dinner"}>Dinner</MenuItem>
                <MenuItem value={"drink"}>Drink</MenuItem>
                <MenuItem value={"lunch"}> Lunch</MenuItem>
                <MenuItem value={"snack"}>Snack</MenuItem>
                <MenuItem value={"dessert"}> Dessert</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={2} sm={4} md={4}>
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  marginTop: 4,
                  variant: "container",
                  marginBottom: 4,
                }}
              >
                Description
              </Typography>

              <TextField
                id="outlined-textarea"
                label="Description"
                placeholder="Description"
                multiline
                fullWidth
                value={description}
                name='description'
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  marginTop: 4,
                  variant: "container",
                  marginBottom: 4,
                }}
              >
                Ingredients
              </Typography>

              <TextField
                id="outlined-textarea"
                label="Ingredients"
                placeholder="Ingredients"
                multiline
                fullWidth
                value={ingredients}
                name='ingredients'
                onChange={handleInputChange}
              />
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  marginTop: 4,
                  variant: "container",
                  marginBottom: 4,
                }}
              >
                Steps
              </Typography>

              <TextField
                id="outlined-textarea"
                label="Steps"
                placeholder="Steps"
                multiline
                fullWidth
                value={steps}
                name='steps'
                onChange={handleInputChange}
              />
            </Grid>
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
      </Box>
    </Container>
  );
}

export default RecipeIdeasForm;
