// const express = require("express");
// const nodemailer = require("nodemailer");
// const cors = require("cors");
// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(express.json({ limit: "25mb" }));
// app.use(express.urlencoded({ limit: "25mb" }));
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   next();
// });

// var myemail = 'cpdemo023@gmail.com';
// var mypassword = 'uyjbocuahoacptxz';

// function sendEmail({ recipient_email, subject, message }) {
//   return new Promise((resolve, reject) => {
//     var transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: myemail,
//         pass: mypassword,
//       },
//     });
//     const mail_configs = {
//         from: myemail,
//         to: recipient_email,
//         subject: subject,
//         text: message,
//     }
//     transporter.sendMail(mail_configs, function (error, info) {
//         if (error) {
//           console.log(error);
//           return reject({ message: `An error has occured` });
//         }
//         return resolve({ message: "Email sent successfuly" });
//       });
//     });
//   }
  
//   app.get("/", (req, res) => {
//     sendEmail()
//       .then((response) => res.send(response.message))
//       .catch((error) => res.status(500).send(error.message));
//   });

//   app.post("/send_email", (req, res) => {
//     console.log("Somebody just hit me");
//     sendEmail(req.body)
//       .then((response) => res.send(response.message))
//       .catch((error) => res.status(500).send(error.message));
//   });
  
  
//   app.listen(port, () => {
//     console.log(`nodemailerProject is listening at http://localhost:${port}`);
//   });
