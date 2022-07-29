import { Container } from "@mui/system";
import { Button } from "@mui/material";

function WelcomeHomePage(){
    return(
        <Container>
            <h1> Welcome user!</h1>
            <Button
              href="/recipeIdeasList"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Recipe Ideas
            </Button>
            
            <Button
              href="/recipeIdeasList"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              
            </Button>
            <Button
              href="/recipeIdeasList"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Recipe Ideas
            </Button>
            <Button
              href="/recipeIdeasList"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Recipe Ideas
            </Button>
            <Button
              href="/recipeIdeasList"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Recipe Ideas
            </Button>
        </Container>
    )
}

export default WelcomeHomePage;