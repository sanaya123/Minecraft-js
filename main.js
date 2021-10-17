var canvas = new fabric.Canvas ("myCanvas")
player_x = 10
player_y = 10
block_image_width=30
block_image_height=30
player_object=""
image_object=""
function upload_player(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img
        player_object.scaleToHeight(150)
        player_object.scaleToWidth(140)
        player_object.set({
            left: player_x,
            top: player_y
        })
        canvas.add(player_object)
    })
}
function upload_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        image_object=Img
        image_object.scaleToHeight(150)
        image_object.scaleToWidth(140)
        image_object.set({
            left: player_x,
            top: player_y
        })
        canvas.add(image_object)
    })
}
window.addEventListener("keydown", mykeydown)

function mykeydown(e){
    keyPressed=e.keyCode
    if(e.shiftKey == true && keyPressed == "80"){
        block_image_height=block_image_height+10
        block_image_width = block_image_width+10
        document.getElementById("current-height").innerHTML=block_image_height
        document.getElementById("current-width").innerHTML=block_image_width
    }
    if(e.shiftKey == true && keyPressed == "77"){
        block_image_height=block_image_height-10
        block_image_width = block_image_width-10
        document.getElementById("current-height").innerHTML=block_image_height
        document.getElementById("current-width").innerHTML=block_image_width
    }
    if(keyPressed=="87"){
        upload_image("wall.jpg")
    }
    if(keyPressed=="71"){
        upload_image("ground.png")
    }
    if(keyPressed=="76"){
        upload_image("light_green.png")
    }
    if(keyPressed=="84"){
        upload_image("trunk.jpg")
    }
    if(keyPressed=="82"){
        upload_image("roof.jpg")
    }
    if(keyPressed=="89"){
        upload_image("yellow_wall.png")
    }
    if(keyPressed=="68"){
        upload_image("dark_green.png")
    }
    if(keyPressed=="85"){
        upload_image("unique.png")
    }
    if(keyPressed=="67"){
        upload_image("cloud.jpg")
    }
    if(keyPressed=="37"){
        left()
    }
    if(keyPressed=="38"){
        up()
    }
    if(keyPressed=="39"){
        right()
    }
    if(keyPressed=="40"){
        down()
    }
}
function up(){
    if(player_y>0){
        player_y=player_y-block_image_height
        canvas.remove(player_object)
        upload_player()
    }
}
function down(){
    if(player_y<500){
        player_y=player_y+block_image_height
        canvas.remove(player_object)
        upload_player()
    }
}
function left(){
    if(player_x>0){
        player_x=player_x-block_image_width
        canvas.remove(player_object)
        upload_player()
    }
}
function right(){
    if(player_x<700){
        player_x=player_x+block_image_width
        canvas.remove(player_object)
        upload_player()
    }
}