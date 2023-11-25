import TextFormatter from "./text-formatter";
import TextNode from "./text-node";

export { toTextFormatter, toFormatDto };

function toTextFormatter(text, formatDto) {
  const root = formatDto ? JSON.parse(formatDto) : new TextNode(0, text.length);
  return new TextFormatter(text, root);
}

function toFormatDto(formatter) {
  return JSON.stringify(formatter.root);
}
