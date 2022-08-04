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

function FoodExpensesForm(){
    return(
        <Container>
      <CssBaseline />

      <Typography
        component="h1"
        variant="h4"
        sx={{
          marginTop: 4,
          variant: "container",
          marginBottom: 4,
        }}
      >
        Add product
      </Typography>

      <Box
        component="form"
        //onSubmit={handleFormSubmission}
        noValidate
        sx={{ mt: 3 }}
      >
        <Grid >
          <Grid item xs={2} sm={4} md={4}>
            <TextField
              fullWidth
              id="outlined-textarea"
              label="Name"
              placeholder="Name"
              multiline
              //value={name}
              //name="name"
              sx={{
                marginBottom: 2,
              }}
              //onChange={handleInputChange}
            />
         
            <TextField
              type='number'
              fullWidth
              id="outlined-textarea"
              label="Amount"
              placeholder="Amount"
              multiline
             // value={amount}
             // name="amount"
              sx={{
                marginBottom: 2,
              }}
             // onChange={handleInputChange}
            />

            <FormControl fullWidth>
              <InputLabel id="demo-select-small">Type of food</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
               // value={product}
               // name="product"
                label="Type of food"
                //onChange={handleInputChange}
              >
                <MenuItem value={"fruit"}>Fruits</MenuItem>
                <MenuItem value={"vegetables"}>Vegetables</MenuItem>
                <MenuItem value={"grain"}>Grain</MenuItem>
                <MenuItem value={"dairy"}>Dairy</MenuItem>
                <MenuItem value={"protein"}>Protein</MenuItem>
                <MenuItem value={"alcohol"}> Alcohol</MenuItem>
         
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
      </Box>
    </Container>
    );
}

export default FoodExpensesForm;