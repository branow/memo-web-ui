import { TbCardsFilled } from "react-icons/tb";

const Logo = ({ iconSize, textSize, color, headerLogo }) => {
    return (
      <div>
        { headerLogo && (
          <div className="flex text-dark-grey">
            <TbCardsFilled size="60px" />
            <span className="self-center mx-[15px] font-bold font-mono whitespace-nowrap text-5xl">
              Memo
            </span>
          </div>
        )}
        { !headerLogo && (
          <div className="flex">
          <TbCardsFilled size="12vw" />
          <span className="self-center mx-[15px] font-bold font-mono whitespace-nowrap text-[5vw]">
            Memo
          </span>
        </div>
        )}
      </div>
    );
}
 
export default Logo;