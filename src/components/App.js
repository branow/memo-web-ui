
import Navbar from "./constant-components/Navbar";
import HomePage from "./MainPage-components/HomePage";
import HomeComponentWrapper from "./constant-components/FormComponentWrapper"
import LoginForm from "./constant-components/LoginForm";
import RegistrationForm from "./constant-components/RegistrationForm";
import ResetForm from "./constant-components/ResetForm";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import '../input.css';
import BlogDetails from "../BlogDetails";
import Create from "../Create";
import NotFound from "../NotFound";

function App() {
  return (
    <Router>
      <div className="bg-body-background-grey">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <HomePage></HomePage>
            </Route>
            <Route path="/login">
              <HomePage></HomePage>
              <HomeComponentWrapper><LoginForm></LoginForm></HomeComponentWrapper>
            </Route>
            <Route path="/register">
              <HomePage></HomePage>
              <HomeComponentWrapper><RegistrationForm></RegistrationForm></HomeComponentWrapper>
            </Route>
            <Route path="/reset">
              <HomePage></HomePage>
              <HomeComponentWrapper><ResetForm></ResetForm></HomeComponentWrapper>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
