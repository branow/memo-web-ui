import { Format } from "./format";
import TextFormatter from "./text-formatter";
import TextNode from "./text-node";

export { toTextFormatter, toFormatDto };

function toTextFormatter(text, formatDto) {
  const root = formatDto ? toTextNode(JSON.parse(formatDto)) : new TextNode(0, text.length);
  return new TextFormatter(text, root);
}

function toFormatDto(formatter) {
  return JSON.stringify(formatter.root);
}

function toTextNode(jsonObject) {
  const node = new TextNode();
  node.format = new Format();
  node.format.size = jsonObject.format.size;
  node.format.color = jsonObject.format.color;
  node.format.styles = jsonObject.format.styles;
  node.start = jsonObject.start;
  node.end = jsonObject.end;
  for (let i = 0; i < jsonObject.children.length; i++) {
    node.children[i] = toTextNode(jsonObject.children[i]);
  }
  return node;
}