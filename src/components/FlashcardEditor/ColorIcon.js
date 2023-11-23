
const ColorIcon = ( {size, color} ) => {
  var num = parseInt(size);
  const br = num / 2;

  return (
    <>
      <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg">
        <circle cx={br} cy={br} r={br - 3} stroke="white" stroke-width="2" fill={color} />
      </svg>
    </>
  );
};

export default ColorIcon;
