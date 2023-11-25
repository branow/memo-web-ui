import { Format } from "./format";

class TextNode {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.format = new Format();
    this.children = [];
  }

  addFormat(format) {
    this.format.merge(format);
    for (let i in this.children) {
      this.children[i].format.subtract(this.format);
    }
  }

  addChild(node) {
    if (isEqual(this, node)) {
      this.addFormat(node.format);
    } else if (isEmbedded(this, node)) {
      node.format.subtract(this.format);
      for (let i = 0; i < this.children.length; i++) {
        const temp = this.children.get(i);
        if (isEqual(temp, node)) {
          temp.addFormat(node.format);
          return;
        } else if (isEmbedded(temp, node)) {
          temp.addChild(node);
          return;
        } else if (isEmbedded(node, temp)) {
          node.addChild(temp);
        } else if (isCrossed(temp, node)) {
          const n1 = temp.sub(temp.start, node.start);
          let index = this.children.indexOf(temp);
          this.children[index] = n1;
          const n2 = temp.sub(node.start, temp.end);
          node.addChild(n2);
        } else if (isCrossed(node, temp)) {
          const n1 = temp.sub(node.end, temp.end);
          let index = this.children.indexOf(temp);
          this.children[index] = n1;
          const n2 = temp.sub(temp.start, node.end);
          node.addChild(n2);
          break;
        }
      }
      this.children = this.children.filter(
        (e) => node.children.indexOf(e) === -1
      );
      this.children.push(node);
    } else {
      throw new Error("index out of root component length");
    }
  }

  sub(start, end) {
    const node = new TextNode(start, end);
    node.format.merge(this.format);
    if (isEqual(this, node)) {
      return this.clone();
    } else if (isEmbedded(this, node)) {
      for (let i in this.children) {
        const child = this.children[i];
        if (isEqual(child, node)) {
          const res = child.clone();
          res.addFormat(this.format);
          return res;
        }
        if (isEmbedded(child, node)) {
          const res = child.sub(start, end);
          res.addFormat(this.format);
          return res;
        } else if (isCrossed(node, child)) {
          node.addChild(child.sub(child.start, node.end));
          return node;
        } else if (isEmbedded(node, child)) {
          node.addChild(child.clone());
        } else if (isCrossed(child, node)) {
          node.addChild(child.sub(node.start, child.end));
        }
      }
    } else {
      throw new Error("sub node cannot have indexes value out of parent node");
    }
    return node;
  }

  clone() {
    const clone = new TextNode(this.start, this.end);
    clone.format.merge(this.format.clone());
    this.children.forEach((e) => clone.children.push(e.clone()));
    return clone;
  }
}

function isCrossed(arg1, arg2) {
  return arg1.end > arg2.start && arg1.start < arg2.start;
}

function isEmbedded(base, arg) {
  return base.start <= arg.start && base.end >= arg.end;
}

function isEqual(arg1, arg2) {
  return arg1.start == arg2.start && arg1.end == arg2.end;
}


export default TextNode;