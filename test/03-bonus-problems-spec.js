const { expect } = require('chai');
const { kth, newAlphabet, longestPalindrome, longestSubstr, maxSubarr, coinChange, climbingSteps } = require('../phases/03-bonus-problems');

    describe('kth()', () => {
        it('should return the kth most frequent character in the string', () => {
            const str1 = 'aaabbc', str2 = 'assessment'

            expect(kth(str1, 1)).to.equal('a');
            expect(kth(str1, 2)).to.equal('b');
            expect(kth(str1, 3)).to.equal('c');
            expect(kth(str2, 1)).to.equal('s');
            expect(kth(str2, 2)).to.equal('e');
        })

        context('if equally frequent', () => {
            it('should return the character that appears earlier in the alphabet', () => {
                const str1 = 'mississippi';
                const str2 = 'racecar';

                expect(kth(str1, 1)).to.equal('i');
                expect(kth(str2, 1)).to.equal('a');
            })
        })

        it('should run in O(n) time', () => {
            const arr1 = new Array(500000).fill('a');
            const arr2 = new Array(300000).fill('b');
            const arr3 = new Array(200000).fill('c');

            expect (kth(arr1.concat(arr2, arr3).join(''), 1)).to.equal('a');
            expect (kth(arr1.concat(arr2, arr3).join(''), 2)).to.equal('b');
            expect (kth(arr1.concat(arr2, arr3).join(''), 3)).to.equal('c');
        })
    })

    describe('newAlphabet()', () => {
        it('should return a boolean indicating if the string is in "alphabetical" order of the given alphbet', () => {
            const str1 = 'dino', str2 = 'leetcode', str3 = 'leetcod', str4 = 'limo', str5 = 'abcde';
            const alph1 = 'abcdefghijklmnopqrstuvwxyz', alph2 = 'labefghijkmnpqrstucvowxdyz';

            expect(newAlphabet(str1, alph1)).to.be.true;
            expect(newAlphabet(str2, alph1)).to.be.false;
            expect(newAlphabet(str3, alph2)).to.be.true;
            expect(newAlphabet(str4, alph2)).to.be.true;
            expect(newAlphabet(str5, alph2)).to.be.false;
        })

        it('should run in O(n) time', () => {
            const arr1 = new Array(500000).fill('a');
            const arr2 = new Array(300000).fill('b');
            const arr3 = new Array(200000).fill('c');
            const alph1 = 'abcdefghijklmnopqrstuvwxyz'

            expect(newAlphabet(arr1.concat(arr2, arr3).join(''), alph1)).to.be.true;
            expect(newAlphabet(arr1.concat(arr3, arr2).join(''), alph1)).to.be.false;
        })
    })

    describe('longestPalindrome()', () => {
        it('should determine the length of the longest palindrome that can be built with an inputted string', () => {
            expect(longestPalindrome("abccccdd")).to.equal(7);
            expect(longestPalindrome('aabccerrz')).to.equal(7);
            expect(longestPalindrome('abcde')).to.equal(1);
            expect(longestPalindrome('abcdee')).to.equal(3);
        })

        it('should run in O(n) time', () => {
            const arr1 = new Array(1).fill('a');
            const arr2 = new Array(1).fill('b');
            const arr3 = new Array(800000).fill('c');
            const arr4 = new Array(400000).fill('d');

            expect(longestPalindrome(arr1.concat(arr2, arr3, arr4).join(''))).to.equal(1200001)
        })
    })

    describe('longestSubstr()', () => {
        it('should find the length of the longest substring without repeating characters', () => {
            expect(longestSubstr('abc')).to.equal(3)
            expect(longestSubstr("abcabcbb")).to.equal(3)
            expect(longestSubstr('bbbbb')).to.equal(1)
            expect(longestSubstr('abcdeffghij')).to.equal(6);
        })

        it('should run in O(n) time', () => {
            const arr1 = new Array(1000000).fill('a');
            expect(longestSubstr(arr1.join('') + 'b' + 'c')).to.equal(3)
        })
    })

    describe('maxSubarr()', () => {
        it('should return the length of the longest subarray where the difference between its max and min values is less than or equal to 1', () => {
            expect(maxSubarr([1,3,2,2,5,2,3,7])).to.equal(5);
            expect(maxSubarr([1,1,1,1,3])).to.equal(4);
            expect(maxSubarr([1,2,3,4,5])).to.equal(2);
        })

        it('should run in O(n) time', () => {
            const arr1 = new Array(1000000).fill(1);

            expect(maxSubarr(arr1.concat(3))).to.equal(1000000)
        })
    })

    describe('coinChange()', () => {
        it('should return the fewest number of the given coins needed to make up the given amount', () => {
            const coins = [1, 5, 10, 25];
            const coins2 = [5];
            const coins3 = [4, 7, 9];

            expect(coinChange(coins, 11)).to.equal(2);
            expect(coinChange(coins2, 0)).to.equal(0)
            expect(coinChange(coins3, 22)).to.equal(3);
            expect(coinChange(coins3, 29)).to.equal(4);

        })

        it('should return -1 if the given amount cannot be made up by any combination of coins', () => {
            const coins2 = [5];
            const coins3 = [6, 7, 9];

            expect(coinChange(coins2, 3)).to.equal(-1);
            expect(coinChange(coins3, 11)).to.equal(-1);
        })

        it('should run in O(n) time', () => {
            const coins = [1, 5, 10, 25];

            expect(coinChange(coins, 1000000)).to.equal(40000)
            expect(coinChange([29], 1000000)).to.equal(-1)
        })
    })

    describe('climbingSteps()', () => {
        it('should return the number of distinct ways to climb the given number of steps', () => {
            expect(climbingSteps(0)).to.equal(1);
            expect(climbingSteps(1)).to.equal(1);
            expect(climbingSteps(2)).to.equal(2);
            expect(climbingSteps(3)).to.equal(4);
            expect(climbingSteps(4)).to.equal(7);
            expect(climbingSteps(5)).to.equal(13);
            expect(climbingSteps(6)).to.equal(24);
        })

        it('should run in O(n) time', () => {
            expect(climbingSteps(50)).to.equal(10562230626642)
        })
    })
