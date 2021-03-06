const GasPlugin = require("gas-webpack-plugin");
const es3ifyPlugin = require("es3ify-webpack-plugin");

module.exports = {
  devtool: "inline-source-map",
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: `${__dirname}/dist`,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [{ test: /\.ts?$/, loader: "ts-loader" }],
  },
  plugins: [new GasPlugin(), new es3ifyPlugin()],
};
