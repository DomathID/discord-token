import fetch from "node-fetch";
import readlineSync from "readline-sync";
const login = async (email, password) => {
  try {
    const res = await fetch("https://discord.com/api/v9/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const resjson = await res.json();
    const token = resjson.token;
    const restkn = `${token}\n`;

    console.log("\nToken Anda:"+ token);
  } catch (error) {
    throw error;
  }
};
                                                           
console.log
(` 
▀█▀ █▀█ █▄▀ █▀▀ █▄░█
░█░ █▄█ █░█ ██▄ █░▀█ 

  █▀▄ █ █▀ █▀▀ █▀█ █▀█ █▀▄
  █▄▀ █ ▄█ █▄▄ █▄█ █▀▄ █▄▀
`);                  
const email = readlineSync.question("Email: ");
const paswd = readlineSync.question("Password: ");
login(email, paswd);
