import { CssBaseline, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

function Thankyou() {
  return (
    <Container sx={{ mt: 5 }}>
      <CssBaseline />

      <Typography component="h1" variant="h1" gutterBottom>
        Thanks to:
      </Typography>

      <Typography fontSize="3rem" variant="h1" gutterBottom paragraph>
        To my teachers, Harland Lohora y Yani padilla for being part of this
        achievement.
      </Typography>

      <Typography fontSize="3rem" variant="h1" gutterBottom paragraph>
        To my classmates, Kike Orta, Fer Guadarrama, Horacio Leon, Moy Vargas,
        Sandy Lopez, Sam Magaña, for all their love, support and accompaniment,
        not only in this last project, but in these tempestuous and significant,
        but above all full of knowledge 9 weeks, in which we spend 15 hours
        together.
      </Typography>

      <Typography fontSize="3rem" variant="h1" gutterBottom paragraph>
        To my parents and brothers for all their support and unconditional love.
      </Typography>

      <Typography fontSize="3rem" variant="h1" gutterBottom paragraph>
        I want to especially thanks to Alexis Leon and Gil Lopez.
      </Typography>

      <Typography fontSize="3rem" variant="h1" gutterBottom paragraph>
        And finally to my friends and family who were present on this trip
      </Typography>

      <Grid sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Typography variant="h1" gutterBottom paragraph>
          Love, Val Mejía ❤️✨
        </Typography>
      </Grid>

    </Container>
  );
}

export default Thankyou;
