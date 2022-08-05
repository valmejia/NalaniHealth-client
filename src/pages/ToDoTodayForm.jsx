import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

function ToDoTodayForm(props) {
  const navigate = useNavigate();
  const [toDo, setToDoToday] = useState([]);
  const { foods } = props;
  const [form, setForm] = useState({
    name: "",
    assessment: "",
    priority: "",
  });
  const { name, assessment, priority } = form;

  function handleInputChange(event) {
    const { name, value } = event.target;
    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();

    fetch(`${process.env.REACT_APP_SERVER_URL}/toDo/toDoTodayForm`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((data) => data.json())
      .then((t) => {
        setToDoToday(toDo);
        navigate("/toDoToday");
      })
      .catch(console.log);
  }
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
        Add task
      </Typography>

      <Box
        component="form"
        onSubmit={handleFormSubmission}
        noValidate
        sx={{ mt: 3 }}
      >
        <Grid>
          <Grid item xs={2} sm={4} md={4}>
            <TextField
              fullWidth
              id="outlined-textarea"
              label="Name"
              placeholder="Name"
              multiline
              value={name}
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
                value={priority}
                name="priority"
                label="Priority"
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

export default ToDoTodayForm;
