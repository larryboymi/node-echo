const app = require('express')()
const http = require('http')
const bodyParser = require('body-parser')
const {port} = require('./config')

app.use(bodyParser.text({
  type: req => 'text'
}));

app.use((req, res) => {
  res.status(200).send({
    path: req.path,
    method: req.method,
    query: req.query,
    headers: req.headers,
    cookies: req.cookies,
    body: req.body
  })
})
app.listen(port, () => console.log(`running: http://localhost:${port}`))
