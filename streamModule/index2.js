// Writing Streams

const fs = require("fs");

const stream = fs.createWriteStream("output.txt");

stream.write("Hello");
stream.write("Node");
stream.end();