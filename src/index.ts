import { getAllMoves } from "./data/moves";

async function start() {
  console.log(await getAllMoves());
}

start();
