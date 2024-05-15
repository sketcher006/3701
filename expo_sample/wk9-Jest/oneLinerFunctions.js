const filterEvens = (numbers) => {
    return numbers.filter((n)=>{return n%2===0});
}

const sumOfSquares = (numbers) => {
    return numbers.reduce((accum, currentInt) => {return accum + currentInt*currentInt},0);
}

const findLongestWord = (words) => {
    return words.reduce((accum, curr) => {
        return curr.length > accum.length ? curr : accum;
    })
}

const capitaliseWords = (sentence) => {
    return sentence.split(' ').map((word)=>{return word[0].toUpperCase() + word.slice(1)}).join(' ');
}

const allAreTrue = (values, predicate) => {
    return values.every(predicate);
}

const asyncFetchProduct = async (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            if (id > 0){
                resolve('Product retrieved');
            } else {
                reject('Product not found');
            }
        }, 200);

    })
}

const extractEmails = (text) => {
    return text.match(/\w+@\w+\.\w+\.*\w*/g);
}

const removeDuplicates = (array) => {
    return array.filter((value, index)=>{return array.indexOf(value) === index});
}

const countWords = (sentence) => {
    const retOb = {};
    sentence.split(' ').forEach((word) => { 
        if(retOb[word]){
            retOb[word]++;
        } else if(word.length>0){
            retOb[word] = 1;
        }
    });
    return retOb;
}

const flattenArray = (arrays) => {
    return arrays.reduce((accum, current) => Array.isArray(current) ? accum.concat(flattenArray(current)) : accum.concat(current)
    , []);
}

module.exports = { 
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
};