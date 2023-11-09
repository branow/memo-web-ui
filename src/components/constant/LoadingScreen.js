import LoadingSpinner from "./LoadingSpinner";
const LoadingScreen = () => {
  return (
    <div className="absolute flex items-center justify-center w-full h-full bg-form-background-darkened z-30 top-0 left-0">
      <LoadingSpinner loadingMessage={"Loading"}></LoadingSpinner>
    </div>
  );
};

export default LoadingScreen;
