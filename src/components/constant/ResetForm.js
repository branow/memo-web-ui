import { Link } from 'react-router-dom'
import { useState, useCallback } from "react";
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import login from '../../service/authentication/login';
import { State } from '../../service/service';
import ErrorBox from './ErrorBox';
import EmailInputField from './FormInput/EmailInputField';
import FormSubmitButton from './SubmitButton';
import LoadingScreen from './LoadingScreen';

const ResetForm = ({setUser}) => {
    const [error, setError] = useState(null);
    const [pending, setPending] = useState(false);
    const [email, setEmail] = useState("");
    const history = useHistory();

    const handleSubmit = useCallback(() => {
        const user = {
          email: email,
        };
        const doSuccess = () => {
            history.push('/');
        }
        login(user, setUser, new State(setPending, setError), doSuccess);
    },[]);

    return (
      <div className="w-[450px] p-[50px]">
        <h2 className="text-[40px] text-white text-center font-semibold">
          Reset password
        </h2>
        {error && (
        <ErrorBox errorTitle="Error" errorMessage={error} />
      )}
        <h2 className="text-[16px] my-[20px] text-white text-center font-medium">
          Send us your email and then check your email
        </h2>

        <form>
          <EmailInputField onChangeAction={useCallback((e) => setEmail(e.target.value),[])}/>
          <div className="w-fit m-auto"><FormSubmitButton actionName={"Send"} onClickAction={handleSubmit} /></div>
          
          <div className="text-[1em] text-white font-medium mt-[45px] mb-[15px] flex justify-between">
            <Link to="/register" className="cursor-pointer hover:underline">
              <span>Create an account?</span>
            </Link>
            <Link to="/login" className="hover:underline">
              <span>Login</span>
            </Link>
          </div>
        </form>
        {pending && <LoadingScreen />}
      </div>
    );
}
 
export default ResetForm;