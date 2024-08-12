let matriz;
//<input id="matriz" type="number">document.querySelector("#matriz").addEventListener("keypress",teclado);
//<button class="yo">Aceptar</button>document.querySelector(".yo").addEventListener("click",leer);
//function teclado(e){
//    (e.key==="Enter") && leer();
//};
//function leer(){
//    matriz=document.querySelector("#matriz").value;
//    document.querySelector(".yo1").innerHTML=matriz;
//    //alert(matriz);
//}
const m2=document.getElementById("m2"),
m3=document.getElementById("m3"),
m4=document.getElementById("m4");
const contenedor= document.querySelector("#yo1")


m2.addEventListener("click",matriz2);
let casilla=0;
function matriz2(){
    let div=document.createElement("div");
    div.innerHTML='<input type="text" class="x">x +</input><input type="text" class="y">y = </input><input type="text" class="ind"></input>';
    let div2=document.createElement("div");
    div2.innerHTML='<input type="text" class="x2">x +</input><input type="text" class="y2">y = </input><input type="text" class="ind2"><br/></input><button class="calc2">calcular</button>';
    contenedor.appendChild(div);
    contenedor.appendChild(div2);
    document.querySelector(".calc2").addEventListener("click",calc2);
    
    function calc2(){
        x=Number(document.querySelector(".x").value);
        y=Number(document.querySelector(".y").value);
        ind=Number(document.querySelector(".ind").value);
        x2=Number(document.querySelector(".x2").value);
        y2=Number(document.querySelector(".y2").value);
        ind2=Number(document.querySelector(".ind2").value);
        det=(x*y2)-(x2*y);
        if(det!=0){
            let div3=document.createElement("div");
            div3.innerHTML='El determinante de la matriz es '+det+' por lo cual el sistema es consistente y tiene una unica solución';
            contenedor.appendChild(div3);
            detx=((ind*y2)-(y*ind2))/det;
            dety=((x*ind2)-(ind*x2))/det;
            let div4=document.createElement("div");
            div4.innerHTML='Los valores para las variables son: <br/>X = '+detx.toFixed(2)+'<br/>Y = '+dety.toFixed(2);
            contenedor.appendChild(div4);
        } else {
            let div3=document.createElement("div");
            div3.innerHTML='El determinante de la matriz es '+det+' por lo cual el sistema tiene infinitas soluciones';
            contenedor.appendChild(div3);
        }       
    }
}
m3.addEventListener("click",matriz3);
function matriz3(){
    let div=document.createElement("div");
    div.innerHTML='<input type="text" class="x">x +</input><input type="text" class="y">y +</input><input type="text" class="z">z = </input><input type="text" class="ind"></input>';
    let div2=document.createElement("div");
    div2.innerHTML='<input type="text" class="x2">x +</input><input type="text" class="y2">y +</input><input type="text" class="z2">z = </input><input type="text" class="ind2"></input>';
    let div3=document.createElement("div");
    div3.innerHTML='<input type="text" class="x3">x +</input><input type="text" class="y3">y +</input><input type="text" class="z3">z = </input><input type="text" class="ind3"><br/></input><button class="calc3">calcular</button>';
    contenedor.appendChild(div);
    contenedor.appendChild(div2);
    contenedor.appendChild(div3);
    document.querySelector(".calc3").addEventListener("click",calc3);
    
    function calc3(){
        x=Number(document.querySelector(".x").value);
        y=Number(document.querySelector(".y").value);        
        z=Number(document.querySelector(".z").value);
        ind=Number(document.querySelector(".ind").value);
        x2=Number(document.querySelector(".x2").value);
        y2=Number(document.querySelector(".y2").value);
        z2=Number(document.querySelector(".z2").value);
        ind2=Number(document.querySelector(".ind2").value);
        x3=Number(document.querySelector(".x3").value);
        y3=Number(document.querySelector(".y3").value);
        z3=Number(document.querySelector(".z3").value);
        ind3=Number(document.querySelector(".ind3").value);
        det=((x*y2*z3)+(y*z2*x3)+(z*x2*y3))-((z*y2*x3)+(x*z2*y3)+(y*x2*z3));
        if(det!=0){
            let div4=document.createElement("div");
            div4.innerHTML='El determinante de la matriz es '+det+' por lo cual el sistema es consistente y tiene una unica solución';
            contenedor.appendChild(div4);
            detx=(((ind*y2*z3)+(y*z2*ind3)+(z*ind2*y3))-((z*y2*ind3)+(ind*z2*y3)+(y*ind2*z3)))/det;
            dety=(((x*ind2*z3)+(ind*z2*x3)+(z*x2*ind3))-((z*ind2*x3)+(x*z2*ind3)+(ind*x2*z3)))/det;
            detz=(((x*y2*ind3)+(y*ind2*x3)+(ind*x2*y3))-((ind*y2*x3)+(x*ind2*y3)+(y*x2*ind3)))/det;
            let div5=document.createElement("div");
            div5.innerHTML='Los valores para las variables son: <br/>X = '+detx.toFixed(2)+'<br/>Y = '+dety.toFixed(2)+'<br/>Z = '+detz.toFixed(2);
            contenedor.appendChild(div5);
        } else {
            let div4=document.createElement("div");
            div4.innerHTML='El determinante de la matriz es '+det+' por lo cual el sistema tiene infinitas solciones';
            contenedor.appendChild(div4);
        }       
    }        
    
}