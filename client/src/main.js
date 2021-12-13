import { createConnection } from "net";
import { createInterface } from "readline";

let currentCommand = "";
let isAuthenticated = false;

const rl = createInterface ({
  input: process.stdin,
  output: process.stdout,
});

const client = createConnection({ port: 4242 }, () => {
  console.log("client connected.");
  rl.question("Enter a command : ", function (cmd) {
    client.write(cmd);
  });

  client.on("data", (data) => {
    const message = data.toString();
    console.log("Message received :", message);
    rl.question("Enter a command : ", function (cmd) {
      client.write(cmd);
    });
    const [status, ...args] = message.trim().split(" ");

    if (status == 230 && currentCommand === "USER") {
      isAuthenticated = true;
    }

    if (status == 213) {
      const fs = require('fs');

      let content = "";
      for (let i = 7; i < args.length; i++) {
        content += args[i] + " ";
      }

      try {
        fs.writeFileSync(args[1], content)
      } catch (err) {
        console.error(err)
      }
    }
  });
});