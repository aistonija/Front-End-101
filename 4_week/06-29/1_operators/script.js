"use strict";

2 === 2; // true
2 == "2"; // true
2 !== 2; // false
5 < 5; // false
5 >= 4; // true
true !== false; // true
9 - 5 === 4; // true
5 * 5 !== "25"; // true
true && true; // true
2 === 5 && true; // false
6 * 6 === 36 && 15 - 9 == "6"; // true
false || false; // false
10 === 10 || 5 == 2; // true
(2 * 2) / 2 == "1" || 5 * 5 === 25; // true
14 * 2 !== "28" || "Jonas" == "Jonas"; // true
10 && 15 > 10; // true
"Petras" && 0; // false
("Petras" || "Jonas") && (22 * 5 || 15 - 1 === 13); // klaidinga sąlyga, bet lyg ir true
"jonas" === "Jonas"; // false
"Petras" + 5 === "Petras" + "5"; // true
"Jonas" + 5 + 5 === "Jonas10"; // false
5 + 10 + "Antanas" === "15Antanas"; // true
2 + 1 + "Jonas" + 3 + 2 === "3Jonas5"; // false
10 % 1 === 1; // false
5 * "5" === 25; // true
