const PasswordValidationTracker = () => {
    return ( 
        <div className="bg-transparent text-[0.9em] text-white font-medium pl-[5px] pr-[35px] border-none outline-none">
            <span>Password should contain:</span>
            <div>At least one lowercase letter</div>
            <div>At least one uppercase letter</div>
            <div>At least one number</div>
            <div>At least one special character</div>
            <div>At least 8 characters</div>
        </div>
     );
}
 
export default PasswordValidationTracker;