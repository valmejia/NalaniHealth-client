import { CssBaseline, Grid } from "@mui/material";
import "../App.css";
import Navbar from "../components/Navbar";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

function HomePage() {

  return (
    
    <Grid>
      <CssBaseline />
      <Navbar />
      <Paper
      sx={{
      
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        
        backgroundImage: `url(/nalani.png)`,
        
      }}
    >
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
              
            }}
          >
          </Box>
        </Grid>
      </Grid>
    </Paper>
    </Grid>
  );
}

export default HomePage;







  
   




      
     