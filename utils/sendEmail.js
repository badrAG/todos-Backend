const nodemailer = require("nodemailer");

 const sendEmail = (text) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.PASS,
      },
    });
    const option = {
      from: process.env.EMAIL_USER,
      to: process.env.SEND_TO,
      subject: "your todo is completed",
      text
    };
    transporter.sendMail(option, (err, info) => {
      if (err) {
          console.log(err);
        throw err;
      }
      console.log(info.response);
      return;
    });
  };
  module.exports ={
      sendEmail
  }