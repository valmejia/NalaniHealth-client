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
            margin: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography component="h1" variant="h4" noWrap>
            Welcome {user?.fullname}!
          </Typography>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
          </Grid>

          <Grid
            sx={{
              margin: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Button
              href="/foodExpensesTracker"
              variant="contained"
              size="large"
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
              size="large"
              sx={{ mt: 3, mb: 2 }}
            >
              Inspiration board
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Button
        variant="contained"
        sx={{ my: 1, mx: 1.5 }}
        onClick={handleLogout}
      >
        LogOut
      </Button>
    </Grid>
  );
}

export default WelcomeHomePage;
