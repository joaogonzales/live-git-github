const express = require('express');

const app = express()

app.get('/teste',(Request, Response)=> {
  return Response.json({hello: 'World2'})
});

app.listen(3333);

