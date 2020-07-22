const path = require("path");
const packageJson = require("../package.json");

const output = {
    path : path.resolve(__dirname, '../web/src/main/resources/static/static'),
    filename: "[name].js"
};
const alias = {
	"store": path.resolve(__dirname, "../assets/scripts/redux"),
    "const" : path.resolve(__dirname, "../assets/scripts/constants"),
    "utility" : path.resolve(__dirname, "../assets/scripts/utility"),
    "dumb-components" : path.resolve(__dirname, "../assets/scripts/dumb-components"),
    "actions": path.resolve(__dirname, "../assets/scripts/state/actions"),
    "components" : path.resolve(__dirname, "../assets/scripts/components"),
};
const definePlugin = {
	'VERSION' : `'${packageJson.version}'`
}
const modules = ["assets", "node_modules"];
const extensions = [".ts", ".tsx", ".js", "jsx", ".scss", ".json"];
const main = path.resolve(__dirname, "../assets/index.tsx");
const sw = path.resolve(__dirname, "../assets/sw.tsx");
const tsxExpression = /\.ts(x?)|json$/;
const scssExpression = /\.scss$/;
const fileExpression = /\.(woff(2)?|ttf|eot|svg|jpe?g|png|gif|svg|jpg)(\?v=\d+\.\d+\.\d+)?$/;

exports.output = output;
exports.alias = alias;
exports.modules = modules;
exports.extensions = extensions;
exports.main = main;
exports.sw = sw;
exports.tsxExpression = tsxExpression;
exports.scssExpression = scssExpression;
exports.fileExpression = fileExpression;
exports.definePlugin = definePlugin;

