
var Drop = false;

function NavBar_Toggle(){
    if(!Drop){
        document.getElementById("NavBar_Phone_Drop").style.display = "block";
        document.getElementById("NavBar_Toggle").style.transform = "rotate(90deg)";
        Drop = true;
    }else if(Drop){
        document.getElementById("NavBar_Phone_Drop").style.display = "none";
        document.getElementById("NavBar_Toggle").style.transform = "rotate(0deg)";
        Drop = false;
    }
}