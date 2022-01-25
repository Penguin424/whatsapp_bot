const accountSid = "AC0b4b55912cb569b36408edec3827fd24";
const authToken = "68033e928558f1103f1cbcfacd104903";
const client = require("twilio")(accountSid, authToken);

const sendTextMesage = (to, message) => {
  return new Promise((resolve, reject) => {
    client.messages
      .create({
        from: "whatsapp:+5213327696529",
        body: message,
        to: "whatsapp:+" + to,
      })
      .then((message) => resolve())
      .catch((err) => reject(err));
  });
};

module.exports = {
  sendTextMesage,
};
