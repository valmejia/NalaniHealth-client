import React from "react";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const Navbar = (props) => {
  return (
    <nav>
     <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h4" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          <h4> Nalani Health</h4>
          </Typography>        
          <Button href="/auth/login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
          <Button href="/auth/signup" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </nav>  
  );
};

export default Navbar;
