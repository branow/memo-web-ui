const ErrorBox = ({ title, message }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 ">
      <div className="text-[16px] font-bold">
        <span>{title}</span>
      </div>
      <div className="text-[14px] font-medium">
        <span>{message}</span>
      </div>
    </div>
  );
};

export default ErrorBox;
