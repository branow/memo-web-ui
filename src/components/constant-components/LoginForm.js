import { Link } from 'react-router-dom'
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import WarningAlert from './WarningAlert';
import LoadingSpinner from './LoadingSpinner';


const LoginForm = () => {
    return (
        <div className="w-[450px] p-[50px]">
            <h2 className="text-[40px] text-white text-center font-semibold">Log in</h2>
            <form action="#">
                <div className="relative w-[100%] h-[50px] border-b-2 border-solid border-white my-[30px]">
                    <span className="absolute right-[8px] text-[1.2em] text-white leading-[57px]"><HiOutlineMail className='mt-[7px]' size='20px'/></span>
                    <input className="peer w-[100%] h-[100%] bg-transparent text-[1em] text-white font-semibold pl-[5px] pr-[35px] border-none outline-none" 
                    type="email" required pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                    title="Must be in specified format: someemail@mail.ma"/>
                    <label className="absolute top-[50%] left-[5px] translate-y-[-50%] text-[1em] text-white font-medium duration-[.5s] peer-focus:top-[-5px] peer-valid:top-[-5px] pointer-events-none">Email</label>
                </div>

                <div className="relative w-[100%] h-[50px] border-b-2 border-solid border-white my-[30px]">
                    <span className="absolute right-[8px] text-[1.2em] text-white leading-[57px]"><RiLockPasswordLine className='mt-[7px]' size='20px'/></span>
                    <input className="peer w-[100%] h-[100%] bg-transparent text-[1em] 
                    text-white font-semibold pl-[5px] pr-[35px] border-none outline-none"
                    type="password" required 
                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"/>
                    <label className="absolute top-[50%] left-[5px] translate-y-[-50%] text-[1em] 
                    text-white font-medium duration-[.5s] peer-focus:top-[-5px] peer-valid:top-[-5px] pointer-events-none">Password</label>
                </div>

                <div className="relative m-auto flex">
                    <button type="submit" className="w-1/2 h-[45px] bg-main-green cursor-pointer text-[1.5em] text-white font-medium m-auto p-0 duration-500
            hover:bg-green-700">Login</button>
                </div>
                <div className="text-[1em] text-white font-medium mt-[45px] mb-[15px] flex justify-between">
                        <Link to="/register" className="cursor-pointer hover:underline"><span>Create an account?</span></Link>
                        <Link to="/reset"  className="hover:underline" ><span>Forgot password?</span></Link>
                </div>
            </form>
        </div>
     );
}
 
export default LoginForm;