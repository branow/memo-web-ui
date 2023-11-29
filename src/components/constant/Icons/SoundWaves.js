import { GiSoundWaves } from "react-icons/gi";

const SoundWaves = ({ size, color }) => {
  return (
    <>
      <div className="flex">
        <GiSoundWaves size={size} color={color} />
        <GiSoundWaves size={size} color={color} />
        <GiSoundWaves size={size} color={color} />
      </div>
    </>
  );
};

export default SoundWaves;
