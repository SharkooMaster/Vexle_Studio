
var Drop = false;

function NavBar_Toggle(){
    if(!Drop){
        document.getElementById("NavBar_Phone_Drop").style.display = "block";
        document.getElementById("Nav_Bar_Temp").style.height = "150px";
        Drop = true;
    }else if(Drop){
        document.getElementById("NavBar_Phone_Drop").style.display = "none";
        document.getElementById("Nav_Bar_Temp").style.height = "50px";
        Drop = false;
    }
}