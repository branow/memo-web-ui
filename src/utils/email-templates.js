export { createVerificationEmail, createNewPasswordEmail };

function createNewPasswordEmail(receiver, password) {
  return {
    receiver: receiver,
    subject: "Memo Web: New Password",
    body: `
    <h1>Your new password:</h1>
    <h4>${password}</h4>
    <p>We automatically created a new password for your. Use it to logint into system. 
    You can change your password in the account setting at any momemnt.</p>
    `,
  };
}

function createVerificationEmail(receiver, token) {
  return {
    receiver: receiver,
    subject: "Memo Web: Registration Confirmation",
    body: verificationEmailHtml(token),
  };
}

function verificationEmailHtml(token) {
  const val = `
  <h1>Push the button to confirm the registration</h1>
  <a href="http://localhost:3000/confirm?token=${token}">
  <button>Confirm</button>
  </a>
  `;
  return val;
}
