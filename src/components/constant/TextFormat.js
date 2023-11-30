const TextFormat = ({ textnode, text }) => {
  let start = textnode.start;
  let end = 0;
  //children wrap
  let inner = (
    <>
      {textnode.children.map((e) => {
        end = e.start;
        var t1 = text.substring(start, end);
        var child = (
          <>
            {t1}
            <TextFormat textnode={e} text={text} />
          </>
        );
        start = e.end;
        return child;
      })}
      {text.substring(start, textnode.end)}
    </>
  );
  
  //Styles wrap
  const styles = Array.from(textnode.format.styles);
  for (let style of styles) {
    inner = (
      <TextFormatTeg format={style} inner={inner} />
    );
  }

  //Color wrap
  inner = <TextFormatTeg format={textnode.format.color} inner={inner} />;

  //Font size wrap
  inner = <TextFormatTeg format={textnode.format.size} inner={inner} />;
  return <>{inner}</>;
};

const TextFormatTeg = ({ format, inner }) => {
  return (
    <>
      {!format && <>{inner}</>}
      {format === "bold" && <b>{inner}</b>}
      {format === "italic" && <i>{inner}</i>}
      {format === "underline" && <u>{inner}</u>}

      {format === "small" && <span className="text-sm">{inner}</span>}
      {format === "large" && <span className="text-xl">{inner}</span>}

      {format === "red" && <span className="text-red-500">{inner}</span>}
      {format === "blue" && <span className="text-blue-500">{inner}</span>}
      {format === "white" && <span className="text-gray-100">{inner}</span>}
      {format === "black" && <span className="text-gray-900">{inner}</span>}
      {format === "green" && <span className="text-green-500">{inner}</span>}
      {format === "yellow" && <span className="text-yellow-500">{inner}</span>}
    </>
  );
};

export default TextFormat;
