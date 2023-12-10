import { TbCardsFilled } from "react-icons/tb";

const Logo = ({ iconSize, textSize, color }) => {
    return (
      <div className={"flex text-" + color}>
        <TbCardsFilled size={iconSize} />
        <span className={"self-center mx-[15px] font-bold font-mono whitespace-nowrap " + textSize}>
          Memo
        </span>
      </div>
    );
}
 
export default Logo;