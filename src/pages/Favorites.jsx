import { CssBaseline, Typography,Container } from "@mui/material";
function Favorites() {
  return (
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
        Favorites
      </Typography>
    </Container>
  );
}

export default Favorites;
