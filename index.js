const app = require('express')()
const http = require('http')
const bodyParser = require('body-parser')
const {port} = require('./config')

app.use(bodyParser.text({
  type: req => 'text'
}));

app.post('/post', (req, res) => {
  res.status(200).send({
    headers: req.headers,
    body: req.body
  })
})
app.listen(port, () => console.log(`running: http://localhost:${port}`))
