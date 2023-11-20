import Navbar from "./constant/Navbar";
import HomePage from "./MainPage/HomePage";
import PrivateUserPage from "./UserPage/PrivateUser/PrivateUserPage";
import FormComponentWrapper from "./constant/FormComponentWrapper";
import LoginForm from "./constant/LoginForm";
import RegistrationForm from "./constant/RegistrationForm";
import ResetForm from "./constant/ResetForm";
import ConfirmForm from "./constant/ConfirmForm";
import PublicUserInfo from "./UserPage/PublicUser/PublicUserInfo"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../input.css";
import { useGetUserPrivateShortDetails } from "../hooks/request/user";
import LogoutForm from "./constant/LogoutForm";
import VerificationEmailForm from "./constant/VerificationEmailForm";
import { createContext } from "react";

export const UserContext = createContext();

function App() {
  const { userState, state } = useGetUserPrivateShortDetails();

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
