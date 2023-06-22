const names = ["Guadalupe", "Ollie", "Aki"];
let surprise = "surprise";

const writeCards=(names, surprise)=>{
    let newArr=[];
    for(let i=0; i<names.length; i++){
        newArr.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return newArr
}

writeCards(names);



const countDown=(names, surprise)=>{
    for(let i=0; i<11; i++){
        console.log(i);
    }
}

countDown();



