import { FontSize, TextStyle } from "./format";
import TextFormatter from "./text-formatter";
import { toFormatDto } from "./text-formatter-converter";

export { formatWordSense, formatWordQuestion, formatWordAnswer };

function formatWordAnswer(word) {
  const formatter = new TextFormatter("");
  let large = [], bold = [];
  
  if (word.word) {
    const {start, end} = append(formatter, word.word);
    large.push(new Scope(start, end));
    bold.push(new Scope(start, end));
  }

  setFormatInScopes(large, (s, e) => formatter.setSize(s, e, FontSize.Large))
  setFormatInScopes(bold, (s, e) => formatter.setStyle(s, e, TextStyle.Bold))

  return {
    text: formatter.text,
    format: toFormatDto(formatter)
  };
}

function formatWordQuestion(word) {
  const formatter = new TextFormatter("");
  let large = [], bold = [], under = [], italic = [];
  
  if (word.transcription) {
    const {start, end} = append(formatter, "[" + word.transcription + "]\n");
  }
  for (let sense of word.partWordList) {
    if (sense.languageLevel) {
      const {start, end} = append(formatter, sense.languageLevel + " ");
      large.push(new Scope(start, end))
    }
    if (sense.partOfSpeech) {
      const {start, end} = append(formatter, sense.partOfSpeech + "\n");
      large.push(new Scope(start, end))
      bold.push(new Scope(start, end))
    }
    if (sense.definition) {
      const {start, end} = append(formatter, sense.definition + "\n");
      large.push(new Scope(start, end));
    }
    if (sense.examples) {
      const {start, end} = append(formatter, sense.examples.join("\n"));
      italic.push(new Scope(start, end));
    }
    const {start, end} = append(formatter, "\n\n");
  }

  setFormatInScopes(large, (s, e) => formatter.setSize(s, e, FontSize.Large))
  setFormatInScopes(italic, (s, e) => formatter.setStyle(s, e, TextStyle.Italic))
  setFormatInScopes(under, (s, e) => formatter.setStyle(s, e, TextStyle.Underline))
  setFormatInScopes(bold, (s, e) => formatter.setStyle(s, e, TextStyle.Bold))

  return {
    text: formatter.text,
    format: toFormatDto(formatter)
  };
}


function formatWordSense(sense) {
  const formatter = new TextFormatter("");
  let large = [], bold = [], under = [], italic = [];
  if (sense.languageLevel) {
    const {start, end} = append(formatter, sense.languageLevel + " ")
  }
  if (sense.partOfSpeech) {
    const {start, end} = append(formatter, sense.partOfSpeech + "\n")
    large.push(new Scope(0, end))
    bold.push(new Scope(start, end))
  }
  if (sense.topic) {
    const {start, end} = append(formatter, sense.topic + "\n")
    under.push(new Scope(start, end));
  }
  if (sense.definition) {
    const {start, end} = append(formatter, sense.definition + "\n")
    large.push(new Scope(start, end));
  }
  if (sense.examples) {
    const {start, end} = append(formatter, sense.examples.join("\n"))
    italic.push(new Scope(start, end));
  }

  setFormatInScopes(large, (s, e) => formatter.setSize(s, e, FontSize.Large))
  setFormatInScopes(italic, (s, e) => formatter.setStyle(s, e, TextStyle.Italic))
  setFormatInScopes(under, (s, e) => formatter.setStyle(s, e, TextStyle.Underline))
  setFormatInScopes(bold, (s, e) => formatter.setStyle(s, e, TextStyle.Bold))

  return {
    text: formatter.text,
    format: toFormatDto(formatter)
  };
}


function setFormatInScopes(scopes, setFormat) {
  for (let scope of scopes) {
    setFormat(scope.start, scope.end);
  }
}

function append(formatter, text) {
  let start = formatter.text.length;
  formatter.append(text);
  let end = formatter.text.length;
  return {
    start: start,
    end: end
  }
}

class Scope {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}
