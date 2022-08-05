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

function FoodExpensesEdit() {
  const { id } = useParams();
  const [foodExpensesEdit, setFoodExpensesEdit] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/expenses/${id}`)
      .then((data) => data.json())
      .then((Data) => {
        setFoodExpensesEdit(Data);
      })
      .catch(console.log);
  }, []);

  function handleInputChange(event) {
    const { name, value } = event.target;

    return setFoodExpensesEdit({ ...foodExpensesEdit, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_SERVER_URL}/expenses/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(foodExpensesEdit),
    })
      .then((data) => data.json())
      .then((Data) => {
        setFoodExpensesEdit(Data);
        navigate("/foodExpensesTracker");
      })
      .catch(console.log);
  };
  return (
    <Grid sx={{margin: 4}}>
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
        Edit {foodExpensesEdit.name}
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 3 }}
      >
        <Grid>
          <Grid item xs={2} sm={4} md={4}>
            <TextField
              fullWidth
              id="outlined-textarea"
             
              placeholder="Name"
              multiline
              value={foodExpensesEdit.name}
              name="name"
              sx={{
                marginBottom: 2,
              }}
              onChange={handleInputChange}
            />

            <TextField
              type="number"
              fullWidth
              id="outlined-textarea"
              placeholder="Amount"
              multiline
              value={foodExpensesEdit.amount}
              name="amount"
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
                value={foodExpensesEdit.product}
                name="product"
                label="Type of food"
                onChange={handleInputChange}
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
    </Grid>
  );
}



export default FoodExpensesEdit;
