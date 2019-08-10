
let Image_0 = true;
let Image_1 = false;
let Image_2 = false;
let Image_3 = false;

function Main_Events(){
    document.getElementById("Main_Text").style.fontWeight = "bold";
    document.getElementById("Games_Text").style.fontWeight = "normal";
    document.getElementById("Streams_Text").style.fontWeight = "normal";
    document.getElementById("Updates_Text").style.fontWeight = "normal";

    document.getElementById("Main_Events_Id").style.display = "block";
    document.getElementById("Event_Card_Phone_2").style.display = "inline-block";
    document.getElementById("Games_Id").style.display = "none";
    document.getElementById("Game_Event_Card_Phone_2").style.display = "none";
    document.getElementById("Streams_Id").style.display = "none";
    document.getElementById("Streams_Event_Card_Phone_2").style.display = "none";
    document.getElementById("Updates_Id").style.display = "none";
    document.getElementById("Updates_Event_Card_Phone_2").style.display = "none";

    document.getElementById("Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone.png";
    document.getElementById("Game_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone.png";
    document.getElementById("Streams_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone.png";
    document.getElementById("Updates_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone.png";
    Image_0 = true;
    Image_1 = false;
    Image_2 = false;
    Image_3 = false;
}

function Games(){
    document.getElementById("Main_Text").style.fontWeight = "normal";
    document.getElementById("Games_Text").style.fontWeight = "bold";
    document.getElementById("Streams_Text").style.fontWeight = "normal";
    document.getElementById("Updates_Text").style.fontWeight = "normal";

    document.getElementById("Main_Events_Id").style.display = "none";
    document.getElementById("Event_Card_Phone_2").style.display = "none";
    document.getElementById("Games_Id").style.display = "block";
    document.getElementById("Game_Event_Card_Phone_2").style.display = "inline-block";
    document.getElementById("Streams_Id").style.display = "none";
    document.getElementById("Streams_Event_Card_Phone_2").style.display = "none";
    document.getElementById("Updates_Id").style.display = "none";
    document.getElementById("Updates_Event_Card_Phone_2").style.display = "none";

    document.getElementById("Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone.png";
    document.getElementById("Game_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone.png";
    document.getElementById("Streams_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone.png";
    document.getElementById("Updates_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone.png";
    Image_0 = true;
    Image_1 = false;
    Image_2 = false;
    Image_3 = false;
}

function Streams(){
    document.getElementById("Main_Text").style.fontWeight = "normal";
    document.getElementById("Games_Text").style.fontWeight = "normal";
    document.getElementById("Streams_Text").style.fontWeight = "bold";
    document.getElementById("Updates_Text").style.fontWeight = "normal";

    document.getElementById("Main_Events_Id").style.display = "none";
    document.getElementById("Event_Card_Phone_2").style.display = "none";
    document.getElementById("Games_Id").style.display = "none";
    document.getElementById("Game_Event_Card_Phone_2").style.display = "none";
    document.getElementById("Streams_Id").style.display = "block";
    document.getElementById("Streams_Event_Card_Phone_2").style.display = "inline-block";
    document.getElementById("Updates_Id").style.display = "none";
    document.getElementById("Updates_Event_Card_Phone_2").style.display = "none";

    document.getElementById("Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone.png";
    document.getElementById("Game_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone.png";
    document.getElementById("Streams_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone.png";
    document.getElementById("Updates_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone.png";
    Image_0 = true;
    Image_1 = false;
    Image_2 = false;
    Image_3 = false;
}

function Updates(){
    document.getElementById("Main_Text").style.fontWeight = "normal";
    document.getElementById("Games_Text").style.fontWeight = "normal";
    document.getElementById("Streams_Text").style.fontWeight = "normal";
    document.getElementById("Updates_Text").style.fontWeight = "bold";

    document.getElementById("Main_Events_Id").style.display = "none";
    document.getElementById("Event_Card_Phone_2").style.display = "none";
    document.getElementById("Games_Id").style.display = "none";
    document.getElementById("Game_Event_Card_Phone_2").style.display = "none";
    document.getElementById("Streams_Id").style.display = "none";
    document.getElementById("Streams_Event_Card_Phone_2").style.display = "none";
    document.getElementById("Updates_Id").style.display = "block";
    document.getElementById("Updates_Event_Card_Phone_2").style.display = "inline-block";

    document.getElementById("Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone.png";
    document.getElementById("Game_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone.png";
    document.getElementById("Streams_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone.png";
    document.getElementById("Updates_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone.png";
    Image_0 = true;
    Image_1 = false;
    Image_2 = false;
    Image_3 = false;
}

document.getElementById("Game_Event_Card_Phone_2").style.display = "none";
document.getElementById("Streams_Event_Card_Phone_2").style.display = "none";
document.getElementById("Updates_Event_Card_Phone_2").style.display = "none";

function Events_Prev(){
    if(Image_0){
        document.getElementById("Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone_3.png";
        document.getElementById("Game_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone_3.png";
        document.getElementById("Streams_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone_3.png";
        document.getElementById("Updates_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone_3.png";
        Image_0 = false;
        Image_3 = true;
    }else if(Image_1){
        document.getElementById("Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone.png";
        document.getElementById("Game_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone.png";
        document.getElementById("Streams_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone.png";
        document.getElementById("Updates_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone.png";
        Image_1 = false;
        Image_0 = true;
    }else if(Image_2){
        document.getElementById("Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone_1.png";
        document.getElementById("Game_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone_1.png";
        document.getElementById("Streams_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone_1.png";
        document.getElementById("Updates_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone_1.png";
        Image_2 = false;
        Image_1 = true;
    }else if(Image_3){
        document.getElementById("Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone_2.png";
        document.getElementById("Game_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone_2.png";
        document.getElementById("Streams_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone_2.png";
        document.getElementById("Updates_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone_2.png";
        Image_3 = false;
        Image_2 = true;
    }
}

function Events_Next(){
    if(Image_0){
        document.getElementById("Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone_1.png";
        document.getElementById("Game_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone_1.png";
        document.getElementById("Streams_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone_1.png";
        document.getElementById("Updates_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone_1.png";
        Image_0 =false;
        Image_1 = true;
    }else if(Image_1){
        document.getElementById("Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone_2.png";
        document.getElementById("Game_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone_2.png";
        document.getElementById("Streams_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone_2.png";
        document.getElementById("Updates_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone_2.png";
        Image_1= false;
        Image_2 = true;
    }else if(Image_2){
        document.getElementById("Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone_3.png";
        document.getElementById("Game_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone_3.png";
        document.getElementById("Streams_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone_3.png";
        document.getElementById("Updates_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone_3.png";
        Image_2 = false;
        Image_3 = true;
    }else if(Image_3){
        document.getElementById("Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone.png";
        document.getElementById("Game_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone.png";
        document.getElementById("Streams_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone.png";
        document.getElementById("Updates_Event_Card_Phone_2").src = "Css/Gfx/VexleStudio/Events_Phone/Events_Phone.png";
        Image_3 = false;
        Image_0 = true;
    }
}
