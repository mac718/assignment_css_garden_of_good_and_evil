const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) => {
  let backgroundColor = 'white';
  res.render('index', {backgroundColor});
})

app.post('/', (req, res) => {
  var backgroundColor = req.body.favoriteColor;
  var goodOrEvil = req.body.goodOrEvil;
  var favoriteFood = req.body.favoriteFood;
  console.log(backgroundColor);
  res.cookie('backgroundColor', backgroundColor);
  res.cookie('goodOrEvil', goodOrEvil);
  res.cookie('favoriteFood', favoriteFood);
  res.render('index', {backgroundColor, goodOrEvil, favoriteFood});
})

app.listen(3000, 'localhost', () => {
  console.log('listening');
});