//დავალება 1

const sumIPlay =(...n)=>{
   
    const sum = n[0]+n[1];
    let multiplyIndex=1;
  
    for(let i=2; i<n.length;i++){
        multiplyIndex*=n[i]
    }
    if(n.length>2){
        
        return [sum, multiplyIndex]
    }
    
}
sumIPlay(1,5,3,4,5);

// დავალება 2


    function cityFn(user) {
        const {banks: {adress: {city} = {}} = {} } = user;
        
        console.log(city)
        return city;
    }
    
//დავალება 3

function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
  
    const copy = {};
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = typeof obj[key] === 'object' ? {...obj[key]} : obj[key];
      }
    }
  
    return copy;
  }
  
