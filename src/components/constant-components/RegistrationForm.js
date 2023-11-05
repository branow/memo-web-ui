import { Link, useHistory } from 'react-router-dom'
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
import { useState } from "react";
import FormInputWrapper from './FormInputComponents/FormInputWrapper';
import UserNameInput from './FormInputComponents/UsernameInput';
import EmailInput from './FormInputComponents/EmailInput';
import PasswordInput from './FormInputComponents/PasswordInput';
import FormSubmitButton from './FormInputComponents/FormSubmitButton';
import register from '../../service/authentication/register';
import { State } from '../../service/service';
import WarningAlert from './WarningAlert';
import PasswordValidationTracker from './PasswordValidationTracker';

const RegistrationForm = () => {
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
    const history = useHistory();

    const handleSubmit = () => {
        const user = {
            username:registerUsername,
            email:registerEmail,
            password:registerPassword,
            confirmPassword:registerConfirmPassword,
        };
        const doSuccess = (response) => {
            history.push("/");
        };
        register(user, new State(setPending, setError, doSuccess));
    };



    return ( 
        <div className="w-[450px] p-[50px]">
            <h2 className="text-[40px] text-white text-center font-semibold">Registration</h2>
            
            <form>
                <FormInputWrapper childrenInput={<UserNameInput onChangeAction={(e) => setRegisterUsername(e.target.value)}/>}
                inputIcon={<AiOutlineUser className='mt-[7px]' size='20px'/>} inputName={'Username'}
                />
                
                <FormInputWrapper childrenInput={<EmailInput onChangeAction={(e) => setRegisterEmail(e.target.value)}/>}
                inputIcon={<HiOutlineMail className='mt-[7px]' size='20px'/>} inputName={'Email'}
                />

                <FormInputWrapper childrenInput={<PasswordInput onChangeAction={(e) => setRegisterPassword(e.target.value)}/>}
                inputIcon={<RiLockPasswordLine className='mt-[7px]' size='20px'/>} inputName={'Password'}
                />
                <PasswordValidationTracker/>

                <FormInputWrapper childrenInput={<PasswordInput onChangeAction={(e) => setRegisterConfirmPassword(e.target.value)}/>}
                inputIcon={<RiLockPasswordLine className='mt-[7px]' size='20px'/>} inputName={'Confirm password'}
                />

                <FormSubmitButton actionName={'Register'} onClickAction={handleSubmit}/>

                <div className="text-[1em] text-white text-center font-medium inline" >
                    <p className="my-[16px]">Already have an account?
                        <Link to="/login" className="text-form-link-antiquewhite hover:underline ml-[3px]">Login</Link>
                    </p>
                </div>
            </form>
        </div>
     );
}
 
export default RegistrationForm;