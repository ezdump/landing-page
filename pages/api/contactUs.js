require("dotenv").config();
const mailer = require("nodemailer");

const transport = mailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASS,
  },
});

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message, companyName, city } = req.body;

    if (!name || !email || !message) {
      return res.status(500).json({
        status: "User Error",
        message: "Please fill all the fields",
      });
    }
    try {
      const mailOptions = {
        from: `${email}`,
        to: process.env.RECEIVER_EMAIL,
        subject: `${name} requires contact`,
        html: `${
          "<strong>Name: </strong>" +
          name +
          "<br>" +
          "<strong>Company Name: </strong>" +
          companyName +
          "<br>" +
          "<strong>City: </strong>" +
          city +
          "<br>" +
          "<strong>Email: </strong>" +
          email +
          "<br><br>" +
          "<strong>Message: </strong><br>" +
          message
        }`,
      };

      transport.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res.status(500).json({ status: "Error", message: error });
        } else {
          return res.status(200).json({ status: "Success" });
        }
      });
    } catch (e) {
        console.log("Error is :: ", e);
      return res.status(500).json({ status: "Internal Error", message: e });
    }
  } else {
    res.redirect("/");
  }
}
