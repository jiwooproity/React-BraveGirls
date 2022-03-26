import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/items/Navbar";
import Main from "./components/page/main";

const Url = {
  public: "/",
  main: "/bravegirls",
};

const JSX = {
  Main: () => {
    return <Main />;
  },

  Navbar: () => {
    return <Navbar />;
  },
};

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path={Url.main} component={JSX.Main} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
