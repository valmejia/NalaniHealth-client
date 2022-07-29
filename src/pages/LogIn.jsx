// import React, { useState } from "react";
// import { login } from "../services/auth";
// import { useNavigate } from "react-router-dom";
// import "./Signup";
// import * as PATHS from "../utils/paths";
// import * as USER_HELPERS from "../utils/userToken";

// export default function LogIn({ authenticate }) {
//   const [form, setForm] = useState({
//     username: "",
//     password: "",
//   });
//   const { username, password } = form;
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   function handleInputChange(event) {
//     const { name, value } = event.target;

//     return setForm({ ...form, [name]: value });
//   }

//   function handleFormSubmission(event) {
//     event.preventDefault();
//     const credentials = {
//       username,
//       password,
//     };
//     login(credentials).then((res) => {
//       if (!res.status) {
//         return setError({ message: "Invalid credentials" });
//       }
//       USER_HELPERS.setUserToken(res.data.accessToken);
//       authenticate(res.data.user);
//       navigate(PATHS.HOMEPAGE);
//     });
//   }

//   return (
//     <div>
//       <h1>Log In</h1>
//       <form onSubmit={handleFormSubmission} className="signup__form">
//         <label htmlFor="input-username">Username</label>
//         <input
//           id="input-username"
//           type="text"
//           name="username"
//           placeholder="username"
//           value={username}
//           onChange={handleInputChange}
//           required
//         />

//         <label htmlFor="input-password">Password</label>
//         <input
//           id="input-password"
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={password}
//           onChange={handleInputChange}
//           required
//           minLength="8"
//         />

//         {error && (
//           <div className="error-block">
//             <p>There was an error submiting the form:</p>
//             <p>{error.message}</p>
//           </div>
//         )}

//         <button className="button__submit" type="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

import * as React from "react";
import {Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container } from "@mui/material";

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

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>

          <Grid container>
            <Grid item>
              <Link href="/auth/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
