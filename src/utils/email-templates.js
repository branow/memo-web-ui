

function createVerificationEmail(receiver, token) {
  return {
    receiver: receiver,
    subject: 'Memo Web: Registration Confirmation',
    body: verificationEmailHtml(token),
  }
};


function verificationEmailHtml(token) {
  const val = `
  <h1>Push the button to confirm the registration</h1>
  <a href="http://localhost:3000/confirm?token=${token}">
  <button>Confirm</button>
  </a>
  `;
  return val;
}

export {createVerificationEmail};



