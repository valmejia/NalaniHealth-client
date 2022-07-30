import { CssBaseline, Typography, Container, Button  } from "@mui/material";

function RecipeIdeasList() {
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

      <Button href="/recipeIdeasForm" variant="contained"sx={{ my: 1, mx: 1.5 }} >
        Add Recipe
      </Button>

     
    </Container>
  );
}

export default RecipeIdeasList;
