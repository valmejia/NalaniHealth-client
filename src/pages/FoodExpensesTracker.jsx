import * as React from "react";
import HelperText from "../components/Helpertext";
import {
  Grid,
  Container,
  TextField,
  Button,
  CssBaseline,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useEffect, useState } from "react";

function FoodExpensesTracker(props) {
  const [amounts, setAmounts] = useState([]);
  const { amoounts } = props;
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/expenses/foodExpensesTracker`)
      .then((data) => data.json())
      .then((amount) => {
        setAmounts(amount);
      })
      .catch(console.log);
  }, []);

  return (
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
        Food Expenses Tracker
      </Typography>

      <HelperText />

      <TextField
        id="outlined-textarea"
        label="Budget"
        placeholder="Budget"
        multiline
        sx={{
          ml: 2,
        }}
      />

      <Button
        href="/foodExpensesForm"
        variant="contained"
        sx={{ my: 1, mx: 2 }}
      >
        Add product
      </Button>
      <Grid sx={{ mb: 5, mt: 3}}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell> Name </TableCell>
                <TableCell align="right">Type of food</TableCell>
                <TableCell align="right">Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {amounts.map((row) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>

                  <TableCell align="right">{row.product}</TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Container>
  );
}

export default FoodExpensesTracker;

////////////////////////
