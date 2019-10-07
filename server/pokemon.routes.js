const Router = require('koa-router');
const pkmnService = require('./pokemon.service');

const router = new Router({
  prefix: '/pokemon'
});

router.get('/party', (ctx) => {
  const party = pkmnService.getPkmnParty();
  console.log(party);
  ctx.body = party;
});

router.post('/party', (ctx) => {
  const pokemon = ctx.request.body;
  if(pkmnService.addPkmnParty(pokemon)) {
    return ctx.status = 200;
  }
  ctx.throw(400, "Full party");
});


module.exports = router;