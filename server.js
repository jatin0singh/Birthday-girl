const express = require('express');
const twilio = require('twilio');
const app = express();
const port = 3000;

const accountSid = 'YOUR_TWILIO_ACCOUNT_SID';
const authToken = 'YOUR_TWILIO_AUTH_TOKEN';
const client = twilio(accountSid, authToken);

app.post('/send-notification', (req, res) => {
    const { dressName } = req.body;
    const message = `🎉 Your girlfriend selected: ${dressName}!`;

    client.messages.create({
        body: message,
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+91YOUR_PHONE_NUMBER'
    })
    .then((message) => {
        res.send('Notification sent successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        res.send('Error sending notification.');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
