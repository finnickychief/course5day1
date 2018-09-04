(function() {
  'use strict';
  describe('Javascript Exercises', function() {
    describe('isNumeric', function() {
      it('should expect isNumeric(2) to be true', function() {
        expect(isNumeric(2)).to.equal(true);
      });
      it('should expect isNumeric(5000) to be true', function() {
        expect(isNumeric(5000)).to.equal(true);
      });
      it('should expect isNumeric("a") to be false', function() {
        expect(isNumeric('a')).to.equal(false);
      });
      it('should expect isNumeric("Words") to be false', function() {
        expect(isNumeric('Words')).to.equal(false);
      });
      it('should expect isNumeric("ab") to be false', function() {
        expect(isNumeric('ab')).to.equal(false);
      });
      it('should expect isNumeric({key: "Value"}) to be false', function() {
        expect(isNumeric({ key: 'Value' })).to.equal(false);
      });
    });

    describe('isAlpha', function() {
      it('should expect isAlpha("c") to be true', function() {
        expect(isAlpha('c')).to.equal(true);
      });
      it('should expect isAlpha("z") to be true', function() {
        expect(isAlpha('z')).to.equal(true);
      });
      it('should expect isAlpha("A") to be true', function() {
        expect(isAlpha('A')).to.equal(true);
      });
      it('should expect isAlpha("P") to be true', function() {
        expect(isAlpha('P')).to.equal(true);
      });
      it('should expect isAlpha("Word") to be false', function() {
        expect(isAlpha('Word')).to.equal(false);
      });
      it('should expect isAlpha("ab") to be false', function() {
        expect(isAlpha('ab')).to.equal(false);
      });
      it('should expect isAlpha(5) to be false', function() {
        expect(isAlpha(5)).to.equal(false);
      });
      it('should expect isAlpha("5") to be false', function() {
        expect(isAlpha('5')).to.equal(false);
      });
      it('should expect isAlpha("!") to be false', function() {
        expect(isAlpha('!')).to.equal(false);
      });
      it('should expect isAlpha("+") to be false', function() {
        expect(isAlpha('+')).to.equal(false);
      });
    });

    describe('inRange', function() {
      it('should expect inRange(1,0,5) to be true', function() {
        expect(inRange(1, 0, 5)).to.equal(true);
      });

      it('should expect inRange(7,-2,20) to be true', function() {
        expect(inRange(7, -2, 20)).to.equal(true);
      });

      it('should expect inRange(10,4,8) to be false', function() {
        expect(inRange(10, 4, 8)).to.equal(false);
      });

      it('should expect inRange("a",5,10) to be false', function() {
        expect(inRange('a', 5, 10)).to.equal(false);
      });
      it('should expect inRange(5,5,10) to be true', function() {
        expect(inRange(5, 5, 10)).to.equal(true);
      });
      it('should expect inRange(10,5,10) to be true', function() {
        expect(inRange(10, 5, 10)).to.equal(true);
      });
    });

    describe('hasKey', function() {
      it('should expect hasKey({}, "key1") to be false', function() {
        expect(hasKey({}, 'key1')).to.equal(false);
      });
      it('should expect hasKey({key1: "val"}, "key1") to be true', function() {
        expect(hasKey({ key1: 'val' }, 'key1')).to.equal(true);
      });
      it('should expect hasKey({name: "Doe"}, "name") to be true', function() {
        expect(hasKey({ name: 'Doe' }, 'name')).to.equal(true);
      });
      it('should expect hasKey({id: "5"}, "address") to be false', function() {
        expect(hasKey({ id: '5' }, 'address')).to.equal(false);
      });
      it('should expect hasKey({address: 1732}, "home") to be false', function() {
        expect(hasKey({ address: 1732 }, 'home')).to.equal(false);
      });
      it('should expect hasKey({},) to be false', function() {
        expect(hasKey({})).to.equal(false);
      });
      it('should expect hasKey({key: "value", key2: "value2"}, "key") to be true', function() {
        expect(hasKey({ key: 'value', key2: 'value2' }, 'key')).to.equal(true);
      });
    });

    describe('isSorted', function() {
      it('should expect isSorted([1,2,3,4], "ASC") to be true', function() {
        expect(isSorted([1, 2, 3, 4], 'ASC')).to.equal(true);
      });
      it('should expect isSorted([4,3,2,1,], "DESC") to be true', function() {
        expect(isSorted([4, 3, 2, 1], 'DESC')).to.equal(true);
      });
      it('should expect isSorted([1,3,2,4], "ASC") to be false', function() {
        expect(isSorted([1, 3, 2, 4], 'ASC')).to.equal(false);
      });
      it('should expect isSorted([4,2,3,1], "DESC") to be false', function() {
        expect(isSorted([4, 2, 3, 1], 'DESC')).to.equal(false);
      });
      it('should expect isSorted([42,2,3,1], "DESC") to be false', function() {
        expect(isSorted([42, 2, 3, 1], 'DESC')).to.equal(false);
      });
      it('should expect isSorted([1,22,31,100], "ASC") to be true', function() {
        expect(isSorted([1, 22, 31, 100], 'ASC')).to.equal(true);
      });
    });
    describe('numOccurences', function() {
      it('should expect numOccurences([5,5,5,3,2,1,7],5) to be 3', function() {
        expect(numOccurences([5, 5, 5, 3, 2, 1, 7], 5)).to.equal(3);
      });
      it('should expect numOccurences([7,4,2,5,6,8,1],2) to be 1', function() {
        expect(numOccurences([7, 4, 2, 5, 6, 8, 1], 2)).to.equal(1);
      });
      it('should expect numOccurences([9,9,2,1,9,90],9) to be 3', function() {
        expect(numOccurences([9, 9, 2, 1, 9, 90], 9)).to.equal(3);
      });
      it('should expect numOccurences([12,5,4,3,4,7,5,4,12,-1,4],4) to be 4', function() {
        expect(numOccurences([12, 5, 4, 3, 4, 7, 5, 4, 12, -1, 4], 4)).to.equal(
          4
        );
      });
    });

    describe('findMax', function() {
      it('should expect findMax([5,30,8,15,19,23]) to be 30', function() {
        expect(findMax([5, 30, 8, 15, 19, 23])).to.equal(30);
      });
      it('should expect findMax([-18,-23,22,17,3,10]) to be 22', function() {
        expect(findMax([-18, -23, 22, 17, 3, 10])).to.equal(22);
      });
      it('should expect findMax([15,-4,-7,12,-8]) to be 15', function() {
        expect(findMax([15, -4, -7, 12, -8])).to.equal(15);
      });
      it('should expect findMax([-30,-18,-21,-40,-19]) to be -18', function() {
        expect(findMax([-30, -18, -21, -40, -19])).to.equal(-18);
      });
    });

    describe('findMin', function() {
      it('should expect findMin([5,30,8,15,19,23]) to be 5', function() {
        expect(findMin([5, 30, 8, 15, 19, 23])).to.equal(5);
      });
      it('should expect findMin([-18,-23,22,17,3,10]) to be -23', function() {
        expect(findMin([-18, -23, 22, 17, 3, 10])).to.equal(-23);
      });
      it('should expect findMin([15,-4,-7,12,-8]) to be -8', function() {
        expect(findMin([15, -4, -7, 12, -8])).to.equal(-8);
      });
      it('should expect findMin([-30,-18,-21,-40,-19]) to be -40', function() {
        expect(findMin([-30, -18, -21, -40, -19])).to.equal(-40);
      });
    });
  });
})();
