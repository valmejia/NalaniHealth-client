import { Container } from "@mui/system";
import {
  Box,
  Button,
  CssBaseline,
  Typography,
  IconButton,
  AppBar,
  Toolbar,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function WelcomeHomePage() {
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
          Welcome user!
        </Typography>

        <Button
          href="/favorites"
          variant="contained"
          sx={{ my: 1, mx: 1.5 }}
          endIcon={<FavoriteIcon />}
        >
          Favorites
        </Button>
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
