var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'yahoo',
  auth: {
    user: 'cloud_test_env',
    pass: 'testenv1234'
  }
});

var mailOptions = {
  from: 'hect16@gmail.com',
  to: 'ethanrust@hotmail.com',
  subject: 'open this',
  text: 'ur pp smol'
};

transporter.sendMail(mailOptions, (error, info) =>{
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 