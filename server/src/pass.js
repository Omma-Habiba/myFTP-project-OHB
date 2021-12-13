// PASS <password>: authenticate the user with a password
const tab_users = [
    { id: 1, password: "habiba" }
]

export function verifPassword (password) {
    return tab_users.find((user) => {
      return user.password === password;
    });
};

export function PASS(args) {
    return (verifPassword(args)) 
        ? "230 Password Authentication is successfull. \r\n" 
        : "530 Wrong Password.\r\n"
};