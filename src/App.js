import React from "react";
import ApnaBikeUi from "./ApnaBike/ApnaBikeUi";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <ApnaBikeUi />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
