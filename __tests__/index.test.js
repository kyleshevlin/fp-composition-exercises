const {
  BOOKS,
  lastInStock,
  titleOfFirstBook,
  lessThanTen,
  averageDollarValue,
  sanitizeNames,
  availablePrices
} = require('../index')

test('lastInStock', () => {
  expect(lastInStock(BOOKS)).toEqual(false)
})

test('titleOfFirstBook', () => {
  expect(titleOfFirstBook(BOOKS)).toEqual('1984')
})

test('lessThanTen', () => {
  const expected = [5, 6, 9]

  expect(lessThanTen(BOOKS)).toEqual(expected)
})

test('averageDollarValue', () => {
  expect(averageDollarValue(BOOKS)).toEqual(10)
})

test('sanitizeNames', () => {
  const expected = [
    '1984',
    'war_and_peace',
    'the_catcher_in_the_rye',
    'brave_new_world',
    'the_time_machine'
  ]

  expect(sanitizeNames(BOOKS)).toEqual(expected)
})

test('availablePrices', () => {
  const expected = '$5.00, $18.00, $9.00'

  expect(availablePrices(BOOKS)).toEqual(expected)
})