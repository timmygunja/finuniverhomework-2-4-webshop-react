import './App.css';
import MainNavigation from "./layout/MainNavigation";
import {Switch, Route} from "react-router-dom";
import Product from "./Components/Product";

function App() {
  return (
    <div className={"App"}>
        <MainNavigation />
        <Switch>
            <Route exact path="/">
                <Product />
            </Route>
        </Switch>
    </div>
  );
}

export default App;
