import { CssBaseline, Grid, Button, Typography, Box, Container, Link, Paper } from "@mui/material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link>Nalani Health</Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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
      />
     
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: "#cfceff"
        }}
      >
        <Container >
        <Button
            href="/contactUs"
          
            sx={{ 
            my: 1, 
            mx: 1.5,  
            display: 'flex',
            flexDirection: "row",
            justifyContent:"center"
          }}
          
          >
            <Typography component="h3" variant="h3">
              About & contact us 
            </Typography>
            
          </Button>
          <Button
            href="/thankyou"
          
            sx={{ 
            my: 1, 
            mx: 1.5,  
            display: 'flex',
            flexDirection: "row",
            justifyContent:"center"
          }}
          
          >
            <Typography component="h6" variant="h5">
            Gratefulness
            </Typography>
            
          </Button>
          
          <Copyright />
        </Container>
      </Box>
    </Grid>
  );
}

export default HomePage;
