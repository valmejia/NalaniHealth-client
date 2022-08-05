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
    Paper
  } from "@mui/material";
  import * as React from "react";
  import DeleteIcon from "@mui/icons-material/Delete";
  import CreateIcon from "@mui/icons-material/Create";
  import FavoriteIcon from "@mui/icons-material/Favorite";
  import { Link } from "react-router-dom";
  import { useState, useEffect } from "react";
  
  function ToDoToday(props) {
    const [high, setHigh] = useState([]);
    const [medium, setMedium] = useState([]);
    const [low, setlow] = useState([]);
    const [todo, setTodo] = useState([]);
    const { toDos } = props;

  
    useEffect(() => {
      fetch(`${process.env.REACT_APP_SERVER_URL}/toDo/toDoToday`)
        .then((data) => data.json())
        .then((t) => {
          setTodo(t);
        });
    }, []);

    useEffect(() => {
        const high = todo.filter((f) => f.priority === "high");
        setHigh(high);
    
        const medium = todo.filter((f) => f.priority === "medium");
        setMedium(medium);
    
        const grain = todo.filter((f) => f.priority === "low");
        setlow(low);
    
      }, [todo]);
    
  
    const deleteProduct = function (id) {
      fetch(`${process.env.REACT_APP_SERVER_URL}/toDo/delete/${id}`, {
        method: "delete",
      })
        .then((data) => data.json())
        .then((t) => {
            setTodo(t.filter((g) => g._id !== id));
        })
        .catch(console.log);
    };
  
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
          To-do today
        </Typography>
  
        <Button
          href="/toDoTodayForm"
          variant="contained"
          sx={{ my: 1, mx: 1.5, mb: 3 }}
        >
          Add task
        </Button>

        <Grid
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 6,
          }}
        >

          <Grid sx={{ xs: 2, md: 3, mt: 6 }} columns={{ xs: 4 }}>

            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {todo.map((t) => {
                const labelId = `checkbox-list-label-${t._id}`;
                return (
                  <Grid>
                    <ListItem>
                      <ListItemButton
                        role={undefined}
                        onClick={() => handleToggle(t)}
                        dense
                      >
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            checked={checked.indexOf(t) !== -1}
                            tabIndex={-1}
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={t.name} />
                      </ListItemButton>
  
                      <IconButton
                        edge="end"
                        sx={{ mr: 0.1 }}
                        onClick={() => deleteProduct(t._id)}
                      >
                        <DeleteIcon />
                      </IconButton>
  
                      <Link to={`/toDoTodayEdit/${t._id}`}>
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
  
       
        </Grid>
      </Container>
    );
  }
  export default ToDoToday;
  