import Home from "./Home";
import Navbar from "./Navbar";
import Cantact from "./Cantact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import Tushar from "./Tushar";

import BlogDetails from "./BlogDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/Tushar">
              <Tushar />
            </Route>
            <Route path="/Cantact">
              <Cantact />
            </Route>
            <Route path="/blogdetails/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
