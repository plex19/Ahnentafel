const path = require("path");

module.exports = {
  mode: "development", 
  entry: "./main.js",
  target: "electron-main",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
};
