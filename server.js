const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes');
const nunjucks = require('nunjucks');
const path = require('path');

const app = express();

nunjucks.configure(path.resolve(__dirname, 'src', 'views' ),{
	autoescape: true,
	express: app,
	watch: true
	});
app.use(express.static(path.resolve(__dirname, 'src', 'public') ) );
app.use(express.urlencoded({ extended : false }) );

app.set('view engine', 'njk');

mongoose.connect("mongodb+srv://3Xsolutions:3Xsolutions@3xsolution-wd6bw.mongodb.net/test?retryWrites=true&w=majority",
{ useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);


const port = (process.env.PORT || 3030);




app.listen(port, () => console.log('Server is running in port ', port));
