let input=document.querySelector('#tempInput');
let from=document.querySelector('#fromTemp');
let to=document.querySelector('#toTemp');
let btn=document.querySelector('button');
let result=document.querySelector('#result');

btn.onclick=()=>{
    let temp=parseFloat(input.value);
    let fromUnit=from.value;
    let toUnit=to.value;
    let output;

    if(isNaN(temp)){
        result.value='enter a valid number';
        return ;
    }

    //convert
    if(fromUnit===toUnit){
        output=temp;
    }
    else if(fromUnit==='C' && toUnit==='F'){
        output=(temp*9/5)+32 ;
    }
    else if(fromUnit==='F'&& toUnit==='C'){
        output=(temp-32)*5/9 ;
    }
    else if(fromUnit==='C' && toUnit==='K'){
        output=temp+273.15 ;
    }
    else if(fromUnit==='K' && toUnit==='C'){
        output=temp-273.15 ;
    }
    else if(fromUnit==='F' && toUnit==='K'){
        output=(temp-32)*5/9+273.15 ;
    }
    else if(fromUnit==='K' && toUnit==='F'){
        output=(temp-273.15)*9/5+32 ;
    }
    let symbol="";
    if(toUnit==='C')symbol='\u00B0C';
    else if(toUnit==='F')symbol='\u00B0F';
    else if(toUnit==='K')symbol='K';
    result.value=`${output.toFixed(2)}${symbol}`;
}


