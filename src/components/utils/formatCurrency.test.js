import formatCurrency from './formatCurrency';

describe('Unit / formatCurrency', () => {
  it('formats currencies correctly', () => {
    expect(formatCurrency(10.1))
    .toBe('$10.10', 'Adds a trailing zero to fill two decimal places');

    expect(formatCurrency(10.0111))
    .toBe('$10.01', 'Rounds to two decimal places');

    expect(formatCurrency(10.019))
    .toBe('$10.02', 'Rounds down when necessary');

    expect(formatCurrency('10.1'))
    .toBe('$10.10', 'Accepts strings that parse as numbers');

    expect(formatCurrency(0))
    .toBe('$–', 'Fromats a zero as $–');

    expect(formatCurrency(''))
    .toBe('$–', 'Fromats a falsy argument the same as a zero');

    expect(formatCurrency('50.2.1'))
    .toBe('$–', 'Fromats a NaN string the same as a zero');
  });
});
