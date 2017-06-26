module.exports = function(app) {
  app.get('/', (req, res) => {
    res.send({ "greeting": "Fuck off dude" });
  })
}