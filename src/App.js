// import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import Header from "./components/header/Header";
import { useMessage } from "./contexts/MessageContext";
import Router from "./Router";
import Spinner from "./ui/Spinner";
import Toast from "./ui/Toast";

function App() {
  const { success, loading } = useMessage();

  const theme = createTheme({
    palette: {
      primary: { main: "#425da6", white: "#ffffff" },
      secondary: {
        main: "#eb8c34",
      },
      gray: "#4f4f4f",
      green: "#49d182",
      red: "#f55656",
    },
    components: {
      MuiAvatar: {
        styleOverrides: {
          root: {
            backgroundColor: "#425da6",
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: "#fff",
            color: "#425da6",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box>
        {success ? <Toast /> : <></>}
        {loading ? <Spinner /> : <></>}
        <Header />
        <Box className="App" sx={{ position: "static" }}>
          <Router />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
