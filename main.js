let dropMenu = document.getElementById("dropmenu")
let slader = document.getElementById("sladerId")
dropMenu.style.maxHeight = "0px";
slader.style.marginTop = "0px"
function toggleMenu(){ 
    if(dropMenu.style.maxHeight == "0px" && slader.style.marginTop == "0px")
        {
            dropMenu.style.maxHeight = "300px";
            slader.style.marginTop = "250px"
        }
        else{
            dropMenu.style.maxHeight = "0px";
            slader.style.marginTop = "0px"
        }

    

}




