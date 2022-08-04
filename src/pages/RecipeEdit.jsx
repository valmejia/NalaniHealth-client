import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
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

function RecipeEdit() {
    
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});
    const navigate = useNavigate();
  
    useEffect(() => {
       fetch(`http://localhost:5005/api/recipe/${id}`)
         .then((data) => data.json())
         .then((recipeData) => {
          console.log(recipeData)
           setRecipe(recipeData);
         })
         .catch(console.log);
    }, []);
  
    function handleInputChange(event) {
      const { name, value } = event.target;
  
      return setRecipe({ ...recipe, [name]: value });
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch(`http://localhost:5005/api/recipe/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipe),
      })
        .then((data) => data.json())
        .then((recipeData) => {
          setRecipe(recipeData);
          navigate('/recipeIdeasList')
        })
        .catch(console.log);
    };
  
  return (
    <Container>
      <CssBaseline />

      <Box
        sx={{
          marginTop: 8,
        }}
      >
       
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 3 }}
      >
         <Typography component="h1" variant="h3" >
          Edit {recipe.name}
        </Typography>
        <Grid spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={2} sm={4} md={4}>
            <TextField
              fullWidth
              id="outlined-textarea"
              
              placeholder="Name"
              multiline
              value={recipe.name}
              name="name"
              sx={{
                marginBottom: 2,
                marginTop: 2
              }}
              onChange={handleInputChange}
            />

            <FormControl fullWidth>
              <InputLabel id="demo-select-small">Type of food</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={recipe.food}
                name="food"
               
                onChange={handleInputChange}
              >
                <MenuItem value={"breakfast"}>Breakfast</MenuItem>
                <MenuItem value={"dinner"}>Dinner</MenuItem>
                <MenuItem value={"drink"}>Drink</MenuItem>
                <MenuItem value={"lunch"}>Lunch</MenuItem>
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
            
                placeholder="Description"
                multiline
                fullWidth
                value={recipe.description}
                name="description"
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
                
                placeholder="Ingredients"
                multiline
                fullWidth
                value={recipe.ingredients}
                name="ingredients"
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
               
                placeholder="Steps"
                multiline
                fullWidth
                value={recipe.steps}
                name="steps"
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

export default RecipeEdit;
