import TextNode from "./text-node";
import { Format } from "./format";

export default class TextFormatter {
  constructor(text, root) {
    this.text = text;
    this.root = root ? root : new TextNode(0, text.length);
  }

  setText(text) {
    const shift = text.length - this.text.length;
    if (shift != 0) {
      let index = -1;
      for (let i = 0; i < this.text.length && i < text.length; i++) {
        if (this.text.charAt(i) != text.charAt(i)) {
          index = i;
          break;
        }
      }
      if (index == -1) {
        index = Math.min(this.text.length, text.length);
      }
      if (shift > 0) {
        this.insert(index, text.substring(index, index + shift));
      } else {
        this.remove(index, -shift);
      }
    }
  }

  setFormat(start, end, format) {
    const node = new TextNode(start, end);
    node.addFormat(format);
    this.root.addChild(node);
  }

  setStyle(start, end, style) {
    const format = new Format();
    format.styles.push(style);
    this.setFormat(start, end, format);
  }

  setSize(start, end, size) {
    const format = new Format();
    format.size = size;
    this.setFormat(start, end, format);
  }

  setColor(start, end, color) {
    const format = new Format();
    format.color = color;
    this.setFormat(start, end, format);
  }

  insert(index, text) {
    this.text = this.text.substring(0, index) + text + this.text.substring(index);
    shiftInsert(index, text.length, this.root);
  }

  remove(index, length) {
    if (index === 0 && this.text.length == length) {
      this.children = [];
    } else {
      this.text = this.text.substring(0, index) + this.text.substring(index + length);
      shiftRemove(index, length, this.root);
    }
  }

  clear() {
    this.root.children = [];
    this.root.format.clear();
  }

  clone() {
    return new TextFormatter(this.text, this.root.clone())
  }
}


function shiftInsert(index, shift, node) {
  if (index <= node.end) {
    node.end = Math.max(node.end + shift, 0);
    if (index < node.start) {
      node.start = Math.max(node.start + shift, 0);
    }
    for (let i in node.children) {
      shiftInsert(index, shift, node.children[i]);
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
      const child = node.children[i];
      shiftRemove(index, shift, child);
      if (child.end - child.start <= 0) {
        toRemove.push(child);
      }
    }
    node.children = node.children.filter((e) => toRemove.indexOf(e) === -1);
  }
}

