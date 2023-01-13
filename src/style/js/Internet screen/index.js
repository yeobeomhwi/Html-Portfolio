
function hide(){
    document.getElementById("Internet").style.display='none';
}

function show() {
    document.getElementById("Internet").style.display='block';
}


function mshow(){
    var con = document.getElementById("showmenu");
    if(con.style.display=='none'){
        con.style.display='flex';
    }
    else{
        con.style.display='none';
    }
}





function onfullscreen(){
    document.getElementById("Internet").style.width ="100%";
    document.getElementById("Internet").style.height ="100%";
    document.getElementById("Internet").style.position="fixed";
}

function offfullscreen(){
    document.getElementById("Internet").style.width ="50%";
    document.getElementById("Internet").style.height ="50%";
    document.getElementById("Internet").style.position="absolute";
    document.getElementById("Internet").style.transform="translate(-50%,-50%)";
}

