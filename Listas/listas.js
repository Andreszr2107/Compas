let matriz;


const m2=document.getElementById("m2"),
m3=document.getElementById("m3"),
m4=document.getElementById("m4"),
r=document.getElementById("refresh");
const contenedor= document.querySelector("#yo1");

/*Sistema 2x2*/

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
        detx=((ind*y2)-(y*ind2));
        dety=((x*ind2)-(ind*x2));
        let div3=document.createElement("div");
        div3.innerHTML='Los determianante son:<br/>▲ = '+det.toFixed(2)+'<br/>▲x = '+detx.toFixed(2)+'<br/>▲y = '+dety.toFixed(2);
        contenedor.appendChild(div3);
        if(det==0){
            if(detx==0){
                let div4=document.createElement("div");
                div4.innerHTML='El determinante de la matriz es ▲ = '+det.toFixed(2)+' y el determinante de x es ▲x = '+detx.toFixed(2)+' por lo cual el sistema es consistente y tiene infitas soluciones';
                contenedor.appendChild(div4);
            }else{
                let div4=document.createElement("div");
                div4.innerHTML='El determinante de la matriz es ▲ = '+det.toFixed(2)+' y el determinante de x es ▲x = '+detx.toFixed(2)+' por lo cual el sistema es inconsistente y no tiene solución';
                contenedor.appendChild(div4);
            }
        } else {
            let div4=document.createElement("div");
            div4.innerHTML='El determinante de la matriz es ▲ = '+det.toFixed(2)+' por lo cual el sistema es consistente y tiene una unica solución';
            contenedor.appendChild(div4);
            rx=detx/det;
            ry=dety/det;
            let div5=document.createElement("div");
            div5.innerHTML='Los valores para las variables son: <br/>X = '+rx.toFixed(2)+'<br/>Y = '+ry.toFixed(2);
            contenedor.appendChild(div5);            
        }       
    }
}


/*Sistema 3x3*/


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
        detx=(((ind*y2*z3)+(y*z2*ind3)+(z*ind2*y3))-((z*y2*ind3)+(ind*z2*y3)+(y*ind2*z3)));
        dety=(((x*ind2*z3)+(ind*z2*x3)+(z*x2*ind3))-((z*ind2*x3)+(x*z2*ind3)+(ind*x2*z3)));
        detz=(((x*y2*ind3)+(y*ind2*x3)+(ind*x2*y3))-((ind*y2*x3)+(x*ind2*y3)+(y*x2*ind3)));
        let div4=document.createElement("div");
        div4.innerHTML='Los determianante son:<br/>▲ = '+det.toFixed(2)+'<br/>▲x = '+detx.toFixed(2)+'<br/>▲y = '+dety.toFixed(2)+'<br/>▲z = '+detz.toFixed(2);
        contenedor.appendChild(div4);
        if(det==0){
            if(detx==0){             
            let div5=document.createElement("div");
            div5.innerHTML='El determinante de la matriz es ▲ = '+det.toFixed(2)+' y el determinante de x es ▲x = '+detx.toFixed(2)+' por lo cual el sistema es consistente y tiene infitas soluciones';
            contenedor.appendChild(div5);   
            }else{
               let div5=document.createElement("div");
               div5.innerHTML='El determinante de la matriz es ▲ = '+det.toFixed(2)+' y el determinante de x es ▲ = '+detx.toFixed(2)+' por lo cual el sistema es inconsistente y no tiene solución';
               contenedor.appendChild(div5);   
            }
        } else {
            let div5=document.createElement("div");
            div5.innerHTML='El determinante de la matriz es '+det.toFixed(2)+' por lo cual el sistema es consistente y tiene una unica solución';
            contenedor.appendChild(div4);
            rx=detx/det;
            ry=dety/det;
            rz=detz/det;
            let div6=document.createElement("div");
            div6.innerHTML='Los valores para las variables son: <br/>X = '+rx.toFixed(2)+'<br/>Y = '+ry.toFixed(2)+'<br/>Z = '+rz.toFixed(2);
            contenedor.appendChild(div6);
        }       
    }
}                    

/*Sistema 4x4*/

m4.addEventListener("click",matriz4)

function matriz4(){
    let div=document.createElement("div");
    div.innerHTML='<input type="text" class="w">w +</input><input type="text" class="x">x +</input><input type="text" class="y">y +</input><input type="text" class="z">z = </input><input type="text" class="ind"></input>';
    let div2=document.createElement("div");
    div2.innerHTML='<input type="text" class="w2">w +</input><input type="text" class="x2">x +</input><input type="text" class="y2">y +</input><input type="text" class="z2">z = </input><input type="text" class="ind2"></input>';
    let div3=document.createElement("div");
    div3.innerHTML='<input type="text" class="w3">w +</input><input type="text" class="x3">x +</input><input type="text" class="y3">y +</input><input type="text" class="z3">z = </input><input type="text" class="ind3"><br/></input>';
    let div4=document.createElement("div");
    div4.innerHTML='<input type="text" class="w4">w +</input><input type="text" class="x4">x +</input><input type="text" class="y4">y +</input><input type="text" class="z4">z = </input><input type="text" class="ind4"><br/></input><button class="calc4">calcular</button>';
    contenedor.appendChild(div);
    contenedor.appendChild(div2);
    contenedor.appendChild(div3);
    contenedor.appendChild(div4);
    document.querySelector(".calc4").addEventListener("click",calc4);
    function calc4(){
        w=Number(document.querySelector(".w").value);
        x=Number(document.querySelector(".x").value);
        y=Number(document.querySelector(".y").value);        
        z=Number(document.querySelector(".z").value);
        ind=Number(document.querySelector(".ind").value);
        w2=Number(document.querySelector(".w2").value);
        x2=Number(document.querySelector(".x2").value);
        y2=Number(document.querySelector(".y2").value);
        z2=Number(document.querySelector(".z2").value);
        ind2=Number(document.querySelector(".ind2").value);
        w3=Number(document.querySelector(".w3").value);
        x3=Number(document.querySelector(".x3").value);
        y3=Number(document.querySelector(".y3").value);
        z3=Number(document.querySelector(".z3").value);
        ind3=Number(document.querySelector(".ind3").value);
        w4=Number(document.querySelector(".w4").value);
        x4=Number(document.querySelector(".x4").value);
        y4=Number(document.querySelector(".y4").value);
        z4=Number(document.querySelector(".z4").value);
        ind4=Number(document.querySelector(".ind4").value);
        det=(w*(((x2*y3*z4)+(y2*z3*x4)+(z2*x3*y4))-((y2*x3*z4)+(x2*z3*y4)+(z2*y3*x4))))+((-1*x)*(((w2*y3*z4)+(y2*z3*w4)+(z2*w3*y4))-((y2*w3*z4)+(w2*z3*y4)+(z2*y3*w4))))+(y*(((w2*x3*z4)+(x2*z3*w4)+(z2*w3*x4))-((x2*w3*z4)+(w2*z3*x4)+(z2*x3*w4))))+((-1*z)*(((w2*x3*y4)+(x2*y3*w4)+(y2*w3*x4))-((x2*w3*y4)+(w2*y3*x4)+(y2*x3*w4))));
        detw=(ind*(((x2*y3*z4)+(y2*z3*x4)+(z2*x3*y4))-((y2*x3*z4)+(x2*z3*y4)+(z2*y3*x4))))+((-1*x)*(((ind2*y3*z4)+(y2*z3*ind4)+(z2*ind3*y4))-((y2*ind3*z4)+(ind2*z3*y4)+(z2*y3*ind4))))+(y*(((ind2*x3*z4)+(x2*z3*ind4)+(z2*ind3*x4))-((x2*ind3*z4)+(ind2*z3*x4)+(z2*x3*ind4))))+((-1*z)*(((ind2*x3*y4)+(x2*y3*ind4)+(y2*ind3*x4))-((x2*ind3*y4)+(ind2*y3*x4)+(y2*x3*ind4))));
        detx=(w*(((ind2*y3*z4)+(y2*z3*ind4)+(z2*ind3*y4))-((y2*ind3*z4)+(ind2*z3*y4)+(z2*y3*ind4))))+((-1*ind)*(((w2*y3*z4)+(y2*z3*w4)+(z2*w3*y4))-((y2*w3*z4)+(w2*z3*y4)+(z2*y3*w4))))+(y*(((w2*ind3*z4)+(ind2*z3*w4)+(z2*w3*ind4))-((ind2*w3*z4)+(w2*z3*ind4)+(z2*ind3*w4))))+((-1*z)*(((w2*ind3*y4)+(ind2*y3*w4)+(y2*w3*ind4))-((ind2*w3*y4)+(w2*y3*ind4)+(y2*ind3*w4))));
        dety=(w*(((x2*ind3*z4)+(ind2*z3*x4)+(z2*x3*ind4))-((ind2*x3*z4)+(x2*z3*ind4)+(z2*ind3*x4))))+((-1*x)*(((w2*ind3*z4)+(ind2*z3*w4)+(z2*w3*ind4))-((ind2*w3*z4)+(w2*z3*ind4)+(z2*ind3*w4))))+(ind*(((w2*x3*z4)+(x2*z3*w4)+(z2*w3*x4))-((x2*w3*z4)+(w2*z3*x4)+(z2*x3*w4))))+((-1*z)*(((w2*x3*ind4)+(x2*ind3*w4)+(ind2*w3*x4))-((x2*w3*ind4)+(w2*ind3*x4)+(ind2*x3*w4))));
        detz=(w*(((x2*y3*ind4)+(y2*ind3*x4)+(ind2*x3*y4))-((y2*x3*ind4)+(x2*ind3*y4)+(ind2*y3*x4))))+((-1*x)*(((w2*y3*ind4)+(y2*ind3*w4)+(ind2*w3*y4))-((y2*w3*ind4)+(w2*ind3*y4)+(ind2*y3*w4))))+(y*(((w2*x3*ind4)+(x2*ind3*w4)+(ind2*w3*x4))-((x2*w3*ind4)+(w2*ind3*x4)+(ind2*x3*w4))))+((-1*ind)*(((w2*x3*y4)+(x2*y3*w4)+(y2*w3*x4))-((x2*w3*y4)+(w2*y3*x4)+(y2*x3*w4))));
        let div5=document.createElement("div");
        div5.innerHTML='Los determianante son:<br/>▲ = '+det.toFixed(2)+'<br/>▲w = '+detw.toFixed(2)+'<br/>▲x = '+detx.toFixed(2)+'<br/>▲y = '+dety.toFixed(2)+'<br/>▲z = '+detz.toFixed(2);
        contenedor.appendChild(div5);
        if(det==0){
            if(detx==0){             
            let div6=document.createElement("div");
            div6.innerHTML='El determinante de la matriz es ▲ = '+det.toFixed(2)+' y el determinante de x es ▲x = '+detx.toFixed(2)+' por lo cual el sistema es consistente y tiene infitas soluciones';
            contenedor.appendChild(div6);   
            }else{
               let div6=document.createElement("div");
               div6.innerHTML='El determinante de la matriz es ▲ = '+det.toFixed(2)+' y el determinante de x es ▲ = '+detx.toFixed(2)+' por lo cual el sistema es inconsistente y no tiene solución';
               contenedor.appendChild(div6);   
            }
        } else {
            let div6=document.createElement("div");
            div6.innerHTML='El determinante de la matriz es '+det.toFixed(2)+' por lo cual el sistema es consistente y tiene una unica solución';
            contenedor.appendChild(div6);
            rw=detw/det
            rx=detx/det;
            ry=dety/det;
            rz=detz/det;
            let div7=document.createElement("div");
            div7.innerHTML='Los valores para las variables son: <br/>W = '+rw.toFixed(2)+'<br/>X = '+rx.toFixed(2)+'<br/>Y = '+ry.toFixed(2)+'<br/>Z = '+rz.toFixed(2);
            contenedor.appendChild(div7);
        }
    }
}

r.addEventListener("click", refresh)
function refresh(){
    location.reload();
}
