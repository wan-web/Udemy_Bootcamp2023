const mongoose = require('mongoose');

const Product = require('./models/product');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/farmStand');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// const p = new Product({
//   name: 'Ruby Grapefruit',
//   price: 1.99,
//   category: 'fruit'
// })
// p.save()
//   .then( p => console.log(p))
//   .catch( err => console.log(err))

const seedProducts = [
  {
    name: 'Fairy Eggplant',
    price: 1.00,
    category: 'vegetable'
  },
  {
    name: 'Organic Cherry Tomatoes',
    price: 3.99,
    category: 'vegetable'
  },
  {
    name: 'Granny Smith Apples',
    price: 0.75,
    category: 'fruit'
  },
  {
    name: 'Organic Whole Milk',
    price: 2.50,
    category: 'dairy'
  },
  {
    name: 'Organic Greek Yogurt',
    price: 3.99,
    category: 'dairy'
  },
  {
    name: 'Avocado',
    price: 1.50,
    category: 'fruit'
  },
  {
    name: 'Baby Spinach',
    price: 2.99,
    category: 'vegetable'
  }
];

Product.insertMany(seedProducts)
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })