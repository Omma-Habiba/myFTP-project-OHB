import fs from "fs";

// RETR <filename> : transfer a copy of the file FILE from the server to the client

export function checkRetr (args) {
    if(!(fs.existsSync(args)) || !(fs.statSync(args).isFile()))
       return `404 - No such a file, stat ${args}`; //78

    let text;

    try {
        const data = fs.readFileSync(args, 'utf8');
        console.log(data);
        text = data;
    } catch (err) {
        console.error(err);
    }

    return "213 - " + args + " ; the message is : " + text; //78
};