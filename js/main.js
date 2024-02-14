var elInp1 = document.querySelector('.inp1')
function fn(){
    var num1 =elInp1.value
    if(num1 % 3 ==0){
        console.log('3 ga bolinadi')
    }
    else if(num1 % 7 ==0){
        console.log('7 ga bolinadi')
    }
    else(num1 % 3==0 && num1%7==0 )
    {
        console.log('3 ga ham 7 ga ham bolinadi')
    }
}
