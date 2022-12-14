import React, { useState } from "react";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./Signup";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";
import {
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Alert,
  AlertTitle,
  Paper,
} from "@mui/material";

export default function LogIn({ authenticate }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const { username, password } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;

    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      username,
      password,
    };
    login(credentials).then((res) => {
      if (!res.status) {
        return setError({ message: "Invalid credentials" });
      }
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate("/WelcomeHomePage");
    });
  }

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
  return (
    <Container component="main">
      <CssBaseline />
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Grid>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h3">
              Log In
            </Typography>

            <Box
              component="form"
              onSubmit={handleFormSubmission}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                fullWidth
                id="input-username"
                label="User name"
                name="username"
                autoComplete="username"
                autoFocus
                value={username}
                onChange={handleInputChange}
                required
              />

              <TextField
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="input-password"
                autoComplete="current-password"
                value={password}
                onChange={handleInputChange}
                required
                minLength="8"
              />

              {error && (
                <Box>
                  <Alert variant="filled" severity="error">
                    <AlertTitle>
                      There was an error submiting the form:
                    </AlertTitle>
                    <strong>{error.message}</strong>
                  </Alert>
                </Box>
              )}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
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
        </Grid>

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
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage: `url(/ballenita.png)`,
              height: "600px",
              width: "600px",
            }}
            elevation={0}
          ></Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
