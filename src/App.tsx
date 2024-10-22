import { useMemo, useState } from "react";
import "./App.css";
import TodosTable from "./features/todos/TodosTable";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import CustomizedColorModeSwitch from "./components/ColorModeSwitch";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const { i18n } = useTranslation();
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
        },
        direction: i18n.language === "ar" ? "rtl" : "ltr",
      }),
    [i18n.language, mode]
  );

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
      >
        <CustomizedColorModeSwitch
          onToggle={toggleColorMode}
          checked={mode === "dark"}
        />
        <LanguageSwitcher />
      </Box>
      <TodosTable />
    </ThemeProvider>
  );
}

export default App;
