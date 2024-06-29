console.log("running")

let parts = document.querySelectorAll(".part")

parts.forEach((val)=> {
    // console.log(val)
    console.log(val.childNodes[1])
    val.addEventListener('mouseenter', function(){
        console.log("entered")
        val.childNodes[1].style.display = "block";
    })
    val.addEventListener('mouseleave', function(){
        console.log("leaved")
        val.childNodes[1].style.display = "none";
    })
    val.addEventListener('mousemove', function(dets){
        console.log("moved")
        val.childNodes[1].style.left = dets.x+"px";
    })

})