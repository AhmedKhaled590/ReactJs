import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './create';
import BlogDetails from './BlogDetails';
function App() {
  return (
    <Router> {/*Surround all page with Router tag*/}
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch> {/*Inside switch is the part we want to change when turning into new router */}

            <Route exact path="/">{/*exact : to match exactly '/' , path:is the route */}
              <Home />
            </Route>

            <Route path="/create">
              <Create />
            </Route>

            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
