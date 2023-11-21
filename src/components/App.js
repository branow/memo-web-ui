import Navbar from "./constant/Navigation/Navbar";
import HomePage from "./MainPage/HomePage";
import PrivateUserPage from "./UserPage/PrivateUser/PrivateUserPage";
import FormComponentWrapper from "./constant/Forms/FormComponentWrapper";
import LoginForm from "./constant/Forms/LoginForm";
import RegistrationForm from "./constant/Forms/RegistrationForm";
import ResetForm from "./constant/Forms/ResetForm";
import ConfirmForm from "./constant/Forms/ConfirmForm";
import PublicUserInfo from "./UserPage/PublicUser/PublicUserInfo"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../input.css";
import { useGetUserPrivateShortDetails } from "../hooks/request/user";
import LogoutForm from "./constant/Forms/LogoutForm";
import VerificationEmailForm from "./constant/Forms/VerificationEmailForm";
import { createContext } from "react";

export const UserContext = createContext();

function App() {
  const { userState, state } = useGetUserPrivateShortDetails();

  return (
    <UserContext.Provider value={userState}>
      <Router>
        <div className="bg-body-background-grey">
          <Navbar></Navbar>
          <div>
            <Switch>
              <Route exact path="/">
                <HomePage/>
              </Route>
              <Route path="/login">
                <HomePage/>
                <FormComponentWrapper>
                  <LoginForm />
                </FormComponentWrapper>
              </Route>
              <Route path="/register">
                <HomePage/>
                <FormComponentWrapper>
                  <RegistrationForm/>
                </FormComponentWrapper>
              </Route>
              <Route path="/reset">
                <HomePage/>
                <FormComponentWrapper>
                  <ResetForm/>
                </FormComponentWrapper>
              </Route>
              <Route path="/confirm">
                <HomePage/>
                <FormComponentWrapper>
                  <ConfirmForm/>
                </FormComponentWrapper>
              </Route>
              <Route path="/verificate">
                <HomePage/>
                <FormComponentWrapper>
                  <VerificationEmailForm/>
                </FormComponentWrapper>
              </Route>
              <Route path="/logout">
                <HomePage/>
                <FormComponentWrapper>
                  <LogoutForm/>
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
    </UserContext.Provider>
  );
}

export default App;
