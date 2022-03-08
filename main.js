var width = screen.width;
var newwidth = screen.width - 70;
var newheight = screen.height - 300;
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 1;
 
    if(width < 992){
        document.getElementById("myCanvas").width = newwidth;
        document.getElementById("myCanvas").height = newheight;
        document.getElementById.style.overflow = "hidden";
    }

    canvas.addEventListener("touchstart", tstart);

    function tstart(e)
    {
        console.log("MY TOUCH START");
        //Addictonal Activity start
        color = document.getElementById("colorinput").value;
        width_of_line = document.getElementById("widthinput").value;
        //Addictonal Activity ends

        last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
        last_position_of_y = e.touches[0].clientY - canvas.offsetTop;


    }

    canvas.addEventListener("touchmove", mtmove);
    function mtmove(e)
    {
        current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }

    
    

//Additional Activity
function clearcanvas() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
