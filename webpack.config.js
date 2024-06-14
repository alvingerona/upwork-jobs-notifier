const path = require("path");

module.exports = {
  entry: "./handler.js", // Adjust this to your main file
  target: "node",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    libraryTarget: "commonjs2",
    path: path.join(__dirname, ".webpack"),
    filename: "handler.js", // Adjust this to match your output file
  },
};