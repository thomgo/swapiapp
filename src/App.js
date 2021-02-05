import './App.css';
import Header from './layout/header/Header';
import Nav from './layout/nav/Nav';
import Footer from './layout/footer/Footer';
import ResourcesPanel from './resourcesPanel/ResourcesPanel';
import ResourceDetail from './resourceDetail/ResourceDetail';
import EntryDetail from './entryDetail/EntryDetail';
import Research from './research/Research';
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
              <ResourcesPanel />
            </Route>
            <Route path="/research">
              <Research />
            </Route>
            <Route path="/resource/:resourceName/page/:page" children={<ResourceDetail />} />
            <Route path="/resource/:resourceName/detail" children={<EntryDetail />} />
            <Route path="">
              <ResourcesPanel />
            </Route>
          </Switch>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
