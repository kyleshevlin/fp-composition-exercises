// These examples are heavily borrowed/stolen from Brian Lonsdorf's
// Mostly Adequate Guide to Functional Programming
// https://drboolean.gitbooks.io/mostly-adequate-guide/ch5.html#in-summary

const accounting = require('accounting')

// Compose, our most important function
const compose = (...fns) => x => fns.reduceRight((val, fn) => fn(val), x)

// Useful curried functions
const map = fn => arr => arr.map(fn)
const filter = fn => arr => arr.filter(fn)
const reduce = fn => acc => arr => arr.reduce(fn, acc)
const prop = name => obj => obj[name]
const first = arr => arr[0]
const last = arr => arr[arr.length - 1]

// Some Books
const BOOKS = [
  {
    title: '1984',
    author: 'George Orwell',
    dollarValue: 5,
    inStock: true
  },
  {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    dollarValue: 18,
    inStock: true
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    dollarValue: 6,
    inStock: false
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    dollarValue: 9,
    inStock: true
  },
  {
    title: 'The Time Machine',
    author: 'H.G. Wells',
    dollarValue: 12,
    inStock: false
  }
]

// Exercise 1 - use compose to rewrite function below
const lastInStock = function(books) {
  const lastBook = last(books)
  return prop('inStock')(lastBook)
}

console.log('Exercise 1:', lastInStock(BOOKS))


// Exercise 2 - use compose, prop, and first to get the name of the first book
const titleOfFirstBook = () => {}

console.log('Exercise 2:', titleOfFirstBook(BOOKS))



// Exercise 3 - use compose, prop, map, and filter to return all the books that cost less than 10

const lessThanTen = () => {}

console.log('Exercise 3:', lessThanTen(BOOKS))


// Exercise 4 - rewrite the averageDollarValue function with composition. I'll give you the average function
const average = xs => reduce((acc, cur) => acc + cur)(0)(xs) / xs.length

const averageDollarValue = function(books) {
  const dollarValues = books.map(function(book) {
    return book.dollarValue
  })

  return average(dollarValues)
}

console.log('Exercise 4:', averageDollarValue(BOOKS))



// Exercise 5 - write a function, sanitizeNames(), that returns a list of lowercase, underscored book names. You will need to use compose, and write curried versions of lowercase(), underscore(), and replace(). I'll give you the regex pattern for the replace.

const pattern = /\W+/g
const lowercase = () => {}
const replace = () => {}
const underscore = () => {}

const sanitizeNames = () => {}

console.log('Exercise 5:', sanitizeNames(BOOKS))



// Exercise 6 - Refactor availablePrices() with compose

const availablePrices = function(books) {
  return books
    .filter(x => x.inStock)
    .map(function(x) {
      return accounting.formatMoney(x.dollarValue)
    })
    .join(', ')
}

console.log('Exercise 6:', availablePrices(BOOKS))


module.exports = {
  BOOKS,
  lastInStock,
  titleOfFirstBook,
  lessThanTen,
  averageDollarValue,
  sanitizeNames,
  availablePrices
}
