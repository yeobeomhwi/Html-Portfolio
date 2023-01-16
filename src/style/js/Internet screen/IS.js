
function hide(){
    document.getElementById("Internet").style.display='none';
    document.getElementById("Internet-Status").style.display='none';
}

function show() {
    document.getElementById("Internet").style.display='flex';
    document.getElementById("Internet-Status").style.display='flex';
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
