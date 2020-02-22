const path = require("path");

const output = {
    path : path.resolve(__dirname, "../public/"),
    filename: "main.js"
};
const alias = {
	"store": path.resolve(__dirname, "../assets/scripts/redux"),
    "const" : path.resolve(__dirname, "../assets/scripts/constants"),
    "utility" : path.resolve(__dirname, "../assets/scripts/utility"),
    "dumb-components" : path.resolve(__dirname, "../assets/scripts/dumb-components"),
    "actions": path.resolve(__dirname, "../assets/scripts/state/actions"),
};
const modules = ["assets", "node_modules"];
const extensions = [".ts", ".tsx", ".js", "jsx", ".scss"];
const main = path.resolve(__dirname, "../assets/index.tsx");
const tsxExpression = /\.ts(x?)$/;
const scssExpression = /\.scss$/;
const fileExpression = /\.(woff(2)?|ttf|eot|svg|jpe?g|png|gif|svg|jpg)(\?v=\d+\.\d+\.\d+)?$/;

exports.output = output;
exports.alias = alias;
exports.modules = modules;
exports.extensions = extensions;
exports.main = main;
exports.tsxExpression = tsxExpression;
exports.scssExpression = scssExpression;
exports.fileExpression = fileExpression;

