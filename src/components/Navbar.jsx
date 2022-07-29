import React from "react";
import {AppBar, Button, Toolbar, Typography} from '@mui/material'

const Navbar = (props) => {
  return (
    <nav>
     <AppBar
        position="static"
        elevation={0}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h4" noWrap sx={{ flexGrow: 1 }}>
           Nalani Health
          </Typography>        
          <Button href="/auth/login" variant="contained" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
          <Button href="/auth/signup" variant="contained"  sx={{ my: 1, mx: 1.5 }}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </nav>  
  );
};

export default Navbar;
