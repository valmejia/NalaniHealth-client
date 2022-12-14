import { Link } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import { Avatar, Grid, Fab, Typography, Toolbar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";

function Navbar(props) {
  const { user, handleLogout } = props;


  return (
    <React.Fragment>
      <Toolbar sx={{ backgroundColor: "#cfceff" }}>
        <Grid
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          {!user && (
            <>
              <Link to={"/"}>
                <Fab sx={{ margin: 1 }} color="secondary">
                  <HomeIcon />
                </Fab>
              </Link>
              <Grid>
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
            </>
          )}

          {user && (
            <>
              <Link to={"/welcomeHomePage"}>
                <Fab sx={{ margin: 1 }} color="secondary">
                  <HomeIcon />
                </Fab>
              </Link>

              <Button
                variant="contained"
                sx={{ my: 1, mx: 1.5 }}
                onClick={handleLogout}
              >
                LogOut
              </Button>
            </>
          )}
        </Grid>
      </Toolbar>
    </React.Fragment>
  );
}

export default Navbar;
