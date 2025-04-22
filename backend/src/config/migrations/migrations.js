import { up } from "./up.js";
import { down } from "./down.js";

const [,, command] = process.argv;

const main = async () => {
  if (command === "up") {
    await up();
  } else if (command === "down") {
    await down();
  } else {
    console.log("Comando inválido. Use: `up` ou `down`");
  }
};

main();