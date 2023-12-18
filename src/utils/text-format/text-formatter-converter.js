import { FontSize, Format, TextColor, TextStyle } from "./format";
import TextFormatter from "./text-formatter";
import TextNode from "./text-node";

export { toTextFormatter, toFormatDto };

function toTextFormatter(text, formatDto) {
  if (!text) {
    text = "";
  }
  const root = formatDto ? textnodeFromString(formatDto) : new TextNode(0, text.length);
  return new TextFormatter(text, root);
}

function toFormatDto(formatter) {
  return textnodeToString(formatter.root);
}

function textnodeToString(node) {
  const scope = '[' + node.start + ',' + node.end + ']'
  const format = formatToString(node.format);
  const childrenList = [];
  for (let child of node.children) {
    childrenList.push(textnodeToString(child));
  }
  const children = '[' + childrenList.join(',') + ']';
  return '{' + scope + ';' + format + ';' + children + '}'
}

function textnodeFromString(str) {
  str = str.substring(1, str.length - 1);
  const [scope, maintain] = splitOneTime(str, ';');
  const [format, childrenStr] = splitOneTime(maintain, ';');
  const [start, end] = scope.substring(1, scope.length - 1).split(',');
  const subnodes = splitNodeChildren(childrenStr.substring(1, childrenStr.length - 1));
  const children = [];
  for (let subnode of subnodes) {
    children.push(textnodeFromString(subnode));
  }
  const node = new TextNode(parseInt(start), parseInt(end));
  node.format = formatFromString(format);
  node.children = children;
  return node;
}

function splitNodeChildren(childrenStr) {
  const children = [];
  let i, l;
  for (i = 0, l = 0; i < childrenStr.length; i++) {
    if (childrenStr.charAt(i) === ',' && childrenStr.charAt(i - 1) === '}' && childrenStr.charAt(i + 1) === '{') {
      children.push(childrenStr.substring(l, i))
      l = i + 1;
    }
  }
  if (childrenStr) {
    children.push(childrenStr.substring(l, i));
  }
  return children;
}

function splitOneTime(str, substr) {
  const i = str.indexOf(substr);
  return [
    str.substring(0, i),
    str.substring(i + substr.length)
  ];
}

function formatToString(format) {
  const tokens = [];
  if (format.size) {
    tokens.push(format.size.substring(0, 3));
  }
  if (format.color) {
    tokens.push(format.color.substring(0, 3));
  }
  if (format.styles) {
    for (let style of format.styles) {
      tokens.push(style.substring(0, 3));
    }
  }
  return '[' + tokens.join(',') + ']'
}

function formatFromString(str) {
  const format = new Format();
  str = str.substring(1, str.length - 1);
  if (!str) {
    return format;
  }
  const props = str.split(',');
  for (let prop of props) {
    for (let i in FontSize) {
      if (FontSize[i].startsWith(prop)) {
        format.size = FontSize[i];
        continue;
      }
    }
    for (let i in TextColor) {
      if (TextColor[i].startsWith(prop)) {
        format.color = TextColor[i];
        continue;
      }
    }
    for (let i in TextStyle) {
      if (TextStyle[i].startsWith(prop)) {
        format.styles.push(TextStyle[i]);
        continue;
      }
    }
  }
  return format;
}


