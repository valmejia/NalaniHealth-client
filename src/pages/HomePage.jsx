import { CssBaseline, Grid } from "@mui/material";
import "../App.css";
import Navbar from "../components/Navbar";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

function HomePage() {
  return (
    <Grid>
      <CssBaseline />
      <Navbar />
      <Paper
        sx={{
          mb: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(/nalani.png)`,
        }}
      >
        <Grid container>
          <Grid>
            <Box
              sx={{
                p: {
                  xs: 1,
                  md: 8,
                },
                pr: { md: 0 },
              }}
            ></Box>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default HomePage;
