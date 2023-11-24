import TextNode from "./text-node";
import { Format } from "./Format";

class TextFormatter {
  constructor(text) {
    this.text = text;
    this.root = new TextNode(0, text.length);
  }

  setStyle(start, end, style) {
    const format = new Format();
    format.styles.push(style);
    setFormat(start, end, format);
  }

  setSize(start, end, size) {
    const format = new Format();
    format.size = size;
    setFormat(start, end, format);
  }

  setColor(start, end, color) {
    const format = new Format();
    format.color = color;
    setFormat(start, end, format);
  }

  setFormat(start, end, format) {
    const node = new TextNode(start, end);
    node.addFormat(format);
    this.root.addChild(node);
  }

  insert(index, text) {
    this.text.insert(index, text);
    shiftInsert(index, text.length(), this.root);
  }

  remove(index, length) {
    this.text.replace(index, index + length, "");
    shiftRemove(index, length, this.root);
  }

  clear() {
    this.root.children = [];
    this.root.format.clear();
  }
}

function shiftInsert(index, shift, node) {
  if (index <= node.end) {
    node.end = Math.max(node.end + shift, 0);
    if (index < node.start) {
      node.start = Math.max(node.start + shift, 0);
    }
    for (let i in node.children) {
      shiftInsert(index, shift, children[i]);
    }
  }
}

function shiftRemove(index, shift, node) {
  if (index <= node.end) {
    const remove = Math.min(node.end - index, shift);
    node.end = node.end - remove;
    if (index < node.start) {
      node.start = Math.max(node.start - shift, 0);
    }
  }
  if (node.end - node.start <= 0) {
    node.children = [];
  } else {
    const toRemove = [];
    for (let i in node.children) {
      const child = children[i];
      shiftRemove(index, shift, child);
      if (child.end - child.start <= 0) {
        toRemove.push(child);
      }
    }
    node.children = children.filter((e) => toRemove.indexOf(e) === -1);
  }
}

export default TextFormatter;
