import LoadingSpinner from "./LoadingSpinner";

const LoadingAnimation = ({ message, transparent }) => {
  const loadingMessage = message ? message : "Loading";
  return (
    <>
      {transparent && (
        <div className="absolute flex items-center justify-center w-full h-full z-30 top-0 left-0 bg-opacity-0">
          <LoadingSpinner loadingMessage={loadingMessage} />
        </div>
      )}
      {!transparent && (
        <div className="absolute flex items-center justify-center w-full h-full z-30 top-0 left-0 bg-glassy-grey ">
          <LoadingSpinner loadingMessage={loadingMessage} />
        </div>
      )}
    </>
  );
};

export default LoadingAnimation;
