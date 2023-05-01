const venom = require('venom-bot');
const qrcode = require('qrcode-terminal');

venom.create().then((client) => {
    start(client);
});

function start(client) {
    client.onMessage(async (message) => {
        if (message.body === '.hi') {
            const text = `Hi, this is echo.`
            const content = { 'message': { 'text': text } }
            const options = {
                "reply_markup": {
                    "inline_keyboard": [
                        [
                            {
                                "text": "Owner",
                                "url": "https://wa.me/94741090547"
                            },
                            {
                                "text": "Github",
                                "url": "https://github.com/yasuntha/sage"
                            }
                        ]
                    ]
                }
            }
            await client.sendMessage(message.from, content, options);
        }
    });

    client.onStateChange((state) => {
        if (state.qrcode) {
            console.log('QR Code:');
            qrcode.generate(state.qrcode, { small: true });
        }
    });
}
