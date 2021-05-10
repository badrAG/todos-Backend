const nodemailer = require("nodemailer");

 const sendEmail = (text) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "todosappfortest@gmail.com",
        pass: "todosappfortest1234",
      },
    });
    const option = {
      from: "todosappfortest@gmail.com",
      to: "agrir.dev@gmail.com",
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