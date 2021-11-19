export const formatNumber = number => {
    let strForm = String(number).split('.');
    let first = strForm[0];
    let second = strForm[1];

    let firstReverse = reverseIt(first);
    let resultTemp = reverseIt(splitUp(firstReverse).join(','));
    let result = [];
    result.push(resultTemp, second);

    return result.join('.');
}

function splitUp(aString){
    let numArray = []
    for(let i=0; i<aString.length; i+=3){
      numArray.push(aString.slice(i,i+3));
    }
    return numArray;
}

function reverseIt(aString){
  return aString.split('').reverse().join('');
}