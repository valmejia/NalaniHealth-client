import * as React from "react";
import {
  CssBaseline,
  Typography,
  Container,
  Button,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function MealPlan(props) {
  const [mealPlan, setMealPlan] = useState([]);
  const { MealPlan } = props;
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/meal/mealPlan`)
      .then((data) => data.json())
      .then((mealPlan) => {
        setMealPlan(mealPlan);
      })
      .catch(console.log);
  }, []);

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [recipeList, setRecipeList] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/recipe/recipeIdeasList`)
      .then((data) => data.json())
      .then((recipeList) => {
        setRecipeList(recipeList);
      })
      .catch(console.log);
  }, []);

  const deleteProduct = function (id) {
    fetch(`${process.env.REACT_APP_SERVER_URL}/meal/delete/${id}`, {
      method: "delete",
    })
      .then((data) => data.json())
      .then((mealPlan) => {
        setMealPlan(mealPlan.filter((g) => g._id !== id));
      })
      .catch(console.log);
  };

  return (
    <Grid sx={{ margin: 5 }}>
      <CssBaseline />
      <Typography
        variant="h4"
        component="h1"
        sx={{
          mb: 4,
          variant: "container",
        }}
      >
        Meal Plan
      </Typography>

      <Button href="/mealPlanForm" variant="contained" sx={{ my: 1, mx: 2 }}>
        Add Plan
      </Button>

      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {mealPlan.map((m) => {
          return (
            <Card
              sx={{ maxWidth: 300, minWidth: 300, margin: 3 }}
              key={m._id}
            >
              <CardHeader title={m.food} />

              <CardContent>
          
           <Typography variant="body2" color="text.secondary" value={m._id}> {m.name} </Typography>
                
                  
              
       
               
                <Typography variant="body2" color="text.secondary">
                  {m.days}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {m.date}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton>
                  <FavoriteIcon />
                </IconButton>

                <IconButton
                      edge="end"
                      sx={{ mr: 0.1 }}
                      onClick={() => deleteProduct(m._id)}
                    >
                      <DeleteIcon />
                    </IconButton>

                <Link to={`/mealPlanEdit/${m._id}`}>
                  <IconButton type="submit">
                    <CreateIcon />
                  </IconButton>
                </Link>

                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Assessment:</Typography>
                  <Typography paragraph>{m.assessment}</Typography>
                </CardContent>
              </Collapse>
            </Card>
          );
        })}
      </Grid>
    </Grid>
  );
}
export default MealPlan;
