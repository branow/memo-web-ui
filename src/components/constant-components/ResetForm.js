import { Link } from 'react-router-dom'
import { HiOutlineMail } from 'react-icons/hi';
import { useState } from "react";
import FormInputWrapper from './FormInputComponents/FormInputWrapper';
import EmailInput from './FormInputComponents/EmailInput';
import FormSubmitButton from './FormInputComponents/FormSubmitButton';
import sendReset from '../../form-functions/sendReset';

const ResetForm = () => {
    const [resetEmail, setResetEmail] = useState("");
    return ( 
        <div className="w-[450px] p-[50px]">
            <h2 className="text-[40px] text-white text-center font-semibold">Reset password</h2>
            <h2 className="text-[16px] my-[20px] text-white text-center font-medium">Send us your email and then check your mail</h2>
            <form>
                <FormInputWrapper childrenInput={<EmailInput onChangeAction={(e) => setResetEmail(e.target.value)}/>}
                inputIcon={<HiOutlineMail className='mt-[7px]' size='20px'/>} inputName={'Email'}
                />
                
                <FormSubmitButton actionName={'Send'} onClickAction={() => {sendReset(resetEmail)}}/>
                
                <div className="text-[1em] text-white font-medium mt-[45px] mb-[15px] flex justify-between">
                        <Link to="/register" className="cursor-pointer hover:underline"><span>Create an account?</span></Link>
                        <Link to="/login"  className="hover:underline" ><span>Login</span></Link>
                </div>
            </form>
        </div>
     );
}
 
export default ResetForm;