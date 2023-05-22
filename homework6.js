//დავალება 1
const replaceValue = (string, valueToReplace, valueToReplaceWith) =>{

    let substrings = string.split(valueToReplace);
    let newString = substrings.join(valueToReplaceWith)
    return newString
}

//დავალება 2

const toUpperCase = (string) =>{
    let newString = string.toUpperCase()
    return newString
}

//დავალება 3

const users = [
    {
        name: "Lasha",
         age: 30

    },
    {
        name: "Saba",
         age: 20
    },
    {
        name: "Saba",
         age: 20
    },
    {
        name: "Saba",
         age: 20
    }
]

const sortByusersAge = (user) =>{
 return user.sort((obj1,obj2)=> obj1.age - obj2.age)
}

console.log(

    sortByusersAge(users)
)
