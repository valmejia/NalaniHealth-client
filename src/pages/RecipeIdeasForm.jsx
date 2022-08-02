import * as React from "react";
import { useEffect, useState } from "react";
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
import axios from "axios";

function RecipeIdeasForm() {
  // const [recipesIdeas, setRecipesIdeas] = useState([]);
  // const { recipes } = props;
  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_SERVER_URL}/recipeIdeasList`)
  //     .then((data) => data.json())
  //     .then((recipe) => {
  //       setRecipesIdeas(recipe);
  //     })
  //     .catch(console.log);
  // }, []);
  const [name, setName] = useState("");
  const [food, setFood] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = ("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name, food, description, ingredients, steps };
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/recipesIdeasForm`, requestBody)
      .then((response) => {
        setName("");
        setFood("");
        setDescription("");
        setIngredients("");
        setSteps("");
      })
      .catch((error) => console.log(error));
  };

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

      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={2} sm={4} md={4}>
            <TextField
              fullWidth
              id="outlined-textarea"
              label="Name"
              placeholder="Name"
              multiline
              value={name}
              sx={{
                marginBottom: 2,
              }}
              onChange={(e) => setName(e.target.value)}
            />

            <FormControl fullWidth>
              <InputLabel id="demo-select-small">Type of food</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={food}
                label="Type of food"
                onChange={(e) => setFood(e.target.value)}
              >
                <MenuItem value={"breakfast"}>Breakfast</MenuItem>
                <MenuItem value={"dinner"}>Dinner</MenuItem>
                <MenuItem value={"drink"}>Drink</MenuItem>
                <MenuItem value={"lunch"}> Lunch</MenuItem>
                <MenuItem value={"snack"}>Snack</MenuItem>
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
                onChange={(e) => setDescription(e.target.value)}
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
                onChange={(e) => setIngredients(e.target.value)}
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
                onChange={(e) => setSteps(e.target.value)}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Grid>
      </Box>
    </Container>
  );
}

export default RecipeIdeasForm;
