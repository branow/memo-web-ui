import { useRef } from "react";

const WindowWrapper = ({ children, close }) => {
  const background = useRef();

  const handleOnClick = (e) => {
    if (e.target === background.current) {
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
        <div className="mt-[10vh] mb-[10vh] h-fit w-fit m-auto z-40 flex flex-col">{children}</div>
      </div>
    </>
  );
};

export default WindowWrapper;
