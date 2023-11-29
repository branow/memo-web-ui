export { FontSize, TextColor, TextStyle, Format };

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
    this.styles = new Set();
  }

  add(format) {
    if (this.size == null) {
      this.size = format.size;
    }
    if (this.color == null) {
      this.color = format.color;
    }
    format.styles.forEach((e) => this.styles.add(e));
  }

  merge(format) {
    if (format.size != null) {
      this.size = format.size;
    }
    if (format.color != null) {
      this.color = format.color;
    }
    format.styles.forEach((e) => this.styles.add(e));
  }

  subtract(format) {
    if (this.size === format.size) {
      this.size = null;
    }
    if (this.color === format.color) {
      this.color = null;
    }
    format.styles.forEach((e) => this.styles.delete(e));
  }

  clear() {
    this.size = null;
    this.color = null;
    this.styles.clear();
  }

  clone() {
    const format = new Format();
    format.color = this.color;
    format.size = this.size;
    this.styles.forEach((e) => format.styles.add(e));
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
