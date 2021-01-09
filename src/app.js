const express = require('express');
const exphbs = require('express-handlebars');
const router = require('./routes');

const app = express();

// Static folders
app.use(express.static(`${__dirname}/public`));
app.set('views', `${__dirname}/views`);

const getAttributes = (hash) => {
  var attrs = Object.keys(hash)
    .map(function (key) {
      return key + '="' + hash[key] + '"';
    })
    .join(" ");

  return attrs;
}

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs',
  partialsDir: `${__dirname}/views/partials/`,

  // custom helpers
  helpers: {
    text: (context, options) => {
      var attrs = getAttributes(options.hash)
      return `<p ${attrs} style="margin: 0">${options.fn(this)}</p>`
    }
  }
})

// Handlebars
app.engine('hbs', hbs.engine);

app.set('view engine', 'hbs');

// Routes
app.use('/', router);


app.listen(5000, () => console.log(`Server started on http://localhost:5000`));