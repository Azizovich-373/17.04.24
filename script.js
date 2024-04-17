let arr = ['vlad','damir','akbar','samir','shokhruh','farzod','abdulvahob','amiriddin','konstantin','alexandr']
let sort = arr.toSorted((a,b) => b.length - a.length)
console.log(sort[0]);