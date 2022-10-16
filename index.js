// Code your solutions in this file
function writeCards(names, events){
    let tyc = []
    for(let x = 0; x < names.length; x++){
        tyc.push(`Thank you, ${names[x]}, for the wonderful ${events} gift!`)
    }
    return tyc
}

function countDown(x){
    while (x >= 0){
        console.log(x)
        x--
    }
}