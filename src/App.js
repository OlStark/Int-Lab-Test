import Layout from "./components/Layout";
import "./App.scss";
import { ThemeProvider } from "./providers/ThemeProvider";
import Button from "./components/buttons/button";
import Checkbox from "./components/checkbox/checkbox";
import Input from "./components/input/input";
import Switcher from "./components/switcher/switch";
import Header from "./header/header";
import Main from "./main/Main";
import Footer from "./footer/footer";

function App() {
  return (
    <ThemeProvider>
      {/* ThemeProvider - меняет тему всего сайта */}
      <Layout>
        {/* Layout обертка к кторой будут применены изменения */}
        <div className="App">
          <Header></Header>
          <Main></Main>
          <Footer />
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
