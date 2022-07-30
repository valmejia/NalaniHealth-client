import TextField from "@mui/material/TextField";
import HelperText from "../components/Helpertext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import { Grid, CssBaseline, Box, Container, Paper, TableRow, TableHead, Typography} from "@mui/material";

function FoodShoppingList(){
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
        Food Shopping List
      </Typography>

        
    </Container>
 )
}
export default FoodShoppingList;