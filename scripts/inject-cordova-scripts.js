const fs = require("fs");
const path = require("path");

let targetFile = path.join(__dirname, "../build/index.html");

let content = fs.readFileSync(targetFile, {encoding: "UTF-8"});
fs.writeFileSync(targetFile, content.split("</head>").join(`<script src="./cordova.js"></script></head>`));
