import { useEffect, useState } from "react";
import TextTools from "./TextTools";
import TextFormat from "../constant/TextFormat";
import { useRef } from "react";
import { toTextFormatter } from "../../utils/text-format/text-formatter-converter";

class EditorHistory {
  constructor(size) {
    this.size = size ? size : 50;
    this.states = [];
  }
  push(editor) {
    this.states.push(editor);
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

const history = new EditorHistory();

//////////----------------------COMPONENT

const FlashcardSideTextEdit = ({ format, text }) => {
  const [editor, setEditor] = useState(
    new Editor(0, toTextFormatter(text, format))
  );
  const container = useRef();

  let anchorOffset = window.getSelection().anchorOffset;
  let focusOffset = window.getSelection().focusOffset;

  useEffect(() => {
    if (container.current.childNodes.length > 0) {
      console.log(editor.caret);
      setCaret(container.current, editor.caret);
    }
  }, [editor]);

  const updateEditor = (caret, updateFormatter) => {
    setEditor((prEditor) => {
      history.push(prEditor);
      const clone = prEditor.clone();
      clone.caret = caret;
      updateFormatter(clone.formatter);
      return clone;
    });
  };

  const insertText = (text, caret) => {
    const index = anchorOffset;
    caret = caret ? caret : window.getSelection().focusOffset;
    const update = (p) => p.insert(index, text);
    updateEditor(caret, update);
  };

  const deleteText = () => {
    const caret = window.getSelection().focusOffset;
    let index = 0,
      shift = 0;
    if (anchorOffset === focusOffset) {
      index = anchorOffset - 1;
      shift = 1;
    } else {
      index = Math.min(anchorOffset, focusOffset);
      shift = Math.abs(focusOffset - anchorOffset);
    }
    const update = (p) => p.remove(index, shift);
    updateEditor(caret, update);
  };

  const back = () => {
    setEditor(history.back().shellClone());
  };

  const onInputAction = (e) => {
    const ne = e.nativeEvent;
    if (ne.inputType === "insertText") {
      insertText(ne.data);
    } else if (ne.inputType === "deleteContentBackward") {
      deleteText();
    }
  };

  const onKey = (e) => {
    anchorOffset = window.getSelection().anchorOffset;
    focusOffset = window.getSelection().focusOffset;

    if (e.ctrlKey && e.key === "z") {
      e.preventDefault();
      if (history.present()) {
        back();
      }
    } else if (e.code === "Enter") {
      e.preventDefault();
      insertText("\n", window.getSelection().focusOffset + 1);
    }
  };

  const onPaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text");
    insertText(text, window.getSelection().focusOffset + text.length);
  };

  return (
    <div className="w-full h-full [&:hover>div]:flex">
      <div className="absolute hidden left-[20px] top-[25vh]">
        <TextTools />
      </div>
      <div className="w-[10px]"></div>
      <div
        className="flex flex-col w-full bg-collection-grey p-[15px] rounded-xl overflow-y-auto 
            text-gray-200 font-sans h-full outline-none hover:bg-soft-green
            focus-visible:bg-collection-grey focus-visible:border-b-4 focus-visible:border-form-background-grey whitespace-pre-wrap"
        suppressContentEditableWarning={true}
        contentEditable="true"
        onInput={onInputAction}
        onKeyDown={onKey}
        ref={container}
        onPaste={onPaste}
      >
        <TextFormat
          textnode={editor.formatter.root}
          text={editor.formatter.text}
        />
      </div>
    </div>
  );
};

function setCaret(target, pos) {
  var range = document.createRange();
  var sel = window.getSelection();
  range.setStart(target.childNodes[0], pos);
  range.collapse(true);
  sel.removeAllRanges();
  sel.addRange(range);
}

class Editor {
  constructor(caret, formatter) {
    this.caret = caret;
    this.formatter = formatter;
  }

  shellClone() {
    return new Editor(this.caret, this.formatter);
  }
  clone() {
    return new Editor(this.caret, this.formatter.clone());
  }
}

export default FlashcardSideTextEdit;
