import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Items from "./pages/Items/Items";
import Details from "./pages/Details/Details";
import NotFound from "./pages/NotFound/NotFound";
import "./App.sass";
import CajaBusqueda from "./components/CajaBusqueda/CajaBusqueda";
import Breadcrumb from "./components/Breadcrumb/Breadcrumb";

const App = () => {
  const [categories, setCategories] = useState([]);
  const onCategoriesHandler = (categories) => {
    if (categories) setCategories(categories);
  };

  return (
    <BrowserRouter>
      <CajaBusqueda></CajaBusqueda>
      <div className="container">
        <Breadcrumb categories={categories}></Breadcrumb>
        <Switch>
          <Route path="/items/:id" component={Details} />
          <Route
            path="/items"
            render={(props) => (
              <Items
                {...props}
                onCategoriesChange={onCategoriesHandler}
              ></Items>
            )}
          />
          <Route path="/notfound" component={NotFound} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
