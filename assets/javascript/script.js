var result = document.querySelector("input");
var numchar;
var currentchar , prevchar;
var operation = ['*','+','/','-'];

function display(c){
    result.value +=c;
    numchar = result.value.length;
    currentchar = c;
    getprevchar()
}

function clear(){
    result.value = " " ;
}

function del(){
    result.value =  result.value.slice(0, -1);
}

function calc(){
    result.value = eval(result.value);
}

function getprevchar(){
    prevchar = result.value.substring( numchar-2, numchar-1);
    check();

}
function check(){
if( operation.includes(prevchar) && operation.includes(currentchar)){
    alert("error same op");
}
}