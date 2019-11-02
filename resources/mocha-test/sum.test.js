import sum from './sum.js';

describe('sum', function () {
  it('should return sum of arguments', function () {
    chai.expect(sum(1, 2)).to.equal(3);
  });
});

const test = () => {
   it('test', () => {
    // chai.assert.equal('5', '5');
    chai.expect(5).to.equal(5);
  });
}

test()