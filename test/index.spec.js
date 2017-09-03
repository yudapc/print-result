const { results } = require('../index.js');
const expect = require('chai').expect;

describe('test results function', () => {
  it('should return undefined result and message', () => {
    const result = undefined;
    const message = undefined;
    const expectResult = { result, message };
    const getResult = results(result, message);
    expect(getResult.result).to.equal(result);
    expect(getResult.message).to.equal(message);
  });
  it('should return result and message', () => {
    const result = 1;
    const message = 'return should 1';
    const expectResult = { result, message };
    const getResult = results(result, message);
    expect(getResult.result).to.equal(result);
    expect(getResult.message).to.equal(message);
  });
});
