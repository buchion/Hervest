import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashNav from "./Dashboard/DashNav";
import HomePage from "./Menus/HomePage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <DashNav>
            <Route>
              <HomePage exact path="/" />
            </Route>
          </DashNav>
        </Switch>
      </Router>
    </>
  );
}

export default App;
