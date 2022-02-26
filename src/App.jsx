import "./app.scss";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import WatchApp from "./pages/watchApp/WatchApp";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import { AuthContext } from "./context/authContext/AuthContext";
import { useContext } from "react";

const App = () => {
  const {user} = useContext(AuthContext);
  return (
    <Router>
        <Switch>
      <Route exact path="/"component={() => user?(<Home />):(<Redirect to="/register" />)} />
      <Route exact path="/movies"component={() => user?(<Home type="movies" />):(<Redirect to="/register" />)} />
      <Route exact path="/series"component={() => user?(<Home type="series" />):(<Redirect to="/register" />)} />
      <Route exact path="/watch/:id"component={() => user?(<Watch />):(<Redirect to="/register" />)} />
      <Route exact path="/watch-app/:id/:token"component={() => <WatchApp />} />
      <Route exact path="/register"component={() => !user?(<Register />):(<Redirect to="/" />)} />
      <Route exact path="/login"component={() => !user?(<Login />):(<Redirect to="/" />)} />
    </Switch>

  </Router>
  );
};

export default App;