import './App.css';
import Header from './layout/header/Header';
import Nav from './layout/nav/Nav';
import Footer from './layout/footer/Footer';
import Home from './home/Home';
import Swapi from './swapi/Swapi';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Nav />
        <main className="container my-5">
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/swapi">
              <Swapi />
            </Route>
            <Route path="">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
