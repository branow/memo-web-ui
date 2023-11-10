import Navbar from "./constant/Navbar";
import HomePage from "./MainPage/HomePage";
import PrivateUserPage from "./UserPage/PrivateUserPage";
import FormComponentWrapper from "./constant/FormComponentWrapper";
import LoginForm from "./constant/LoginForm";
import RegistrationForm from "./constant/RegistrationForm";
import ResetForm from "./constant/ResetForm";
import ConfirmForm from "./constant/ConfirmForm";
import PublicUserInfo from "./UserPage/PublicUser/PublicUserInfo";
import AuthenticationRequester from "../request/authentication";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserCookies } from "../util/user-cookie";

import "../input.css";
import DoFinally from "../util/do-finally";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const jwt = new UserCookies().authorizationJwt.get();
    if (jwt) {
      const doFinally = new DoFinally();
      doFinally.success.addAfter((response) => setUser(response.data));
      doFinally.fail.addAfter(() => setUser(null));
      doFinally.error.addAfter(() => setUser(null));
      new AuthenticationRequester().getUser(jwt, doFinally);
    }
  }, []);

  return (
    <Router>
      <div className="bg-body-background-grey">
        <Navbar user={user}></Navbar>
        <div>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/login">
              <HomePage user={user} />
              <FormComponentWrapper>
                <LoginForm setUser={setUser} />
              </FormComponentWrapper>
            </Route>
            <Route path="/register">
              <HomePage />
              <FormComponentWrapper>
                <RegistrationForm setUser={setUser} />
              </FormComponentWrapper>
            </Route>
            <Route path="/reset">
              <HomePage />
              <FormComponentWrapper>
                <ResetForm />
              </FormComponentWrapper>
            </Route>
            <Route path="/confirm">
              <HomePage />
              <FormComponentWrapper>
                <ConfirmForm setUser={setUser} />
              </FormComponentWrapper>
            </Route>
            <Route path="/profile/info">
              <PrivateUserPage activeTab={"info"} />
            </Route>
            <Route path="/profile/settings">
              <PrivateUserPage activeTab={"settings"} />
            </Route>
            <Route path="/profile/public/modules">
              <PublicUserInfo tab={"modules"} />
            </Route>
            <Route path="/profile/public/achievements">
              <PublicUserInfo tab={"achievements"} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
