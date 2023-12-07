import { RxAvatar } from "react-icons/rx";

const Avatar = ({ size, color }) => {
    return (
      <div className="p-[5px] rounded-full hover:bg-soft-green">
        <RxAvatar size={size} color={color} />
      </div>
    );
}
 
export default Avatar;