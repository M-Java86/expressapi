const express = require('express');
es6Renderer = require('express-es6-template-engine'),
compression = require("compression");
const helmet = require("helmet");
const app = express();
app.listen(3333, function () {
   console.log("listening on port 3333");
});

app.use(compression());
app.use(helmet());

app.engine('html', es6Renderer),
app.set('views', './views');
app.set('view engine', "html");

const rootController = require("./routes/index"), allController = require("./routes/all"), personController = require("./routes/person");

app.use("/", rootController);
app.use("/all", allController);
app.use("/person",personController);
app.get("/wp", function (req, res) {
   const {name} = req.query;
   let snippet = `<h1>hello ${name}</h1>`;
   if (!name) {
       snippet = '<h1>NO NAME PROVIDED</h1>'
       res.status(500).send(snippet).end();
   }
   res.status(200).send(snippet).end();
});