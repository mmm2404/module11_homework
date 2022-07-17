function isPrimeNum(){
  
    let x = prompt('введите число от 1 до 1000');  
        if((x<2) || (x>1000)){
            return alert ('неверное значение')
        }else{
            for(let i=2; i<x; i++){
                if(x%i==0){
                    return alert(`${x} непростое число`);
                        }
                    }
                     return alert(`${x} простое число`);
                }
            }

    
isPrimeNum();
