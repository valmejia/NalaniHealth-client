import { CssBaseline, Typography, Container, Button } from "@mui/material";
import { useState, useEffect } from "react";
import Link from "@mui/material";

function RecipeIdeasList(props) {
  

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
          <Link to={`/recipesIdeasList/${recipes._id}`} key={recipes._id}>
            {recipes.name} {recipes.description}
          </Link>
        );
      })} */}
    </Container>
  );
}

export default RecipeIdeasList;
