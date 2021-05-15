var canvas=new fabric.Canvas("myCanvas");
var block_image_width=30;
var block_image_height=30;
var player_X=10;
var player_Y=10;
var player_Object="";

var Block_img_Object="";

function player_Update(){

    fabric.Image.fromURL("player.png", function(Img){
        player_Object=Img;
        player_Object.scaleToWidth(150);
        player_Object.scaleToHeight(140);
        player_Object.set({
            top:player_Y,
            left:player_X
        });
        canvas.add(player_Object);
    });
}


function NEW_img(get_img){
      fabric.Image.fromURL(get_img, function(Img){
      Block_img_Object=Img;
      Block_img_Object.scaleToWidth(block_image_width);
      Block_img_Object.scaleToHeight(block_image_height);
      Block_img_Object.set({

        top:player_Y,
        left:player_X
      });
     canvas.add(Block_img_Object);
      });

}



window.addEventListener("keydown", my_keydown);

function my_keydown(e){

    key_pressed= e.keyCode;
    console.log(key_pressed);

    if (e.shiftKey == true && key_pressed =="80"){

        console.log("p and shift key pressed togethere");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("Current_width").innerHTML=block_image_width;
        document.getElementById("Current_height").innerHTML=block_image_height;


    }

    if (e.shiftKey == true && key_pressed =="77"){

        console.log("m and shift key pressed togethere");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("Current_width").innerHTML=block_image_width;
        document.getElementById("Current_height").innerHTML=block_image_height;
    }

      if (key_pressed =="37"){

        left();
        console.log("left key is pressed");
      }

      if (key_pressed =="38"){

        up();
        console.log("up key is pressed");
      }

      if (key_pressed =="39"){

        right();
        console.log("right key is pressed");
      }

      if (key_pressed =="40"){

         down();
        console.log("down key is pressed");
      }

      if (key_pressed == "87"){

        NEW_img("wall.jpg");
        console.log("w key is pressed");
      }

      if (key_pressed == "71"){

        NEW_img("ground.png");
        console.log("g key is pressed");
      }

      if (key_pressed == "76"){

        NEW_img("light_green.png");
        console.log("l key is pressed");
      }

      if (key_pressed == "84"){

        NEW_img("trunk.jpg");
        console.log("t key is pressed");
      }

      if (key_pressed == "82"){

        NEW_img("roof.jpg");
        console.log("r key is pressed");
      }

      if (key_pressed == "89"){

        NEW_img("yellow_wall.png");
        console.log("y key is pressed");
      }

      if (key_pressed == "68"){

        NEW_img("dark_green.png");
        console.log("d key is pressed");
      }

      if (key_pressed == "85"){

        NEW_img("unique.png");
        console.log("u key is pressed");
      }

      if (key_pressed == "67"){

        NEW_img("cloud.jpg");
        console.log("c key is pressed");
      }
      if (key_pressed == "66"){

        NEW_img("block+lightblue.jpg");
        console.log("b key is pressed");
      }
}