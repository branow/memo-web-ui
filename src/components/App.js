import Navbar from "./constant/Navigation/Navbar";
import HomePage from "./MainPage/HomePage";
import PrivateUserPage from "./UserPage/PrivateUser/PrivateUserPage";
import LoginForm from "./constant/Forms/LoginForm";
import RegistrationForm from "./constant/Forms/RegistrationForm";
import ResetForm from "./constant/Forms/ResetForm";
import ConfirmForm from "./constant/Forms/ConfirmForm";
import ModulePage from "./ModulePage/ModulePage";
import CollectionPage from "./CollectionPage/CollectionPage";
import LearningPage from "./LearningPage/LearningPage";
import PublicUserInfo from "./UserPage/PublicUser/PublicUserInfo";
import SettingsWindow from "./LearningPage/Setting/SettingsWindow";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import "../input.css";
import { useGetUserPrivateShortDetails } from "../hooks/request/user";
import LogoutForm from "./constant/Forms/LogoutForm";
import VerificationEmailForm from "./constant/Forms/VerificationEmailForm";
import { createContext } from "react";

export const UserContext = createContext();

function App() {
  const appUserContext = useGetUserPrivateShortDetails();

  return (
    <UserContext.Provider value={appUserContext}>
      <Router>
        <div className="w-full h-screen bg-tealish-blue overflow-y-auto overflow-x-hidden">
          <Navbar></Navbar>
          <div className="mt-[76px]">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/login">
                <HomePage />
                <LoginForm />
              </Route>
              <Route path="/register">
                <HomePage />
                <RegistrationForm />
              </Route>
              <Route path="/reset">
                <HomePage />
                <ResetForm />
              </Route>
              <Route path="/confirm">
                <HomePage />
                <ConfirmForm />
              </Route>
              <Route path="/verificate">
                <HomePage />
                <VerificationEmailForm />
              </Route>
              <Route path="/logout">
                <HomePage />
                <LogoutForm />
              </Route>
              <Route path="/profile/info">
                <PrivateUserPage activeTab={"info"} />
              </Route>
              <Route path="/profile/settings">
                <PrivateUserPage activeTab={"settings"} />
              </Route>
              <Route path="/profile/:userId">
                <PublicUserInfo />
              </Route>
              <Route path="/module/:moduleId">
                <ModulePage />
              </Route>
              <Route path="/collection/:collectionId">
                <CollectionPage />
              </Route>
              <Route path="/learning/settings">
                <SettingsWindow />
              </Route>
              <Route path="/learning/memorize">
                <LearningPage typeId="1" />
              </Route>
              <Route path="/learning/writing">
                <LearningPage typeId="2" />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
