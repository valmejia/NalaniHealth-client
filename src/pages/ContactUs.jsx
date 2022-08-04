import { CssBaseline, Grid, Typography, Paper, Fab } from "@mui/material";
import { Container } from "@mui/system";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

function ContacUS() {
  return (
    <Container>
      <CssBaseline />
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h3" gutterBottom>
          Contact us
        </Typography>

        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: 4,
          }}
        >
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: 5,
            }}
          >
            <Paper
              sx={{
                borderRadius: "80%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundImage: `url(/val.jpeg)`,
                height: "400px",
                width: "400px",
              }}
              elevation={0}
            ></Paper>
          </Grid>

          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: 5,
            }}
          >
            <Typography component="h5" variant="h4" gutterBottom>
              Valeria Mejía
            </Typography>

            <Typography paragraph variant="h6">
              Full stack web developer.
            </Typography>

            <Typography paragraph variant="h6">
              Artist: actress, model, visual arts.
            </Typography>
            <Grid>
              <Grid>
                <Fab sx={{ margin: 1 }} color="secondary" aria-label="add" href='https://www.instagram.com/val_mejiag/'>
                  <InstagramIcon />
                </Fab>
                <Fab sx={{ margin: 1 }} color="secondary" aria-label="add" href='https://www.linkedin.com/in/valeriamej%C3%ADa/'>
                  <LinkedInIcon />
                </Fab>

                <Fab
                  sx={{ margin: 1 }}
                  color="secondary"
                  aria-label="add"
                  href="https://twitter.com/val_mejiag"
                >
                  <TwitterIcon />
                </Fab>

                <Fab
          color="secondary"
                  sx={{ margin: 1 }}
                  aria-label="add"
                  href="https://github.com/valmejia"
                >
                  <GitHubIcon />
                </Fab>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid>
          <Grid>
            <Typography component="h1" variant="h3" gutterBottom>
              About NalaniHealth
            </Typography>
            <Typography paragraph gutterBottom>
            Nalani Health is a guide to organize the basic activities of your day to day.
            </Typography>
            <Typography paragraph gutterBottom>
            It helps the user to plan through daily, weekly, monthly or annual goals, the different activities carried out.
            </Typography>
            <Typography paragraph gutterBottom>
            Maximize the efficiency of the work-flow and minimize the pracastination.
            </Typography>
           
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ContacUS;
