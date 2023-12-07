import { useRef } from "react";

const WindowWrapper = ({ children, close }) => {
  const background = useRef();

  const handleOnClick = (e) => {
    if (e.target === background.current && close) {
      close()
    }
  }

  return (
    <>
      <div
        className="h-[100vh] w-[100vw] bg-glassy-grey fixed top-0 left-0 z-30 overflow-y-auto"
        onClick={handleOnClick}
        ref={background}
      >
        <div className="h-full w-full z-40 flex flex-col justify-center items-center">{children}</div>
      </div>
    </>
  );
};

export default WindowWrapper;
