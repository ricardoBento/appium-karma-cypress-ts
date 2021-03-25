// import sum from '../src/tstest';

// describe("Module should return", function () {
//   it("some number", function () {
//     expect(sum(1,1)).toEqual(2);
//   });
// });
// describe('My Login application', () => {
//   it('should', () => {
//       expect(1 + 1).toBe(2);
//   });
// });
// describe('My Login application', () => {
//   it('should', () => {
//       browser.url(`https://the-internet.herokuapp.com/login`);
//   });
// });

import add from '../src/add';

describe('Add function', () => {
   it('should add', () => {
    expect(add(1,1)).toBe(2);
});
});

