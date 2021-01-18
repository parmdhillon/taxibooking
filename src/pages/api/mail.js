import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.EMAIL_KEY);

export default async (req, res) => {
  let status;

  const { name, startLoc, endLoc, dateTime, car, mobile } = req.body;

  if (!name || !startLoc || !endLoc || !dateTime || !car || !mobile) {
    res.statusCode = 400;
    res.json({ status: 'Inavlid Data' });
    return;
  }

  const msg = {
    to: 'iparm1996@gmail.com', // Change to your recipient
    from: 'kirattour@gmail.com', // Change to your verified sender
    subject: `New Booking - ${name}`,
    text: `You got a New Booking from ${name}\r\n 
            Starting Destination: ${startLoc}\r\n
            Ending Destination: ${endLoc}\r\n
            Date and Time: ${dateTime}\r\n
            Car: ${car}\r\n
            Mobile Number: ${mobile}`,
    html: `<center><img src="http://cdn.mcauto-images-production.sendgrid.net/1eaf4ebb26cf5c4e/5529782b-813f-4a2c-a0e5-4f4c04b1c919/777x151.png"/></center><br/>
    <span style="font-weight:700;font-size:20px;">New Booking from <span style="color:#c41969">${name}</span></span><br/><br/>
          <span style="font-size:16px;"><strong>Starting Destination</strong>: ${startLoc}<br/>
          <strong>Ending Destination</strong>: ${endLoc}<br/>
          <strong>Date and Time</strong>: ${dateTime}<br/>
          <strong>Car</strong>: ${car}<br/>
          <strong>Mobile Number</strong>:${mobile}</span>
    `,
  };

  await sgMail
    .send(msg)
    .then(() => {
      status = 'sent';
    })
    .catch((error) => {
      status = 'failed: ' + error;
      console.log(error);
      return;
    });

  res.statusCode = 200;
  res.json({ status });
};
