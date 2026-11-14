// Turns the readable source into a page older iPads can run.
const fs = require("fs"), babel = require("/tmp/node_modules/@babel/core");
const [src, out] = process.argv.slice(2);
let html = fs.readFileSync(src, "utf8");
const open = "<script>\n", i = html.lastIndexOf(open), j = html.indexOf("</script>", i);
const code = html.slice(i + open.length, j);
const res = babel.transformSync(code, {babelrc: false, configFile: false, compact: false, comments: false,
  presets: [[require.resolve("/tmp/node_modules/@babel/preset-env"), {targets: {safari: "9", ios: "9"}, modules: false}]]});
html = html.slice(0, i + open.length) + res.code + "\n" + html.slice(j);
fs.writeFileSync(out, html);
console.log("built", out, html.length, "bytes");
