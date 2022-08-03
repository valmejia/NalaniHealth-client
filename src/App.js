import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import LoadingComponent from "./components/Loading";
import { getLoggedIn, logout } from "./services/auth";
import routes from "./config/routes";
import * as USER_HELPERS from "./utils/userToken";
import * as React from "react";

//pages
import Navbar from "./components/Navbar";
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
import Favorites from "./pages/Favorites";
import WelcomeHomePage from "./pages/WelcomeHomePage";

//mui

import { createTheme, ThemeProvider,useTheme, Box, IconButton, Switch } from "@mui/material";
import UserHome from "./pages/UserHome";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";



export default function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#6a1b9a',
      },
      secondary: {
        main: '#8e24aa',
      },
      text: {
        primary: '#dbdaff',
        secondary: '#dbdaff',
      },

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
  })
  
  const ligthTheme = createTheme({
    palette: {
      mode:  'light', 
      primary: {
        main: '#6a1b9a',
      },
      secondary: {
        main: '#8e24aa',
      },
      text: {
        primary: '#4527a0',
      },
      background: {
        default: '#dbdaff',
      },
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
  // const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

  // function ToggleColorMode() {
  //   const [mode, setMode] = React.useState("light");
    
  //   const colorMode = React.useMemo(
  //     () => ({
  //       toggleColorMode: () => {
  //         setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  //       },
  //     }),
  //     []
  //   );

  //   const theme = React.useMemo(() =>
  //     createTheme({
  //       palette: {
  //         mode,
  //         ...(mode === "light"
  //           ? {
  //               primary: {
  //                 main: "#6a1b9a",
  //               },
  //               secondary: {
  //                 main: "#8e24aa",
  //               },
  //               text: {
  //                 primary: "#4527a0",
  //               },
  //               background: {
  //                 default: "#dbdaff",
  //               },
  //             }
  //           : {
  //               primary: {
  //                 main: "#6a1b9a",
  //               },
  //               secondary: {
  //                 main: "#8e24aa",
  //               },
  //               text: {
  //                 primary: "#dbdaff",
  //                 secondary: "#dbdaff",
  //               },
  //             }),
  //       },
  //       typography: {
  //         h1: {
  //           fontFamily: "Italianno",
  //         },
  //         h3: {
  //           fontFamily: "Rampart One",
  //         },
  //         h4: {
  //           fontFamily: "Rampart One",
  //         },
  //         h2: {
  //           fontFamily: "Poppins",
  //         },
  //         h5: {
  //           fontFamily: "Poppins",
  //         },
  //         h6: {
  //           fontFamily: "Poppins",
  //         },
  //         subtitle1: {
  //           fontFamily: "Poppins",
  //         },
  //         body2: {
  //           fontFamily: "Poppins",
  //         },
  //         button: {
  //           fontFamily: "Poppins",
  //         },
  //         caption: {
  //           fontFamily: "Poppins",
  //         },
  //         overline: {
  //           fontFamily: "Poppins",
  //         },
  //       },
  //     })
  //     [mode],
  //   );
  // }
  
  // const theme = useTheme();
  // const colorMode = React.useContext(ColorModeContext);
  
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
    console.log("holi");
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
      navigate("/");
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
      {/* <ColorModeContext.Provider value={colorMode}> */}
        <ThemeProvider theme={darkMode ?  darkTheme : ligthTheme}>
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          {/* <Box>
            <IconButton
              sx={{ ml: 1 }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Box> */}

        

          <Routes>
            {/* {routes({ user, authenticate, handleLogout }).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))} */}
            <Route path="/" element={<HomePage />} />
            <Route
              path="/auth/login"
              element={<LogIn authenticate={authenticate} />}
            />
            <Route
              path="/auth/signup"
              element={<Signup authenticate={authenticate} />}
            />
            <Route path="/mealPlan" element={<MealPlan />} />
            <Route path="/foodShoppingList" element={<FoodShoppingList />} />
            <Route path="/recipeIdeasList" element={<RecipeIdeasList />} />
            <Route path="/recipeIdeasForm" element={<RecipeIdeasForm  />} />
            <Route path="/foodExpensesTracker" element={<FoodExpensesTracker />} />
            <Route path="/nutritionGoalTracker" element={<NutritionGoalTracker />} />
            <Route path="/inspirationBoard" element={<InspirationBoard />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/WelcomeHomePage" element={ <WelcomeHomePage handleLogout={handleLogout} user={user} />} />
            <Route path="/UserHome" element={<UserHome user={user} />} />
          </Routes>
        </ThemeProvider>
      {/* </ColorModeContext.Provider> */}
    </div>
  );
}
