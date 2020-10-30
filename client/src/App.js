import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Items from "./pages/Items/Items";
import Details from "./pages/Details/Details";
import NotFound from "./pages/NotFound/NotFound";
import "./App.sass";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/items/:id" component={Details} />
          <Route path="/items" component={Items} />
          <Route path="/notfound" component={NotFound} />
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
