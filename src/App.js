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
import RecipeIdeas from "./pages/RecipeIdeas";
import FoodExpensesTracker from "./pages/FoodExpensesTracker";
import NutritionGoalTracker from "./pages/NutritionGoalTracker";
import InspirationBoard from "./pages/InspirationBoard";
import Favoritos from "./pages/Favoritos";

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
      
      <Routes>
        {/* {routes({ user, authenticate, handleLogout }).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))} */}
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/login" element={<LogIn />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/mealplan" element={<MealPlan />} />
        <Route path="/foodShoppingList" element={<FoodShoppingList />} />
        <Route path="/recipeideas" element={<RecipeIdeas />} />
        <Route path="/foodExpensesTracker" element={<FoodExpensesTracker />} />
        <Route path="/nutritionGoalTracker" element={<NutritionGoalTracker />} />
        <Route path="/inspirationBoard" element={<InspirationBoard />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </div>
  );
}
