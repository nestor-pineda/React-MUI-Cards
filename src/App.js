import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./pages/Create";
import Notes from "./pages/Notes";
import theme from "./theme/theme";
// import { ThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/global";
import Layout from "./components/Layout/Layout";
import { ThemeProviderLightDark } from "./themeContext/ThemeContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <ThemeProviderLightDark>
            <Layout>
              <Routes>
                <Route path="/" element={<Notes />} />
                <Route path="/create" element={<Create />} />
              </Routes>
            </Layout>
          </ThemeProviderLightDark>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
