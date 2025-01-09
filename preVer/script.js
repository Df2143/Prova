function buttonFunction(){
    var console = document.getElementById("console");
    var bottone = document.getElementById("bottone");
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");


    if(bottone.textContent == "Testo a sorpresa"){
        console.innerHTML = "PEPPEREPE";
        bottone.textContent = "nuova sorpresa";
        

    }else if(bottone.textContent == "nuova sorpresa"){
        alert("TADAAA!!");
        bottone.textContent = "E ora un bel disegno";
    }else if (bottone.textContent == "E ora un bel disegno"){
        ctx.fillStyle = "red";
        ctx.fillRect(0, 0, 200, 200);

        for(var i = 10; i <200; i+= 20 ){
            ctx.fillStyle = "orange";
            ctx.fillRect(i,100,10,10);
        }
        bottone.textContent = "Testo a sorpresa";
    }
    
    
    
}