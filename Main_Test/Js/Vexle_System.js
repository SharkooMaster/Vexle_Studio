
window.oncontextmenu = function(){
    var e = window.event;

    var posX = e.clientX;
    var posY = e.clientY;

    document.Form1.posx.value = posX;
    document.Form1.posy.value = posY;

    alert(posX);

    return false;
}

function mouse_position()
{
    
}