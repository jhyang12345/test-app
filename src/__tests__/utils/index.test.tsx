import sum from 'utils'

test('sum numbers', () => {
    expect(sum(3, 5)).toEqual(8)
    expect(sum(8, 11)).toEqual(19)
})


export default sum