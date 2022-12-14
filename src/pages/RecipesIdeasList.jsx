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

function RecipeIdeasList(props) {
  const [recipeList, setRecipeList] = useState([]);
  const { Recipes } = props;
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/recipe/recipeIdeasList`)
      .then((data) => data.json())
      .then((recipeList) => {
        setRecipeList(recipeList);
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

  const deleteRecipe = function (id){
    fetch(`${process.env.REACT_APP_SERVER_URL}/recipe/delete/${id}`, {method: 'delete'}) 
      .then((data) => data.json())
      .then((recipeList) => {
      setRecipeList(recipeList);
      })
      .catch(console.log);
  }

  return (
    <Container>
      <CssBaseline />
      <Typography
        variant="h4"
        component="h1"
        sx={{
          marginTop: 4,
          variant: "container",
        }}
      >
        Recipes Ideas List
      </Typography>

      <Button
        href="/recipeIdeasForm"
        variant="contained"
        sx={{ my: 1, mx: 1.5, mt: 4 }}
      >
        Add Recipe
      </Button>
      <Grid sx={{display: "flex", justifyContent: 'space-evenly', flexWrap: "wrap", }}>
        {recipeList.map((rec) => {
          return (
            
              <Card
                sx={{ maxWidth: 300, minWidth: 300, margin: 3 }}
                key={rec._id}
              >
                <CardHeader title={rec.name} />

                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {rec.description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton>
                    <FavoriteIcon />
                  </IconButton>


                  <IconButton
                  onClick={()=> deleteRecipe(rec._id)}
                  >

                    <DeleteIcon />
                  </IconButton>

                  <Link to={`/recipeEdit/${rec._id}`}>
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
                    <Typography paragraph>Ingredients:</Typography>
                    <Typography paragraph>{rec.ingredients}</Typography>
                    <Typography paragraph>Steps:</Typography>
                    <Typography paragraph>{rec.steps} </Typography>
                  </CardContent>
                </Collapse>
              </Card>
           
          );
        })}
       </Grid>
    </Container>
  );
}

export default RecipeIdeasList;
