const Koa = require("koa");
const Router = require("koa-router");
const koaBody = require("koa-body");
const fetch = require("node-fetch");
// Create app
const app = new Koa();
const router = new Router();
// Static files
app.use(require("koa-static")(__dirname + "/static"));
// Api
router.post("/api", koaBody(), async ({ request, response }, next) => {
  const sha = request.body.sha;
  const name = await fetch(
    `http://release-name:6767/api/release-name/${sha}`
  ).then(res => res.text());
  response.body = { name };
  response.status = 201;
});
// Setup Routes
app.use(router.routes()).use(router.allowedMethods());
// Start the server
app.listen(process.env.PORT || 3000);
