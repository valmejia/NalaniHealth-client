import React, { useState } from "react";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";

import {
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Paper,
} from "@mui/material";

import "./auth.css";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";

// export default function Signup({ authenticate }) {
//   const [form, setForm] = useState({
//     username: "",
//     password: "",
//     fullname: "",
//     email: "",

//   });
//   const { username, password, username, fullname } = form;
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
//       email, 
//       fullname,
//     };
//     signup(credentials).then((res) => {
//       if (!res.status) {
//         // unsuccessful signup
//         console.error("Signup was unsuccessful: ", res);
//         return setError({
//           message: "Signup was unsuccessful! Please check the console.",
//         });
//       }
//       // successful signup
//       USER_HELPERS.setUserToken(res.data.accessToken);
//       authenticate(res.data.user);
//       navigate(PATHS.HOMEPAGE);
//     });
//   }

//   return (
//     <div>
//       <h1>Sign Up</h1>
//       <form onSubmit={handleFormSubmission} className="auth__form">
//         <label htmlFor="input-username">Username</label>
//         <input
//           id="input-username"
//           type="text"
//           name="username"
//           placeholder="Text"
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

export default function SignUp() {
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
        <Typography component="h1" variant="h3">
          Sign up
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="fullName"
                required
                fullWidth
                id="fullName"
                label="Full Name"
                autoFocus
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="User Name"
                name="username"
                autoComplete="username"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/auth/login" variant="body2">
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Box>
      
     
    </Container>
  );
}
