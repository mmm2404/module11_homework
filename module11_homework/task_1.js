let arr = [null, 2, 4, 3, 0,'ups'];


function countEvenOddZero(arr){
  let even = 0;
  let odd = 0;
  let zero = 0;

  for (let i = 0; i < arr.length; i++){
    if(typeof(arr[i]) === 'number'){
        if(arr[i] === 0){
            zero++    
        }
        else if(arr[i]%2 == 0){
            even++
        }else{
            odd++ 
        }
    }
    else{
      console.log(`not a number: ${arr[i]}`)
    }
  }
   

console.log(`${zero}- нулей`)
console.log(`${even}- вот столько чётных`)
console.log(`${odd}- вот столько нечётных`)
}

countEvenOddZero(arr)