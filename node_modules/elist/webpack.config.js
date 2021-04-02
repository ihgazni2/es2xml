const path = require("path");

module.exports = {
  entry: "./elist.js",
  output: {
    filename: "elist.js",
    path: path.resolve(__dirname, "dist"),
    library: "ELISTJS",
    libraryTarget: "umd",
    globalObject: "this"
  },
  mode: "production",
  devtool: "source-map"
};

