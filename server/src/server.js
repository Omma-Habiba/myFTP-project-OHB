import { createServer } from "net";
import { listDirectory } from "./list";
import { USER } from "./user";
import { PASS } from "./pass";
import { checkRetr } from "./retr";
import { checkStor } from "./stor";


export function launch(port) {
    const server = createServer((socket) => {
      console.log("new connection.");
      socket.on("data", (data) => {
        const message = data.toString();
        const [command, ...args] = message.trim().split(" ");

        switch(command) {
          case "USER":
            socket.write(USER(args[0]));
            break;
          
          case "PASS":
            socket.write(PASS(args[0]));
            break;
          
          case "PWD":
            socket.write(`257, ${process.cwd()} \r\n`);
            break;
            
          case "CWD":
            try{
              process.chdir(args[0]);
              socket.write(`250 New directory, ${process.cwd()} \r\n`);
            } catch(err) {
                socket.write(`non-existent file, try another path \r\n`);
            }
            break;

          case "RETR":
            socket.write(checkRetr(args[0]));
            break;
          
          case "STOR":
            const param = process.cwd() + "\\..\\client\\" + args[0];
            socket.write(checkStor(args[0], param));
            break;

          case "LIST":
            listDirectory(socket);
            break;

          case "HELP":
            const information = {
                USER: "Check if the user exist", 
                PASS: "Authenticate the user with a password", 
                LIST: "List the current directory of the server",
                CWD: "Change the current directory of the server",
                RETR: "Transfer a copy of the file FILE from the server to the client",
                STOR: "Transfer a copy of the file FILE from the client to the server",
                PWD: "Display the name of the current directory of the server",
                HELP: "Send helpful information to the client",
                QUIT: "Close the connection and stop the program"
            };
            if(!information[args[0]])
              socket.write("500 no help for this shit");
            else
              socket.write(`200 ${information[args[0]]}`); //78
            break;
          
          case "QUIT":
            socket.write("221 - closing connection.\r\n");
            socket.destroy();
            break;
          
          default:
            console.log("command not supported:", command, args);
        }
      });
      socket.write("220 Hello World \r\n");
    });

    server.listen(port, () => {
      console.log(`server started at localhost:${port}`);
    });
}
