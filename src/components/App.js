import Navbar from "./constant-components/Navbar";
import HomePage from "./MainPage/HomePage";
import HomeComponentWrapper from "./constant-components/FormComponentWrapper";
import LoginForm from "./constant-components/LoginForm";
import RegistrationForm from "./constant-components/RegistrationForm";
import ResetForm from "./constant-components/ResetForm";
import ConfirmForm from "./constant-components/ConfirmForm";
import AuthenticationRequester from "../request/authentication";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserCookies } from "../util/user-cookie";

import "../input.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const jwt = new UserCookies().authorizationJwt.get();
    if (jwt) {
      const success = (response) => {
        setUser(response.data);
      };
      const fail = () => {
        setUser(null);
      };
      new AuthenticationRequester().getUser(jwt, success, fail);
    }
  }, []);

  return (
    <Router>
      <div className="bg-body-background-grey">
        <Navbar user={user}></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/login">
              <HomePage />
              <HomeComponentWrapper>
                <LoginForm setUser={setUser} />
              </HomeComponentWrapper>
            </Route>
            <Route path="/register">
              <HomePage />
              <HomeComponentWrapper>
                <RegistrationForm setUser={setUser} />
              </HomeComponentWrapper>
            </Route>
            <Route path="/reset">
              <HomePage />
              <HomeComponentWrapper>
                <ResetForm />
              </HomeComponentWrapper>
            </Route>
            <Route path="/confirm">
              <HomePage />
              <HomeComponentWrapper>
                <ConfirmForm/>
              </HomeComponentWrapper>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
