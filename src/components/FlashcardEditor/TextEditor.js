import { useState } from "react";
import TextFormatter from "./TextFormatter";
import { toTextFormatter, toFormatDto } from "../../utils/text-format/text-formatter-converter";

class EditorHistory {
  constructor(size) {
    this.size = size ? size : 50;
    this.states = [];
  }
  push(editorState) {
    this.states.push(editorState);
    if (this.states.length > this.size) {
      this.states.shift();
    }
  }
  back() {
    if (this.present()) {
      return this.states.pop();
    } else {
      throw new Error("Editor doesn't have any previous state");
    }
  }
  present() {
    return this.states.length > 0;
  }
}

class EditorState {
  constructor(formatter, caret) {
    this.formatter = formatter;
    this.caret = caret;
  }
}

const TextEditor = ({ format, text, setFormat, setText }) => {
  const [history, setHistory] = useState(new EditorHistory());
  const [caret, setCaret] = useState(0);
  const formatter = toTextFormatter(text, format);

  const setFormatter = (caret, oldFormatter, newFormatter) => {
    const newFormat = toFormatDto(newFormatter);
    const newText = newFormatter.text;
    if (newFormat !== format || newText !== text) {
      setCaret(caret);
      history.push(new EditorState(oldFormatter, caret));
      setFormat(newFormat);
      setText(newText);
    }
  };

  const back = () => {
    if (history.present()) {
      const { formatter, caret } = history.back();
      setHistory(() => {
        const newHistory = new EditorHistory();
        newHistory.states = history.states;
        return newHistory;
      });
      setCaret(caret);
      setFormat(toFormatDto(formatter));
      setText(formatter.text);
    }
  }

  return (
    <>
      <TextFormatter
        formatter={formatter}
        setFormatter={setFormatter}
        caret={caret}
        setCaret={setCaret}
        back={back}
      />
    </>
  );
};

export default TextEditor;
