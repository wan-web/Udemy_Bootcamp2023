const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const Product = require('./models/product');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/farmStand');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

const categories = ['fruit', 'vegetable', 'dairy'];

app.get('/products', async (req, res) => {
  const {category} = req.query;//queryString이 없으면 undefined
  if(category) { //카테고리가 있으면
    const products = await Product.find({category : category}) //카테고리 찾기
    res.render('products/index', {products, category})
  } else { //카테고리가 없으면
    const products = await Product.find({}); //모두 찾기
    console.log(products);
    res.render('products/index', {products, category : 'All'});
  }
})

app.get('/products/new', (req, res) => {
  res.render('products/new', {categories});
})
app.post('/products', async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  console.log(newProduct);
  res.redirect(`/products/${newProduct._id}`);
})

app.get('/products/:id', async (req, res) => {
  const {id} = req.params;
  const product = await Product.findById(id);
  console.log(product);
  res.render('products/show', {product});
})

app.get('/products/:id/edit', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render('products/edit', { product, categories })
})

app.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new: true});
  res.redirect(`/products/${product._id}`);
})

app.delete('/products/:id', async(req, res) => {
  const {id} = req.params;
  const deletedProduct = await Product.findByIdAndDelete(id);
  res.redirect('/products');
})

app.listen(3000, () => {
  console.log('APP is listening on port 3000');
})