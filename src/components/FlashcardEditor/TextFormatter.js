import { useEffect, useState } from "react";
import TextTools from "./TextTools";
import TextFormat from "../constant/TextFormat";
import { useRef } from "react";
// import { toFormatDto, toTextFormatter } from "../../utils/text-format/text-formatter-converter";


//////////----------------------COMPONENT

const TextFormatter = ({ formatter, setFormatter, caret, back }) => {
  // const formatter = toTextFormatter(text, format);
  const container = useRef();
  let position = {};

  useEffect(() => {
    if (container.current.childNodes.length > 0) {
      new Caret(container.current).setPosition(caret);
    }
  }, [formatter]);

  const updateEditor = (caret, updateFormatter) => {
    const oldFormatter = formatter;
    const newFormatter = formatter.clone();
    updateFormatter(newFormatter);
    setFormatter(caret, oldFormatter, newFormatter);
  };

  const insertText = (text, { anchor, focus }) => {
    if (anchor != focus) {
      deleteText({ anchor, focus });
    }
    const index = Math.min(anchor, focus);
    const update = (p) => p.insert(index, text);
    updateEditor(index + text.length, update);
  };

  const deleteText = ({ anchor, focus }) => {
    let index = 0,
      shift = 0;
    if (anchor === focus) {
      index = anchor - 1;
      shift = 1;
    } else {
      index = Math.min(anchor, focus);
      shift = Math.abs(anchor - focus);
    }
    const update = (p) => p.remove(index, shift);
    updateEditor(index, update);
  };

  const onInputAction = (e) => {
    const ne = e.nativeEvent;
    if (ne.inputType === "insertText") {
      insertText(ne.data, position);
    } else if (ne.inputType === "deleteContentBackward") {
      deleteText(position);
    }
  };

  const onKey = (e) => {
    position = new Caret(container.current).getPosition();
    if (e.ctrlKey && e.key === "z") {
      e.preventDefault();
      back();
    } else if (e.code === "Enter") {
      e.preventDefault();
      insertText("\n", position);
    } else if (e.code === "Backspace" || e.code === "Delete" || (e.ctrlKey && e.key == "x")) {
      e.preventDefault();
      deleteText(position);
    }
  };

  const onPaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text");
    insertText(text, position);
  };

  const setFormatToText = (formatting) => {
    const position = new Caret(container.current).getPosition();
    const start = Math.min(position.anchor, position.focus);
    const end = Math.max(position.anchor, position.focus);
    if (start - end !== 0) {
      updateEditor(position.focus, (formatter) =>
        formatting(start, end, formatter)
      );
    }
  };

  const onBlur = (e) => {
    if (
      e.relatedTarget &&
      e.relatedTarget.className &&
      e.relatedTarget.className.includes("text-tool-button")
    ) {
      e.target.focus();
    }
  };

  return (
    <div className="w-full h-full">
      <div
        className="w-full bg-charcoal p-[15px] rounded-xl overflow-y-auto 
            text-gray-200 font-sans h-full outline-none hover:bg-soft-green
            focus-visible:bg-charcoal focus-visible:border-b-4 focus-visible:border-dark-grey 
            [&:focus-visible~div.hidden]:flex
            whitespace-break-spaces"
        suppressContentEditableWarning={true}
        contentEditable="true"
        onInput={onInputAction}
        onKeyDown={onKey}
        ref={container}
        onPaste={onPaste}
        onBlur={onBlur}
        onDrop={(e) => e.preventDefault()}
      >
        <TextFormat
          textnode={formatter.root}
          text={formatter.text}
        />
      </div>
      <div className="absolute hidden top-[-45px] left-[-40px] [&:focus-visible] [&:hover]:flex">
        <TextTools setFormat={setFormatToText} />
      </div>
    </div>
  );
};

class Caret {
  constructor(target) {
    this.target = target;
  }
  getPosition() {
    let anchorNode = window.getSelection().anchorNode;
    let focusNode =  window.getSelection().focusNode;
    let anchor = window.getSelection().anchorOffset;
    let focus = window.getSelection().focusOffset;
    return {
      anchor: shiftCurrentPositionToTarget(this.target, anchorNode, anchor),
      focus: shiftCurrentPositionToTarget(this.target, focusNode, focus),
    };
  }
  setPosition(pos) {
    setCaretRecursion(this.target, { value: pos, isSet: false });
  }
}

function shiftCurrentPositionToTarget(target, current, pos) {
    if (current == null) {
      return 0;
    }
    while (current !== target) {
      const parent = current.parentNode;
      if (parent === null) return 0;
      if (parent.childNodes) {
        for (let i = 0; i < parent.childNodes.length; i++) {
          if (parent.childNodes[i] === current) {
            break;
          }
          if (parent.childNodes[i].textContent) {
            const l = parent.childNodes[i].textContent.length;
            pos += l;
          }
        }
      }
      current = parent;
    }
    return pos;
}

function setCaretRecursion(target, pos) {
  if (target.childNodes && target.childNodes.length > 0) {
    for (let i = 0; i < target.childNodes.length; i++) {
      if (pos.isSet) {
        break;
      }
      setCaretRecursion(target.childNodes[i], pos);
    }
  } else {
    if (target.textContent) {
      if (pos.value <= target.textContent.length) {
        setCaretDirect(target, pos.value);
        pos.isSet = true;
      } else {
        pos.value -= target.textContent.length;
      }
    }
  }
}

function setCaretDirect(target, pos) {
  var range = document.createRange();
  var sel = window.getSelection();
  range.setStart(target, pos);
  range.collapse(true);
  sel.removeAllRanges();
  sel.addRange(range);
}


export default TextFormatter;
