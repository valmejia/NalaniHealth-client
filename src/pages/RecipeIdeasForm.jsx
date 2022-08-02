import * as React from "react";

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

function RecipeIdeasForm() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Container >
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

      <Box component="form" noValidate sx={{ mt: 3 }}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={2} sm={4} md={4}>
            <TextField
              fullWidth
              id="outlined-textarea"
              label="Name"
              placeholder="Name"
              multiline
              sx={{
                marginBottom: 2,
              }}
            />

            <FormControl fullWidth>
              <InputLabel id="demo-select-small">Type of food</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Type of food"
                onChange={handleChange}
              >
                <MenuItem value={10}>Breakfast</MenuItem>
                <MenuItem value={4}>Dinner</MenuItem>
                <MenuItem value={4}>Drink</MenuItem>
                <MenuItem value={30}>Lunch</MenuItem>
                <MenuItem value={20}>Snack</MenuItem>
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
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            //href="/welcomeHomePage"
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
