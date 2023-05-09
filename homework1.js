//დავალება 1
const a = (a,b) =>{
    if(a===b){
        return "ტოლია"
    }else{
        return "არ არის ტოლი"
    }
}

//დავალება 2
const fInC = (f, c) =>{
    let strFromPrompt=prompt("შეიყვანეთ ცელსიუსში");
     f=parseInt(strFromPrompt)
     c = (f-32)*5/9
     if(f===Number(f)){
         return c
     }else{
         return false;
     }
 }
 fInC();

 //დავალება 3
 const arithmetic = (a,b, operation) =>{
    let result;
    if(operation === "+"){
        result = a+b;
        return result;
    }else if(operation=== "-"){
        result= a-b;
        return result
    }else if(operation === "*"){
        result = a*b;
        return result
    }else if(operation === "/"){
        result = a/b;
        return result
    }else if(a&&b!=Number||operation==undefined){
        return false;
    }
}