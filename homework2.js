//დავალება 1

const users =[
    {
        name: 'Temo',
        age: 25
    },
    {
        name: 'Lasha',
        age: 21
    },
    {   name: 'Ana',
        age: 28
    }
]
const findYoungest = () =>{
    let minimum = users[0].age;
    let youngestName =users[0].name
  users.forEach((element)=>{
    if(element.age<minimum){
        minimum = element.age
        youngestName=element.name
    }
  })
  return youngestName
}
findYoungest();



//დავალება 2
const user = {
    name: "budu",
    lastName: "chachibaia",
    age: "20"
}
const userFn =(user) =>{
    const newUser = {...user};
    return newUser


}
userFn(user)

//დავალება 3 აქ ფრეც დავამატე =)

const diceRoll =()=>{
    let a;
    let b;
 
    while(a!==3&&b!==3){
        let rollRate =0;
        rollRate++;
        a = Math.floor(1+Math.random() *6 )
        b = Math.floor(1+Math.random() *6)
        console.log(`a rolled - ${a}`);
        console.log(`b rolled - ${b}`)
        if(a===3&&b===3){
            return  `rolled ${rollRate} times and it was draw` ;
        }else if(a===3){
            return `rolled ${rollRate} times and a won`
        }else if(b===3){
            return `rolled ${rollRate} times and b won`
        }
       
    
    }
}
diceRoll();