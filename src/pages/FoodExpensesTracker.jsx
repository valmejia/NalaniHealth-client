import "../App.css";

import TextField from "@mui/material/TextField";
import HelperText from "../components/Helpertext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";

function FoodExpensesTracker() {
  return (
    <Container>
      <Grid>
        <h1> Food Expenses Tracker </h1>
        <Grid>
          <HelperText />
          <TextField
            id="outlined-textarea"
            label="Budget"
            placeholder="Budget"
            multiline
          />

          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Add
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FoodExpensesTracker;
