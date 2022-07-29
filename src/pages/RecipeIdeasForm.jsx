import * as React from "react";
import { Grid, InputLabel, Button, Select, Typography, MenuItem, FormControl, Box, Container, TextField} from "@mui/material";




function RecipeIdeasForm() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Container>
      <Grid>
      <Typography variant="h4" >
           Recipes
        </Typography> 
        <Grid>
          <TextField
            id="outlined-textarea"
            label="Name"
            placeholder="Name"
            multiline
          />
          <Box sx={{ maxWidth: 205 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label"> Food </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
        
        <Grid>
          <Button href="/auth/login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Ingredients
          </Button>
        </Grid>
        <Grid>
          <Button href="/auth/login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Steps
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
export default RecipeIdeasForm;
