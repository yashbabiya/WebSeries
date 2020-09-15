import React from "react";
import { Switch, Route } from "react-router-dom";
import "./styles.css";
import Netflix from "./Netflix";
import Amazon from "./Amazon";
import Menu from "./Menu";
export default function App() {
  return (
    <div className="App">
      <Menu />

      <Switch>
        <Route exact path="/" component={Netflix} />
        <Route exact path="/amazon" component={Amazon} />
      </Switch>
    </div>
  );
}
