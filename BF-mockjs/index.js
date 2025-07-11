const Koa = require('koa');
const Router = require('koa-router');
const mockList = require('./mock/index');

const app = new Koa();
const router = new Router();

//注册 mock 路由
mockList.forEach((item) => {
  const {url,method,response} = item
  router[method](url, async ctx => {
    const res = response()
    ctx.body = res
  })
});

app.use(router.routes())
app.listen(3001)