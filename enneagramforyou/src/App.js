import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./pages/About/About";
import Enneagram from "./pages/Enneagram/Enneagram";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Navbar />
                <div>
                    <Route exact path="/" component={About} />
                    <Route exact path="/enneagram" component={Enneagram} />
                </div>
                <Footer />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
