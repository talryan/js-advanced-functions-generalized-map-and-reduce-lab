// Add your functions here

function map (source, callBack){
let x = []
for (let i = 0; i < source.length; i++ ) {
    let theElement = source[i]
    x.push(callBack(theElement))
}
return x
}

function reduce (source, callBack, startingPoint) {
    let x = (!!startingPoint) ? startingPoint : source[0]
    let i = (!!startingPoint) ? 0:1
    
    for (; i < source.length; i++ ) {
        x = callBack(source[i], x)
    }
    return x

}