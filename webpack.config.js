const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "es2xml.js",
    path: path.resolve(__dirname, "dist"),
    library: "ES2XML",
    libraryTarget: "umd",
    globalObject: "this"
  },
  mode: "production",
  devtool: "source-map"
};

