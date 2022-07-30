import * as React from "react";

import {
  Grid,
  InputLabel,
  Button,
  Select,
  Typography,
  MenuItem,
  FormControl,
  Box,
  Container,
  TextField,
  CssBaseline,
  Toolbar,
} from "@mui/material";

function RecipeIdeasForm() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Container >
      
      <CssBaseline />

      <Typography
      variant="h3" 
      component="h6"
       
        sx={{
          marginTop: 4,
          variant: "container",
          marginBottom: 4,
        }}
      >
        Recipes
      </Typography>

      <Box
        sx={{
          margin: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <TextField
          id="outlined-textarea"
          label="Name"
          placeholder="Name"
          multiline
          sx={{
            marginBottom: 2,
          }}
        />

        <FormControl sx={{ minWidth: 205 }} size="small">
          <InputLabel id="demo-select-small">Type of food</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Breakfast</MenuItem>
            <MenuItem value={4}>Dinner</MenuItem>
            <MenuItem value={4}>Drink</MenuItem>
            <MenuItem value={30}>Lunch</MenuItem>
            <MenuItem value={20}>Snack</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box
        sx={{
          margin: 2,
        }}
      >
        <Typography
           variant="h4"
           component="h1"
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
          sx={{
            marginBottom: 2,
            marginBottom: 2,
            width: '400px',
            
          }}
        />
      </Box>

      <Box
        sx={{
          margin: 2,
        }}
      >
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
          sx={{
            marginBottom: 2,
            width: '400px',
            
          }}
        />
      </Box>
    </Container>
  );
}
export default RecipeIdeasForm;
