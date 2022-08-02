import { Container } from "@mui/system";
import {
  Box,
  Button,
  CssBaseline,
  Typography,
  IconButton,
  Toolbar,
  Avatar,
} from "@mui/material";

function UserHome(props) {
  const { user, handleLogout } = props;

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: 'flex',
        justifyContent: "center",
      }}
    >
      <CssBaseline />

      <Typography
        component="h1"
        variant="h4"
        noWrap
        sx={{
          variant: "container",
          flexGrow: 1,
          marginTop: 3,
          justifyContent: "center",
        }}
      >
        {user?.fullname}
      </Typography>
    </Container>
  );
}

export default UserHome;
