import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { TodoList, Calendar } from  "../../pages";

function App() {
  return (
      <Router>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
              <Route exact path="/" >
                  <TodoList />
              </Route>
              <Route path="/calendar">
                  <Calendar />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
