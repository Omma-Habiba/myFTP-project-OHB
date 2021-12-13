<div id="top"></div>

# myFTP-project-OHB

## <a name='TOC'>🐼 Summary</a>

* [Rules](#rules)
* [Installation](#installation)
* [Overview](#overview)
* [Usage](#usage)
* [Credits](#credits)

## <a name='rules'>🦊 Rules</a>

* I create a git repository named `myFTP-project-OHB` on github.com
* I create a file called `.author` with my name:

```sh
{
    "firstname": "Omma Habiba",
    "lastname": "BIPLOB"
}
```

## <a name='installation'>🐨 Installation</a> 

* Install in both client and server repositories
* Go to the server 
* Then go to the client

```bash
cd server/
npm install

cd ../client
npm install
```

* I install babel and nodemon
````sh
 npm i nodemon @babel/core @babel/preset-env @babel/node @babel/cli
 Npm install nodemon
 ````
 
 * Run server at first
```bash
cd server/
npm run dev
```

* Then run client
```bash
cd ../client/
npm run dev
```

## <a name='overview'>🐱 Overview</a>

The purpose of this challenge is to create an FTP client and server.
I use the file RFC959 https://datatracker.ietf.org/doc/rfc959/

The client must handle the following commands:

* `USER <username>`: check if the user exist
* `PASS <password>`: authenticate the user with a password
* `LIST`: list the current directory of the server
* `CWD <directory>`: change the current directory of the server
* `RETR <filename>`: transfer a copy of the file _FILE_ from the server to the client
* `STOR <filename>`: transfer a copy of the file _FILE_ from the client to the server
* `PWD`: display the name of the current directory of the server
* `HELP`: send helpful information to the client
* `QUIT`: close the connection and stop the program

## <a name='usage'>🦄 Usage</a>

First, I created the functions (user, pass, list, retr, stor) in different files (user.js, pass.js, etc). 
Then I imported them in the server.js file, so that there is less codes in this file. I didn't create a separate file for PWD, CWD, HELP and QUIT, because I put them in the server.js file (in switch case).
To test each function, I write commands in the client side terminal : 

* `USER <username>`: check if the user exist
```sh
{
    USER omma
    Message received : 220 User exists.
}
```

* `PASS <password>`: authenticate the user with a password
```sh
{
    PASS habiba
    Message received : 230 Password Authentication is successfull.
}
```

* `LIST`: list the current directory of the server
```sh
{
    LIST
    -- Files in the current directory --
    .babelrc.js
    nodemon.json
    node_modules
    package-lock.json
    package.json
    src
    test_retr.txt
    yarn.lock
}
```

* `CWD <directory>`: change the current directory of the server
```sh
{
    CWD ../client
    Message received : 250 New directory, C:\Users\Nayna\Desktop\nodejs-project\client 
}
```

* `RETR <filename>`: transfer a copy of the file _FILE_ from the server to the client
```sh
{
    RETR test_retr.txt
    Message received : 213 - test_retr.txt ; the message is : Texte pour tester le fonctionnement de RETR. Pour executer, faire : RETR test_retr.txt. Une copie de ce fichier         apparaitra dans le dossier client. 
}
```

* `STOR <filename>`: transfer a copy of the file _FILE_ from the client to the server
```sh
{
    STOR test_stor.txt
    Message received : 212 - test_stor.txt ; the message is : Texte pour tester le fonctionnement de STOR. Pour executer, faire : STOR test_stor.txt. Une copie de ce fichier         apparaitra dans le dossier server.
}
```

* `PWD`: display the name of the current directory of the server
```sh
{
    PWD
    Message received : 257, C:\Users\Nayna\Desktop\nodejs-project\client
}
```

* `HELP`: send helpful information to the client
```sh
{
    HELP PASS
    Message received : 200 Authenticate the user with a password
}
```

* `QUIT`: close the connection and stop the program
```sh
{
    QUIT
    Message received : 221 - closing connection.
}
```

## <a name='credits'>🐵 Credits</a>

* Omma Habiba BIPLOB student at EFREI PARIS
* Contact me on Linkedin https://www.linkedin.com/in/omma-habiba-biplob/

<p align="right"><a href="#top">back to top</a></p>
