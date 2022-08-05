import { Container } from "@mui/system";
import {
  Box,
  Button,
  CssBaseline,
  Typography,
  IconButton,
  Toolbar,
  Avatar,
  Grid,
  Paper,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

function WelcomeHomePage(props) {
  const { user, handleLogout } = props;
  return (
    <Grid 
    sx={{
      margin: 0,
    }}
    > 
      <CssBaseline />

      <Paper
        sx={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(/foodback.png)`,
          height: "100vh",
          margin: 0
        }}
        elevation={0}
      >
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography component="h1" variant="h3" noWrap sx={{mt: 20}}>
            Welcome {user?.fullname}!
          </Typography>
       
          <Grid
            sx={{
              margin: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Button
              href="/recipeIdeasList"
              variant="contained"
              size="large"
              sx={{ mt: 3, mb: 2 }}
            >
              Recipe Ideas
            </Button>

            <Button
              href="/foodShoppingList"
              variant="contained"
              size="large"
              sx={{ mt: 3, mb: 2 }}
            >
              Food Shopping List
            </Button>

            <Button
              href="/mealPlan"
              variant="contained"
              size="large"
              sx={{ mt: 3, mb: 2 }}
            >
              Meal Plan
            </Button>
        
            <Button
              href="/foodExpensesTracker"
              variant="contained"
              size="large"
              sx={{ mt: 3, mb: 2 }}
            >
              Food Expenses Tracker
            </Button>

            <Button
              href="/toDoToday"
              variant="contained"
              size="large"
              sx={{ mt: 3, mb: 2 }}
            >
              To-do today
            </Button>

            
          
          </Grid>
        </Grid>
      </Paper>

    </Grid>
  );
}

export default WelcomeHomePage;
