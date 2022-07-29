import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingComponent from "./components/Loading";
import { getLoggedIn, logout } from "./services/auth";
import routes from "./config/routes";
import * as USER_HELPERS from "./utils/userToken";

//pages 
import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import Signup from "./pages/Signup";
import MealPlan from "./pages/MealPlan";
import FoodShoppingList from "./pages/FoodShoppingList";
import RecipeIdeasList from "./pages/RecipesIdeasList";
import RecipeIdeasForm from "./pages/RecipeIdeasForm";
import FoodExpensesTracker from "./pages/FoodExpensesTracker";
import NutritionGoalTracker from "./pages/NutritionGoalTracker";
import InspirationBoard from "./pages/InspirationBoard";
import Favoritos from "./pages/Favoritos";
import WelcomeHomePage from "./pages/WelcomeHomePage";
import { ThemeProvider} from "@emotion/react";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#6a1b9a',
    },
    secondary: {
      main: '#8e24aa',
    },
    text: {
      primary: '#4527a0',
    },
  },
  background: {
    default: '#dbdaff',
  },
  typography: {
    h1: {
      fontFamily: 'Italianno',
    },
    h3: {
      fontFamily: 'Rampart One',
    },
    h4: {
      fontFamily: 'Rampart One',
    },
    h2: {
      fontFamily: 'Poppins',
    },
    h5: {
      fontFamily: 'Poppins',
    },
    h6: {
      fontFamily: 'Poppins',
    },
    subtitle1: {
      fontFamily: 'Poppins',
    },
    body2: {
      fontFamily: 'Poppins',
    },
    button: {
      fontFamily: 'Poppins',
    },
    caption: {
      fontFamily: 'Poppins',
    },
    overline: {
      fontFamily: 'Poppins',
    },
  },
});

export default function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      return setIsLoading(false);
    }
    getLoggedIn(accessToken).then((res) => {
      if (!res.status) {
        return setIsLoading(false);
      }
      setUser(res.data.user);
      setIsLoading(false);
    });
  }, []);

  function handleLogout() {
    const accessToken = USER_HELPERS.getUserToken();
    if (!accessToken) {
      setUser(null);
      return setIsLoading(false);
    }
    setIsLoading(true);
    logout(accessToken).then((res) => {
      if (!res.status) {
        // deal with error here
        console.error("Logout was unsuccessful: ", res);
      }
      USER_HELPERS.removeUserToken();
      setIsLoading(false);
      return setUser(null);
    });
  }

  function authenticate(user) {
    setUser(user);
  }

  if (isLoading) {
    return <LoadingComponent />;
  }


  return (
    <div>

      <ThemeProvider theme={theme}>

      
      <Routes>
        {/* {routes({ user, authenticate, handleLogout }).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))} */}
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/login" element={<LogIn />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/mealPlan" element={<MealPlan />} />
        <Route path="/foodShoppingList" element={<FoodShoppingList />} />
        <Route path="/recipeIdeasList" element={<RecipeIdeasList />} />
        <Route path="/recipeIdeasForm" element={<RecipeIdeasForm />} />
        <Route path="/foodExpensesTracker" element={<FoodExpensesTracker />} />
        <Route path="/nutritionGoalTracker" element={<NutritionGoalTracker />} />
        <Route path="/inspirationBoard" element={<InspirationBoard />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/WelcomeHomePage" element={<WelcomeHomePage />} />
      </Routes>

      </ThemeProvider>
    </div>
  );
}
