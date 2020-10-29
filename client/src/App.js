import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Items from "./pages/Items/Items";
import Details from "./pages/Details/Details";
import "./App.sass";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/items/:id" component={Details} />
        <Route path="/items" component={Items} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;