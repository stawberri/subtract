const subtract = require('..')

it('subtracts numbers', () => {
  for (let i = 0; i < 100; i++) {
    const a = Math.floor(Math.random() * 100)
    const b = Math.floor(Math.random() * 100)

    expect(subtract(a, b)).toBe(a - b)
  }
})
