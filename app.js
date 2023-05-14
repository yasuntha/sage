const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('Client is ready!');

  // Set the initial about message
  client.setStatus(`It's a new day!`);

  // Update the about message every second
  setInterval(() => {
    const now = new Date();
    const hours = now.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const timeString = `${formattedHours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;

    client.setStatus(`It's currently ${timeString}`);
  }, 1000);
});

client.initialize();

