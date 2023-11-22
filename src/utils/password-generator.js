
export { generate };

function generate() {
  const passwordLength = 8;
  let charset = ""; 
  let newPassword = ""; 
  charset += "0123456789"; 
  charset += "abcdefghijklmnopqrstuvwxyz"; 
  charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  for (let i = 0; i < passwordLength; i++) { 
      newPassword += charset.charAt( 
          Math.floor(Math.random() * charset.length) 
      ); 
  } 
  return newPassword;
}



