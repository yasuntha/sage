const venom = require('venom-bot');

// start the client
venom.create().then((client) => {

  // define the phone number to send the message to
  const phoneNumber = '94741090547@c.us';

  // define the message text for the "Hi" button
  const messageTextHi = 'Hello! How can I assist you today?';

  // define the message text for the "Bye" button
  const messageTextBye = 'Goodbye! Have a nice day.';

  // define the button objects
  const buttonHi = {
    buttonText: 'Hi',
    buttonId: 'btn_hi',
    hideText: false
  };

  const buttonBye = {
    buttonText: 'Bye',
    buttonId: 'btn_bye',
    hideText: false
  };

  // define the message object with the buttons
  const message = {
    phone: phoneNumber,
    content: messageTextHi,
    buttons: [buttonHi, buttonBye]
  };

  // send the message with buttons
  client.sendButtons(message).then((result) => {

    // check if the message was sent successfully
    if (result.success) {
      console.log('Message sent successfully!');
    } else {
      console.error('Failed to send message.');
    }

    // log out of WhatsApp
    client.close().then(() => console.log('Client closed.'));

  }).catch((error) => {
    console.error(error);
  });

}).catch((error) => {
  console.error(error);
});
