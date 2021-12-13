import fs from "fs";

// STOR <filename>: transfer a copy of the file FILE from the client to the server

export function checkStor (args, param) {
    if(!(fs.existsSync(param)) || !(fs.statSync(param).isFile()))
       return `404 - No such a file, stat ${args}`; //78

    let text;

    try {
        const data = fs.readFileSync(param, 'utf8');
        console.log(data);
        text = data;
    } catch (err) {
        console.error(err);
    }

    try {
        fs.writeFileSync(args, text)
    } catch (err) {
        console.error(err);
    }

    return "212 - " + args + " ; the message is : " + text; //78
}