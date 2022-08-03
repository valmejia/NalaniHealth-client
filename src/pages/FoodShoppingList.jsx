import {
  Grid,
  CssBaseline,
  Container,
  Typography,
} from "@mui/material";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

function FoodShoppingList() {
  const [checked, setChecked] = React.useState([0]);
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Container>
      <CssBaseline />

      <Typography
        component="h1"
        variant="h4"
        sx={{
          marginTop: 4,
          variant: "container",
          marginBottom: 4,
        }}
      >
        Food Shopping List
      </Typography>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4,}}>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,].map(
            (value) => {
              const labelId = `checkbox-list-label-${value}`;

              return (
                
                <Grid>
                <ListItem
                  key={value}
                  secondaryAction={
                    <IconButton edge="end">
                      <FavoriteIcon />
                    </IconButton>
                  }
                  disablePadding
                >
                  <ListItemButton
                    role={undefined}
                    onClick={handleToggle(value)}
                    dense
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      id={labelId}
                      primary={`Line item ${value + 1}`}
                    />
                  </ListItemButton>
                </ListItem>
                </Grid>
              );
            }
          )}
        </List>
      </Grid>

    </Container>
  );
}
export default FoodShoppingList;
