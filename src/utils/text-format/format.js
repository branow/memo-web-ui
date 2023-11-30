const FontSize = Object.freeze({
  Small: "small",
  Large: "large",
});

const TextColor = Object.freeze({
  White: "white",
  Black: "black",
  Blue: "blue",
  Green: "green",
  Yellow: "yellow",
  Red: "red",
});

const TextStyle = Object.freeze({
  Bold: "bold",
  Italic: "italic",
  Underline: "underline",
});

class Format {
  constructor() {
    this.size = null;
    this.color = null;
    this.styles = [];
  }

  add(format) {
    if (this.size == null) {
      this.size = format.size;
    }
    if (this.color == null) {
      this.color = format.color;
    }
    format.styles.forEach((e) => this.styles.push(e));
    this.styles = [...new Set(this.styles)];
  }

  merge(format) {
    if (format.size != null) {
      this.size = format.size;
    }
    if (format.color != null) {
      this.color = format.color;
    }
    format.styles.forEach((e) => this.styles.push(e));
    this.styles = [...new Set(this.styles)];
  }

  subtract(format) {
    if (this.size === format.size) {
      this.size = null;
    }
    if (this.color === format.color) {
      this.color = null;
    }
    this.styles = this.styles.filter(e => format.styles.indexOf(e) === -1);
  }

  clear() {
    this.size = null;
    this.color = null;
    this.styles = [];
  }

  clone() {
    const format = new Format();
    format.color = this.color;
    format.size = this.size;
    this.styles.forEach((e) => format.styles.push(e));
    return format;
  }

  equals(format) {
    return (
      this.color === format.color &&
      this.size === format.size &&
      this.styles === format.styles
    );
  }
}

export { FontSize, TextColor, TextStyle, Format };