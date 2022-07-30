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
import {
  Grid,
  TextField,
  Button,
  CssBaseline,
  Typography,
} from "@mui/material";

function NutritionGoalTracker() {
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
        Nutrition Goal Tracker
      </Typography>

      <Grid>
        <TextField
          id="outlined-textarea"
          label="Goal"
          placeholder="Goal"
          multiline
          
        />

        <TextField
          id="outlined-textarea"
          label="Assessment"
          placeholder="Assessment"
          multiline
          sx={{  mx: 1.5 }} 
        />
      </Grid>
    </Container>
  );
}

export default NutritionGoalTracker;
