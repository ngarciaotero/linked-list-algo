const path = require("path");

module.exports = {
  entry: "./src/main.js",
  target: "node",
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
