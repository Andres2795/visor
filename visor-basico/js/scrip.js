var imgvisor= document.querySelector("#visor")
//imgvisor.src="img/Img0.gif"

var arrayimg=["img0.gif","img1.gif","img2.gif","img3.gif"]
var contador =1
function siguiente(){
     if (contador <= arrayimg.length-1) {
        imgvisor.src="img/"+arrayimg[contador];
    contador++;
     }
    
    
}
function anterior(){
    
    if (contador >0) {
        contador--;
       imgvisor.src="img/"+arrayimg[contador];
   
    }
   
   
}