function insert(val){
  document.getElementById("output").value+=val;
}
function equal(){
  let x = document.getElementById("output").value;
  let y = eval(x); 
  document.getElementById("output").value=y; 
}
function clr(){
  document.getElementById("output").value="";
}
function backspace(){
    var prevalue=document.getElementById("output").value;
    document.getElementById("output").value=prevalue.substr(0,prevalue.length-1);
}
function ac(){
document.getElementById("output").value="";
}
function btsin(){
document.getElementById("output").value=Math.sin(document.getElementById("output").value);
}
function btcos(){
document.getElementById("output").value=Math.cos(document.getElementById("output").value);
}
function bttan(){
document.getElementById("output").value=Math.tan(document.getElementById("output").value);
}
function sqrt(){
document.getElementById("output").value=Math.pow(document.getElementById("output").value,1/2);
}
function square(){
document.getElementById("output").value=Math.pow(document.getElementById("output").value,2);
}
function log(){
document.getElementById("output").value=Math.log(document.getElementById("output").value);
}
function cube(){
document.getElementById("output").value=Math.pow(document.getElementById("output").value,3);
}
function exp(){
document.getElementById("output").value=Math.exp(document.getElementById("output").value,1/2);
}
function percent(){
var per=document.getElementById("output").value;
document.getElementById("output").value=per/100;
}
