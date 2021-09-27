function factorial(n) {
    let result = 1;
    if (n === 0 || n === 1) {
        return result;
    }

    for (let i = 1; i <= n; i++) {
        result = result * i;
    }

    return result;
}





// Подскажите пожалуйста, почему данная ниже функция не прошла тест?
/*
function factorial(n){
  let result = 1;
  while(n){
      result *= n--;
  }
  return result;
}
*/