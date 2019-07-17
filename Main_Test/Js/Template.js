
var Drop = false;

function NavBar_Toggle(){
    if(!Drop){
        document.getElementById("NavBar_Phone_Drop").style.display = "block";
        Drop = true;
    }else if(Drop){
        document.getElementById("NavBar_Phone_Drop").style.display = "none";
        Drop = false;
    }
}