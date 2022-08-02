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
  Paper
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";


function WelcomeHomePage(props) {
  const {user, handleLogout} = props;
  return (
    <Container>
      <CssBaseline />
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography
          component="h1"
          variant="h4"
          noWrap
          sx={{
            variant: "container",
            flexGrow: 1,
          }}
        >
          Welcome {user?.fullname} 
        </Typography>

        <Button
          href="/favorites"
          variant="contained"
          sx={{ my: 1, mx: 1.5 }}
          endIcon={<FavoriteIcon />}
        >
          Favorites
        </Button>

        <Button 
        variant="contained"
        sx={{ my: 1, mx: 1.5 }}
        onClick={handleLogout}
        >
          LogOut
        </Button>

        <IconButton  href="/UserHome" sx={{ my: 1, mx: 1.5 }}>
          <Avatar  src="/broken-image.jpg" />
        </IconButton>

      </Toolbar>

      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          variant: "container",
        }}
      >

        <Button
          href="/recipeIdeasList"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Recipe Ideas
        </Button>

        <Button
          href="/foodShoppingList"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Food Shopping List
        </Button>

        <Button href="/mealPlan" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Meal Plan
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          variant: "container",
        }}
      >
        <Button
          href="/foodExpensesTracker"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Food Expenses Tracker
        </Button>

        <Button
          href="/nutritionGoalTracker"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Nutrition Goal Tracker
        </Button>

        <Button
          href="/inspirationBoard"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Inspiration board
        </Button>
      </Box>
     
    </Container>
  );
}

export default WelcomeHomePage;
