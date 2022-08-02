import { CssBaseline, Grid, Button } from "@mui/material";
import "../App.css";
import Navbar from "../components/Navbar";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

function HomePage() {
  return (
    <Grid sx={{ margin: 0 }}>
      <CssBaseline />

      <Paper
        sx={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(/nalaniextends.png)`,
          height: "100vh",
        }}
        elevation={0}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent:"flex-end",
          }}
        >
          <Button
            href="/auth/login"
            variant="contained"
            sx={{ my: 1, mx: 1.5 }}
          >
            Login
          </Button>

          <Button
            href="/auth/signup"
            variant="contained"
            sx={{ my: 1, mx: 1.5 }}
            color="secondary"
          >
            Sign Up
          </Button>
          
        </Grid>
      </Paper>
    </Grid>
  );
}

export default HomePage;
