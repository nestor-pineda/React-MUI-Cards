import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./pages/Create";
import Notes from "./pages/Notes";
import Layout from "./components/Layout/Layout";
import theme from "./theme/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Notes />} />
              <Route path="/create" element={<Create />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
