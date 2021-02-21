var boll = document.getElementById("boll");
boll.width = 1000;
boll.height= 500;
boll.style.backgroundColor= "#DCFFFE";
var ctx = boll.getContext("2d");

var x=-20;
var speed = 2;
var radie = 20;

function animation(){
    ctx.clearRect(0,0,boll.width, boll.height);
    ctx.beginPath();
    ctx.arc(x,250,radie,0,2*Math.PI,false);
    ctx.fillStyle = "#8976F5"
    ctx.closePath();
    ctx.fill();
    x += speed;
    if(x>boll.width+radie){
        x=-radie;
    }
    requestAnimationFrame(animation);
}

animation();