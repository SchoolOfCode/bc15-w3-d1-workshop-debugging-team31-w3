function countNumberOfNinesInNumber(number) {
  let count = 0;

  let numberSpr = number.toString ();

  for (let i = 0; i < numberSpr.length; i++) {
    const digit = numberSpr[i];
    if (digit == "9") {
      count++;
    }

  //return count;
}
return count;
}

//countNumberOfNinesInNumber(9)         
//countNumberOfNinesInNumber(989)       
//countNumberOfNinesInNumber(1115.1257846) 
//How could you check if the for loop is running and how many iterations it completes before ending?