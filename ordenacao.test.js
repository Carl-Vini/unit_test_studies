const { ordenaLista } = require('./ordenacao');
let lista = [113, 139, 68, 177, 12, 47];

//realizando o teste de ordenacao, second try
describe('Bubble Sort', () => {
  test("A list of numbers in crescent order", () => {
    expect(ordenaLista(lista)).toStrictEqual([12, 47, 68, 113, 139, 177]);
  })
});

test('test number 2, dealing with an empty array', () => {
  const list = [];
  const expected = [];
  expect(ordenaLista(list)).toStrictEqual(expected);
})


test('test number 3, dealing with an array with already ordered numbers', () => {
  const list = [1, 2, 3, 4, 5];
  const expected = [1, 2, 3, 4, 5];
  expect(ordenaLista(list)).toStrictEqual(expected);
});

test('test number 4, dealing with an array with semi ordered numbers', () => {
  const list = [1, 2, 3, 5, 4];
  const expected = [1, 2, 3, 4, 5];
  expect(ordenaLista(list)).toStrictEqual(expected);
});

//what about an array with random strings
test('test number 4, dealing with an array with random strings', () => {
  const list = ['Josefina', 'Garibaldo', 'Novelino', 'Vicência', 'Enaldo'];
  const expected = ['Enaldo', 'Garibaldo', 'Josefina', 'Novelino', 'Vicência'];
  expect(ordenaLista(list)).toStrictEqual(expected);
});


// this was my first try lol
// test('A list of numbers in crescent order', () => {
//   expect(ordenaLista(list)).toBe([list[1] < list[2] < list[3] < list[4] < list[5] < list[6]])
// })