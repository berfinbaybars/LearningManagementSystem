const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors')
const app = express();

//Body Parser Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors())


//POST Function
app.post('/send',(req,res)=>{
    const data = req.body.data
    console.log(data)
    const output = `
        <h4>${data.class}</h4>
        <p>${data.text}</p>
        
    `;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'personalschooloverviewmailer@gmail.com', 
        pass: 'Asd123Asd'
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  let mailOptions = {
      from: '"Personal School Overview" personalschooloverviewmailer@gmail.com', 
      to: data.email, 
      subject: 'New Announcement', 
      text: '', 
      html: output 
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.send('Email has been sent');
  });
})


app.get('/',(req,res)=>{
    res.send("asd")
});

app.listen(3000, ()=> console.log('Server started...'));
