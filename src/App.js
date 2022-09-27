import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Category from "./pages/Category";
import Recipe from "./pages/Recipe";

function App() {
    return (
        <Router basename='/react-magazine'>
            <Header/>
            <main className="content container">
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/about" element={<About/>}/>
                    <Route exact path="/contact" element={<Contact/>}/>
                    <Route exact path="/category/:name" element={<Category/>}/>
                    <Route exact path="/meal/:id" element={<Recipe/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
            <Footer/>
        </Router>
    );
}

export default App;
