const balancedBrackets = require('../src/question-2')

describe('balancedBrackets', () => {
	test('case 1', () => {
		expect(balancedBrackets('{')).toBeDefined()
	})

	test('case 2', () => {
		expect(balancedBrackets('([]{}()')).toBe(false)
	})

	test('case 3', () => {
		expect(balancedBrackets('[[[[{{}}]]]]()')).toBe(true)
	})

	test('case 4', () => {
		expect(balancedBrackets(']]]]]))))')).toBe(false)
	})

	test('case 5', () => {
		expect(balancedBrackets('[[[[{{{{(((')).toBe(false)
	})

	test('case 6', () => {
		expect(balancedBrackets('{')).toBe(false)
	})

	test('case 7', () => {
		expect(balancedBrackets('([]{}())')).toBe(true)
	})

test('case 8', () => {
		expect(balancedBrackets('))[[')).toBe(false)
	})

	test('case 9', () => {
		expect(balancedBrackets('}}})))[[[')).toBe(false)
	})
	test('case 10', () => {
		expect(balancedBrackets('{){])[')).toBe(false)
	})

})
