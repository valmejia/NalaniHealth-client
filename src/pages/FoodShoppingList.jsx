import {
  Grid,
  CssBaseline,
  Container,
  Typography,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material";
import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function FoodShoppingList(props) {
  const [fruitData, setFruitData] = useState([]);
  const [vegetablesData, setVegetablesData] = useState([]);
  const [grainData, setGrainData] = useState([]);
  const [dairyData, setDairyData] = useState([]);
  const [proteinData, setProteinData] = useState([]);
  const [alcoholData, setAlcoholData] = useState([]);
  const { foods } = props;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/food/foodShoppingList`)
      .then((data) => data.json())
      .then((food) => {
        const fruits = food.filter((f) => f.product === "fruit");
        setFruitData(fruits);

        const vegetables = food.filter((f) => f.product === "vegetables");
        setVegetablesData(vegetables);

        const grain = food.filter((f) => f.product === "grain");
        setGrainData(grain);

        const dairy = food.filter((f) => f.product === "dairy");
        setDairyData(dairy);

        const protein = food.filter((f) => f.product === "protein");
        setProteinData(protein);

        const alcohol = food.filter((f) => f.product === "alcohol");
        setAlcoholData(alcohol);
      })
      .catch(console.log);
  }, []);

  //////////////////////
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
          marginBottom: 3,
        }}
      >
        Food Shopping List
      </Typography>

      <Button
        href="/foodShopForm"
        variant="contained"
        sx={{ my: 1, mx: 1.5, mb: 3 }}
      >
        Add grocery item
      </Button>

      {/*/ fruits map */}
      <Grid sx={{ xs: 2, md: 3 }} columns={{ xs: 4 }}>
        <Typography>fruits</Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {fruitData.map((fruit) => {
            const labelId = `checkbox-list-label-${fruit}`;
            return (
              <Grid>
                <ListItem>
                  <ListItemButton
                    role={undefined}
                    onClick={handleToggle(fruit)}
                    dense
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(fruit) !== -1}
                        tabIndex={-1}
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={fruit.name} />
                  </ListItemButton>

                  <IconButton edge="end" sx={{ mr: 0.1 }}>
                    <DeleteIcon />
                  </IconButton>

                  <Link to={`/foodShopEdit/${fruit._id}`}>
                    <IconButton type="submit">
                      <CreateIcon />
                    </IconButton>
                  </Link>

                  <IconButton edge="end" sx={{ mr: 0.1 }}>
                    <FavoriteIcon />
                  </IconButton>
                </ListItem>
              </Grid>
            );
          })}
        </List>
      </Grid>

      {/*/ grain map */}
      <Grid sx={{ xs: 2, md: 3, mt: 6 }} columns={{ xs: 4 }}>
        <Typography>grain</Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {grainData.map((grain) => {
            const labelId = `checkbox-list-label-${grain}`;

            return (
              <Grid>
                <ListItem>
                  <ListItemButton
                    role={undefined}
                    onClick={handleToggle(grain)}
                    dense
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(grain) !== -1}
                        tabIndex={-1}
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={grain.name} />
                  </ListItemButton>

                  <IconButton edge="end" sx={{ mr: 0.1 }}>
                    <DeleteIcon />
                  </IconButton>

                  <Link to={`/foodShopEdit/${grain._id}`}>
                    <IconButton type="submit">
                      <CreateIcon />
                    </IconButton>
                  </Link>

                  <IconButton edge="end" sx={{ mr: 0.1 }}>
                    <FavoriteIcon />
                  </IconButton>
                </ListItem>
              </Grid>
            );
          })}
        </List>
      </Grid>

      {/*/ vegetables map */}
      <Grid sx={{ xs: 2, md: 3, mt: 6 }} columns={{ xs: 4 }}>
        <Typography>vegetables</Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {vegetablesData.map((vegetables) => {
            const labelId = `checkbox-list-label-${vegetables}`;
            return (
              <Grid>
                <ListItem>
                  <ListItemButton
                    role={undefined}
                    onClick={handleToggle(vegetables)}
                    dense
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(vegetables) !== -1}
                        tabIndex={-1}
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={vegetables.name} />
                  </ListItemButton>

                  <IconButton edge="end" sx={{ mr: 0.1 }}>
                    <DeleteIcon />
                  </IconButton>

                  <Link to={`/foodShopEdit/${vegetables._id}`}>
                    <IconButton type="submit">
                      <CreateIcon />
                    </IconButton>
                  </Link>

                  <IconButton edge="end" sx={{ mr: 0.1 }}>
                    <FavoriteIcon />
                  </IconButton>
                </ListItem>
              </Grid>
            );
          })}
        </List>
      </Grid>

      {/* dairy map */}
      <Grid sx={{ xs: 2, md: 3, mt: 6 }} columns={{ xs: 4 }}>
        <Typography>dairy </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {dairyData.map((dairy) => {
            const labelId = `checkbox-list-label-${dairy}`;

            return (
              <Grid>
                <ListItem>
                  <ListItemButton
                    role={undefined}
                    onClick={handleToggle(dairy)}
                    dense
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(dairy) !== -1}
                        tabIndex={-1}
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={dairy.name} />
                  </ListItemButton>

                  <IconButton edge="end" sx={{ mr: 0.1 }}>
                    <DeleteIcon />
                  </IconButton>

                  <Link to={`/foodShopEdit/${dairy._id}`}>
                    <IconButton type="submit">
                      <CreateIcon />
                    </IconButton>
                  </Link>

                  <IconButton edge="end" sx={{ mr: 0.1 }}>
                    <FavoriteIcon />
                  </IconButton>
                </ListItem>
              </Grid>
            );
          })}
        </List>
      </Grid>

      {/* protein map */}
      <Grid sx={{ xs: 2, md: 3, mt: 6 }} columns={{ xs: 4 }}>
        <Typography> protein </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {proteinData.map((protein) => {
            const labelId = `checkbox-list-label-${protein}`;

            return (
              <Grid>
                <ListItem>
                  <ListItemButton
                    role={undefined}
                    onClick={handleToggle(protein)}
                    dense
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(protein) !== -1}
                        tabIndex={-1}
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={protein.name} />
                  </ListItemButton>

                  <IconButton edge="end" sx={{ mr: 0.1 }}>
                    <DeleteIcon />
                  </IconButton>

                  <Link to={`/foodShopEdit/${protein._id}`}>
                    <IconButton type="submit">
                      <CreateIcon />
                    </IconButton>
                  </Link>

                  <IconButton edge="end" sx={{ mr: 0.1 }}>
                    <FavoriteIcon />
                  </IconButton>
                </ListItem>
              </Grid>
            );
          })}
        </List>
      </Grid>

      {/* alcohol map */}
      <Grid sx={{ xs: 2, md: 3, mt: 6 }} columns={{ xs: 4 }}>
        <Typography> alcohol </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {alcoholData.map((alcohol) => {
            const labelId = `checkbox-list-label-${alcohol}`;

            return (
              <Grid>
                <ListItem>
                  <ListItemButton
                    role={undefined}
                    onClick={handleToggle(alcohol)}
                    dense
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(alcohol) !== -1}
                        tabIndex={-1}
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={alcohol.name} />
                  </ListItemButton>

                  <IconButton edge="end" sx={{ mr: 0.1 }}>
                    <DeleteIcon />
                  </IconButton>

                  <Link to={`/foodShopEdit/${alcohol._id}`}>
                    <IconButton type="submit">
                      <CreateIcon />
                    </IconButton>
                  </Link>

                  <IconButton edge="end" sx={{ mr: 0.1 }}>
                    <FavoriteIcon />
                  </IconButton>
                </ListItem>
              </Grid>
            );
          })}
        </List>
      </Grid>
    </Container>
  );
}
export default FoodShoppingList;
