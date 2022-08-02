import { CssBaseline, Typography, Container, Button } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

function RecipeIdeasList(props) {
  const [recipesIdeas, setRecipesIdeas] = useState([]);
  const { recipes } = props;
  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_SERVER_URL}/recipeIdeasList`)
  //     .then((data) => data.json())
  //     .then((recipe) => {
  //       setRecipesIdeas(recipe);
  //     })
  //     .catch(console.log);
  // }, []);

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
        sx={{ my: 1, mx: 1.5 }}
      >
        Add Recipe
      </Button>

      {/* {recipesIdeas.map((recipes) => {
        return (
          <p key={recipes._id}>
            {recipes.name} {recipes.description}
          </p>
        );
      })} */}
    </Container>
  );
}

export default RecipeIdeasList;
