import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
import {
  InputLabel,
  Select,
  Typography,
  MenuItem,
  FormControl,
  Box,
  Container,
  TextField,
  CssBaseline,
  Button,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function ToDoTodayEdit() {
  const { id } = useParams();
  const [toDo, setToDoTodayEdit] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/toDo/${id}`)
      .then((data) => data.json())
      .then((f) => {
        setToDoTodayEdit(toDo);
      })
      .catch(console.log);
  }, []);

  function handleInputChange(event) {
    const { name, value } = event.target;

    return setToDoTodayEdit({ ...toDo, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_SERVER_URL}/toDo/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toDo),
    })
      .then((data) => data.json())
      .then((f) => {
        setToDoTodayEdit(f);
        navigate("/toDoToday");
      })
      .catch(console.log);
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
          marginBottom: 4,
        }}
      >
        Edit {toDo.name}
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 3 }}
      >
        <Grid>
          <Grid item xs={2} sm={4} md={4}>
            <TextField
              fullWidth
              id="outlined-textarea"
        
              placeholder="Name"
              multiline
              value={toDo.name}
              name="name"
              sx={{
                marginBottom: 2,
              }}
              onChange={handleInputChange}
            />

            <FormControl fullWidth>
              <InputLabel id="demo-select-small"> Priority </InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={toDo.priority}
                name="priority"
        
                onChange={handleInputChange}
              >
                <MenuItem value={"high"}>High Priority</MenuItem>
                <MenuItem value={"medium"}>Medium Priority</MenuItem>
                <MenuItem value={"low"}>Low Priority</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
          
        </Grid>
      </Box>
      
    </Container>
  );
}

export default ToDoTodayEdit;
