const no = document.getElementById("no")

no.addEventListener("mouseover", function(){
    let x = Math.floor( Math.random() * 98 )
    let y  = Math.floor( Math.random() * 98 )

    no.style.top  =  y + "%"
    no.style.left =  x + "%"
})