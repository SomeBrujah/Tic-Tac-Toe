const koa = require("koa");
const path = require("path");
const server = require('koa-static');

const app = new koa();

app.use(server(path.join(__dirname, '../dist')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`running on port ${PORT}`));