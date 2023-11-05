const ErrorBox = ({ errorTitle, errorMessage }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 mt-[10px] mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 ">
      <div className="text-[16px] font-bold">
        <span>{errorTitle}</span>
      </div>
      <div className="text-[14px] font-medium">
        <span>{errorMessage}</span>
      </div>
    </div>
  );
};

export default ErrorBox;
