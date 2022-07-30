import HelperText from "../components/Helpertext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Grid, Container, TextField, Button, CssBaseline, Typography} from "@mui/material";


function FoodExpensesTracker() {
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
          />

          <Button href="#" variant="contained" sx={{ my: 1, mx: 1.5 }}>
            Add
          </Button>
       
      
    </Container>
  );
}

export default FoodExpensesTracker;
