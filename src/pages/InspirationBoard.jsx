import { Container, Typography, CssBaseline } from "@mui/material";

function InspirationBoard() {
  return (
    <Container>
        <CssBaseline/>
      <Typography
        component="h1"
        variant="h4"
        sx={{
          marginTop: 4,
          variant: "container",
        }}
      >
        Inspiration Board
      </Typography>
    </Container>
  );
}

export default InspirationBoard;
