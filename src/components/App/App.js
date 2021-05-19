import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { TodoList } from  "../../pages";

function App() {
  return (
      <Router>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
              <Route path="/">
                  <TodoList />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
