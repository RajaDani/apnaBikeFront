import React from "react";
import ApnaBikeUi from "./ApnaBike/ApnaBikeUi";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      {/* <div className="App"> */}
      <Switch>
        {/* <ApnaBikeUi /> */}
        <Route path='/'>
          <ApnaBikeUi />
        </Route>
      </Switch>
      {/* </div> */}
    </Router>
  );
}

export default App;
