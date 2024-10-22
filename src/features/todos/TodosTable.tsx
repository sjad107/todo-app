import {
  Box,
  Button,
  Card,
  CardHeader,
  Checkbox,
  Container,
  Grid2,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import MainLayout from "../../layout/MainLayout";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  deleteTodo,
  editToDo,
  pushTodo,
  resetForm,
  setToDo,
  toggleTodoStatus,
} from "../../redux/slices/todoSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import { Edit } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { TextField } from "../../components/controlled/TextField";
import { useTranslation } from "react-i18next";
const TodosTable = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { todos, form } = useAppSelector((state) => state.todos);
  const { handleSubmit, control, reset } = useForm({
    mode: "onSubmit",
    defaultValues: form,
  });

  useEffect(() => {
    reset(form);
  }, [form, reset]);

  const onSubmit = (data: any) => {
    if (form.id) {
      dispatch(editToDo(data));
    } else {
      dispatch(pushTodo(data.text));
      reset({ text: "" });
    }
    dispatch(resetForm());
  };
  console.log(todos);
  return (
    <MainLayout>
      <Box
        sx={{
          padding: "5em 0em",
          position: "relative",
        }}
      >
        <Container>
          <Box
            m={2}
            display={"flex"}
            justifyContent={"center"}
            sx={{
              width: { sx: "100%", sm: "80%", md: "60%" },
              margin: "0 auto",
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid2 container spacing={2}>
                <Grid2 size={{ xs: 12, sm: 8 }}>
                  <TextField
                    size="small"
                    label={t("todo")}
                    name="text"
                    control={control}
                    required
                    fullWidth
                  />
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 4 }}>
                  <Button
                    type="submit"
                    sx={{ textTransform: "capitalize" }}
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    {form.id ? t("edit") : t("add")}
                  </Button>
                </Grid2>
              </Grid2>
            </form>
          </Box>
          <Box
            mt={2}
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            sx={{
              width: { sx: "100%", sm: "80%", md: "60%" },
              margin: "0 auto",
            }}
          >
            {todos.length > 0 &&
              todos.map((t) => (
                <Card
                  sx={{ width: "100%", mt: 2 }}
                  key={t.id}
                  variant="elevation"
                  elevation={4}
                >
                  <CardHeader
                    title={
                      <Box display={"flex"} justifyContent={"space-between"}>
                        <Box
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          <Checkbox
                            checked={t.completed}
                            onChange={() => dispatch(toggleTodoStatus(t.id))}
                          />
                          <Typography textAlign={"center"}>{t.text}</Typography>
                        </Box>
                        <Box>
                          <IconButton
                            color="info"
                            onClick={() => dispatch(setToDo(t))}
                          >
                            <Edit />
                          </IconButton>
                          <IconButton
                            color="error"
                            onClick={() => dispatch(deleteTodo(t.id))}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Box>
                      </Box>
                    }
                  ></CardHeader>
                </Card>
              ))}
          </Box>
        </Container>
      </Box>
    </MainLayout>
  );
};

export default TodosTable;
