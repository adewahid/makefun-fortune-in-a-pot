import { mkdirSync, writeFileSync } from "node:fs";

const fortune =
  "Soon a sunbeam will kiss your tallest leaf, and the hand that waters you will linger — luck grows where you sit.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune, "utf8");
console.log(fortune);
console.log(`chars: ${fortune.length}`);
