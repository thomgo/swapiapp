import './App.css';
import Header from './layout/header/Header';
import Nav from './layout/nav/Nav';
import Footer from './layout/footer/Footer';
import Resources from './resources/Resources';
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
              <Resources />
            </Route>
            <Route path="/swapi">
              <Swapi />
            </Route>
            <Route path="">
              <Resources />
            </Route>
          </Switch>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
