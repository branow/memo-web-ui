import stringSimilarity from "string-similarity-js";
import DiffMatchPatch from 'diff-match-patch';

export { estimate, html }; 

function estimate(expected, actual) {
  [expected, actual] = toLowerCaseAndTrimArray(expected, actual);
  return Math.ceil(stringSimilarity(expected, actual) * 100);
}

function html(expected, actual) {
  [expected, actual] = toLowerCaseAndTrimArray(expected, actual);
  const dmp = new DiffMatchPatch();
  const diffs = dmp.diff_main(actual, expected);
  let html = '';
  for (let diff of diffs) {
    const [code, str] = diff;
    switch (code) {
      case 0: 
        html += str;
        break;
      case -1: 
        html += `<span style="background:rgba(245, 42, 0, 0.3)">${str}</span>`
        break;
      case 1: 
        html += `<span style="background:rgba(48, 255, 116, 0.2)">${str}</span>`
        break;
      default: throw Error("Illegal number value during transforming difference into html: " + diff[0]);
    }
  }
  return `<span id="answer">${html}</span>`
}

function toLowerCaseAndTrimArray(...str) {
  return str.map(toLowerCaseAndTrim);
}

function toLowerCaseAndTrim(str) {
  return str.toLowerCase().trim();
}