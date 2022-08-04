// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
function validateCred(array){
    let numberSum = 0;
    let iCounter = 0;
    //itero de derecha a izquierda
    for (let i = array.length - 1; i >= 0; i -= 1) {
      iCounter ++;
      //acumulo el check number y los impares
      if(iCounter%2 != 0){
        numberSum += array[i];
      } else {
        //duplico digito pares y acumulo
        numberSum += doubleNum(array[i]);
      }
    }
    //si el modulo 10 de lo acumulado es cero, devuelve true
    if(numberSum%10==0){
      return true;
    }else{
      return false
    }
  }
  
  function doubleNum(num){
    let numberDouble = num * 2;
    if(numberDouble > 9){
          numberDouble = numberDouble - 9;
        }
    return numberDouble;
  }
  
  function findInvalidCards(nestedArray){
    let invalidCards=[];
    for (let i = 0; i < nestedArray.length; i += 1) {
      if(validateCred(nestedArray[i])==false){
        invalidCards.push(nestedArray[i]);
      }
    }
  
    return invalidCards;
  }
  
  function idInvalidCardCompanies(invalidCards){
    let invalidCompanies = [];
  
    for (let i = 0; i < invalidCards.length; i += 1) {
      let company = "";
      
        switch(invalidCards[i][0]){
            case 3:
                company = "Amex (American Express)";
                break;
            case 4:
                company = "Visa";
                break;
            case 5:
                company = "Mastercard";
                break;
            case 6:
                company = "Discover";
                break;
           default:
              console.log('Company not found');
        }
  
    if(!invalidCompanies.includes(company)){
      invalidCompanies.push(company);
    }
  }
    return invalidCompanies;
  
  }
  
  /*const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];*/
  
  /*console.log(validateCred(invalid5));*/
  
  /*console.log(doubleNum(8));*/
  
  /*console.log(findInvalidCards(batch));*/
  
  console.log(idInvalidCardCompanies(findInvalidCards(batch)));