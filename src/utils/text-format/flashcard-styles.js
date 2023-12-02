import { FontSize, TextStyle } from "./format";
import TextFormatter from "./text-formatter";
import { toFormatDto } from "./text-formatter-converter";

export { formatWordSense };

function formatWordSense(sense) {
  const formatter = new TextFormatter("");
  let large = [], bold = [], under = [], italic = [];
  if (sense.languageLevel) {
    formatter.append(sense.languageLevel + " ");
  }
  if (sense.partOfSpeech) {
    let start = formatter.text.length;
    formatter.append(sense.partOfSpeech + "\n");
    let end = formatter.text.length;
    large.push(new Scope(0, end))
    bold.push(new Scope(start, end))
  }
  if (sense.topic) {
    let start = formatter.text.length;
    formatter.append(sense.topic + "\n");
    let end = formatter.text.length;
    under.push(new Scope(start, end));
  }
  if (sense.definition) {
    let start = formatter.text.length;
    formatter.append(sense.definition + "\n");
    let end = formatter.text.length;
    large.push(new Scope(start, end));
  }
  if (sense.examples) {
    let start = formatter.text.length;
    formatter.append(sense.examples.join("\n"));
    let end = formatter.text.length;
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

class Scope {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}
