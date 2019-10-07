const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const cors = require('@koa/cors');

const app = new Koa();
const pkmnRoutes = require('./pokemon.routes');

app.use(cors());
app.use(bodyparser());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch(e) {
    ctx.status = 500 || e.status;
    ctx.body = e.message;
  }
})

app.use(pkmnRoutes.routes());

app.listen(3002, () => console.log("Server has started in port 3002"));