let resolve = document.getElementById('input')
function add(i){
    resolve.value = resolve.value + i
}
let clear = document.getElementById('clear')
clear.addEventListener('click', function(){
    resolve.value = ''
})
let solve = document.getElementById('result')
function result(){
    if( eval(resolve.value) === undefined){
        resolve.value = '0,00'
    }else if(eval(resolve.value) === Infinity){
        resolve.value = '0,00'
    }
    resolve.value = eval(resolve.value)
}
let backspace = document.getElementById('backspace')
backspace.addEventListener('click', function(){
    resolve.value = resolve.value.substring(0, resolve.value.length-1)
})