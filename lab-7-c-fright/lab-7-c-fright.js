let booleanVar= false;

function spook() {

    if (booleanVar===false) {
        document.getElementById("cat").style.display="block";
        document.getElementById("monster").style.display="none";
        booleanVar=true;
    }

    else {
        document.getElementById("cat").style.display="none";
        document.getElementById("monster").style.display="block";
        booleanVar=false;
    }
}
