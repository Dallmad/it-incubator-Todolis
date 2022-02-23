import {calculatorReducer, div, mult, substruction, sum} from "./tasks";

test('sum', () => {
    const state = 10
    const num = 5
    const result = sum(state,num)
    expect(result).toBe(15)
})

test('sub', () => {
    expect(substruction(10,5)).toBe(5)
})

test('div', () => {
    expect(div(10,5)).toBe(2)
})

test('mult', () => {
    expect(mult(10,5)).toBe(50)
})

test('summ of two number with calculatorReducer', () => {
    expect(calculatorReducer(3,{type: 'SUM', num: 5})).toBe(8)
})
test('substruction of two number with calculatorReducer', () => {
    expect(calculatorReducer(9,{type: 'SUB', num: 5})).toBe(4)
})
test('divide of two number with calculatorReducer', () => {
    expect(calculatorReducer(15,{type: 'DIV', num: 5})).toBe(3)
})
test('mult of two number with calculatorReducer', () => {
    expect(calculatorReducer(3,{type: 'MULT', num: 5})).toBe(15)
})
