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
  
  merge(format) {
    if (format.getSize() != null) {
      this.size = format.getSize();
    }
    if (format.getColor() != null) {
      this.color = format.getColor();
    }
    this.styles.addAll(format.getStyle());
  }

  subtruct(format) {
    if (this.size === format.size) {
      this.size = null;
    }
    if (this.color === format.color) {
      this.color = null;
    }
    this.styles.removeAll(format.getStyle());
  }

  clear() {
    this.size = null;
    this.color = null;
    this.styles.clear;
  }

  clone() {
    const format = new Format();
    format.color = this.color;
    format.size = this.size;
    format.styles.addAll(this.styles);
    return format;
  }
}
