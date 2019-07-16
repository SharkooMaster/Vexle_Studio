

function Main_Events(){
    document.getElementById("Main_Events_Id").style.display = "block";
    document.getElementById("Games_Id").style.display = "none";
    document.getElementById("Streams_Id").style.display = "none";
    document.getElementById("Updates_Id").style.display = "none";
}

function Games(){
    document.getElementById("Main_Events_Id").style.display = "none";
    document.getElementById("Games_Id").style.display = "block";
    document.getElementById("Streams_Id").style.display = "none";
    document.getElementById("Updates_Id").style.display = "none";
}

function Streams(){
    document.getElementById("Main_Events_Id").style.display = "none";
    document.getElementById("Games_Id").style.display = "none";
    document.getElementById("Streams_Id").style.display = "block";
    document.getElementById("Updates_Id").style.display = "none";
}

function Updates(){
    document.getElementById("Main_Events_Id").style.display = "none";
    document.getElementById("Games_Id").style.display = "none";
    document.getElementById("Streams_Id").style.display = "none";
    document.getElementById("Updates_Id").style.display = "block";
}

