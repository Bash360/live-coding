const validSubsequence = require('../src/question-1')

describe('validSubsequence', () => {
	it('case 1', () => {
		expect(validSubsequence([1, 2, 3, 4, 7, 9], [1, 3, 4])).toBeDefined()
	})

	it('case 2', () => {
		expect(validSubsequence([1, 2, 3, 4, 7, 9], [1, 3, 4])).toBe(true)
	})

	it('case 3', () => {
		expect(validSubsequence([1, 2, 3, 4, 7, 9], [1, 3, 4])).toBe(true)
	})

	it('case 4', () => {
		expect(validSubsequence([1, 2, 3, 4, 7, 9], [1, 3, 4])).toBe(true)
	})

	it('case 5', () => {
		expect(validSubsequence([12, 7, 2, 34, 5, 22, 4, 19], [2, 34, 4, 19])).toBe(true)
	})

	it('case 6', () => {
		expect(validSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 25, 22, 8])).toBe(false)
	})
})
