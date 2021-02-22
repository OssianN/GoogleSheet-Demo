require('dotenv').config();
const sgMail = require('@sendgrid/mail');
const { SENDGRID_API_KEY } = process.env;

exports.handler = async (event, context) => {
  const data = JSON.parse(event.body);
  const { name, email, subject, msg } = data;

  const sgMsg = { 
    to: email,
    from: 'ossian.northen@gmail.com',
    subject: `Välkommen ${name}!`,
    html: `<h1>Din bokning är genomförd!</h1>
    <p>Vi ses där.</p>
    `,
  }

  try {
    sgMail.setApiKey(SENDGRID_API_KEY)
    await sgMail.send(sgMsg)
    
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  }
  catch(err) {
    return {
      statusCode: err.code,
      body: err.message,
    }
  }
}