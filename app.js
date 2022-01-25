const qrcode = require("qrcode-terminal");
const { Client, MessageMedia } = require("whatsapp-web.js");
const fs = require("fs");

const SESSION_FILE_PATH = "./session.json";

let sessionData;

if (fs.existsSync(SESSION_FILE_PATH)) {
  sessionData = require(SESSION_FILE_PATH);
}

const client = new Client({
  session: sessionData,
  puppeteer: {},
});

client.initialize();

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", async () => {
  console.log("Client is ready!");

  // const richi = "5213322766620@c.us";
  // const eric = "5213325780573@c.us";
  // const pablito = "5213325433497@c.us";
  // const angel = "5213335596710@c.us";
  // const lalo = "5213315462667@c.us";
  const juanca = "5213332536746@c.us";

  for (let i = 0; i < 500; i++) {
    const media = MessageMedia.fromFilePath(
      "/home/penguin424/Documentos/develops/bots/cherk.jpg"
    );
    await client.sendMessage(juanca, media);
    // await client.sendMessage(pablito, "Callate el hocico mi amor");
  }

  // client.sendMessage("5213325433497@c.us", "Callate el hocico mi amor", {
  //   stickerName: "angry",
  // });
});

client.on("authenticated", (session) => {
  sessionData = session;

  fs.writeFile(SESSION_FILE_PATH, JSON.stringify(sessionData), (err) => {
    if (err) {
      console.error(err);
    }
  });
});

client.on("message", (message) => {
  let body = message.body.trim().toLocaleLowerCase();

  if (body.includes("hola")) {
  } else if (body.includes("adios")) {
    client.sendMessage(message.from, "Adios");
  } else {
    client.sendMessage(message.from, "No entiendo");
  }
});
