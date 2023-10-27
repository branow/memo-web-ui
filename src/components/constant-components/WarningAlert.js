const WarningAlert = ({warningMessage}) => {
    return ( 
        <div className="p-4 mt-[10px] mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
            <span className="font-medium">Warning alert! {warningMessage}</span>
        </div>
     );
}
 
export default WarningAlert;