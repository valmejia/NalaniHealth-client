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
import { Grid, Typography, CssBaseline } from "@mui/material";

function MealPlan() {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <Container>
      <CssBaseline />
      <Typography
        variant="h4"
        component="h1"
        sx={{
          marginTop: 4,
          variant: "container",
        }}
      >
        Meal Plan
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <Grid>
          <TextField
            id="outlined-textarea"
            label="Assessment"
            placeholder="Assessment:"
            multiline
          />
          <HelperText />
        </Grid>
      </Box>

      <TableContainer component={Paper}>
        <Table
          sx={{
            
            marginTop: 4,
            variant: "container",
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center"></TableCell>
              <TableCell align="center">Sun</TableCell>
              <TableCell align="right">Mon</TableCell>
              <TableCell align="right">Tue</TableCell>
              <TableCell align="right">Wed</TableCell>
              <TableCell align="right">Thu</TableCell>
              <TableCell align="right">Fri</TableCell>
              <TableCell align="right">Sat</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>

                <TableCell align="right">
                  <TextField />
                </TableCell>

                <TableCell align="right">
                  <TextField />
                </TableCell>

                <TableCell align="right">
                  <TextField />
                </TableCell>

                <TableCell align="right">
                  <TextField />
                </TableCell>

                <TableCell align="right">
                  <TextField />
                </TableCell>

                <TableCell align="right">
                  <TextField />
                </TableCell>

                <TableCell align="right">
                  <TextField />
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
export default MealPlan;
