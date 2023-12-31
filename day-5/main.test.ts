import { assertEquals } from "https://deno.land/std@0.200.0/assert/mod.ts";
import { partOne, partTwo } from "./main.ts";

const DATA_FILE_NAME = "./data.txt";
const DATA_FILE_NAME_EXAMPLE = "./data-example.txt";

Deno.test("Part One Example", () => {
  const data = Deno.readTextFileSync(DATA_FILE_NAME_EXAMPLE);
  assertEquals(partOne(data), 35);
});

Deno.test("Part One", () => {
  const data = Deno.readTextFileSync(DATA_FILE_NAME);
  assertEquals(partOne(data), 322500873);
});

// Deno.test("Part Two Example", () => {
//   const data = Deno.readTextFileSync(DATA_FILE_NAME_EXAMPLE);
//   assertEquals(partTwo(data), 30);
// });

// Deno.test("Part Two", () => {
//   const data = Deno.readTextFileSync(DATA_FILE_NAME);
//   assertEquals(partTwo(data), 5037841);
// });
