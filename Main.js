var canvas = new fabic.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
var player_object = "";
function player_update() {
    fabric.image.fromURL("player.png", function (img) {
        player_object = img;
 
        player_object.scaleToWidth(150);
        player_object.scaleToHight(140);
        player_object.set({
        
        });
        
 
 
    });
 
 
}
function new_image(get_image) {
    fabric.image.fromURL(get_image, function (img) {
        block_image = img;
 
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHight(block_image_height);
        block_image_object.set({
            top: player_y,
            left: player_x,
        });
        canvas.add(player_object);
 
 
    });
 
 
}
