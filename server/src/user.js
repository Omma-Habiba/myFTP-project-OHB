// USER <username>: check if the user exist
const tab_users = [
    { id: 1, username: "omma" }
]

export function verifUserExist (username) {
    return tab_users.find((user) => {
      return user.username === username;
    });
};

export function USER (args) {
    return (verifUserExist(args)) 
        ? "220 User exists. \r\n" 
        : "530 User doesn't exists.\r\n"
};
