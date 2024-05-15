const { 
    filterEvens, 
    sumOfSquares, 
    findLongestWord,
    capitaliseWords,
    allAreTrue,
    asyncFetchProduct,
    extractEmails,
    removeDuplicates,
    countWords,
    flattenArray     
} = require('./oneLinerFunctions');
// ------------------------------------------------------------
// filterEvens: Test with both positive and negative numbers, as well as an empty array.
test("filterEvens([1,2,3,4,5,6]) should return [2,4,6]", () => {
    expect(filterEvens([1,2,3,4,5,6])).toEqual([2,4,6]);
});
test("filterEvens([-1,-2,-3,-4,-5,-6]) should return [-2,-4,-6]", () => {
    expect(filterEvens([-1,-2,-3,-4,-5,-6])).toEqual([-2,-4,-6]);
});
test("filterEvens([1,3,5]) should return []", () => {
    expect(filterEvens([1,3,5])).toEqual([]);
});
test("filterEvens([2,4,6]) should return [2,4,6]", () => {
    expect(filterEvens([2,4,6])).toEqual([2,4,6]);
});
test("filterEvens([]) should return []", () => {
    expect(filterEvens([])).toEqual([]);
});

// ------------------------------------------------------------
// sumOfSquares: Include arrays with both positive and negative numbers
test("sumOfSquares([1,2,3,4,5,6]) should return 91", () => {
    expect(sumOfSquares([1,2,3,4,5,6])).toBe(91);
});
test("sumOfSquares([-1]) should return 91", () => {
    expect(sumOfSquares([-1,-2,-3,-4,-5,-6])).toBe(91);
});
test("sumOfSquares([1,3,5]) should return 35", () => {
    expect(sumOfSquares([1,3,5])).toBe(35);
});
test("sumOfSquares([2,4,6]) should return 56", () => {
    expect(sumOfSquares([2,4,6])).toBe(56);
});

// ------------------------------------------------------------
// findLongestWord: Test arrays with words of varying lengths and multiple words of the same length.
test("findLongestWord(['cat', 'dog', 'elephant']) should return 'elephant'", () => {
    expect(findLongestWord(['cat', 'dog', 'elephant'])).toBe('elephant');
});
test("findLongestWord(['cat', 'dog', 'rat', 'bat']) should return 'cat'", () => {
    expect(findLongestWord(['cat', 'dog', 'rat', 'bat'])).toBe('cat');
});
test("findLongestWord(['cat']) should return 'cat'", () => {
    expect(findLongestWord(['cat'])).toBe('cat');
});

// ------------------------------------------------------------
// capitaliseWords: Test with single and multiple words, including punctuation.
test("capitaliseWords('hello') should return 'Hello'", () => {
    expect(capitaliseWords('hello')).toBe('Hello');
});
test("capitaliseWords('hello world') should return 'Hello World'", () => {
    expect(capitaliseWords('hello world')).toBe('Hello World');
});
test("capitaliseWords('hello, world') should return 'Hello, World'", () => {
    expect(capitaliseWords('hello, world')).toBe('Hello, World');
});
test("capitaliseWords('hello, world!') should return 'Hello, World!'", () => {
    expect(capitaliseWords('hello, world!')).toBe('Hello, World!');
});
test("capitaliseWords('hello, world! how are you?') should return 'Hello, World! How Are You?'", () => {
    expect(capitaliseWords('hello, world! how are you?')).toBe('Hello, World! How Are You?');
});

// ------------------------------------------------------------
// areAllTrue: Test with different predicates and arrays containing various data types.
test("All numbers are greater than 0", () => {
    expect(allAreTrue([1, 2, 3], (num) => num > 0)).toBe(true);
});

// Test case 2: Array of strings, predicate checking if each string has a length greater than 3
test("All strings have length greater than 3", () => {
    expect(allAreTrue(["apple", "banana", "orange"], (str) => str.length > 3)).toBe(true);
});

// Test case 3: Array of mixed data types, predicate checking if each element is truthy
test("All elements are truthy", () => {
    expect(allAreTrue([true, 1, "hello"], (elem) => !!elem)).toBe(true);
});

// Test case 4: Array with at least one element failing the predicate
test("Not all elements are even numbers", () => {
    expect(allAreTrue([2, 4, 5, 6], (num) => num % 2 === 0)).toBe(false);
});

// ------------------------------------------------------------
// asyncFetchProduct: Test both resolved and rejected promises to simulate different responses.
test("asyncFetchProduct(1) should return 'Product retrieved'", () => {
    return asyncFetchProduct(1).then((data) => {
        expect(data).toBe("Product retrieved");
    });
});
test("asyncFetchProduct(-1) should return 'Product not found'", () => {
    return asyncFetchProduct(-1).catch((error) => {
        expect(error).toBe("Product not found");
    });
});

// ------------------------------------------------------------
// extractEmails: Test with strings containing multiple email addresses (eg: abc@def.com), 
// no addresses, and invalid addresses.
test("extractEmails('this is a test xyz@qrs.com string abc@def.com with an email in it') should return ['xyz@qrs.com', 'abc@def.com']", () => {
    expect(extractEmails('this is a test xyz@qrs.com string abc@def.com with an email in it')).toEqual(['xyz@qrs.com', 'abc@def.com']);
});
test("extractEmails('this is a test xyz@qrs.com.au string an email in it') should return ['xyz@qrs.com.au']", () => {
    expect(extractEmails('this is a test xyz@qrs.com.au string an email in it')).toEqual(['xyz@qrs.com.au']);
});
test("extractEmails('this is a test string with no email in it') should return null", () => {
    expect(extractEmails('this is a test string with no email in it')).toEqual(null);
});
test("extractEmails('this is a test string with abc@def invalid email in it') should return null", () => {
    expect(extractEmails('this is a test string with abc@def invalid email in it')).toEqual(null);
});

// ------------------------------------------------------------
// removeDuplicates: Test arrays with no duplicates, some duplicates, and all duplicates.
test("removeDuplicates([1,2,3,4,5,6]) should return [1,2,3,4,5,6]", () => {
    expect(removeDuplicates([1,2,3,4,5,6])).toEqual([1,2,3,4,5,6]);
});
test("removeDuplicates([1,2,3,4,5,6,1,2,3,4,5,6]) should return [1,2,3,4,5,6]", () => {
    expect(removeDuplicates([1,2,3,4,5,6,1,2,3,4,5,6])).toEqual([1,2,3,4,5,6]);
});
test("removeDuplicates([1,1,1,1,1,1]) should return [1]", () => {
    expect(removeDuplicates([1,1,1,1,1,1])).toEqual([1]);
});

// ------------------------------------------------------------
// countWords: Test with sentences with different structures, using punctuation and varying cases.
test("Count unique words in a sentence", () => {
    const sentence = "This is a test sentence";
    const expectedResult = {
        "This": 1,
        "is": 1,
        "a": 1,
        "test": 1,
        "sentence": 1
    };
    expect(countWords(sentence)).toEqual(expectedResult);
});

test("Count repeated words in a sentence", () => {
    const sentence = "This is a test sentence. This is another test sentence.";
    const expectedResult = {
        "This": 2,
        "is": 2,
        "a": 1,
        "test": 2,
        "sentence.": 2,
        "another": 1
    };
    expect(countWords(sentence)).toEqual(expectedResult);
});

test("Count words in an empty sentence", () => {
    const sentence = "";
    const expectedResult = {};
    expect(countWords(sentence)).toEqual(expectedResult);
});

test("Count one word in a sentence", () => {
    const sentence = "Hello";
    const expectedResult = {
        "Hello": 1
    };
    expect(countWords(sentence)).toEqual(expectedResult);
});

// ------------------------------------------------------------
// flattenArray: Test with different levels of nesting within arrays.
test("flattenArray([1,2,3,4,5,6]) should return [1,2,3,4,5,6]", () => {
    expect(flattenArray([1,2,3,4,5,6])).toEqual([1,2,3,4,5,6]);
});
test("flattenArray([1,[2,3],4,[5,6]]) should return [1,2,3,4,5,6]", () => {
    expect(flattenArray([1,[2,3],4,[5,6]])).toEqual([1,2,3,4,5,6]);
});
test("flattenArray([1,2,[3,4,[5,6]]]) should return [1,2,3,4,5,6]", () => {
    expect(flattenArray([1,2,[3,4,[5,6]]])).toEqual([1,2,3,4,5,6]);
});
test("flattenArray([1,2,3,[4,5,[6]]]) should return [1,2,3,4,5,6]", () => {
    expect(flattenArray([1,2,3,[4,5,[6]]])).toEqual([1,2,3,4,5,6]);
});
test("flattenArray([]) should return []", () => {
    expect(flattenArray([])).toEqual([]);
});
