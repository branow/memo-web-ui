import { UserCookies } from "./user-cookie";

export { readSettings, writeSettings };

const replacements = [
  ['{', '%OS'],
  ['}', '%OE'],
  ['[', '%AS'],
  [']', '%AE'],
  ['"', '%S'],
  [':', '%Cl'],
  [',', '%CM'],
];


function readSettings() {
  const setting = new UserCookies().learningSettings.get();
  if (setting) {
    let cookie = setting + "";
    for (let replacement of replacements) {
      cookie = cookie.replaceAll(replacement[1], replacement[0]);
    }
    return JSON.parse(cookie); 
  } else {
    const def = defaultSettings();
    writeSettings(def);
    return def;
  }
}

function writeSettings(settings) {
  let cookie = JSON.stringify(settings);
  for (let replacement of replacements) {
    cookie = cookie.replaceAll(replacement[0], replacement[1]);
  }
  new UserCookies().learningSettings.set(cookie);
}

function defaultSettings() {
  return {
    sort: true,
    levels: [0, 1, 2],
    audio: true,
  };
}
